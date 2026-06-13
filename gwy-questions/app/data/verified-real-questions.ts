import type { Question } from "@/lib/question-utils";

type Seed = Omit<Question, "content" | "referenceAnswer" | "origin">;

const typeAnswers: Record<Question["type"], string> = {
  zonghefenxi:
    "答题思路：先表态，再分析意义和问题，最后提出对策。完整答案：这类题要辩证看，既看到政策或现象背后的积极价值，也不能忽略执行中的现实难点。作答时可以从群众获得感、基层治理效能、制度规范三个角度展开。对策上，一要加强调查研究，摸清群众和单位真实需求；二要完善流程标准，让工作有章可循；三要做好宣传解释和反馈评估，防止政策落地走样。金句标注：群众的感受，是检验工作成效的重要标尺。",
  yingjibian:
    "答题思路：稳现场、查原因、分层处理、复盘改进。完整答案：遇到突发情况，我会先控制现场秩序，安抚相关人员情绪，避免矛盾扩大。随后快速核实事实，明确问题原因、影响范围和核心诉求。能现场解决的立即解决，不能现场解决的说明原因、给出时限并及时向领导汇报。对外沟通要统一口径、真实准确。事后复盘流程、预案和沟通短板，形成整改措施。金句标注：应急处置既要快一步，更要稳一分。",
  zuzhiguanli:
    "答题思路：明确目标、做好准备、组织实施、总结反馈。完整答案：我会先向领导明确活动目的、对象和要求，制定方案，细化分工、时间、地点和保障措施。前期做好资料收集、对象沟通和风险预案。实施中注重形式多样和过程有序，可以采取座谈、问卷、走访、宣讲、现场答疑等方式。结束后汇总问题和建议，形成台账，及时向领导汇报并跟踪反馈。金句标注：组织工作的落点，是让活动成果真正服务工作改进。",
  renjiguanxi:
    "答题思路：摆正心态、换位沟通、聚焦工作、形成合力。完整答案：面对人际协作问题，我会先从自身查找沟通、分工、执行上是否存在不足，避免把工作分歧情绪化。随后主动沟通，了解对方顾虑，肯定对方合理意见，再围绕共同任务目标提出解决方案。必要时把分工、节点和标准明确下来，重大问题及时请示领导。金句标注：机关工作不是单打独斗，而是在协作中共同把事办成。",
  ziworenzhi:
    "答题思路：谈岗位认知、个人匹配、短板提升。完整答案：我认为基层和机关岗位都需要责任意识、服务意识、学习能力和执行能力。结合自身经历，我会突出自己愿意学习、能够承压、重视团队协作的特点，也会坦诚说明经验不足等短板。进入岗位后，我会多向领导同事请教，多到一线了解情况，在具体任务中提升政策理解、群众沟通和问题解决能力。金句标注：岗位选择不是一句口号，而是长期责任和行动。",
  qingjingmoni:
    "答题思路：先共情，再解释，再给方案，最后承诺反馈。完整答案：您好，我理解您现在比较着急，也感谢您愿意把问题反映出来。我们处理这件事不是为了推脱，而是要把事实核清、政策讲明、流程走实。接下来我先帮您梳理具体情况，能现场办理的马上办理；需要其他部门配合的，我会记录清楚并告知办理时限和联系方式。请您先稳定一下情绪，我们一起把问题往前推进。金句标注：群众工作先有态度，才有信任。"
};

function make(seed: Seed): Question {
  return {
    ...seed,
    content: `${seed.title}（公开考生回忆题题意整理，来源见下方链接。）`,
    referenceAnswer: typeAnswers[seed.type],
    origin: "verified_recall"
  };
}

