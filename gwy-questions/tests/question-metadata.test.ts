import { describe, expect, it } from "vitest";
import { questions } from "@/app/data/questions";
import { buildQuestionMetadata } from "@/lib/question-metadata";

describe("question metadata", () => {
  it("builds SEO title, description, and keywords from the question", () => {
    const question = questions[0];
    expect(question).toBeDefined();

    const metadata = buildQuestionMetadata(question!);

    expect(metadata.title).toContain(`${question!.year}`);
    expect(metadata.title).toContain(question!.province);
    expect(metadata.description).toContain(question!.title.slice(0, 20));
    expect(metadata.keywords).toContain(question!.typeName);
  });
});
