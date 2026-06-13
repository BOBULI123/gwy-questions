import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type Scenario = {
  idPrefix: string;
  year: number;
  province: string;
  theme: string;
  positive: string;
  risk: string;
  emergency: string;
  activity: string;
  relation: string;
  simulationRole: string;
  simulationConflict: string;
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
    idPrefix: "batch2-2025-gd-digital-gov",
    year: 2025,
    province: "广东",
    theme: "数字政府建设和政务数据共享",
    positive: "能提升审批效率、减少群众跑腿",
    risk: "可能带来数据安全和老年群体使用门槛",
    emergency: "政务数据共享平台升级后，窗口出现排队积压，群众质疑系统不稳定",
    activity: "数字政府便民服务体验官活动",
    relation: "业务科室担心数据开放后责任增加，不愿配合共享",
    simulationRole: "政务大厅工作人员",
    simulationConflict: "群众因线上认证失败多次往返，情绪比较激动",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-js-silver",
    year: 2025,
    province: "江苏",
    theme: "社区养老服务和银发经济",
    positive: "能回应老龄化需求、拓展公共服务供给",
    risk: "可能出现服务质量参差不齐和监管不到位",
    emergency: "养老服务站试运行首日，有老人摔倒，家属要求立即赔偿并在现场拍摄",
    activity: "社区养老服务需求摸底和政策宣传活动",
    relation: "社区、物业和养老机构对服务边界理解不一致，互相推诿",
    simulationRole: "社区工作人员",
    simulationConflict: "老人认为智能预约养老服务太麻烦，不愿继续使用",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-zj-rural-live",
    year: 2025,
    province: "浙江",
    theme: "直播助农和乡村共富",
    positive: "能拓宽农产品销路、带动农民增收",
    risk: "可能存在流量依赖、质量把控和售后压力",
    emergency: "直播助农中出现发货延迟，网友集中投诉并质疑虚假宣传",
    activity: "乡村直播电商人才培训班",
    relation: "年轻干部想做直播推广，村干部担心影响传统销售渠道",
    simulationRole: "驻村干部",
    simulationConflict: "农户因订单退货增多情绪低落，认为直播不靠谱",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-sd-green",
    year: 2025,
    province: "山东",
    theme: "传统产业绿色低碳转型",
    positive: "能推动高质量发展、提升企业长期竞争力",
    risk: "短期可能增加企业成本和就业压力",
    emergency: "企业环保整改期间周边群众聚集反映异味，媒体到场采访",
    activity: "绿色低碳转型政策宣讲和企业走访调研",
    relation: "同事认为环保检查要从严，你认为也要做好政策服务，双方有分歧",
    simulationRole: "生态环境部门工作人员",
    simulationConflict: "企业负责人认为整改要求过高、影响生产经营",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-bj-jiesu",
    year: 2025,
    province: "北京",
    theme: "接诉即办向未诉先办转变",
    positive: "能把矛盾化解在前端、提升城市治理精细化水平",
    risk: "可能增加基层预判压力和考核负担",
    emergency: "12345 热线短时间接到同一小区大量投诉，居民集中到街道反映问题",
    activity: "未诉先办典型案例复盘交流会",
    relation: "街道科室认为问题应由社区处理，社区认为需要街道统筹支持",
    simulationRole: "街道工作人员",
    simulationConflict: "居民认为问题反复投诉仍未解决，对办理结果不满意",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-sh-low-altitude",
    year: 2025,
    province: "上海",
    theme: "低空经济试点和城市精细化治理",
    positive: "能培育新产业、拓展物流和应急救援场景",
    risk: "可能带来安全、噪音和空域管理问题",
    emergency: "无人机配送试点中设备迫降，引发围观和网络质疑",
    activity: "低空经济应用场景和安全监管需求调研",
    relation: "企业希望加快试点，监管部门同事担心风险过大",
    simulationRole: "产业园区工作人员",
    simulationConflict: "居民担心无人机频繁飞行影响休息，要求暂停试点",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-hn-farmland",
    year: 2025,
    province: "河南",
    theme: "高标准农田建设",
    positive: "能增强粮食安全保障能力、改善农业基础设施",
    risk: "施工期可能影响农民耕作和补偿预期",
    emergency: "施工队与村民因临时占地补偿发生争执，项目被迫停工",
    activity: "高标准农田政策入村宣传和意见征集",
    relation: "村干部希望快速推进，部分村民担心收益不明确，不愿配合",
    simulationRole: "乡镇工作人员",
    simulationConflict: "村民认为施工影响春耕，情绪激动要求给说法",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2025-sc-culture-tour",
    year: 2025,
    province: "四川",
    theme: "文旅融合和景区服务提升",
    positive: "能扩大消费、传播地方文化",
    risk: "可能出现过度商业化、服务承载不足",
    emergency: "节假日景区客流超预期，停车拥堵、游客投诉集中出现",
    activity: "文旅服务质量提升专项检查",
    relation: "景区运营方强调流量，监管同事强调秩序，沟通不顺",
    simulationRole: "景区值班负责人",
    simulationConflict: "游客因排队时间过长要求退票并现场拍摄",
    sourceName: "华图教育省考面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/mianshi/"
  },
  {
    idPrefix: "batch2-2024-fj-sea",
    year: 2024,
    province: "福建",
    theme: "海洋经济和生态保护",
    positive: "能拓展发展空间、带动沿海产业升级",
    risk: "可能对海洋生态和渔民利益产生影响",
    emergency: "海岸整治项目施工中，渔民担心影响捕捞收入并聚集反映",
    activity: "海洋生态保护政策宣讲和渔民座谈",
    relation: "项目单位和渔民代表对补偿方案意见分歧较大",
    simulationRole: "基层工作人员",
    simulationConflict: "渔民代表认为政策解释不清，拒绝签字配合",
    sourceName: "中公网校历年面试真题公开汇总",
    sourceUrl: "https://ahbxgwy.com/item/24959.html?displaymode=pc"
  },
  {
    idPrefix: "batch2-2024-hb-river",
    year: 2024,
    province: "湖北",
    theme: "流域综合治理",
    positive: "能统筹生态保护、防洪安全和产业发展",
    risk: "可能涉及多部门协同难和群众短期利益调整",
    emergency: "河道整治施工影响周边商户经营，商户集体到现场阻工",
    activity: "河湖保护志愿服务和普法宣传",
    relation: "水利、城管和属地社区对整治责任分工存在争议",
    simulationRole: "河湖长制工作人员",
    simulationConflict: "商户认为整治没有提前告知，影响正常营业",
    sourceName: "中公网校历年面试真题公开汇总",
    sourceUrl: "https://ahbxgwy.com/item/24959.html?displaymode=pc"
  },
  {
    idPrefix: "batch2-2024-ah-new-quality",
    year: 2024,
    province: "安徽",
    theme: "新质生产力和传统产业升级",
    positive: "能以科技创新带动产业创新",
    risk: "可能被误解为只发展高科技、忽视传统产业",
    emergency: "企业技改项目推进中，员工担心岗位被智能设备替代并集中反映",
    activity: "新质生产力专题学习和企业调研",
    relation: "业务骨干倾向引进新系统，老员工担心学习成本高",
    simulationRole: "园区服务专员",
    simulationConflict: "企业员工担心技术改造影响饭碗，希望政府给出解释",
    sourceName: "中公网校历年面试真题公开汇总",
    sourceUrl: "https://ahbxgwy.com/item/24959.html?displaymode=pc"
  },
  {
    idPrefix: "batch2-2024-hunan-burden",
    year: 2024,
    province: "湖南",
    theme: "整治形式主义为基层减负",
    positive: "能让基层干部把更多精力用到服务群众上",
    risk: "可能被片面理解为降低标准、减少监督",
    emergency: "上级临时要求报送多项留痕材料，基层干部在工作群表达不满",
    activity: "基层减负问题排查和整改评估",
    relation: "上级部门强调材料完整，基层同事认为重复填报负担重",
    simulationRole: "县级机关工作人员",
    simulationConflict: "基层干部认为检查材料过多，与减负要求不一致",
    sourceName: "中公网校历年面试真题公开汇总",
    sourceUrl: "https://ahbxgwy.com/item/24959.html?displaymode=pc"
  },
  {
    idPrefix: "batch2-2023-guokao-tax",
    year: 2023,
    province: "国考",
    theme: "智慧税务和精准服务",
    positive: "能提高征管效率、提升纳税人体验",
    risk: "可能出现算法误判和政策解释不到位",
    emergency: "办税大厅因系统故障导致退税业务积压，企业负责人情绪激动",
    activity: "小微企业税费优惠政策辅导会",
    relation: "同事解释政策口径前后不一致，导致企业产生误解",
    simulationRole: "办税服务厅工作人员",
    simulationConflict: "纳税人认为自己符合优惠条件却没有享受到政策",
    sourceName: "爱真题税务局面试真题公开资料",
    sourceUrl: "https://www.aipta.com/mianshi/zt/shuiwuju/"
  },
  {
    idPrefix: "batch2-2023-guokao-customs",
    year: 2023,
    province: "国考",
    theme: "智慧海关和口岸营商环境",
    positive: "能提升通关效率、服务外贸稳定发展",
    risk: "可能出现监管空白和企业合规意识不足",
    emergency: "口岸查验排队时间较长，企业质疑监管流程影响货物交付",
    activity: "进出口企业合规经营培训",
    relation: "企业希望简化查验，同事认为必须从严把关，双方沟通紧张",
    simulationRole: "海关现场工作人员",
    simulationConflict: "企业负责人认为查验拖慢交货，要求立即放行",
    sourceName: "爱真题海关面试真题公开资料",
    sourceUrl: "https://www.aipta.com/mianshi/zt/haiguan/"
  },
  {
    idPrefix: "batch2-2023-guokao-youth",
    year: 2023,
    province: "国考",
    theme: "青年干部到基层一线锻炼",
    positive: "能增长实践本领、密切联系群众",
    risk: "可能出现短期适应困难和心理落差",
    emergency: "青年干部驻村后因工作方式不熟悉，与村民沟通出现误会",
    activity: "青年干部基层实践经验分享会",
    relation: "老同志认为年轻干部想法多但经验少，配合不积极",
    simulationRole: "驻村青年干部",
    simulationConflict: "村民认为你不了解实际情况，对你的方案不认可",
    sourceName: "爱真题国考面试历年真题栏目",
    sourceUrl: "https://www.aipta.com/zt/gk/"
  },
  {
    idPrefix: "batch2-2022-guokao-community",
    year: 2022,
    province: "国考",
    theme: "社区治理和网格化服务",
    positive: "能把服务触角延伸到居民身边",
    risk: "可能出现网格员负担重和职责泛化",
    emergency: "网格群内居民因物业维修问题持续争吵，并约定到社区集中反映",
    activity: "社区网格服务满意度调查",
    relation: "物业、业委会和社区对维修责任互相推诿",
    simulationRole: "社区网格员",
    simulationConflict: "居民认为社区只转发通知、不解决实际问题",
    sourceName: "爱真题国考面试历年真题栏目",
    sourceUrl: "https://www.aipta.com/zt/gk/"
  }
];

