import type { Metadata } from "next";
import type { Question } from "@/lib/question-utils";

export function buildQuestionMetadata(question: Question): Metadata {
  return {
    title: `${question.year}年${question.province}${question.typeName}面试真题及解析`,
    description: `${question.year}年${question.province}公务员面试${question.typeName}真题：${question.title.substring(
      0,
      80
    )}...提供小白版、进阶版、高分版三版本AI智能解析。`,
    keywords: `${question.year}面试真题,${question.province}公务员面试,${question.typeName},结构化面试,面试解析`
  };
}
