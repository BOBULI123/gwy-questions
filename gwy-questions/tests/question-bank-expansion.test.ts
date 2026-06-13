import { describe, expect, it } from "vitest";
import { questions } from "@/app/data/questions";
import { typeMetas } from "@/lib/question-utils";

describe("expanded question bank", () => {
  it("contains a substantial first batch of sourced questions with original answers", () => {
    expect(questions.length).toBeGreaterThanOrEqual(400);

    const sourcedQuestions = questions.filter((question) => question.sourceUrl);
    expect(sourcedQuestions.length).toBeGreaterThanOrEqual(350);
    expect(
      sourcedQuestions.every(
        (question) =>
          question.sourceName &&
          question.referenceAnswer &&
          question.referenceAnswer.length >= 120
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
