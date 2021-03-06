import { css, keyframes, SerializedStyles } from "@emotion/core";
import { vw } from "@clxx/base";

export const barNum = 13;
export const duration = 600;

export const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

export const opacityAnimation = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

export const style: {
  [key: string]: SerializedStyles;
} = {
  container: css({
    position: "relative",
    width: vw(30),
    height: vw(30),
    "@media (min-width: 576px)": {
      width: vw(30, true),
      height: vw(30, true)
    },
    span: {
      position: "absolute",
      top: 0,
      height: "100%",
      boxSizing: "border-box",
      width: vw(2),
      marginLeft: vw(-1),
      left: "50%",
      "&::after": {
        display: "block",
        content: `""`,
        backgroundColor: "#fff",
        borderRadius: vw(1),
        height: vw(8)
      },
      "@media (min-width: 576px)": {
        width: vw(2, true),
        marginLeft: vw(-1, true),
        "&::after": {
          borderRadius: vw(1, true),
          height: vw(8, true)
        }
      }
    }
  })
};

for (let i = 0; i < barNum; i++) {
  style[`bar-${i}`] = css({
    transform: `rotate(${(360 * i) / barNum}deg)`,
    "&::after": {
      animation: `${opacityAnimation} ${duration}ms linear -${duration -
        (duration * i) / barNum}ms infinite`
    }
  });
}
