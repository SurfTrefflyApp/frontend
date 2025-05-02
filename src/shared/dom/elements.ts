export const root = document.querySelector(":root");
export const rootStyle = root ? getComputedStyle(root) : null;

export const body = document.querySelector("body");
export const bodyStyle = body ? getComputedStyle(body) : null;
