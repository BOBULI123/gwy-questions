import { describe, expect, it } from "vitest";
import { questions } from "@/app/data/questions";
import { typeMetas } from "@/lib/question-utils";

describe("expanded question bank", () => {
  it("only exposes verified real recalled questions with sources and original answers", () => {
    expect(questions.length).toBeGreaterThanOrEqual(15);
    expect(
      questions.every(
        (question) =>
          question.origin === "verified_recall" &&
          question.sourceUrl &&
          question.sourceName &&
          question.referenceAnswer &&
          question.referenceAnswer.length >= 120
      )
    ).toBe(true);
  });

  it("does not expose simulated or generated questions in the production bank", () => {
    expect(
      questions.every((question) =>
        !/(?:\u6a21\u62df\u9898|\u6a21\u62df\u9898\u98ce\u683c|\u6279\u91cf\u751f\u6210|\u9ad8\u9891\u6a21\u62df\u9898)/.test(
          `${question.id}${question.title}${question.content}`
        )
      )
    ).toBe(true);
  });

  it("keeps every question aligned with the configured type metadata", () => {
    const namesByType = new Map(typeMetas.map((type) => [type.slug, type.name]));

    expect(
      questions.every((question) => namesByType.get(question.type) === question.typeName)
    ).toBe(true);
  });

  it("uses stable unique ids for every question detail route", () => {
    const ids = questions.map((question) => question.id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
