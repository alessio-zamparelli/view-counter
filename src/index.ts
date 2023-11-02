import { Elysia } from "elysia"
import { html } from "@elysiajs/html"

import { Database } from "bun:sqlite"
import { getCounterImage } from "./genImage"

const dbPath =
	process.env.NODE_ENV == "production" ? "/data/db.sqlite" : "./db.sqlite"

const db = Database.open(dbPath, { create: true })
db.run(
	"CREATE TABLE IF NOT EXISTS counts (slug text PRIMARY KEY, visits integer)"
)

const selectStmt = "SELECT slug, visits FROM counts WHERE slug = $slug"
const insertStmt =
	"INSERT INTO counts(slug, visits) VALUES($slug, 1) ON CONFLICT(slug) DO UPDATE SET visits=visits+1 RETURNING visits"

const app = new Elysia()
	.decorate({
		insertVisit: db.prepare<{ visits: number }, { $slug: string }>(insertStmt),
		getVisit: db.prepare<{ slug: string; visits: number }, { $slug: string }>(
			selectStmt
		)
	})
	.onStart(() => {
		db.exec("PRAGMA journal_mode = WAL;")
		// console.log(`🦊 Elysia is running at ${app?.server?.hostname}:${app?.server?.port}`)
		console.log(`🦊 Elysia is running at`)
	})
	.onStop(() => {
		db.close()
	})
	.get("/", () => {
		return "use as: https://counter.aeng.it/<name(unique)>/svg"
	})
	.get("/:slug/svg", ({ insertVisit, params: { slug } }) => {
		const cnt = insertVisit.get({ $slug: slug })
		if (!cnt?.visits) {
			return ""
		} else {
			return new Response(getCounterImage(cnt.visits), {
				headers: { "Content-Type": "image/svg+xml; charset=utf-8" }
			})
		}
	})

	.listen(3000)

db.close()
