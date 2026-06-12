import { describe, expect, it } from "vitest";
import { questions } from "@/app/data/questions";
import { buildQuestionMetadata } from "@/lib/question-metadata";

describe("question metadata", () => {
  it("builds SEO title, description, and keywords from the question", () => {
    const question = questions.find((item) => item.id === "2026-guokao-001");
    expect(question).toBeDefined();

    const metadata = buildQuestionMetadata(question!);

    expect(metadata).toEqual({
      title: "2026年国考综合分析面试真题及解析",
      description:
        "2026年国考公务员面试综合分析真题：某地推行'无事不扰'企业监管模式，减少对企业检查频次，有人担心这会放松监管，你怎么看？...提供小白版、进阶版、高分版三版本AI智能解析。",
      keywords: "2026面试真题,国考公务员面试,综合分析,结构化面试,面试解析"
    });
  });
});
