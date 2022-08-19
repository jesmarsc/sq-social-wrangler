type Options = {
  title: string;
  subtitle: string;
  level: number;
  image: string;
};

export default ({ title, subtitle, level, image }: Options) => `
<svg
  width="600"
  height="315"
  viewBox="0 0 600 315"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <rect width="600" height="315" fill="#905FF9" />
  <rect x="70" y="103" width="112" height="110" fill="url(#pattern1)" />
  <text
    fill="white"
    xml:space="preserve"
    style="white-space: pre"
    font-family="IBM Plex Sans"
    font-size="28"
    font-weight="500"
    letter-spacing="0em"
  >
    <tspan x="212" y="134.75">${title}</tspan>
  </text>
  <text
    fill="white"
    xml:space="preserve"
    style="white-space: pre"
    font-family="IBM Plex Sans"
    font-size="18"
    letter-spacing="0em"
  >
    <tspan x="212" y="202.304">${subtitle}</tspan>
  </text>
  <text
    fill="white"
    fill-opacity="0.7"
    xml:space="preserve"
    style="white-space: pre"
    font-family="IBM Plex Sans"
    font-size="14"
    font-weight="500"
    letter-spacing="0.1em"
  >
    <tspan x="212" y="175.268">Level ${level}</tspan>
  </text>
  <text
    transform="translate(546 269) rotate(-90)"
    fill="white"
    xml:space="preserve"
    style="white-space: pre"
    font-family="IBM Plex Sans"
    font-size="18"
    letter-spacing="0em"
  >
    <tspan x="0" y="18.75">I completed a Stellar Quest</tspan>
  </text>
  <defs>
    <pattern
      id="pattern1"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1"
    >
      <use
        xlink:href="#image1_458_7823"
        transform="translate(0 -0.00909091) scale(0.03125 0.0318182)"
      />
    </pattern>
    <image
      id="image1_458_7823"
      width="32"
      height="32"
      xlink:href="data:image/png;base64,${image}"
    />
  </defs>
</svg>
`;
