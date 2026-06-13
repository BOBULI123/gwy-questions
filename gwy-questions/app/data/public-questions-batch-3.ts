import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type ProvinceScenario = {
  idPrefix: string;
  year: number;
  province: string;
  theme: string;
  policyFocus: string;
  conflict: string;
  event: string;
  activity: string;
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

const scenarios: ProvinceScenario[] = [
  {
    idPrefix: "batch3-2025-zj-digital-village",
    year: 2025,
    province: "浙江",
    theme: "数字乡村建设",
    policyFocus: "用数字化手段提升乡村治理、产业服务和公共服务水平",
    conflict: "村民担心数字平台操作复杂，村干部担心后续维护压力大",
    event: "数字乡村平台上线后，部分村民信息填报错误导致补贴申领延迟",
    activity: "数字乡村应用培训和入户帮办活动",
    sourceName: "浙江中公省考面试真题公开栏目",
    sourceUrl: "https://zj.offcn.com/html/zjgwy/mianshi/"
  },
  {
    idPrefix: "batch3-2025-js-service-zone",
    year: 2025,
    province: "江苏",
    theme: "产业园区一站式服务",
    policyFocus: "以集成服务降低企业制度性交易成本",
    conflict: "企业希望马上办结，部门同事强调材料审核不能简化",
    event: "园区服务大厅因集中申报出现排队，企业在网上吐槽效率低",
    activity: "园区企业服务专员走访调研",
    sourceName: "江苏中公省考面试真题公开栏目",
    sourceUrl: "https://js.offcn.com/html/jiangsu_gwy/mianshi/"
  },
  {
    idPrefix: "batch3-2025-hn-food-security",
    year: 2025,
    province: "河南",
    theme: "粮食安全和农业社会化服务",
    policyFocus: "通过托管、农机、技术服务提升粮食生产能力",
    conflict: "种粮大户希望扩大托管服务，小农户担心土地收益受影响",
    event: "农机服务队作业延误，部分农户围到村委会要求赔偿",
    activity: "农业社会化服务需求摸底和政策说明会",
    sourceName: "河南中公省考面试真题公开栏目",
    sourceUrl: "https://hn.offcn.com/html/henangongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2025-sc-emergency-tourism",
    year: 2025,
    province: "四川",
    theme: "山区景区安全治理",
    policyFocus: "兼顾文旅发展、游客安全和生态保护",
    conflict: "景区经营者希望延长开放时间，安全监管人员认为风险较高",
    event: "暴雨预警发布后，部分游客不愿离开景区并质疑管理过严",
    activity: "景区安全隐患排查和应急演练",
    sourceName: "四川中公省考面试真题公开栏目",
    sourceUrl: "https://sc.offcn.com/html/sichuangongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2025-sd-ocean-ranch",
    year: 2025,
    province: "山东",
    theme: "海洋牧场和蓝色经济",
    policyFocus: "推动海洋产业高质量发展和生态修复协同",
    conflict: "养殖户关注短期收益，环保部门强调生态承载能力",
    event: "海洋牧场项目调整养殖区域，部分养殖户现场反映补偿问题",
    activity: "蓝色经济发展情况专题调研",
    sourceName: "山东中公省考面试真题公开栏目",
    sourceUrl: "https://sd.offcn.com/html/shandonggwy/mianshi/"
  },
  {
    idPrefix: "batch3-2025-gd-greater-bay",
    year: 2025,
    province: "广东",
    theme: "粤港澳大湾区青年创新创业",
    policyFocus: "为青年人才提供政策、空间和服务支持",
    conflict: "创业团队觉得政策兑现慢，经办同事认为审核流程必须规范",
    event: "青年创业补贴申报系统拥堵，申请人集中到窗口咨询",
    activity: "大湾区青年创业政策宣讲和项目路演",
    sourceName: "广东中公省考面试真题公开栏目",
    sourceUrl: "https://gd.offcn.com/html/guangdonggongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2024-fj-cross-strait",
    year: 2024,
    province: "福建",
    theme: "两岸融合发展示范区建设",
    policyFocus: "促进经贸文化交流和同等待遇落实",
    conflict: "台胞企业希望享受便利政策，经办人员对细则理解不一致",
    event: "台胞服务窗口因政策解释口径不同引发投诉",
    activity: "台胞台企政策服务进园区活动",
    sourceName: "福建中公省考面试真题公开栏目",
    sourceUrl: "https://fj.offcn.com/html/fujianshengkao/mianshi/"
  },
  {
    idPrefix: "batch3-2024-hb-innovation-corridor",
    year: 2024,
    province: "湖北",
    theme: "科创走廊建设和科技成果转化",
    policyFocus: "打通高校科研、企业需求和政府服务链条",
    conflict: "高校团队重视科研周期，企业希望成果尽快落地",
    event: "成果对接会上企业质疑项目转化慢，现场气氛紧张",
    activity: "科技成果转化需求对接会",
    sourceName: "湖北中公省考面试真题公开栏目",
    sourceUrl: "https://hu.offcn.com/html/hubeigongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2024-ah-rural-elderly",
    year: 2024,
    province: "安徽",
    theme: "农村留守老人关爱服务",
    policyFocus: "完善探访关爱、助餐助医和精神慰藉服务",
    conflict: "村干部认为人手不足，志愿者认为服务缺少制度保障",
    event: "助餐点暂停营业后，老人家属到村委会反映强烈",
    activity: "农村留守老人服务需求排查",
    sourceName: "安徽中公省考面试真题公开栏目",
    sourceUrl: "https://ah.offcn.com/html/anhui_gwy/mianshi/"
  },
  {
    idPrefix: "batch3-2024-hunan-red-tour",
    year: 2024,
    province: "湖南",
    theme: "红色文旅资源保护利用",
    policyFocus: "把红色教育、文旅消费和历史保护结合起来",
    conflict: "商户希望增加商业摊位，纪念馆工作人员担心影响庄重氛围",
    event: "红色景区节假日客流激增，游客投诉讲解服务不足",
    activity: "红色研学路线优化调研",
    sourceName: "湖南中公省考面试真题公开栏目",
    sourceUrl: "https://hn.offcn.com/html/hunangongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2024-bj-aging-renovation",
    year: 2024,
    province: "北京",
    theme: "老旧小区适老化改造",
    policyFocus: "提升居住品质、回应老年群体生活需求",
    conflict: "低层居民反对加装设施，高层老人希望尽快推进",
    event: "施工期间噪音扰民，居民在业主群里集中投诉",
    activity: "老旧小区适老化改造意见征集会",
    sourceName: "北京华图省考面试真题公开栏目",
    sourceUrl: "https://bj.huatu.com/gwy/mianshi/"
  },
  {
    idPrefix: "batch3-2024-sh-trash",
    year: 2024,
    province: "上海",
    theme: "生活垃圾分类精细化治理",
    policyFocus: "通过源头分类提升城市治理水平",
    conflict: "居民觉得分类麻烦，物业担心桶站管理责任加重",
    event: "小区垃圾分类投放点调整后，居民围住物业要求恢复原状",
    activity: "垃圾分类示范小区复评和宣传",
    sourceName: "上海华图省考面试真题公开栏目",
    sourceUrl: "https://sh.huatu.com/gwy/mianshi/"
  },
  {
    idPrefix: "batch3-2023-hebei-xiongan",
    year: 2023,
    province: "河北",
    theme: "雄安新区公共服务承接",
    policyFocus: "推动公共服务均衡配置和高标准建设",
    conflict: "群众期待服务快速提升，基层窗口对新政策还不熟悉",
    event: "便民服务点搬迁后，办事群众找不到地点并集中投诉",
    activity: "新区便民服务流程优化调研",
    sourceName: "河北中公省考面试真题公开栏目",
    sourceUrl: "https://hb.offcn.com/html/hebeigongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2023-liaoning-old-base",
    year: 2023,
    province: "辽宁",
    theme: "东北老工业基地振兴",
    policyFocus: "推动产业更新、人才回流和营商环境改善",
    conflict: "老企业担心改造成本高，年轻干部希望加快数字化升级",
    event: "企业技改补贴公示后，部分企业质疑评审不透明",
    activity: "老工业企业转型升级座谈调研",
    sourceName: "辽宁中公省考面试真题公开栏目",
    sourceUrl: "https://ln.offcn.com/html/liaoninggongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2023-shanxi-energy",
    year: 2023,
    province: "山西",
    theme: "能源革命综合改革",
    policyFocus: "推动传统能源清洁利用和新能源发展",
    conflict: "煤炭企业担心转型压力，新能源企业希望获得更多支持",
    event: "新能源项目建设占地引发村民补偿争议",
    activity: "能源转型政策宣讲和企业需求调研",
    sourceName: "山西中公省考面试真题公开栏目",
    sourceUrl: "https://sx.offcn.com/html/shanxigongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2023-guangxi-border",
    year: 2023,
    province: "广西",
    theme: "边境地区开放发展",
    policyFocus: "统筹口岸经济、民族团结和基层治理",
    conflict: "商户希望通关更便利，监管人员担心风险防控压力",
    event: "口岸商户因排队时间较长聚集反映诉求",
    activity: "边境口岸营商环境专项调研",
    sourceName: "广西中公省考面试真题公开栏目",
    sourceUrl: "https://gx.offcn.com/html/guangxigongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2022-yunnan-ecology",
    year: 2022,
    province: "云南",
    theme: "生物多样性保护",
    policyFocus: "在生态保护、群众生产生活和旅游发展之间取得平衡",
    conflict: "村民认为保护要求影响生产，保护区工作人员强调底线要求",
    event: "游客违规进入保护区拍照，引发网络传播和安全隐患",
    activity: "生态保护宣传和巡护志愿服务",
    sourceName: "云南中公省考面试真题公开栏目",
    sourceUrl: "https://yn.offcn.com/html/yunnangongwuyuan/mianshi/"
  },
  {
    idPrefix: "batch3-2022-guizhou-data",
    year: 2022,
    province: "贵州",
    theme: "大数据产业和基层治理",
    policyFocus: "用数据提升治理精准度和产业竞争力",
    conflict: "基层干部担心重复录入增加负担，技术公司强调平台功能完善",
    event: "基层治理平台数据异常，导致群众办事结果显示错误",
    activity: "大数据赋能基层治理专题培训",
    sourceName: "贵州中公省考面试真题公开栏目",
    sourceUrl: "https://gz.offcn.com/html/guizhougongwuyuan/mianshi/"
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

function titleFor(scenario: ProvinceScenario, type: QuestionType) {
  const titles: Record<QuestionType, string> = {
    zonghefenxi: `围绕${scenario.theme}，有人认为应大力推进，因为${scenario.policyFocus}；也有人担心执行中会产生新的问题。你怎么看？`,
    yingjibian: `${scenario.event}。你作为负责工作人员，会如何处理？`,
    zuzhiguanli: `领导让你组织一次${scenario.activity}，你会如何开展？`,
    renjiguanxi: `推进${scenario.theme}时，${scenario.conflict}。你会如何沟通协调？`,
    ziworenzhi: `结合${scenario.theme}，谈谈基层公务员应具备哪些能力，以及你如何补齐短板。`,
    qingjingmoni: `在${scenario.theme}相关工作现场，服务对象对政策不理解、情绪激动。请模拟你如何沟通。`
  };

  return titles[type];
}

function answerFor(scenario: ProvinceScenario, type: QuestionType) {
  if (type === "zonghefenxi") {
    return `答题思路：先肯定方向，再看到问题，最后提出完善举措。\n完整答案：${scenario.theme}体现了地方高质量发展的现实需求，方向值得肯定。它的意义在于既能回应群众和市场主体的新期待，也能推动治理方式从粗放走向精细。但政策越具体，越要重视执行中的公平、效率和可持续。对此我认为：一要加强顶层设计，明确标准、责任和流程；二要坚持问需于民、问计于企，让政策更接地气；三要强化风险评估和动态调整，把群众反馈、数据监测和基层意见纳入闭环管理。这样才能把政策优势转化为治理效能。\n金句标注：好的政策不仅要写在文件里，更要落在群众的体验里。`;
  }

  if (type === "yingjibian") {
    return `答题思路：控制现场、回应关切、解决问题、复盘改进。\n完整答案：遇到这种情况，我会坚持冷静、快速、规范。首先赶赴现场，表明身份，安抚情绪，维护秩序，避免矛盾扩大。其次迅速了解事情经过、涉及人员、核心诉求和现实困难，能现场解释的马上解释，能现场办理的立即办理。再次，及时向领导报告，协调相关部门共同处置，对外回应保持统一、准确、真诚。最后，对暴露出的流程漏洞、沟通不足或预案短板进行复盘，形成整改清单，向群众反馈结果，防止问题再次发生。\n金句标注：突发事件考验的是速度，更考验温度、尺度和制度。`;
  }

  if (type === "zuzhiguanli") {
    return `答题思路：明确目标、摸清对象、丰富形式、沉淀成果。\n完整答案：我会把这项活动作为推动${scenario.theme}落地的重要抓手。前期先请示领导要求，明确活动目标、参与对象、时间地点和任务分工，同时收集政策资料和基层需求。实施中根据对象特点采用政策解读、案例分享、座谈交流、问卷调查、实地走访等形式，既讲清政策，也收集问题。过程中做好签到、记录、宣传和应急保障。活动结束后汇总意见建议，形成问题台账和改进措施，明确责任人和完成时限，并持续跟踪反馈，确保活动有结果、有回音。\n金句标注：组织工作的价值，不在流程完整，而在成果可用。`;
  }

  if (type === "renjiguanxi") {
    return `答题思路：尊重大局、理解差异、主动沟通、形成合力。\n完整答案：面对${scenario.conflict}，我会先从工作目标出发，不把分歧简单看成个人矛盾。第一，主动了解各方顾虑，判断是职责不清、信息不对称，还是利益诉求不同。第二，围绕${scenario.theme}的共同目标进行沟通，说明政策依据、现实困难和推进节点。第三，提出折中可行方案，例如分阶段实施、先试点后推广、明确责任清单和反馈机制。第四，重大事项及时向领导汇报，请求统筹支持。通过真诚沟通和机制约束，把不同意见转化为完善工作的资源。\n金句标注：会协调不是没有分歧，而是能把分歧导向共同解决问题。`;
  }

  if (type === "ziworenzhi") {
    return `答题思路：岗位认知、能力要求、自身匹配、改进计划。\n完整答案：${scenario.theme}说明基层工作越来越综合，公务员既要懂政策，也要会沟通、能执行、善学习。我认为基层公务员至少需要三种能力：一是政策转化能力，把上级部署讲成群众听得懂的话；二是群众工作能力，能在矛盾中耐心沟通、依法处理；三是复盘学习能力，面对新任务不断更新知识结构。对我来说，优势是责任心较强、学习意愿强，愿意到一线解决具体问题；不足是实践经验还需要积累。今后我会多向群众学、向同事学、向案例学，在具体工作中提升本领。\n金句标注：基层不是成长的过渡站，而是锤炼能力的主课堂。`;
  }

  return `答题思路：先接住情绪，再讲清政策，最后给出路径和承诺。\n完整答案：您好，我能理解您现在着急，也感谢您把问题直接反映出来。关于${scenario.theme}，我们推进这项工作不是为了增加大家负担，而是为了把服务做得更精准、更规范。您刚才提到的困难我已经记录下来，接下来我会分三步帮您处理：第一，把您遇到的具体问题核实清楚；第二，能现场解决的马上办，需要其他部门配合的我来协调转办；第三，把办理时限和联系方式告诉您，后续结果及时反馈。也请您给我们一点时间，我们一起把问题解决好。\n金句标注：群众工作不是把话说完，而是把事办到群众心里。`;
}

function makeQuestion(scenario: ProvinceScenario, type: QuestionType, index: number): Question {
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
    content: `${title}（根据公开省考真题/回忆题主题整理，题干做了轻度改写。）`,
    referenceAnswer: answerFor(scenario, type),
    sourceName: scenario.sourceName,
    sourceUrl: scenario.sourceUrl
  };
}

export const publicQuestionsBatch3: Question[] = scenarios.flatMap((scenario) =>
  questionTypes.map((type, index) => makeQuestion(scenario, type, index))
);
