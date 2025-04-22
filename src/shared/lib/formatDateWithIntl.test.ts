import { describe, expect, it } from "vitest";

import { formatDateWithIntl } from "./formatDateWithIntl";

describe("formatDateWithIntl", () => {
  it("correctly formats date with ru locale", () => {
    const testDate = "2023-05-15T14:30:00";
    const result = formatDateWithIntl(testDate);

    expect(result).toContain("15");
    expect(result).toContain("мая");
    expect(result).toContain("14:30");
  });

  it("correctly formats the beginning of month", () => {
    const testDate = "2023-01-01T00:05:00";
    const result = formatDateWithIntl(testDate);

    expect(result).toContain("1");
    expect(result).toContain("января");
    expect(result).toContain("0:05");
  });

  it("correctly formats the end of month", () => {
    const testDate = "2023-12-31T23:59:00";
    const result = formatDateWithIntl(testDate);

    expect(result).toContain("31");
    expect(result).toContain("декабря");
    expect(result).toContain("23:59");
  });

  it("throws error for empty string", () => {
    expect(() => formatDateWithIntl("")).toThrowError("Invalid date string");
  });

  it("throws error for not correct date", () => {
    expect(() => formatDateWithIntl("invalid-date")).toThrowError(
      "Invalid date string",
    );
  });

  it("throws error for undefined", () => {
    expect(() =>
      formatDateWithIntl(undefined as unknown as string),
    ).toThrowError("Invalid date string");
  });
});
