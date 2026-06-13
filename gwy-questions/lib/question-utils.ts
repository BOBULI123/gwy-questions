export type QuestionType =
  | "renjiguanxi"
  | "yingjibian"
  | "zonghefenxi"
  | "zuzhiguanli"
  | "ziworenzhi"
  | "qingjingmoni";

export type Difficulty = "easy" | "medium" | "hard";

export type QuestionOrigin = "verified_recall";

export type Question = {
  id: string;
  year: number;
  province: string;
  type: QuestionType;
  typeName: string;
  difficulty: Difficulty;
  title: string;
  content: string;
  referenceAnswer?: string;
  sourceName?: string;
  sourceUrl?: string;
  origin?: QuestionOrigin;
};

export const typeMetas: Array<{
  slug: QuestionType;
  name: string;
  description: string;
}> = [
  {
    slug: "renjiguanxi",
    name: "人际关系",
    description: "同事协作、群众沟通、上下级协调"
  },
  {
    slug: "yingjibian",
    name: "应急应变",
    description: "突发事件、现场处置、舆情回应"
  },
  {
    slug: "zonghefenxi",
    name: "综合分析",
    description: "政策理解、社会现象、观点辨析"
  },
  {
    slug: "zuzhiguanli",
    name: "组织管理",
    description: "调研宣传、活动统筹、项目推进"
  },
  {
    slug: "ziworenzhi",
    name: "自我认知",
    description: "岗位匹配、职业规划、价值选择"
  },
  {
    slug: "qingjingmoni",
    name: "情景模拟",
    description: "现场劝导、沟通表达、角色代入"
  }
];

export const provinces = [
  "国考",
  "北京",
  "上海",
  "广东",
  "江苏",
  "浙江",
  "山东",
  "河南",
  "四川",
  "湖北",
  "湖南",
  "安徽",
  "福建",
  "河北",
  "山西",
  "辽宁"
];

export const years = Array.from({ length: 12 }, (_, index) => 2026 - index);

export function getTypeMeta(type: string) {
  return typeMetas.find((meta) => meta.slug === type);
}

export function getQuestionSummary(question: Pick<Question, "title" | "content">, length = 50) {
  const text = question.title || question.content;
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

export function filterQuestions(
  questions: Question[],
  filters: {
    keyword?: string;
    type?: string;
    year?: number | "all";
    province?: string;
  }
) {
  const keyword = filters.keyword?.trim().toLowerCase();

  return questions.filter((question) => {
    const matchesKeyword = keyword
      ? `${question.title}${question.content}${question.province}${question.typeName}`
          .toLowerCase()
          .includes(keyword)
      : true;
    const matchesType = filters.type ? question.type === filters.type : true;
    const matchesYear =
      filters.year && filters.year !== "all" ? question.year === filters.year : true;
    const matchesProvince =
      filters.province && filters.province !== "全部" ? question.province === filters.province : true;

    return matchesKeyword && matchesType && matchesYear && matchesProvince;
  });
}

export function paginate<T>(items: T[], requestedPage: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (page - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page,
    totalPages
  };
}

export function canViewParse(viewedQuestionIds: string[], questionId: string, freeLimit = 3) {
  return viewedQuestionIds.includes(questionId) || viewedQuestionIds.length < freeLimit;
}
