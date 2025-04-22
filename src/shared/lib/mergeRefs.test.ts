import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";

import mergeRefs from "./mergeRefs";

describe("mergeRefs", () => {
  it("returns null if no refs are provided", () => {
    const result = mergeRefs();
    expect(result).toBeNull();
  });

  it("returns the only ref if one ref is provided", () => {
    const ref = createRef<HTMLDivElement>();
    const result = mergeRefs(ref);
    expect(result).toBe(ref);
  });

  it("merges two function refs", () => {
    const fnRef1 = vi.fn();
    const fnRef2 = vi.fn();

    const merged = mergeRefs<HTMLDivElement>(fnRef1, fnRef2);
    const element = document.createElement("div");
    if (typeof merged === "function") {
      merged(element);
    }

    expect(fnRef1).toHaveBeenCalledWith(element);
    expect(fnRef2).toHaveBeenCalledWith(element);
  });

  it("merges function ref and object ref", () => {
    const fnRef = vi.fn();
    const objRef = createRef<HTMLDivElement>();

    const merged = mergeRefs<HTMLDivElement>(fnRef, objRef);
    const element = document.createElement("div");
    if (typeof merged === "function") {
      merged(element);
    }

    expect(fnRef).toHaveBeenCalledWith(element);
    expect(objRef.current).toBe(element);
  });

  it("filters out undefined refs", () => {
    const fnRef = vi.fn();
    const objRef = createRef<HTMLDivElement>();

    const merged = mergeRefs<HTMLDivElement>(
      undefined,
      fnRef,
      undefined,
      objRef,
    );
    const element = document.createElement("div");
    if (typeof merged === "function") {
      merged(element);
    }

    expect(fnRef).toHaveBeenCalledWith(element);
    expect(objRef.current).toBe(element);
  });

  it("returns the only non-undefined ref if only one is provided", () => {
    const objRef = createRef<HTMLDivElement>();
    const result = mergeRefs<HTMLDivElement>(undefined, objRef);
    expect(result).toBe(objRef);
  });
});
