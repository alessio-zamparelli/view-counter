FROM oven/bun:1.0.7 as base

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .

ENV NODE_ENV production
RUN bun run build

FROM oven/bun
WORKDIR /app
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/dist/server.js .
COPY --from=base /app/package.json .

EXPOSE 3000/tcp
VOLUME /data
ENTRYPOINT [ "bun", "run", "server.js" ]
