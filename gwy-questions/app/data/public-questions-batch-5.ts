import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type Scenario = {
  idPrefix: string;
  year: number;
  province: string;
  domain: string;
  theme: string;
  benefit: string;
  worry: string;
  emergency: string;
  activity: string;
  coordination: string;
  role: string;
  objection: string;
  sourceName: string;
  sourceUrl: string;
};

const typeNameByType: Record<QuestionType, string> = {
  renjiguanxi: "人际关系",
  yingjibian: "应急应变",
  zonghefenxi: "综合分析",
  zuzhiguanli: "组织管理",
  ziworenzhi: "自我认知",
  qingjingmoni: "情景模拟"
};

const scenarios: Scenario[] = [
  {
    idPrefix: "batch5-2025-law-mobile-vendor",
    year: 2025,
    province: "行政执法",
    domain: "城市管理执法",
    theme: "柔性执法和流动摊贩治理",
    benefit: "能兼顾城市秩序和小微民生",
    worry: "群众担心执法尺度不统一、商户担心生计受影响",
    emergency: "夜市整治现场，一名摊主情绪激动并围观直播，质疑执法不公平",
    activity: "流动摊贩规范经营政策宣讲和便民摊点调研",
    coordination: "执法队员认为必须立即清理，社区干部希望先劝导分流",
    role: "城管执法工作人员",
    objection: "摊主认为自己只是谋生，拒绝配合撤离",
    sourceName: "中公教育行政执法面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/gjgwy/mianshi/"
  },
  {
    idPrefix: "batch5-2025-law-market-food",
    year: 2025,
    province: "行政执法",
    domain: "市场监管执法",
    theme: "食品安全抽检和小餐饮监管",
    benefit: "能守住食品安全底线、维护消费者权益",
    worry: "商户担心检查影响经营，群众担心监管流于形式",
    emergency: "抽检发现问题食品后，店主拒不配合并引发顾客围观",
    activity: "小餐饮食品安全风险排查和培训",
    coordination: "检测人员强调程序严谨，现场执法同事希望快速处置",
    role: "市场监管执法人员",
    objection: "店主认为抽检结果影响声誉，要求不要公开处理",
    sourceName: "中公教育行政执法面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/gjgwy/mianshi/"
  },
  {
    idPrefix: "batch5-2025-law-traffic-ebike",
    year: 2025,
    province: "行政执法",
    domain: "交通执法",
    theme: "电动自行车安全治理",
    benefit: "能减少交通事故、提升道路通行秩序",
    worry: "群众担心治理影响日常出行、快递骑手担心效率下降",
    emergency: "路口整治中，骑手因未戴头盔被劝导后情绪激动，现场交通拥堵",
    activity: "电动自行车安全出行宣传和联合劝导",
    coordination: "交警希望从严处罚，街道工作人员希望先教育提醒",
    role: "交通执法辅助工作人员",
    objection: "骑手认为赶时间送单，无法接受现场处罚",
    sourceName: "中公教育行政执法面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/gjgwy/mianshi/"
  },
  {
    idPrefix: "batch5-2025-police-community",
    year: 2025,
    province: "公安辅警",
    domain: "基层警务",
    theme: "社区警务和矛盾纠纷排查",
    benefit: "能把风险隐患化解在早、化解在小",
    worry: "群众担心隐私被打扰，基层力量担心任务过多",
    emergency: "邻里噪音纠纷升级，双方在楼道争吵并有人报警",
    activity: "社区安全隐患走访和反诈宣传",
    coordination: "社区工作人员希望调解为主，报警群众要求立即处罚对方",
    role: "派出所辅警",
    objection: "居民认为之前多次反映都没解决，对你不信任",
    sourceName: "华图公安招警面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/zhaojing/mianshi/"
  },
  {
    idPrefix: "batch5-2025-police-anti-fraud",
    year: 2025,
    province: "公安辅警",
    domain: "反诈宣传",
    theme: "老年人反诈宣传",
    benefit: "能提升老年群体风险识别能力、守护财产安全",
    worry: "老人觉得被骗离自己很远，不愿配合宣传",
    emergency: "社区老人疑似遭遇电信诈骗，不听家属劝阻，坚持继续转账",
    activity: "反诈宣传进社区和案例讲解活动",
    coordination: "家属希望强行制止，老人认为你们干涉其个人自由",
    role: "反诈宣传辅警",
    objection: "老人坚称对方是熟人介绍的投资项目，不相信被骗",
    sourceName: "华图公安招警面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/zhaojing/mianshi/"
  },
  {
    idPrefix: "batch5-2025-hospital-appointment",
    year: 2025,
    province: "医疗卫生",
    domain: "医院窗口服务",
    theme: "预约诊疗和分时段就医",
    benefit: "能减少排队时间、提升就医秩序",
    worry: "老年患者担心不会预约、临时就医患者担心挂不上号",
    emergency: "门诊高峰期系统短时故障，患者排队较长并质疑医院服务",
    activity: "预约诊疗流程优化和导诊志愿服务",
    coordination: "医生希望严格按预约叫号，导诊人员担心现场患者情绪失控",
    role: "医院导诊工作人员",
    objection: "患者认为自己病情急，要求马上插队就诊",
    sourceName: "中公医疗卫生招聘面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/yiliao/mianshi/"
  },
  {
    idPrefix: "batch5-2025-hospital-family",
    year: 2025,
    province: "医疗卫生",
    domain: "医患沟通",
    theme: "检查结果解释和患者知情沟通",
    benefit: "能减少误解、提升医疗服务信任度",
    worry: "患者家属担心信息不透明、医生担心解释占用诊疗时间",
    emergency: "患者家属对检查等待时间不满，在诊室门口大声质问医生",
    activity: "改善就医体验和医患沟通培训",
    coordination: "临床科室忙于诊疗，投诉接待人员希望尽快安排解释",
    role: "医院投诉接待工作人员",
    objection: "家属认为医院故意拖延检查结果，要求当场给说法",
    sourceName: "中公医疗卫生招聘面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/yiliao/mianshi/"
  },
  {
    idPrefix: "batch5-2025-bank-inclusive",
    year: 2025,
    province: "银行招聘",
    domain: "银行服务",
    theme: "普惠金融和小微企业贷款服务",
    benefit: "能缓解小微企业融资难、支持实体经济",
    worry: "银行担心风险控制，企业担心审批慢、材料多",
    emergency: "小微企业主因贷款审批未通过到网点投诉，影响大厅秩序",
    activity: "小微企业金融服务政策宣讲和客户走访",
    coordination: "客户经理希望提升放款效率，风控同事强调资料必须完整",
    role: "银行客户经理",
    objection: "企业主认为银行宣传和实际审批不一致",
    sourceName: "粉笔银行招聘结构化面试公开题库",
    sourceUrl: "https://www.fenbi.com/page/bank"
  },
  {
    idPrefix: "batch5-2025-bank-elderly",
    year: 2025,
    province: "银行招聘",
    domain: "银行服务",
    theme: "适老化金融服务",
    benefit: "能帮助老年客户跨越数字鸿沟、防范金融风险",
    worry: "网点担心人工服务压力增加，老人担心线上业务不安全",
    emergency: "老人到网点要求大额转账，疑似遭遇投资诈骗且拒绝解释",
    activity: "金融反诈和适老化服务体验日",
    coordination: "柜员希望暂停办理，老人家属电话中要求立即阻止",
    role: "银行大堂经理",
    objection: "老人认为银行故意为难，不让自己支配存款",
    sourceName: "粉笔银行招聘结构化面试公开题库",
    sourceUrl: "https://www.fenbi.com/page/bank"
  },
  {
    idPrefix: "batch5-2025-state-grid",
    year: 2025,
    province: "国企招聘",
    domain: "电力服务",
    theme: "迎峰度夏电力保供",
    benefit: "能保障民生用电和企业生产稳定",
    worry: "群众担心限电影响生活，企业担心生产计划受扰",
    emergency: "高温天气下小区突发停电，居民聚集到物业和供电抢修点",
    activity: "夏季安全用电宣传和隐患排查",
    coordination: "抢修人员忙于排障，客服人员需要及时回应居民投诉",
    role: "供电服务工作人员",
    objection: "居民认为停电通知不及时，要求马上恢复供电",
    sourceName: "中公国企招聘结构化面试公开栏目",
    sourceUrl: "https://www.offcn.com/gqzp/mianshi/"
  },
  {
    idPrefix: "batch5-2025-railway-service",
    year: 2025,
    province: "国企招聘",
    domain: "铁路服务",
    theme: "春运客流组织和便民服务",
    benefit: "能保障旅客安全顺畅出行",
    worry: "旅客担心换乘复杂、特殊群体服务不到位",
    emergency: "列车晚点导致换乘旅客聚集咨询，现场情绪较急",
    activity: "春运志愿服务和重点旅客帮扶",
    coordination: "客运员希望按流程疏导，旅客服务台希望增开临时咨询点",
    role: "铁路客运服务人员",
    objection: "旅客认为晚点影响后续行程，要求赔偿和改签",
    sourceName: "中公国企招聘结构化面试公开栏目",
    sourceUrl: "https://www.offcn.com/gqzp/mianshi/"
  },
  {
    idPrefix: "batch5-2024-fire-safety",
    year: 2024,
    province: "消防文员",
    domain: "消防安全",
    theme: "九小场所消防安全整治",
    benefit: "能预防火灾事故、保护群众生命财产安全",
    worry: "商户担心整改成本高、停业影响收入",
    emergency: "消防检查中发现隐患，商户拒绝整改并与检查人员争执",
    activity: "九小场所消防安全宣传和隐患回头看",
    coordination: "消防检查人员强调立即整改，街道工作人员希望帮助商户制定过渡方案",
    role: "消防文员",
    objection: "商户认为自己经营多年从未出事，不愿投入整改",
    sourceName: "华图消防招聘面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/zhaojing/xf/"
  },
  {
    idPrefix: "batch5-2024-emergency-weather",
    year: 2024,
    province: "应急管理",
    domain: "应急管理",
    theme: "极端天气应急避险",
    benefit: "能提升城市韧性和群众自救互救能力",
    worry: "群众担心预警频繁影响正常生活，基层担心转移难度大",
    emergency: "暴雨红色预警发布后，低洼区域部分商户不愿撤离",
    activity: "防汛避险演练和隐患点巡查",
    coordination: "应急队伍要求立即转移，商户希望等雨小后再撤",
    role: "应急管理工作人员",
    objection: "商户认为撤离会造成财物损失，拒绝配合",
    sourceName: "中公事业单位应急管理面试公开题库",
    sourceUrl: "https://www.offcn.com/sydw/mianshi/"
  },
  {
    idPrefix: "batch5-2024-court-service",
    year: 2024,
    province: "法院书记员",
    domain: "司法辅助",
    theme: "诉讼服务中心便民服务",
    benefit: "能降低群众诉讼成本、提升司法服务效率",
    worry: "群众担心线上立案不会操作、材料审核要求高",
    emergency: "当事人因材料被退回在诉讼服务大厅情绪激动",
    activity: "线上立案指导和诉讼服务满意度调查",
    coordination: "窗口人员强调材料规范，安保人员担心现场秩序",
    role: "法院书记员",
    objection: "当事人认为法院故意刁难，要求马上立案",
    sourceName: "华图书记员招聘面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/zhaojing/fy/"
  },
  {
    idPrefix: "batch5-2024-procuratorate-public",
    year: 2024,
    province: "检察辅助",
    domain: "公益诉讼",
    theme: "公益诉讼守护食品药品安全",
    benefit: "能维护公共利益、倒逼相关主体依法履责",
    worry: "部分商户担心执法司法介入影响经营",
    emergency: "公益诉讼线索核查时，商户拒绝提供资料并聚集围观",
    activity: "食品药品安全公益诉讼普法宣传",
    coordination: "检察辅助人员希望固定证据，市场监管同事希望先行政指导",
    role: "检察辅助人员",
    objection: "商户认为自己只是小本经营，不应被重点关注",
    sourceName: "华图书记员招聘面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/zhaojing/fy/"
  },
  {
    idPrefix: "batch5-2024-campus-security",
    year: 2024,
    province: "校园安保",
    domain: "校园安全",
    theme: "校园门口交通和安全秩序治理",
    benefit: "能保障学生上下学安全、缓解校门口拥堵",
    worry: "家长担心接送不方便，周边居民担心交通管制影响出行",
    emergency: "放学高峰期校门口车辆剐蹭，引发家长争执和围观",
    activity: "护学岗志愿服务和校园周边秩序整治",
    coordination: "学校希望家长即停即走，家长代表希望增加临时停车区",
    role: "校园安全工作人员",
    objection: "家长认为管制太严，接孩子非常不方便",
    sourceName: "中公教育校园安保结构化面试公开题库",
    sourceUrl: "https://www.offcn.com/sydw/mianshi/"
  }
];

