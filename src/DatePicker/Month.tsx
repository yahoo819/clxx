/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ScrollSnap } from "./ScrollSnap";
import { useContext } from "react";
import { dpContext } from "./context";

export function Month() {
  const { value, setValue } = useContext(dpContext);

  let initialSlide = 0;
  const start = 1;
  const end = 12;
  let index = 0;
  for (let month = start; month <= end; month++) {
    if (value!.month() + 1 === month) {
      initialSlide = index;
    }
    index++;
  }

  const monthChange = (index: number) => {
    setValue!(value!.month(index));
  };

  return (
    <ScrollSnap
      mode="m"
      start={start}
      end={end}
      slideIndex={initialSlide}
      onIndexChange={monthChange}
    />
  );
}