export const verifiedRealQuestions: Question[] = [
  make({
    id: "real-2025-water-001",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位要开展生态日活动，领导让你负责，你会如何组织？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日水利部直属系统面试题",
    sourceUrl: "https://ahbxgwy.com/item/24100.html?displaymode=pc"
  }),
  make({
    id: "real-2025-water-002",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位计划使用 AI 工具提高公文写作能力，领导让你负责培训，你会如何开展？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日水利部直属系统面试题",
    sourceUrl: "https://ahbxgwy.com/item/24100.html?displaymode=pc"
  }),
  make({
    id: "real-2025-water-003",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "你们正在组织业务培训，有人认为内容不实用，有人私下离场，还有人打算向领导反馈，你怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日水利部直属系统面试题",
    sourceUrl: "https://ahbxgwy.com/item/24100.html?displaymode=pc"
  }),
  make({
    id: "real-2025-water-004",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "单位开发智能信息系统，群众误以为可直接报销，在大厅排队聚集并认为单位故意刁难，你怎么办？",
    sourceName: "安徽博学教育公开回忆题：2025年2月27日水利部直属系统面试题",
    sourceUrl: "https://ahbxgwy.com/item/24100.html?displaymode=pc"
  }),
  make({
    id: "real-2024-haiguan-001",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "海关要开展食品安全进校园主题宣传活动，你认为重点是什么？",
    sourceName: "安徽博学教育公开回忆题：2024年2月28日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/22228.html?displaymode=pc"
  }),
  make({
    id: "real-2024-haiguan-002",
    year: 2024,
    province: "国考",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "你发现同事的工作方案存在重要数据错误，但同事不听你的意见，你怎么办？",
    sourceName: "安徽博学教育公开回忆题：2024年2月28日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/22228.html?displaymode=pc"
  }),
  make({
    id: "real-2024-haiguan-003",
    year: 2024,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "旅游中有人喜欢做详细攻略，也有人喜欢说走就走，请谈谈你的理解。",
    sourceName: "安徽博学教育公开回忆题：2024年2月28日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/22228.html?displaymode=pc"
  }),
  make({
    id: "real-2024-haiguan-004",
    year: 2024,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "粮食收获、储存、消费环节损耗较多，有人担心粮食安全，你怎么看？",
    sourceName: "安徽博学教育公开回忆题：2024年2月29日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/22229.html?displaymode=pc"
  }),
  make({
    id: "real-2024-haiguan-005",
    year: 2024,
    province: "国考",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "你和小张工作中产生冲突，同事小王因此不配合你工作，你怎么办？",
    sourceName: "安徽博学教育公开回忆题：2024年2月29日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/22229.html?displaymode=pc"
  }),
  make({
    id: "real-2024-haiguan-006",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "海关要做以案释法活动，你认为重点是什么？",
    sourceName: "安徽博学教育公开回忆题：2024年2月29日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/22229.html?displaymode=pc"
  }),
  make({
    id: "real-2023-haiguan-001",
    year: 2023,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位要组织学习二十大精神的活动，你会怎么组织？",
    sourceName: "安徽博学教育公开回忆题：2023年4月12日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/18168.html?displaymode=pc"
  }),
  make({
    id: "real-2023-haiguan-002",
    year: 2023,
    province: "国考",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "老张爱指导年轻人但不注意场合，年轻人不高兴，你会怎么做？",
    sourceName: "安徽博学教育公开回忆题：2023年4月12日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/18168.html?displaymode=pc"
  }),
  make({
    id: "real-2023-haiguan-003",
    year: 2023,
    province: "国考",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "群众排队等待办理业务时系统故障，群众不满，你会怎么办？",
    sourceName: "安徽博学教育公开回忆题：2023年4月12日海关面试题",
    sourceUrl: "https://ahbxgwy.com/item/18168.html?displaymode=pc"
  }),
  make({
    id: "real-2024-tax-001",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位要组织税务大厅开放日活动，你会怎么组织？",
    sourceName: "32学院公开真题册：2024年3月9日税务局面试题",
    sourceUrl: "https://www.32xueyuan.com/documents/pdf/2019-2024%E5%9B%BD%E8%80%83%E9%9D%A2%E8%AF%95%E7%9C%9F%E9%A2%98%E5%86%8C.pdf"
  }),
  make({
    id: "real-2024-tax-002",
    year: 2024,
    province: "国考",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "medium",
    title: "直播助农效果不好，有村民说耗时耗力、怨言较大，请现场模拟劝说。",
    sourceName: "32学院公开真题册：2024年3月9日税务局面试题",
    sourceUrl: "https://www.32xueyuan.com/documents/pdf/2019-2024%E5%9B%BD%E8%80%83%E9%9D%A2%E8%AF%95%E7%9C%9F%E9%A2%98%E5%86%8C.pdf"
  }),
  make({
    id: "real-2024-tax-003",
    year: 2024,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "有人说要坚持，有人说坚持错了方向会走弯路。请结合经历谈理解。",
    sourceName: "32学院公开真题册：2024年3月9日税务局面试题",
    sourceUrl: "https://www.32xueyuan.com/documents/pdf/2019-2024%E5%9B%BD%E8%80%83%E9%9D%A2%E8%AF%95%E7%9C%9F%E9%A2%98%E5%86%8C.pdf"
  }),
  make({
    id: "real-2024-tax-004",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位让你做一项关于文旅的调研，你怎么组织？",
    sourceName: "32学院公开真题册：2024年3月10日税务局面试题",
    sourceUrl: "https://www.32xueyuan.com/documents/pdf/2019-2024%E5%9B%BD%E8%80%83%E9%9D%A2%E8%AF%95%E7%9C%9F%E9%A2%98%E5%86%8C.pdf"
  }),
  make({
    id: "real-2024-tax-005",
    year: 2024,
    province: "国考",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "medium",
    title: "你工作中出现失误导致同事小王被领导批评，小王情绪低落，你会怎么劝说？",
    sourceName: "32学院公开真题册：2024年3月10日税务局面试题",
    sourceUrl: "https://www.32xueyuan.com/documents/pdf/2019-2024%E5%9B%BD%E8%80%83%E9%9D%A2%E8%AF%95%E7%9C%9F%E9%A2%98%E5%86%8C.pdf"
  }),
  make({
    id: "real-2024-tax-006",
    year: 2024,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "有人说要活在当下，有人说要为未来蓄力，你怎么看？",
    sourceName: "32学院公开真题册：2024年3月10日税务局面试题",
    sourceUrl: "https://www.32xueyuan.com/documents/pdf/2019-2024%E5%9B%BD%E8%80%83%E9%9D%A2%E8%AF%95%E7%9C%9F%E9%A2%98%E5%86%8C.pdf"
  })
].map((question) => ({
  ...question,
  origin: "verified_recall" as const
}));