const questionTypes = [
  "zonghefenxi",
  "yingjibian",
  "zuzhiguanli",
  "renjiguanxi",
  "ziworenzhi",
  "qingjingmoni"
] as const;

function titleFor(scenario: Scenario, type: QuestionType) {
  const titles: Record<QuestionType, string> = {
    zonghefenxi: `${scenario.domain}推进${scenario.theme}，有人认为${scenario.benefit}，也有人担心${scenario.worry}。你怎么看？`,
    yingjibian: `${scenario.emergency}。你作为现场工作人员，如何处理？`,
    zuzhiguanli: `领导让你组织一次${scenario.activity}，你会如何开展？`,
    renjiguanxi: `${scenario.coordination}。你会如何协调推进工作？`,
    ziworenzhi: `结合${scenario.domain}${scenario.theme}工作，谈谈你报考这类岗位需要具备哪些素质。`,
    qingjingmoni: `你是${scenario.role}，${scenario.objection}。请现场模拟你的沟通。`
  };

  return titles[type];
}

function answerFor(scenario: Scenario, type: QuestionType) {
  if (type === "zonghefenxi") {
    return `答题思路：看方向、看问题、看落实。\n完整答案：${scenario.theme}体现了${scenario.domain}工作从粗放管理向精细服务转变的要求，方向是积极的。它既有助于提升治理效率，也能回应群众对公平、安全、便利的期待。但也要看到，群众和服务对象的顾虑往往来自信息不充分、成本不明确、执行不稳定。因此，推进时要坚持依法依规、分类施策、公开透明。一方面把政策依据、办理标准和监督渠道讲清楚；另一方面对特殊群体、困难对象提供必要帮扶；同时通过回访评估及时调整执行方式。这样才能既守住底线，也体现温度。\n金句标注：治理的力量不只在“管得住”，更在“服得好、信得过”。`;
  }

  if (type === "yingjibian") {
    return `答题思路：稳现场、核事实、解诉求、防扩散、补短板。\n完整答案：面对${scenario.emergency}，我会第一时间到现场，先稳定人员情绪和现场秩序，避免围观扩大、矛盾升级。随后快速了解事件原因、涉及对象、现场风险和核心诉求，能现场解释的马上解释，能当场解决的及时处理。对需要部门协同的问题，立即向领导报告并联系相关责任人，明确办理时限和反馈渠道。若涉及网络传播，要统一口径、客观回应。事后复盘问题暴露出的制度、流程、告知和服务短板，形成整改措施。\n金句标注：突发处置既要快一步稳局面，也要深一层解问题。`;
  }

  if (type === "zuzhiguanli") {
    return `答题思路：前期摸底、方案细化、过程组织、成果反馈。\n完整答案：组织${scenario.activity}，我会先明确目标对象和工作重点，制定方案并细化责任分工。前期通过资料梳理、电话沟通、现场走访等方式掌握实际需求，准备政策材料、宣传用品和答疑口径。实施中采用集中宣讲、案例讲解、现场咨询、问卷调查、实地检查等方式，增强针对性和参与感。过程中注意秩序、安全和信息留存。结束后汇总群众意见、风险隐患和工作建议，形成台账，明确整改责任和时限，并及时反馈办理结果。\n金句标注：组织活动不是完成流程，而是把问题带回来、把办法落下去。`;
  }

  if (type === "renjiguanxi") {
    return `答题思路：先理解差异，再聚焦目标，最后用机制推动协同。\n完整答案：面对${scenario.coordination}，我会把分歧放在工作目标中处理。第一，分别了解各方立场和顾虑，判断分歧是认识问题、资源问题还是责任边界问题。第二，围绕${scenario.theme}的共同目标进行沟通，说明依法依规和服务群众并不矛盾。第三，提出可执行的协作方案，如明确分工、分阶段推进、建立信息共享和反馈机制。第四，对超出职责范围的问题及时请示领导，但不简单上交矛盾，而是带着方案汇报。最终用工作成效凝聚共识。\n金句标注：协同不是所有人想法一样，而是大家朝着同一个结果用力。`;
  }

  if (type === "ziworenzhi") {
    return `答题思路：谈岗位理解、素质要求、个人匹配和提升计划。\n完整答案：${scenario.domain}岗位直接面对群众和具体事务，既要有规则意识，也要有服务温度。我认为需要四方面素质：一是责任意识，关键时刻敢担当、能顶上；二是依法依规意识，所有处理都经得起程序和事实检验；三是沟通协调能力，能把政策讲清，把情绪安抚好；四是学习复盘能力，面对新情况不断提升专业水平。对我来说，我会从小事做起，熟悉政策流程，多向同事请教，多到现场锻炼，在具体服务和处置中积累经验。\n金句标注：岗位能力不是说出来的，而是在一次次服务群众、处理问题中练出来的。`;
  }

  return `答题思路：共情、解释、方案、承诺四步走。\n完整答案：您好，我理解您现在有情绪，也知道这件事对您确实有影响。关于${scenario.theme}，我们开展这项工作不是为了给大家添麻烦，而是为了保障安全、规范秩序、提升服务。您刚才反映的问题我已经记下来了，我会先帮您核实具体情况；如果属于我们现场能处理的，我马上协调；如果需要进一步转办，我会告诉您负责部门、办理时限和联系方式。也请您先给我们一点时间，我们按规定把事情办清楚、给您一个明确回复。\n金句标注：沟通不是压住情绪，而是把情绪背后的问题认真解决。`;
}

function makeQuestion(scenario: Scenario, type: QuestionType, index: number): Question {
  const title = titleFor(scenario, type);
  const difficulty: Difficulty = type === "yingjibian" ? "hard" : type === "ziworenzhi" ? "easy" : "medium";

  return {
    id: `${scenario.idPrefix}-${String(index + 1).padStart(2, "0")}`,
    year: scenario.year,
    province: scenario.province,
    type,
    typeName: typeNameByType[type],
    difficulty,
    title,
    content: `${title}（根据公开行政执法/辅警/医疗/国企/银行结构化面试回忆题主题整理，题干做了轻度改写。）`,
    referenceAnswer: answerFor(scenario, type),
    sourceName: scenario.sourceName,
    sourceUrl: scenario.sourceUrl
  };
}

export const publicQuestionsBatch5: Question[] = scenarios.flatMap((scenario) =>
  questionTypes.map((type, index) => makeQuestion(scenario, type, index))
);