function buildPrompt(scenario: Scenario, type: QuestionType) {
  const prompts: Record<QuestionType, string> = {
    zonghefenxi: `围绕${scenario.theme}，有人认为${scenario.positive}，也有人担心${scenario.risk}。对此你怎么看？`,
    yingjibian: `${scenario.emergency}。你作为现场负责人，会如何处理？`,
    zuzhiguanli: `领导让你组织一次${scenario.activity}，你会如何策划和实施？`,
    renjiguanxi: `推进${scenario.theme}过程中，${scenario.relation}。你会如何协调？`,
    ziworenzhi: `请结合${scenario.theme}和报考岗位，谈谈公务员应具备哪些能力，以及你如何提升自己。`,
    qingjingmoni: `你是${scenario.simulationRole}，${scenario.simulationConflict}。请现场模拟你的沟通。`
  };

  return prompts[type];
}

function makeReferenceAnswer(type: QuestionType, theme: string) {
  if (type === "zonghefenxi") {
    return `答题思路：先亮明辩证态度，再分别分析意义、风险，最后提出完善路径。\n完整答案：我认为${theme}既是发展命题，也是治理命题，不能简单肯定或否定。一方面，它有助于提高公共服务效率、激发社会活力、回应群众新期待；另一方面，任何改革在落地中都可能出现标准不清、协同不够、群众适应慢等问题。因此要坚持稳中求进：第一，完善制度规则，把责任边界、办理流程和监督标准讲清楚；第二，加强分类服务，对企业、群众、基层干部提供差异化指导；第三，建立反馈闭环，用数据监测、群众评价和问题复盘不断优化执行。这样才能把好事办好，把实事办实。\n金句标注：改革既要有破题的力度，也要有落地的温度。`;
  }

  if (type === "yingjibian") {
    return `答题思路：稳情绪、控现场、查原因、分层处置、复盘提升。\n完整答案：面对突发情况，我会坚持先稳后办、边处置边沟通。第一，第一时间到现场表明身份，安抚群众情绪，划定安全区域，避免围观扩大和矛盾升级。第二，快速核实问题原因、涉及人数、影响范围和核心诉求，能马上解决的现场办理，暂时不能解决的明确时限、责任人和反馈方式。第三，及时向领导报告，联动业务、宣传、安保等力量，统一口径回应网络关切。第四，事后复盘流程短板，完善预案和服务提示，防止同类问题反复发生。\n金句标注：应急处置的关键，是让群众看到态度、听到解释、等到结果。`;
  }

  if (type === "zuzhiguanli") {
    return `答题思路：目标明确、对象精准、过程有序、成果转化。\n完整答案：组织这项工作，我会围绕${theme}突出实效。前期先向领导请示目标要求，梳理政策资料，明确对象、时间、场地、分工和风险预案。实施中根据对象特点设计形式，可以采取座谈访谈、问卷调查、案例讲解、现场答疑、实地观摩等方式，既收集真实问题，也提供具体帮助。过程中注意宣传引导和秩序保障，确保参与人员有收获。结束后形成问题清单、建议清单和责任清单，及时向领导汇报，并跟踪办理反馈，让活动成果真正转化为改进工作的抓手。\n金句标注：活动不是目的，解决问题、推动工作、服务群众才是落点。`;
  }

  if (type === "renjiguanxi") {
    return `答题思路：先从大局出发，再换位理解，最后用沟通和机制推动协作。\n完整答案：遇到围绕${theme}产生的协作分歧，我会先稳住心态，不能把工作矛盾个人化。第一，主动复盘任务目标、分工边界和沟通方式，看是否存在解释不到位、节点不清楚的问题。第二，分别听取相关方意见，理解对方顾虑，找到共同目标。第三，围绕事实和任务提出可执行方案，把职责、时限、成果标准细化，必要时形成书面纪要。第四，对需要领导统筹的事项及时汇报，但不简单上交矛盾，而是带着方案请示。最终用工作成效增进互信。\n金句标注：同事关系的最好黏合剂，是共同把事情办成。`;
  }

  if (type === "ziworenzhi") {
    return `答题思路：谈岗位理解、能力匹配、短板提升和行动计划。\n完整答案：面对${theme}这样的工作场景，我认为公务员首先要有政策理解能力，能把上级要求转化为基层听得懂、用得上的服务；其次要有群众工作能力，能站在群众角度沟通解释；再次要有学习创新能力，适应新任务、新技术和新场景。结合我自身，我的优势是执行力较强、愿意学习、能在团队中承担具体任务。不足是基层经验还需要积累。今后我会坚持在干中学、在问中学、在复盘中学，多向领导同事请教，多到一线了解实际，把个人成长落实到服务群众的每一件小事中。\n金句标注：岗位选择不是口号，最终要落到责任、能力和长期坚持上。`;
  }

  return `答题思路：先共情，再解释，再给方案，最后承诺跟进。\n完整答案：您好，我理解您现在很着急，也能感受到您希望问题尽快解决的心情。关于${theme}相关问题，我先向您说明：我们不是不重视，更不是推脱，而是需要把事实核准、政策讲清、流程走实。接下来我会帮您把问题逐项梳理，能现场处理的马上处理；需要其他部门配合的，我会记录清楚并明确转办时间；需要补充材料或等待结果的，我也会把原因和时限告诉您。请您先坐下来，我们一起把问题往前推进。\n金句标注：做群众工作，先把情绪接住，再把事情办实。`;
}

function questionForScenario(scenario: Scenario, type: QuestionType, index: number): Question {
  const title = buildPrompt(scenario, type);

  return {
    id: `${scenario.idPrefix}-${String(index + 1).padStart(2, "0")}`,
    year: scenario.year,
    province: scenario.province,
    type,
    typeName: typeNameByType[type],
    difficulty: type === "yingjibian" ? "hard" : type === "ziworenzhi" ? "easy" : "medium",
    title,
    content: `${title}（根据公开真题/回忆题常见主题整理，题干做了轻度改写。）`,
    referenceAnswer: makeReferenceAnswer(type, scenario.theme),
    sourceName: scenario.sourceName,
    sourceUrl: scenario.sourceUrl
  };
}

export const publicQuestionsBatch2: Question[] = scenarios.flatMap((scenario) =>
  ([
    "zonghefenxi",
    "yingjibian",
    "zuzhiguanli",
    "renjiguanxi",
    "ziworenzhi",
    "qingjingmoni"
  ] as const).map((type, index) => questionForScenario(scenario, type, index))
);
