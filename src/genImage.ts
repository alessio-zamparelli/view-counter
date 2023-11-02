const LEN = 6

export function getCounterImage(visits: number) {
	const visitsString = visits.toString().padStart(LEN, "0").split("")

	return `
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="343.22" height="92.34" viewBox="0 0 343.22 92.34">
  <defs>
    <filter id="luminosity-noclip" x="44" y="6" width="295" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-color="#fff" result="bg"/>
      <feBlend in="SourceGraphic" in2="bg"/>
    </filter>
    <mask id="mask" x="49.7" y="1.22" width="295" height="94" maskUnits="userSpaceOnUse">
      <g style="filter:url(#luminosity-noclip)">
        <g transform="translate(9.7 -14.78)">
          <image width="295" height="94" transform="translate(40 16)" xlink:href="data:image/png;base64,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"/>
        </g>
      </g>
    </mask>
  </defs>
  <g style="isolation:isolate">
    <g id="Livello_1" data-name="Livello 1">
      <path d="M42.57,88C35,88,29.75,84.92,23,84.71c-7.73-.25-17,1.87-31.94,10.57" transform="translate(9.7 -14.78)" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <rect x="331.05" y="48.2" width="0.96" height="28.88" transform="translate(672.77 110.5) rotate(180)" style="stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <rect x="73.78" y="1.5" width="5.18" height="3.38" style="stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <rect x="89.06" y="1.5" width="5.18" height="3.38" style="stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <g style="opacity:0.84">
        <rect x="53.85" y="4.88" width="286.91" height="85.96" rx="8.33" style="fill:#1f1f1f"/>
        <rect x="53.85" y="4.88" width="286.91" height="85.96" rx="8.33" style="fill:none;stroke:#2cff1f;stroke-miterlimit:10;stroke-width:3px"/>
        <g style="mask:url(#mask)">
          <g style="opacity:0.75;mix-blend-mode:screen">
            <rect x="53.85" y="4.88" width="286.91" height="85.96" rx="8.33" style="fill:#fff"/>
            <rect x="53.85" y="4.88" width="286.91" height="85.96" rx="8.33" style="fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:3px"/>
          </g>
        </g>
      </g>
      <rect x="74.99" y="26.52" width="28.18" height="45.41" rx="4.73" style="fill:#003522;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <text transform="translate(81.35 56.83)" style="font-size:25px;fill:#f1f1f1;font-family:Lato-Heavy, Lato;font-weight:800">${visitsString[0]}</text>
      <rect x="117.18" y="26.52" width="28.18" height="45.41" rx="4.73" style="fill:#003522;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <text transform="translate(123.53 56.83)" style="font-size:25px;fill:#f1f1f1;font-family:Lato-Heavy, Lato;font-weight:800">${visitsString[1]}</text>
      <rect x="159.36" y="26.52" width="28.18" height="45.41" rx="4.73" style="fill:#003522;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <text transform="translate(165.72 56.83)" style="font-size:25px;fill:#f1f1f1;font-family:Lato-Heavy, Lato;font-weight:800">${visitsString[2]}</text>
      <rect x="201.54" y="26.52" width="28.18" height="45.41" rx="4.73" style="fill:#003522;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <text transform="translate(207.9 56.83)" style="font-size:25px;fill:#f1f1f1;font-family:Lato-Heavy, Lato;font-weight:800">${visitsString[3]}</text>
      <rect x="243.73" y="26.52" width="28.18" height="45.41" rx="4.73" style="fill:#003522;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <text transform="translate(250.08 56.83)" style="font-size:25px;fill:#f1f1f1;font-family:Lato-Heavy, Lato;font-weight:800">${visitsString[4]}</text>
      <rect x="285.91" y="26.52" width="28.18" height="45.41" rx="4.73" style="fill:#003522;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/>
      <text transform="translate(292.27 56.83)" style="font-size:25px;fill:#f1f1f1;font-family:Lato-Heavy, Lato;font-weight:800">${visitsString[5]}</text>
    </g>
  </g>
</svg>
	`
}
