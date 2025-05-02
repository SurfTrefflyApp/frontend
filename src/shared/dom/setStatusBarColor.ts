import { bodyStyle } from "./elements";
import { getRootVar } from "./getRootVar";

export function setStatusBarColor(color: string) {
  const rootColor = getRootVar(color);

  if (document.querySelector('meta[name="theme-color"]')) {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", rootColor ?? color);
  }

  if (bodyStyle) {
    bodyStyle.background = rootColor ?? color;
  }
}
