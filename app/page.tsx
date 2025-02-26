import React from "react";

export const metadata = {
  title: "App Router",
};
import Calculator from "./calculator";
export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <Calculator />
    </>
  );
}
