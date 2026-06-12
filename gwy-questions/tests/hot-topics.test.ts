import { describe, expect, it } from "vitest";
import { hotTopics } from "@/app/data/hot-topics";

describe("hot topic data", () => {
  it("uses prediction objects with question and angle", () => {
    expect(hotTopics[0]).toMatchObject({
      id: "2026-01",
      title: "新质生产力"
    });
    expect(hotTopics[0].predictions).toHaveLength(3);
    expect(hotTopics[0].predictions[0]).toEqual({
      question: "请你谈谈对'新质生产力'的理解，以及政府应如何推动新质生产力发展？",
      angle: "综合分析-经济政策"
    });
  });
});
