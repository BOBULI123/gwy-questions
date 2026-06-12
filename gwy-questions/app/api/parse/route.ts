import OpenAI from "openai";
import { NextResponse } from "next/server";
import { getAiProviderConfig } from "@/lib/ai-provider";

export const runtime = "nodejs";

type ParseLevel = "basic" | "advanced" | "expert";

type ParseRequest = {
  questionId?: string;
  questionText?: string;
  type?: string;
  level?: ParseLevel;
};

const prompts: Record<ParseLevel, string> = {
  basic:
    "你是一位刚上岸的公务员，擅长用通俗易懂的语言解释面试答题。请对以下面试题目给出解析：\n1. 答题思路：用'第一步...第二步...'的口语化表达\n2. 完整答案：控制在300字以内，像和朋友聊天一样自然\n3. 不要堆砌金句，不要讲大道理，让零基础考生能看懂、能背诵",
  advanced:
    "你是一位有5年教学经验的面试培训师。请对以下面试题目给出解析：\n1. 答题框架：明确使用'总-分-总'或'是什么-为什么-怎么办'结构\n2. 完整答案：500字左右，有逻辑词（首先/其次/再次/最后）\n3. 每条对策要具体可操作，避免空话\n4. 适当引用1-2个通用金句",
  expert:
    "你是一位参与过国考面试评审的资深考官。请对以下面试题目给出解析：\n1. 破题立意：从政府思维、大局意识、服务意识角度切入\n2. 答题框架：使用'表态-分析-对策-升华'四段式\n3. 完整答案：600-800字，语言规范、严谨、有机关用语风格\n4. 必须引用最新时政热点（如2024-2026年的政策、讲话、事件）\n5. 对策要有创新性，避免模板化（如不说'我要向领导汇报'，而说'建立首问负责制，在职责范围内先行处置'）\n6. 结尾要有升华，联系中国式现代化、高质量发展、民生福祉等宏大叙事"
};

function isParseLevel(level: unknown): level is ParseLevel {
  return level === "basic" || level === "advanced" || level === "expert";
}

export async function POST(request: Request) {
  let body: ParseRequest;

  try {
    body = (await request.json()) as ParseRequest;
  } catch {
    return NextResponse.json({ error: "请求体不是有效 JSON" }, { status: 400 });
  }

  if (!body.questionId || !body.questionText || !body.type || !isParseLevel(body.level)) {
    return NextResponse.json(
      { error: "参数缺失，请提供 questionId、questionText、type 和 level" },
      { status: 400 }
    );
  }

  const aiProvider = getAiProviderConfig();

  if (!aiProvider.apiKey) {
    return NextResponse.json(
      { error: "缺少 DEEPSEEK_API_KEY，请在 Vercel 或本地 .env.local 中配置" },
      { status: 500 }
    );
  }

  const client = new OpenAI({
    apiKey: aiProvider.apiKey,
    baseURL: aiProvider.baseURL
  });

  const completion = await client.chat.completions.create({
    model: aiProvider.model,
    temperature: body.level === "expert" ? 0.72 : 0.62,
    messages: [
      {
        role: "system",
        content:
          prompts[body.level] +
          "\n\n请严格按以下小标题输出：答题思路/答题框架、完整答案、金句标注。"
      },
      {
        role: "user",
        content: `题型：${body.type}\n题目ID：${body.questionId}\n题目：${body.questionText}`
      }
    ]
  });

  const parsedContent = completion.choices[0]?.message.content?.trim();

  if (!parsedContent) {
    return NextResponse.json({ error: "模型未返回解析内容" }, { status: 502 });
  }

  return NextResponse.json({ parsedContent });
}
