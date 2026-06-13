import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type Scenario = {
  idPrefix: string;
  year: number;
  province: string;
  category: string;
  theme: string;
  meaning: string;
  challenge: string;
  incident: string;
  task: string;
  disagreement: string;
  role: string;
  complaint: string;
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
    idPrefix: "batch6-2025-xds-rural-research",
    year: 2025,
    province: "选调生",
    category: "基层调研",
    theme: "年轻干部蹲点调研",
    meaning: "能掌握一线实情、提升决策服务的精准度",
    challenge: "部分基层群众不愿说真话、干部容易调研走过场",
    incident: "你到村里调研产业发展，村民认为调研只是填表，不愿配合",
    task: "年轻干部蹲点调研成果交流会",
    disagreement: "同事认为线上问卷足够，你认为还要入户访谈",
    role: "选调生",
    complaint: "村民说之前调研很多次都没有变化，对你不信任",
    sourceName: "中公选调生面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/xds/mianshi/"
  },
  {
    idPrefix: "batch6-2025-xds-village-industry",
    year: 2025,
    province: "选调生",
    category: "乡村振兴",
    theme: "村集体经济项目运营",
    meaning: "能增强村级造血能力、带动农民增收",
    challenge: "村民担心收益分配不透明、项目运营缺少专业人才",
    incident: "村集体项目分红方案公示后，部分村民质疑账目不清",
    task: "村集体经济项目运营情况评估",
    disagreement: "村干部希望快速扩大规模，你担心风险评估不足",
    role: "驻村选调生",
    complaint: "村民认为项目收益没有让大家真正受益",
    sourceName: "中公选调生面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/xds/mianshi/"
  },
  {
    idPrefix: "batch6-2025-township-land",
    year: 2025,
    province: "乡镇公务员",
    category: "基层治理",
    theme: "农村宅基地规范管理",
    meaning: "能维护土地秩序、保障农民合法权益",
    challenge: "政策历史情况复杂，群众对审批和整改容易有抵触",
    incident: "宅基地清理整治中，有群众认为自家老房不应被认定违规并阻挠测量",
    task: "宅基地政策入村宣讲和问题摸排",
    disagreement: "自然资源所要求严格整改，村干部担心激化矛盾",
    role: "乡镇工作人员",
    complaint: "群众认为政策变化太快，要求保留现状",
    sourceName: "华图乡镇公务员面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/gwy/mianshi/"
  },
  {
    idPrefix: "batch6-2025-township-drainage",
    year: 2025,
    province: "乡镇公务员",
    category: "民生工程",
    theme: "农村排水沟渠改造",
    meaning: "能改善人居环境、提升防涝能力",
    challenge: "施工扰民、占地协调和后期管护容易引发矛盾",
    incident: "沟渠改造施工占用村民门前道路，村民拦住施工队要求赔偿",
    task: "农村人居环境整治群众议事会",
    disagreement: "施工方希望按图纸推进，村民代表要求调整线路",
    role: "乡镇项目协调员",
    complaint: "村民认为施工前没有充分征求意见",
    sourceName: "华图乡镇公务员面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/gwy/mianshi/"
  },
  {
    idPrefix: "batch6-2025-szyf-support-education",
    year: 2025,
    province: "三支一扶",
    category: "支教",
    theme: "乡村学校课后服务",
    meaning: "能缓解家长接送压力、促进学生全面发展",
    challenge: "师资不足、课程单一和安全责任压力较大",
    incident: "课后服务中学生发生轻微磕碰，家长到学校质疑管理不到位",
    task: "乡村学校课后服务课程优化调研",
    disagreement: "教师希望减少活动项目，家长希望服务内容更丰富",
    role: "支教教师",
    complaint: "家长认为课后服务只是看管孩子，没有实际效果",
    sourceName: "中公三支一扶面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/szyf/mianshi/"
  },
  {
    idPrefix: "batch6-2025-szyf-health",
    year: 2025,
    province: "三支一扶",
    category: "支医",
    theme: "乡村慢病随访服务",
    meaning: "能提升基层健康管理水平、减少疾病风险",
    challenge: "部分老人不重视随访，村医工作量较大",
    incident: "入户随访时，老人拒绝测量血压并质疑个人信息被收集",
    task: "乡村慢病管理健康宣传活动",
    disagreement: "村医希望集中随访，你认为行动不便老人需要上门服务",
    role: "支医工作人员",
    complaint: "老人认为自己身体没问题，不需要你们反复上门",
    sourceName: "中公三支一扶面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/szyf/mianshi/"
  },
  {
    idPrefix: "batch6-2025-szyf-agriculture",
    year: 2025,
    province: "三支一扶",
    category: "支农",
    theme: "农技推广和新品种试种",
    meaning: "能提高农业生产效率、促进农民增收",
    challenge: "农户担心试种风险和收益不确定",
    incident: "新品种试种出现长势不均，农户质疑农技指导不靠谱",
    task: "农技推广示范田观摩培训",
    disagreement: "农技专家建议继续观察，农户希望立即换回传统品种",
    role: "支农工作人员",
    complaint: "农户说试种影响收入，要求政府负责",
    sourceName: "中公三支一扶面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/szyf/mianshi/"
  },
  {
    idPrefix: "batch6-2024-jilin-grid",
    year: 2024,
    province: "吉林",
    category: "基层治理专干",
    theme: "网格化治理和独居老人关爱",
    meaning: "能及时发现风险、提升基层服务精细化水平",
    challenge: "网格任务多、居民隐私边界和服务资源有限",
    incident: "网格员走访时发现独居老人家中停水停电，老人拒绝联系子女",
    task: "独居老人关爱服务台账更新",
    disagreement: "社区希望增加走访频次，网格员认为人手明显不足",
    role: "基层治理专干",
    complaint: "老人认为社区经常上门打扰，不愿开门配合",
    sourceName: "吉林基层治理专干面试真题公开栏目",
    sourceUrl: "https://jl.offcn.com/html/jilinsydw/mianshi/"
  },
  {
    idPrefix: "batch6-2024-guizhou-village-tour",
    year: 2024,
    province: "贵州",
    category: "省考",
    theme: "村寨旅游和民族文化保护",
    meaning: "能带动群众增收、展示民族文化魅力",
    challenge: "商业开发可能影响原真性，收益分配容易引发争议",
    incident: "节庆活动中游客过多影响村民生活，村民与商户发生争执",
    task: "村寨旅游服务质量和文化保护调研",
    disagreement: "商户希望增加摊位，村民代表担心破坏生活秩序",
    role: "乡镇文旅工作人员",
    complaint: "村民认为旅游收益没有公平分配",
    sourceName: "贵州中公省考面试真题公开栏目",
    sourceUrl: "https://gz.offcn.com/html/guizhougongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch6-2024-anhui-community",
    year: 2024,
    province: "安徽",
    category: "省考",
    theme: "社区嵌入式服务设施建设",
    meaning: "能把养老、托育、便民服务送到居民身边",
    challenge: "场地协调、运营成本和居民意见差异较大",
    incident: "社区服务点选址公示后，周边居民担心噪音和停车问题",
    task: "社区嵌入式服务设施意见征集会",
    disagreement: "居民代表支持建设，周边商户担心影响客流和停车",
    role: "街道工作人员",
    complaint: "居民认为选址没有充分征求意见，要求重新讨论",
    sourceName: "安徽中公省考面试真题公开栏目",
    sourceUrl: "https://ah.offcn.com/html/anhui_gwy/mianshi/"
  },
  {
    idPrefix: "batch6-2024-sichuan-township",
    year: 2024,
    province: "四川",
    category: "乡镇岗",
    theme: "山区道路安全和农村客运",
    meaning: "能保障群众出行安全、补齐交通服务短板",
    challenge: "线路运营成本高、群众安全意识和监管难度并存",
    incident: "农村客运班线调整后，学生家长集中反映上学不方便",
    task: "山区道路安全隐患排查和群众座谈",
    disagreement: "客运公司认为线路亏损，群众希望恢复原有班次",
    role: "乡镇交通协管人员",
    complaint: "家长认为调整线路没有考虑学生实际需求",
    sourceName: "四川中公乡镇公务员面试真题公开栏目",
    sourceUrl: "https://sc.offcn.com/html/sichuangongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch6-2024-liaoning-community-factory",
    year: 2024,
    province: "辽宁",
    category: "基层岗位",
    theme: "社区工厂吸纳就业",
    meaning: "能促进灵活就业、帮助困难群体增收",
    challenge: "订单不稳定、技能培训和劳动保障需要跟上",
    incident: "社区工厂因订单减少临时停工，工人到社区反映收入问题",
    task: "社区工厂用工需求和技能培训调研",
    disagreement: "企业希望灵活用工，社区希望保障工人基本权益",
    role: "社区就业服务人员",
    complaint: "工人认为社区引进项目却不能保证稳定收入",
    sourceName: "辽宁中公省考面试真题公开栏目",
    sourceUrl: "https://ln.offcn.com/html/liaoninggongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch6-2024-neimeng-grassland",
    year: 2024,
    province: "内蒙古",
    category: "行政执法",
    theme: "草原生态保护和禁牧休牧",
    meaning: "能修复草原生态、促进畜牧业可持续发展",
    challenge: "牧民短期收入受影响，执法和补偿衔接要求高",
    incident: "禁牧巡查中发现违规放牧，牧民情绪激动并拒绝登记",
    task: "草原生态保护政策宣传和入户走访",
    disagreement: "执法人员要求依法处罚，嘎查干部希望先做解释劝导",
    role: "基层执法人员",
    complaint: "牧民认为禁牧影响生计，补贴发放又不及时",
    sourceName: "内蒙古行政执法面试真题公开栏目",
    sourceUrl: "https://nm.offcn.com/html/neimenggwy/mianshi/"
  },
  {
    idPrefix: "batch6-2024-linxuan-policy",
    year: 2024,
    province: "遴选",
    category: "机关岗位",
    theme: "政策落实最后一公里",
    meaning: "能把上级部署转化为基层可感可及的服务成效",
    challenge: "部门协同不顺、基层理解不一、群众获得感不强",
    incident: "某项惠民政策上线后，群众反映申请入口多、材料重复提交",
    task: "惠民政策落实情况专项督导调研",
    disagreement: "业务部门认为流程已经优化，基层窗口认为操作仍然复杂",
    role: "机关综合岗位工作人员",
    complaint: "群众认为政策宣传很好听，但真正办理很麻烦",
    sourceName: "中公遴选面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/lx/mianshi/"
  },
  {
    idPrefix: "batch6-2023-linxuan-writing",
    year: 2023,
    province: "遴选",
    category: "机关岗位",
    theme: "调查研究和文风改进",
    meaning: "能提升机关工作质量，防止材料空转",
    challenge: "调研容易重材料轻现场、重汇报轻问题",
    incident: "你撰写的调研报告被领导指出问题不深、对策不实",
    task: "机关年轻干部调研能力提升培训",
    disagreement: "同事认为报告重在文字漂亮，你认为关键是问题和对策准确",
    role: "机关文字岗位工作人员",
    complaint: "基层干部反映调研组总是要材料，却很少解决问题",
    sourceName: "中公遴选面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/lx/mianshi/"
  },
  {
    idPrefix: "batch6-2023-xds-youth-volunteer",
    year: 2023,
    province: "选调生",
    category: "基层服务",
    theme: "青年志愿服务参与基层治理",
    meaning: "能补充基层服务力量、激发青年担当",
    challenge: "志愿服务持续性不足、专业性和组织保障需要提升",
    incident: "志愿服务活动中，部分志愿者临时退出，导致服务点人手不足",
    task: "青年志愿服务项目复盘和骨干培训",
    disagreement: "志愿者希望活动轻松灵活，社区希望严格排班保证服务",
    role: "基层团干部",
    complaint: "居民认为志愿者换来换去，服务不稳定",
    sourceName: "中公选调生面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/xds/mianshi/"
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
    zonghefenxi: `${scenario.category}工作中推进${scenario.theme}，有人认为${scenario.meaning}，也有人担心${scenario.challenge}。你怎么看？`,
    yingjibian: `${scenario.incident}。如果你在现场负责处理，会怎么做？`,
    zuzhiguanli: `领导让你组织一次${scenario.task}，你会如何安排？`,
    renjiguanxi: `${scenario.disagreement}。你会如何沟通协调？`,
    ziworenzhi: `结合${scenario.theme}，谈谈基层干部/选调生需要具备哪些能力，以及你如何提升。`,
    qingjingmoni: `你是${scenario.role}，${scenario.complaint}。请现场模拟你的沟通。`
  };

  return titles[type];
}

