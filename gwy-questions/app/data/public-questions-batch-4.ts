import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type PublicScenario = {
  idPrefix: string;
  year: number;
  province: string;
  theme: string;
  sector: string;
  value: string;
  concern: string;
  emergency: string;
  activity: string;
  relation: string;
  sceneRole: string;
  sceneConflict: string;
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

const scenarios: PublicScenario[] = [
  {
    idPrefix: "batch4-2025-sydw-medical-family-doctor",
    year: 2025,
    province: "事业单位",
    sector: "卫健系统",
    theme: "家庭医生签约服务",
    value: "能提升基层医疗连续性和老年慢病管理水平",
    concern: "群众担心签约后服务不到位、医生工作量过大",
    emergency: "社区卫生服务中心开展签约服务时，居民质疑收费和服务内容不透明",
    activity: "家庭医生签约服务入户宣传和需求摸底",
    relation: "医生认为任务量过重，社区工作人员认为宣传解释还不充分",
    sceneRole: "社区卫生服务中心工作人员",
    sceneConflict: "居民认为签约只是走形式，不愿配合登记",
    sourceName: "中公教育事业单位面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/sydw/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sydw-library-digital",
    year: 2025,
    province: "事业单位",
    sector: "公共文化",
    theme: "公共图书馆数字化服务",
    value: "能扩大阅读覆盖面、提升公共文化服务可及性",
    concern: "老年读者担心不会使用线上借阅和电子资源",
    emergency: "图书馆线上预约系统故障，读者到馆后无法入场并集中投诉",
    activity: "数字阅读推广和老年读者帮扶活动",
    relation: "技术人员强调系统规则，窗口工作人员担心读者体验受影响",
    sceneRole: "图书馆服务台工作人员",
    sceneConflict: "一位老年读者因预约失败情绪激动，认为图书馆不方便老人",
    sourceName: "中公教育事业单位面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/sydw/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sydw-museum-crowd",
    year: 2025,
    province: "事业单位",
    sector: "文博场馆",
    theme: "博物馆预约参观和研学服务",
    value: "能保障参观秩序、提升文化传播效果",
    concern: "热门时段一票难约，群众担心公共资源分配不公平",
    emergency: "研学团队到馆后发现预约人数不符，现场家长和学生较多",
    activity: "博物馆志愿讲解员培训和服务评估",
    relation: "讲解员希望控制团队人数，学校老师希望尽量接待全部学生",
    sceneRole: "博物馆现场管理人员",
    sceneConflict: "家长认为孩子排队很久却不能进馆，要求马上解决",
    sourceName: "中公教育事业单位面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/sydw/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sydw-employment",
    year: 2025,
    province: "事业单位",
    sector: "就业服务",
    theme: "高校毕业生就业服务",
    value: "能帮助毕业生拓宽就业渠道、缓解结构性就业压力",
    concern: "部分毕业生认为招聘会岗位质量不高、信息不精准",
    emergency: "校园招聘活动中，企业临时取消展位，引发学生不满",
    activity: "就业政策进校园和岗位对接活动",
    relation: "学校希望扩大参与人数，企业服务专员担心岗位匹配不精准",
    sceneRole: "公共就业服务工作人员",
    sceneConflict: "毕业生认为推荐岗位和专业不匹配，对服务效果不满意",
    sourceName: "华图教育事业单位面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/sydw/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sydw-social-aid",
    year: 2025,
    province: "事业单位",
    sector: "民政服务",
    theme: "社会救助精准识别",
    value: "能把有限救助资源用到真正困难群众身上",
    concern: "群众担心审核过严、隐私暴露和人情干扰",
    emergency: "低保复核公示后，有群众质疑邻居不符合条件并在现场争吵",
    activity: "社会救助政策宣传和入户核查",
    relation: "社区干部担心伤感情，民政窗口强调必须严格核查",
    sceneRole: "民政服务窗口工作人员",
    sceneConflict: "申请人因材料不全无法办理救助，情绪非常着急",
    sourceName: "华图教育事业单位面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/sydw/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sg-community-meal",
    year: 2025,
    province: "社区工作者",
    sector: "社区治理",
    theme: "社区老年助餐服务",
    value: "能解决高龄、独居老人吃饭难问题",
    concern: "居民担心价格、卫生和长期运营稳定性",
    emergency: "助餐点配送延迟，几位老人家属到社区投诉",
    activity: "老年助餐服务满意度调查和试吃活动",
    relation: "助餐企业强调成本压力，社区居民希望价格更低",
    sceneRole: "社区工作者",
    sceneConflict: "老人认为助餐菜品单一，不愿继续订餐",
    sourceName: "中公教育社区工作者面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/shequ/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sg-property",
    year: 2025,
    province: "社区工作者",
    sector: "社区治理",
    theme: "物业服务矛盾调解",
    value: "能提升小区治理效能和居民满意度",
    concern: "物业、业委会、居民之间容易责任不清、互不信任",
    emergency: "电梯频繁故障后，居民聚集到物业办公室要求退费",
    activity: "物业服务质量评议和居民议事会",
    relation: "物业认为维修资金不足，居民认为物业服务不到位",
    sceneRole: "社区调解员",
    sceneConflict: "居民代表情绪激动，认为社区偏向物业",
    sourceName: "中公教育社区工作者面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/shequ/mianshi/"
  },
  {
    idPrefix: "batch4-2025-sg-childcare",
    year: 2025,
    province: "社区工作者",
    sector: "社区服务",
    theme: "社区托育服务",
    value: "能缓解年轻家庭照护压力、完善一老一小服务",
    concern: "家长担心安全责任、师资质量和收费标准",
    emergency: "托育点试运行中孩子轻微磕碰，家长到社区要求说明",
    activity: "社区托育需求摸排和安全开放日",
    relation: "托育机构希望扩大招生，社区工作人员担心安全监管压力",
    sceneRole: "社区服务专员",
    sceneConflict: "家长质疑托育点资质和安全措施，要求暂停开放",
    sourceName: "中公教育社区工作者面试真题公开栏目",
    sourceUrl: "https://www.offcn.com/shequ/mianshi/"
  },
  {
    idPrefix: "batch4-2024-teacher-campus-bullying",
    year: 2024,
    province: "教师招聘",
    sector: "教育系统",
    theme: "校园欺凌预防和学生心理健康",
    value: "能保护学生身心健康、建设安全校园",
    concern: "家长担心学校处理不及时、学生隐私被公开",
    emergency: "学生家长反映孩子疑似被欺凌，情绪激动并要求马上处分相关学生",
    activity: "校园欺凌预防主题班会和家校沟通会",
    relation: "班主任希望先调查事实，家长要求立即公开处理结果",
    sceneRole: "班主任",
    sceneConflict: "家长认为学校在推脱责任，要求当场给出处理意见",
    sourceName: "华图教师招聘结构化面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/jiaoshi/mianshi/"
  },
  {
    idPrefix: "batch4-2024-teacher-ai-homework",
    year: 2024,
    province: "教师招聘",
    sector: "教育系统",
    theme: "人工智能辅助教学",
    value: "能提升备课效率、丰富个性化学习资源",
    concern: "可能导致学生依赖工具、教师弱化育人责任",
    emergency: "学生使用 AI 生成作业被发现，家长认为学校规则不清",
    activity: "AI 工具规范使用主题教育活动",
    relation: "年轻教师愿意尝试 AI 教学，老教师担心影响课堂质量",
    sceneRole: "任课教师",
    sceneConflict: "学生认为 AI 只是学习工具，不理解为什么不能直接交答案",
    sourceName: "华图教师招聘结构化面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/jiaoshi/mianshi/"
  },
  {
    idPrefix: "batch4-2024-teacher-home-school",
    year: 2024,
    province: "教师招聘",
    sector: "教育系统",
    theme: "家校共育和减负提质",
    value: "能形成教育合力、促进学生全面发展",
    concern: "家长担心减负后成绩下降，教师担心沟通成本增加",
    emergency: "家长群里有人质疑老师作业布置太少，引发其他家长跟帖争论",
    activity: "家校共育经验交流和学业指导会",
    relation: "家长希望多刷题，任课老师强调课堂质量和习惯培养",
    sceneRole: "班主任",
    sceneConflict: "家长当面质疑减负政策影响孩子升学竞争力",
    sourceName: "华图教师招聘结构化面试真题公开栏目",
    sourceUrl: "https://www.huatu.com/jiaoshi/mianshi/"
  },
  {
    idPrefix: "batch4-2024-sydw-transport",
    year: 2024,
    province: "事业单位",
    sector: "交通服务",
    theme: "公共交通适老化改造",
    value: "能提升老年人出行便利和城市服务温度",
    concern: "部分乘客担心效率下降，运营单位担心成本增加",
    emergency: "公交线路调整后，老人集中到站点反映换乘不便",
    activity: "公交适老化服务体验和意见征集",
    relation: "运营公司强调线路效率，社区老人代表强调出行便利",
    sceneRole: "交通服务工作人员",
    sceneConflict: "老人认为线路调整没有提前通知，要求恢复原线路",
    sourceName: "粉笔事业单位面试公开题库栏目",
    sourceUrl: "https://www.fenbi.com/page/sydw"
  },
  {
    idPrefix: "batch4-2024-sydw-market",
    year: 2024,
    province: "事业单位",
    sector: "市场监管",
    theme: "预付式消费监管",
    value: "能保护消费者权益、规范商家经营",
    concern: "商家担心监管增加经营负担，消费者担心维权难",
    emergency: "健身房突然停业，消费者聚集到监管所要求退费",
    activity: "预付式消费风险提示和商户合规检查",
    relation: "商户认为宣传影响生意，同事认为必须从严提醒风险",
    sceneRole: "市场监管工作人员",
    sceneConflict: "消费者认为监管部门没有提前发现风险，情绪激动",
    sourceName: "粉笔事业单位面试公开题库栏目",
    sourceUrl: "https://www.fenbi.com/page/sydw"
  },
  {
    idPrefix: "batch4-2024-sydw-archive",
    year: 2024,
    province: "事业单位",
    sector: "档案服务",
    theme: "档案数字化和便民查询",
    value: "能提高档案利用效率、减少群众等待时间",
    concern: "群众担心个人信息泄露和电子档案准确性",
    emergency: "群众办理证明时发现电子档案信息不一致，现场要求立即更正",
    activity: "档案数字化质量抽查和服务体验优化",
    relation: "档案录入人员强调历史资料复杂，窗口人员担心群众等待太久",
    sceneRole: "档案馆窗口工作人员",
    sceneConflict: "办事群众认为档案错误影响其办理业务，要求赔偿损失",
    sourceName: "粉笔事业单位面试公开题库栏目",
    sourceUrl: "https://www.fenbi.com/page/sydw"
  },
  {
    idPrefix: "batch4-2023-sydw-water",
    year: 2023,
    province: "事业单位",
    sector: "水务服务",
    theme: "节水型城市建设",
    value: "能提高水资源利用效率、增强城市韧性",
    concern: "居民担心节水措施影响生活便利，企业担心改造成本",
    emergency: "小区二次供水改造期间短暂停水，居民集中投诉",
    activity: "节水宣传进社区和用水情况调研",
    relation: "施工方希望尽快施工，居民代表要求避开生活高峰时段",
    sceneRole: "水务服务工作人员",
    sceneConflict: "居民认为停水通知不充分，要求现场解释",
    sourceName: "粉笔事业单位面试公开题库栏目",
    sourceUrl: "https://www.fenbi.com/page/sydw"
  },
  {
    idPrefix: "batch4-2023-sydw-environment-sanitation",
    year: 2023,
    province: "事业单位",
    sector: "环卫服务",
    theme: "城市精细化环卫管理",
    value: "能改善城市环境、提升群众生活品质",
    concern: "商户担心管理过严影响经营，环卫人员担心工作压力增加",
    emergency: "夜市周边垃圾清运不及时，居民和摊主在现场争执",
    activity: "背街小巷环境卫生专项整治",
    relation: "商户希望延长经营时间，环卫队认为清运安排受影响",
    sceneRole: "环卫管理工作人员",
    sceneConflict: "摊主认为整治影响生意，对工作人员态度抵触",
    sourceName: "粉笔事业单位面试公开题库栏目",
    sourceUrl: "https://www.fenbi.com/page/sydw"
  },
  {
    idPrefix: "batch4-2023-sydw-veterans",
    year: 2023,
    province: "事业单位",
    sector: "退役军人服务",
    theme: "退役军人就业创业服务",
    value: "能帮助退役军人顺利融入社会、发挥专长",
    concern: "服务对象担心岗位匹配不准、政策兑现不及时",
    emergency: "专场招聘会上，部分岗位与宣传不符，退役军人代表表达不满",
    activity: "退役军人就业创业政策服务月",
    relation: "企业希望降低招聘门槛，服务站同事强调岗位质量要把关",
    sceneRole: "退役军人服务站工作人员",
    sceneConflict: "服务对象认为推荐岗位待遇低，不认可服务效果",
    sourceName: "粉笔事业单位面试公开题库栏目",
    sourceUrl: "https://www.fenbi.com/page/sydw"
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

function titleFor(scenario: PublicScenario, type: QuestionType) {
  const titles: Record<QuestionType, string> = {
    zonghefenxi: `${scenario.sector}推进${scenario.theme}，有人认为${scenario.value}，也有人担心${scenario.concern}。你怎么看？`,
    yingjibian: `${scenario.emergency}。如果由你负责现场处置，你怎么办？`,
    zuzhiguanli: `领导让你组织一次${scenario.activity}，你会如何安排？`,
    renjiguanxi: `开展${scenario.theme}工作时，${scenario.relation}。你会如何协调？`,
    ziworenzhi: `结合${scenario.sector}${scenario.theme}工作，谈谈你认为事业单位/基层岗位需要哪些能力。`,
    qingjingmoni: `你是${scenario.sceneRole}，${scenario.sceneConflict}。请现场模拟你的沟通。`
  };

  return titles[type];
}

function answerFor(scenario: PublicScenario, type: QuestionType) {
  if (type === "zonghefenxi") {
    return `答题思路：先明确支持方向，再分析现实顾虑，最后提出规范推进办法。\n完整答案：我认为${scenario.theme}是提升${scenario.sector}服务质量的重要抓手，方向值得肯定。它能回应群众更高层次、更精细化的服务需求，也能推动公共服务从“有没有”向“好不好”转变。但群众担心的问题也不能忽视，说明政策落地还需要更透明、更细致。对此，一要把服务内容、收费标准、办理流程和监督渠道公开；二要加强人群分类服务，对老年人、困难群众、特殊群体提供帮办代办；三要建立评价和整改闭环，及时吸收群众反馈。这样才能把民生实事办得更稳、更暖。\n金句标注：公共服务既要追求效率，更要守住公平和温度。`;
  }

  if (type === "yingjibian") {
    return `答题思路：先稳秩序和情绪，再查明原因，随后分类解决并复盘。\n完整答案：遇到${scenario.emergency}，我会第一时间到场处置。首先亮明身份，安抚群众情绪，维护现场秩序，避免矛盾扩大。其次快速了解事实，包括问题原因、涉及人数、群众诉求和当前可调配资源。对能当场解决的问题马上处理；对需要进一步核实或协调的问题，明确办理时限和联系人。再次，及时向领导报告，必要时联动相关部门统一口径回应。最后把此次事件暴露出的通知、流程、保障等问题形成整改清单，避免同类情况再次发生。\n金句标注：越是群众着急的时候，越要把话说清、把事办实。`;
  }

  if (type === "zuzhiguanli") {
    return `答题思路：围绕目标、对象、流程、保障、反馈五个环节组织。\n完整答案：组织${scenario.activity}，我会先向领导明确活动目标和重点对象，再制定方案。前期做好政策资料梳理、对象摸排、场地物资和人员分工，同时准备常见问题答复口径。活动中采取政策讲解、现场咨询、问卷调查、案例展示、入户走访等方式，提高群众参与度和获得感。过程中注意秩序维护、信息登记和特殊群体帮扶。活动结束后汇总问题建议，形成服务清单和整改台账，向领导报告，并对群众关心事项及时反馈，确保活动不空转。\n金句标注：一次好活动，最终要沉淀成一张问题清单和一批解决成果。`;
  }

  if (type === "renjiguanxi") {
    return `答题思路：尊重各方诉求，找到共同目标，用规则和沟通化解分歧。\n完整答案：面对${scenario.relation}，我会坚持工作为先、沟通为要。第一，分别了解各方真实顾虑，判断分歧来自职责边界、成本压力还是信息不对称。第二，围绕${scenario.theme}的服务目标进行解释，强调大家最终都是为了提高群众满意度。第三，提出分阶段、可操作的协调方案，例如明确分工、建立台账、设置反馈节点。第四，对超出本级权限的问题及时向领导汇报，并带着可选方案请示。通过把话说开、把责定清、把事推进，形成工作合力。\n金句标注：协调不是简单和稀泥，而是在原则和温度之间找到可执行方案。`;
  }

  if (type === "ziworenzhi") {
    return `答题思路：结合岗位特点谈服务意识、专业能力、沟通能力和学习能力。\n完整答案：${scenario.sector}工作直接面对群众，岗位虽平凡，但责任具体。我认为首先要有服务意识，能站在群众角度理解急难愁盼；其次要有专业能力，熟悉政策流程，避免解释不清、办理不准；再次要有沟通协调能力，能在多方诉求中依法依规推动问题解决；最后要有持续学习能力，适应数字化、精细化、规范化的新要求。对我来说，我会把每一次具体服务都当作提升本领的机会，多学政策、多问前辈、多复盘案例，努力成为群众信得过的工作人员。\n金句标注：基层岗位的价值，体现在把一件件小事办到群众心坎上。`;
  }

  return `答题思路：共情开场、解释政策、给出路径、承诺反馈。\n完整答案：您好，我理解您现在比较着急，也感谢您愿意把问题讲出来。关于${scenario.theme}，我们推进这项工作是为了让服务更规范、更方便，但在落地过程中确实可能有解释不到位、流程不熟悉的地方。您反映的问题我会认真记录，先帮您核实具体情况；如果能现场解决，我马上协调办理；如果需要进一步转办，我会把责任部门、办理时限和联系方式告诉您。也请您先稳定一下情绪，我们一起把问题往前推。\n金句标注：群众工作先有态度，才有信任；先有回应，才有解决。`;
}

function makeQuestion(scenario: PublicScenario, type: QuestionType, index: number): Question {
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
    content: `${title}（根据公开事业单位/社区/教师结构化面试回忆题主题整理，题干做了轻度改写。）`,
    referenceAnswer: answerFor(scenario, type),
    sourceName: scenario.sourceName,
    sourceUrl: scenario.sourceUrl
  };
}

export const publicQuestionsBatch4: Question[] = scenarios.flatMap((scenario) =>
  questionTypes.map((type, index) => makeQuestion(scenario, type, index))
);
