import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import { formatDateWithIntl, isDateInPast } from "./dateUtils";

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

describe("isDateInPast", () => {
  beforeAll(() => {
    const mockDate = new Date("2025-04-25T12:00:00Z");
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("returns true for past date", () => {
    const pastDate = "2025-04-10T20:00:48.23689Z";
    expect(isDateInPast(pastDate)).toBe(true);
  });

  it("returns false for future date", () => {
    const futureDate = "2025-05-01T00:00:00Z";
    expect(isDateInPast(futureDate)).toBe(false);
  });

  it("returns false for current date", () => {
    const currentDate = new Date().toISOString();
    expect(isDateInPast(currentDate)).toBe(false);
  });

  it("handles dates just in the past", () => {
    const justPastDate = new Date(Date.now() - 1000).toISOString();
    expect(isDateInPast(justPastDate)).toBe(true);
  });

  it("handles dates just in the future", () => {
    const justFutureDate = new Date(Date.now() + 1000).toISOString();
    expect(isDateInPast(justFutureDate)).toBe(false);
  });

  it("throws error for invalid date string", () => {
    const invalidDate = "not-a-date";
    expect(() => isDateInPast(invalidDate)).toThrow();
  });
});
