import { describe, expect, it } from "vitest";
import {
  canViewParse,
  filterQuestions,
  getTypeMeta,
  paginate
} from "@/lib/question-utils";

describe("question utilities", () => {
  it("filters questions by keyword, type, year, and province", () => {
    const result = filterQuestions(
      [
        {
          id: "a",
          year: 2026,
          province: "国考",
          type: "zonghefenxi",
          typeName: "综合分析",
          difficulty: "medium",
          title: "企业监管模式怎么看？",
          content: "某地推行无事不扰企业监管模式，你怎么看？"
        },
        {
          id: "b",
          year: 2025,
          province: "广东",
          type: "renjiguanxi",
          typeName: "人际关系",
          difficulty: "easy",
          title: "同事协作",
          content: "同事不配合你怎么办？"
        }
      ],
      { keyword: "监管", type: "zonghefenxi", year: 2026, province: "国考" }
    );

    expect(result.map((question) => question.id)).toEqual(["a"]);
  });

  it("paginates using one-based pages and returns total pages", () => {
    const result = paginate([1, 2, 3, 4, 5], 2, 2);

    expect(result.items).toEqual([3, 4]);
    expect(result.totalPages).toBe(3);
    expect(result.page).toBe(2);
  });

  it("recognizes the three-free-parse daily limit", () => {
    expect(canViewParse(["a", "b"], "c")).toBe(true);
    expect(canViewParse(["a", "b", "c"], "d")).toBe(false);
    expect(canViewParse(["a", "b", "c"], "a")).toBe(true);
  });

  it("returns known type metadata", () => {
    expect(getTypeMeta("yingjibian")?.name).toBe("应急应变");
    expect(getTypeMeta("missing")).toBeUndefined();
  });
});
