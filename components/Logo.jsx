import Svg, { Defs, Path, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={120}
    height={30}
    className="injected-svg js-svg-inject"
    {...props}
  >
    <Defs>
      <Path
        id="a"
        d="M101.087 30h.625v-2.893h.01l1.04 2.893h.54l1.04-2.893h.01V30h.625v-3.749h-.913l-1.008 2.935h-.011l-1.034-2.935h-.924V30Zm-3.46-3.182h1.187V30h.656v-3.182h1.192v-.567h-3.035v.567ZM90 30l30-30h-18.056l-30 30H90Zm-4.301-16.935H49.382c-11.068 0-13.005.587-17.746 5.327A10895.77 10895.77 0 0 1 20.001 30h15.731l3.754-3.753c2.467-2.468 3.74-2.723 8.92-2.723h26.835l10.458-10.459Zm-54.547 3.188C27.877 19.343 20.753 26.263 16.913 30H0S13.552 16.487 21.085 9.072C28.845 1.685 32.715 0 46.949 0h51.815l-11.22 11.219H48.002c-10.002 0-12.25.693-16.85 5.034Z"
      />
    </Defs>
    <Use xlinkHref="#a" fill="#E00" fillRule="evenodd" />
  </Svg>
)



