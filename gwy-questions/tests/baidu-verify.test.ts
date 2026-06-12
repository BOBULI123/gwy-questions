import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("Baidu site verification file", () => {
  it("is available from the public root", () => {
    const fileContent = readFileSync(
      join(process.cwd(), "public", "baidu_verify_codeva-YKS51BNT1I.html"),
      "utf8"
    ).trim();

    expect(fileContent).toBe("YKS51BNT1I");
  });
});
