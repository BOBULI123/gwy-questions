import type { Question } from "@/lib/question-utils";

type Seed = Omit<Question, "content" | "referenceAnswer" | "origin" | "typeName">;

const typeNames: Record<Question["type"], string> = {
  renjiguanxi: "人际关系",
  yingjibian: "应急应变",
  zonghefenxi: "综合分析",
  zuzhiguanli: "组织管理",
  ziworenzhi: "自我认知",
  qingjingmoni: "情景模拟"
};

const typeAnswers: Record<Question["type"], string> = {
  zonghefenxi:
    "答题思路：先亮明态度，再从背景、意义、风险和落实路径展开，最后回到治理能力提升。完整答案：这类题不能只看表面现象，要把它放到公共治理和群众需求中理解。积极的一面要肯定，比如提升效率、回应民生、推动创新；同时也要看到执行中可能出现的标准不清、资源不足、沟通不到位等问题。具体作答时，可以提出加强调研、完善制度、细化流程、公开反馈、动态评估等措施。金句标注：政策的温度，最终体现在群众可感可及的细节里。",
  yingjibian:
    "答题思路：先稳住现场，再核实情况，随后分类处置，最后复盘完善。完整答案：遇到突发情况，我会第一时间控制现场秩序，安抚相关人员情绪，避免矛盾扩大；同时快速了解事实、影响范围和核心诉求。能现场解决的立即协调解决，暂时无法解决的说明原因、给出时限并做好记录。对外回应要统一、准确、及时，防止误解发酵。事后要梳理制度、流程和预案中的短板，形成整改台账。金句标注：应急处置既要快一步，更要稳一分。",
  zuzhiguanli:
    "答题思路：明确目标、摸清对象、制定方案、组织实施、总结反馈。完整答案：组织类题目要体现计划性和落地性。我会先向领导明确活动目标、对象范围、时间节点和成果要求，再做好前期调研，掌握参与人员需求。方案中细化人员分工、流程安排、物资保障和风险预案。实施中注重过程调度和现场秩序，根据反馈及时调整。活动结束后收集数据、意见和典型案例，形成总结材料并推动成果转化。金句标注：组织工作的价值，不在热闹一时，而在真正服务工作改进。",
  renjiguanxi:
    "答题思路：摆正心态、换位理解、主动沟通、聚焦任务、形成合力。完整答案：面对人际协作问题，我会先从自身找原因，避免把工作分歧情绪化。随后主动沟通，了解对方顾虑，肯定合理意见，再围绕共同目标协商解决方案。涉及分工、标准、时间节点的，要尽量具体明确，减少误会。必要时可以请有经验的同事或领导帮助协调，但重点仍是把事情做好、把关系理顺。金句标注：机关工作不是单打独斗，而是在协作中共同把事办成。",
  ziworenzhi:
    "答题思路：先谈岗位理解，再谈个人匹配，最后谈入职后的提升计划。完整答案：公务员岗位需要政治意识、责任意识、服务意识和学习能力。作答时要结合个人经历说明自己为什么适合岗位，比如愿意到一线锻炼、能承受压力、重视团队协作，也要坦诚看到经验不足等短板。进入岗位后，应通过向领导同事学习、深入基层调研、参与具体任务，不断提升政策理解、群众沟通和执行落实能力。金句标注：岗位选择不是一句口号，而是长期责任和行动。",
  qingjingmoni:
    "答题思路：先共情，再解释，再给方案，最后承诺反馈。完整答案：您好，我理解您现在比较着急，也感谢您愿意把问题反映出来。我们处理这件事不是为了推脱，而是要把事实核清、政策讲明、流程走实。接下来我会先帮您梳理具体情况，能现场办理的马上办理；需要其他部门配合的，我会记录清楚并告知办理时限和联系方式。也请您先稳定一下情绪，我们一起把问题往前推进。金句标注：群众工作先有态度，才有信任。"
};

function make(seed: Seed): Question {
  return {
    ...seed,
    typeName: typeNames[seed.type],
    content: `${seed.title}（公开考生回忆题，题意整理，来源见下方链接。）`,
    referenceAnswer: typeAnswers[seed.type],
    origin: "verified_recall"
  };
}

const taxSource =
  "https://ahbxgwy.com/item/24092.html?displaymode=pc";
const railwaySource =
  "https://ahbxgwy.com/item/24959.html?displaymode=pc";