function answerFor(scenario: Scenario, type: QuestionType) {
  if (type === "zonghefenxi") {
    return `答题思路：肯定价值、分析难点、提出落地路径。\n完整答案：${scenario.theme}是基层治理和公共服务中的重要任务，意义在于把政策要求转化为群众可感可及的成效。但基层工作往往情况复杂，既有资源不足、协同不顺的问题，也有群众理解和参与度不高的情况。因此推进时要坚持实事求是：第一，深入调研，摸清真实需求和风险点；第二，分类施策，对不同群体采取不同服务方式；第三，强化公开透明，把政策依据、办理流程和反馈渠道讲清楚；第四，建立复盘机制，及时根据群众意见优化执行。这样才能让好政策真正落地。\n金句标注：基层治理不是把政策简单往下传，而是把群众需求真正接上来。`;
  }

  if (type === "yingjibian") {
    return `答题思路：先稳现场，再查事实，接着解决诉求，最后完善机制。\n完整答案：遇到${scenario.incident}，我会保持冷静，第一时间到现场表明身份，安抚情绪，维护秩序，避免矛盾升级。随后快速了解事件背景、涉及人员、核心诉求和现实风险，能现场解决的马上解决，不能立即解决的说明原因、明确时限。对需要其他部门或村社配合的事项，及时向领导报告并协调联动。处置过程中注意依法依规、留痕记录和信息公开。事后复盘问题根源，完善告知、协商和应急预案。\n金句标注：基层应急既要把火灭在当下，也要把根治在长远。`;
  }

  if (type === "zuzhiguanli") {
    return `答题思路：明确目标、摸清对象、组织实施、总结反馈。\n完整答案：组织${scenario.task}，我会先明确活动目的和重点对象，制定工作方案，细化人员分工、时间安排和保障措施。前期通过资料梳理、实地走访、电话沟通等方式掌握基础情况，准备政策解读材料和问题清单。实施中注重互动和实效，可采用座谈交流、案例分享、入户走访、问卷调查、现场答疑等形式。结束后及时汇总意见建议，形成问题台账、责任清单和整改时限，向领导汇报，并将办理结果反馈给相关群众和单位。\n金句标注：组织工作的关键，是让每一次活动都留下可推进的成果。`;
  }

  if (type === "renjiguanxi") {
    return `答题思路：换位理解、找准目标、协商方案、跟踪落实。\n完整答案：面对${scenario.disagreement}，我会坚持对事不对人，把分歧放到共同目标中解决。首先分别听取各方意见，理解其顾虑和依据，避免急于下结论。其次围绕${scenario.theme}的工作目标，说明政策要求和群众需求，寻找共同利益点。再次提出可执行的折中方案，比如分阶段推进、先试点后完善、明确责任边界和反馈节点。最后对需要上级统筹的问题及时请示领导，并持续跟进结果。通过真诚沟通和机制保障，把分歧转化为改进工作的契机。\n金句标注：真正的协调，是让各方在共同目标中找到自己的位置。`;
  }

  if (type === "ziworenzhi") {
    return `答题思路：从基层特点出发，谈责任、能力、作风和成长。\n完整答案：${scenario.theme}说明基层干部既要懂政策，也要懂群众，更要会解决具体问题。我认为需要四种能力：一是群众工作能力，能听懂群众话、接住群众情绪；二是调查研究能力，不能只看材料，要到现场找答案；三是执行落实能力，把任务拆成节点、责任和结果；四是学习复盘能力，在复杂问题中不断提升。对我来说，我会坚持眼睛向下、脚步向下，多向群众和同事学习，在急难任务中锤炼作风，把个人成长融入服务基层的实际成效中。\n金句标注：基层不是简单的工作地点，而是检验初心和本领的现场。`;
  }

  return `答题思路：先共情，再解释，再给方案，最后承诺反馈。\n完整答案：您好，我理解您为什么会有这样的感受，也感谢您把问题直接告诉我们。关于${scenario.theme}，我们推进这项工作是为了把服务做得更精准、更公平，但在执行过程中确实可能存在解释不到位、沟通不充分的问题。您反映的情况我会认真记录，先帮您核实具体事实；如果现场能处理，我马上协调；如果需要进一步研究或转办，我会明确时间、责任人和反馈方式。请您先消消气，我们一起把问题一步步解决。\n金句标注：群众工作不是把群众说服，而是把问题办服。`;
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
    content: `${title}（根据公开选调生/乡镇岗/三支一扶/基层治理/遴选面试回忆题主题整理，题干做了轻度改写。）`,
    referenceAnswer: answerFor(scenario, type),
    sourceName: scenario.sourceName,
    sourceUrl: scenario.sourceUrl
  };
}

export const publicQuestionsBatch6: Question[] = scenarios.flatMap((scenario) =>
  questionTypes.map((type, index) => makeQuestion(scenario, type, index))
);