export const verifiedRealQuestionsBatch2: Question[] = [
  make({
    id: "real-2025-tax-007",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "春节期间，税务局要组织志愿服务活动，领导交给你负责，你会如何组织？",
    sourceName: "安徽博学教育公开回忆题：2025年2月25日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-008",
    year: 2025,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "某市干部上门慰问老人时被抱怨不解决实际问题，请你现场模拟回应老人。",
    sourceName: "安徽博学教育公开回忆题：2025年2月25日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-009",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "请结合实际谈谈你对“数据多跑路、群众少跑腿”的理解。",
    sourceName: "安徽博学教育公开回忆题：2025年2月25日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-010",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "有的地方推行远程政务服务，但部分群众不会使用智能设备，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2025年2月26日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-011",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位要开展一次税费优惠政策宣传活动，你会如何提升宣传效果？",
    sourceName: "安徽博学教育公开回忆题：2025年2月26日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-012",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "办税大厅系统临时故障，排队群众情绪激动，你作为现场工作人员怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年2月26日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-013",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "有人认为基层工作要留痕，有人认为过度留痕增加负担，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-014",
    year: 2025,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "你和同事共同负责材料，同事进度慢影响整体提交，你会怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-015",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "领导让你调研小微企业对税费服务的满意度，你会如何开展？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-016",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "一些地方用短视频宣传政务服务，有人觉得接地气，有人觉得不够严肃，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2025年2月28日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-017",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "纳税人因不了解政策导致申报错误，在窗口与工作人员争执，你怎么处理？",
    sourceName: "安徽博学教育公开回忆题：2025年2月28日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-018",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位准备开展青年干部业务比武活动，你会如何组织？",
    sourceName: "安徽博学教育公开回忆题：2025年2月28日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-019",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "有的干部喜欢坐在办公室看材料，有的干部坚持到现场看问题，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2025年3月1日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-020",
    year: 2025,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "群众认为线上办理流程复杂、不愿继续操作，请你现场模拟劝导。",
    sourceName: "安徽博学教育公开回忆题：2025年3月1日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-tax-021",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位要开展“便民办税春风行动”宣传，你认为重点环节是什么？",
    sourceName: "安徽博学教育公开回忆题：2025年3月1日税务系统面试题",
    sourceUrl: taxSource
  }),
  make({
    id: "real-2025-railway-001",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "老旧小区改造既要提升功能，也要保留城市记忆，请谈谈你的理解。",
    sourceName: "安徽博学教育公开回忆题：2025年3月14日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-002",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "铁路公安准备开展防诈骗宣传进车站活动，你会如何组织？",
    sourceName: "安徽博学教育公开回忆题：2025年3月14日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-003",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "车站候车室有旅客因退票问题与工作人员发生争执，围观人员增多，你怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年3月14日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-004",
    year: 2025,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "旅客怀疑自己被骗后情绪激动、不愿配合登记，请你现场模拟沟通。",
    sourceName: "安徽博学教育公开回忆题：2025年3月14日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-005",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "有些服务窗口推行“首问负责制”，请谈谈这对提升群众满意度的意义。",
    sourceName: "安徽博学教育公开回忆题：2025年3月15日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-006",
    year: 2025,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "你提出的新方案被老同事认为不切实际，工作推进受阻，你会怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年3月15日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-007",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "列车晚点导致大量旅客滞留，有人拍视频质疑管理混乱，你作为现场民警怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年3月15日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-008",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位要组织一次铁路沿线安全隐患排查，你会如何安排？",
    sourceName: "安徽博学教育公开回忆题：2025年3月15日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-009",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "有人说基层执法要有力度，也有人说更要有温度，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2025年3月16日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-010",
    year: 2025,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "乘客携带违禁物品进站被拦下后不理解政策，请你现场模拟解释。",
    sourceName: "安徽博学教育公开回忆题：2025年3月16日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-011",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "领导让你组织一次青年民警学习先进典型的活动，你会如何开展？",
    sourceName: "安徽博学教育公开回忆题：2025年3月16日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-012",
    year: 2025,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "新同事工作积极但经常忽视流程规范，影响团队配合，你会怎么提醒？",
    sourceName: "安徽博学教育公开回忆题：2025年3月16日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-013",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "数字化治理提升了效率，但也可能带来个人信息保护压力，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2025年3月17日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-014",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "站内发现疑似走失儿童，家长暂时联系不上，周围旅客围观，你会如何处置？",
    sourceName: "安徽博学教育公开回忆题：2025年3月17日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-015",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位准备开展铁路安全宣传进校园活动，你认为应重点做好哪些工作？",
    sourceName: "安徽博学教育公开回忆题：2025年3月17日铁路公安面试题",
    sourceUrl: railwaySource
  }),
  make({
    id: "real-2025-railway-016",
    year: 2025,
    province: "国考",
    type: "ziworenzhi",
    difficulty: "medium",
    title: "请结合铁路公安岗位特点，谈谈你认为青年干部最需要具备的品质。",
    sourceName: "安徽博学教育公开回忆题：2025年3月17日铁路公安面试题",
    sourceUrl: railwaySource
  })
];
