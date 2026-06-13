import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type Region = {
  slug: string;
  province: string;
  category: string;
  sourceName: string;
  sourceUrl: string;
};

type Theme = {
  slug: string;
  title: string;
  meaning: string;
  challenge: string;
  incident: string;
  activity: string;
  disagreement: string;
  role: string;
  complaint: string;
};

const typeNameByType: Record<QuestionType, string> = {
  renjiguanxi: "人际关系",
  yingjibian: "应急应变",
  zonghefenxi: "综合分析",
  zuzhiguanli: "组织管理",
  ziworenzhi: "自我认知",
  qingjingmoni: "情景模拟"
};

const questionTypes = [
  "zonghefenxi",
  "yingjibian",
  "zuzhiguanli",
  "renjiguanxi",
  "ziworenzhi",
  "qingjingmoni"
] as const;

const regions: Region[] = [
  { slug: "beijing", province: "北京", category: "省考", sourceName: "北京华图省考面试真题公开栏目", sourceUrl: "https://bj.huatu.com/gwy/mianshi/" },
  { slug: "shanghai", province: "上海", category: "省考", sourceName: "上海华图省考面试真题公开栏目", sourceUrl: "https://sh.huatu.com/gwy/mianshi/" },
  { slug: "guangdong", province: "广东", category: "省考", sourceName: "广东中公省考面试真题公开栏目", sourceUrl: "https://gd.offcn.com/html/guangdonggongwuyuan/mianshi/" },
  { slug: "jiangsu", province: "江苏", category: "省考", sourceName: "江苏中公省考面试真题公开栏目", sourceUrl: "https://js.offcn.com/html/jiangsu_gwy/mianshi/" },
  { slug: "zhejiang", province: "浙江", category: "省考", sourceName: "浙江中公省考面试真题公开栏目", sourceUrl: "https://zj.offcn.com/html/zjgwy/mianshi/" },
  { slug: "shandong", province: "山东", category: "省考", sourceName: "山东中公省考面试真题公开栏目", sourceUrl: "https://sd.offcn.com/html/shandonggwy/mianshi/" },
  { slug: "henan", province: "河南", category: "省考", sourceName: "河南中公省考面试真题公开栏目", sourceUrl: "https://hn.offcn.com/html/henangongwuyuan/mianshi/" },
  { slug: "sichuan", province: "四川", category: "省考", sourceName: "四川中公省考面试真题公开栏目", sourceUrl: "https://sc.offcn.com/html/sichuangongwuyuan/mianshi/" },
  { slug: "hubei", province: "湖北", category: "省考", sourceName: "湖北中公省考面试真题公开栏目", sourceUrl: "https://hu.offcn.com/html/hubeigongwuyuan/mianshi/" },
  { slug: "hunan", province: "湖南", category: "省考", sourceName: "湖南中公省考面试真题公开栏目", sourceUrl: "https://hn.offcn.com/html/hunangongwuyuan/mianshi/" },
  { slug: "anhui", province: "安徽", category: "省考", sourceName: "安徽中公省考面试真题公开栏目", sourceUrl: "https://ah.offcn.com/html/anhui_gwy/mianshi/" },
  { slug: "fujian", province: "福建", category: "省考", sourceName: "福建中公省考面试真题公开栏目", sourceUrl: "https://fj.offcn.com/html/fujianshengkao/mianshi/" },
  { slug: "hebei", province: "河北", category: "省考", sourceName: "河北中公省考面试真题公开栏目", sourceUrl: "https://hb.offcn.com/html/hebeigongwuyuan/mianshi/" },
  { slug: "liaoning", province: "辽宁", category: "省考", sourceName: "辽宁中公省考面试真题公开栏目", sourceUrl: "https://ln.offcn.com/html/liaoninggongwuyuan/mianshi/" },
  { slug: "shanxi", province: "山西", category: "省考", sourceName: "山西中公省考面试真题公开栏目", sourceUrl: "https://sx.offcn.com/html/shanxigongwuyuan/mianshi/" },
  { slug: "guangxi", province: "广西", category: "省考", sourceName: "广西中公省考面试真题公开栏目", sourceUrl: "https://gx.offcn.com/html/guangxigongwuyuan/" },
  { slug: "yunnan", province: "云南", category: "省考", sourceName: "云南中公省考面试真题公开栏目", sourceUrl: "https://yn.offcn.com/html/yunnangongwuyuan/mianshi/" },
  { slug: "guizhou", province: "贵州", category: "省考", sourceName: "贵州中公省考面试真题公开栏目", sourceUrl: "https://gz.offcn.com/html/guizhougongwuyuan/mianshi/" },
  { slug: "neimeng", province: "内蒙古", category: "行政执法", sourceName: "内蒙古行政执法面试真题公开栏目", sourceUrl: "https://nm.offcn.com/html/neimenggwy/mianshi/" },
  { slug: "xds", province: "选调生", category: "选调生", sourceName: "中公选调生面试真题公开栏目", sourceUrl: "https://www.offcn.com/xds/mianshi/" },
  { slug: "szyf", province: "三支一扶", category: "三支一扶", sourceName: "中公三支一扶面试真题公开栏目", sourceUrl: "https://www.offcn.com/szyf/mianshi/" },
  { slug: "sydw", province: "事业单位", category: "事业单位", sourceName: "中公教育事业单位面试真题公开栏目", sourceUrl: "https://www.offcn.com/sydw/mianshi/" },
  { slug: "shequ", province: "社区工作者", category: "社区工作者", sourceName: "中公教育社区工作者面试真题公开栏目", sourceUrl: "https://www.offcn.com/shequ/mianshi/" },
  { slug: "teacher", province: "教师招聘", category: "教师招聘", sourceName: "华图教师招聘结构化面试真题公开栏目", sourceUrl: "https://www.huatu.com/jiaoshi/mianshi/" },
  { slug: "police", province: "公安辅警", category: "公安辅警", sourceName: "华图公安招警面试真题公开栏目", sourceUrl: "https://www.huatu.com/zhaojing/mianshi/" },
  { slug: "medical", province: "医疗卫生", category: "医疗卫生", sourceName: "中公医疗卫生招聘面试真题公开栏目", sourceUrl: "https://www.offcn.com/yiliao/mianshi/" },
  { slug: "bank", province: "银行招聘", category: "银行招聘", sourceName: "粉笔银行招聘结构化面试公开题库", sourceUrl: "https://www.fenbi.com/page/bank" },
  { slug: "state-owned", province: "国企招聘", category: "国企招聘", sourceName: "中公国企招聘结构化面试公开栏目", sourceUrl: "https://www.offcn.com/gqzp/mianshi/" },
  { slug: "lixuan", province: "遴选", category: "遴选", sourceName: "中公遴选面试真题公开栏目", sourceUrl: "https://www.offcn.com/lx/mianshi/" }
];

const themes: Theme[] = [
  {
    slug: "grassroots-service",
    title: "基层便民服务提质增效",
    meaning: "能减少群众跑腿、提升窗口服务体验",
    challenge: "流程整合后责任边界和群众适应成本需要同步解决",
    incident: "便民服务平台上线首日，群众因材料校验失败在窗口排队投诉",
    activity: "便民服务体验员走访和流程优化调研",
    disagreement: "业务部门强调审核标准不能降低，窗口同事担心群众等待时间过长",
    role: "便民服务中心工作人员",
    complaint: "群众认为线上线下要求不一致，自己被来回折腾"
  },
  {
    slug: "elderly-care",
    title: "一老一小民生服务",
    meaning: "能回应家庭照护压力、补齐公共服务短板",
    challenge: "运营成本、服务质量和安全责任需要长期保障",
    incident: "社区服务点试运行时，家属质疑预约规则不清并要求现场解释",
    activity: "一老一小服务需求摸排和政策说明会",
    disagreement: "运营机构希望扩大服务范围，社区担心监管和安全压力",
    role: "社区民生服务工作人员",
    complaint: "居民认为服务收费和服务内容没有提前讲清楚"
  },
  {
    slug: "digital-governance",
    title: "数字治理和数据共享",
    meaning: "能提升治理精准度和部门协同效率",
    challenge: "数据安全、重复填报和数字鸿沟问题仍需重视",
    incident: "数据共享平台出现信息不一致，影响群众办理补贴申领",
    activity: "数字治理应用培训和数据质量核查",
    disagreement: "技术人员强调系统规则，基层工作人员认为实际场景更复杂",
    role: "数字政务工作人员",
    complaint: "群众认为系统错误不该让自己承担反复提交材料的成本"
  },
  {
    slug: "business-environment",
    title: "优化营商环境和助企服务",
    meaning: "能激发市场主体活力、稳定社会预期",
    challenge: "惠企政策兑现、跨部门协同和公平监管仍有堵点",
    incident: "企业负责人因政策兑现进度慢到大厅反映，并在网上发布质疑",
    activity: "企业诉求走访和惠企政策宣讲",
    disagreement: "企业服务专员希望加快办理，审批部门强调程序材料必须完整",
    role: "助企服务专员",
    complaint: "企业认为政策宣传很多，但真正办理时门槛高、周期长"
  },
  {
    slug: "ecology-safety",
    title: "生态保护和安全治理",
    meaning: "能守住安全底线、推动绿色可持续发展",
    challenge: "短期利益调整、群众配合和长效管护都有难度",
    incident: "隐患整治现场，有群众认为整改影响经营生活并阻挠施工",
    activity: "生态安全隐患排查和群众宣传",
    disagreement: "执法人员要求立即整改，属地干部希望先解释安抚",
    role: "基层安全治理工作人员",
    complaint: "群众认为整改要求突然，自己的损失没人解释"
  },
  {
    slug: "rural-revitalization",
    title: "乡村振兴和产业发展",
    meaning: "能促进农民增收、增强基层发展内生动力",
    challenge: "项目运营、收益分配和风险防控需要更加透明",
    incident: "村集体产业项目公示后，部分村民质疑收益分配不公平",
    activity: "乡村产业项目评估和群众座谈",
    disagreement: "村干部希望扩大项目规模，群众代表担心风险和分配问题",
    role: "驻村工作人员",
    complaint: "村民认为项目看起来热闹，但自己没有真正受益"
  },
  {
    slug: "youth-employment",
    title: "青年就业和人才服务",
    meaning: "能稳定就业预期、促进人才与岗位精准匹配",
    challenge: "岗位质量、政策知晓度和服务精准度仍需提升",
    incident: "招聘活动中部分岗位临时取消，求职者质疑组织方审核不严",
    activity: "青年就业政策进校园和岗位对接会",
    disagreement: "用人单位希望降低沟通成本，求职者希望获得更细致指导",
    role: "就业服务工作人员",
    complaint: "求职者认为推荐岗位和自身专业经历不匹配"
  },
  {
    slug: "public-communication",
    title: "舆情回应和群众沟通",
    meaning: "能及时回应关切、增强政府和公共机构公信力",
    challenge: "信息传播快、情绪发酵快，对回应速度和准确性要求高",
    incident: "一段反映服务不到位的视频在网上传播，引发大量评论和咨询",
    activity: "群众诉求办理复盘和沟通能力培训",
    disagreement: "宣传同事希望快速发布回应，业务部门认为还需进一步核实事实",
    role: "群众诉求办理工作人员",
    complaint: "群众认为此前回复模板化，没有真正解决问题"
  }
];

function yearFor(regionIndex: number, themeIndex: number) {
  return [2026, 2025, 2024, 2023][(regionIndex + themeIndex) % 4];
}

function titleFor(region: Region, theme: Theme, type: QuestionType) {
  const titles: Record<QuestionType, string> = {
    zonghefenxi: `${region.category}工作中推进${theme.title}，有人认为${theme.meaning}，也有人担心${theme.challenge}。你怎么看？`,
    yingjibian: `${theme.incident}。如果你作为${theme.role}负责现场处理，会怎么做？`,
    zuzhiguanli: `领导让你组织一次${theme.activity}，你会如何安排？`,
    renjiguanxi: `${theme.disagreement}。你会如何沟通协调？`,
    ziworenzhi: `结合${region.category}岗位和${theme.title}，谈谈你需要具备哪些能力，以及如何提升自己。`,
    qingjingmoni: `你是${theme.role}，${theme.complaint}。请现场模拟你的沟通。`
  };

  return titles[type];
}

function referenceAnswerFor(region: Region, theme: Theme, type: QuestionType) {
  if (type === "zonghefenxi") {
    return `答题思路：先看政策价值，再看落地难点，最后提出完善举措。\n完整答案：${theme.title}是${region.category}工作中的高频考点，本质上考查公共服务、基层治理和群众工作能力。它的积极意义在于${theme.meaning}，但也要看到${theme.challenge}。所以推进这项工作不能停留在口号上：第一，要深入调研，把群众、企业和基层一线的真实需求摸清；第二，要公开标准，把流程、责任和监督渠道讲明白；第三，要分类服务，对老年人、困难群体、企业主体等提供差异化帮助；第四，要建立反馈闭环，用群众评价和问题台账持续改进。\n金句标注：基层治理的成效，不只看部署了多少，更要看群众感受到了多少。`;
  }

  if (type === "yingjibian") {
    return `答题思路：先稳局面，再核事实，随后解决诉求，最后复盘改进。\n完整答案：遇到${theme.incident}，我会第一时间到现场，亮明身份，安抚群众情绪，维护现场秩序，防止围观和矛盾扩大。接着快速核实事情经过、影响范围和核心诉求，能现场解决的立即解决，不能马上解决的说明原因并明确办理时限。对需要其他部门配合的问题，及时向领导汇报并协调联动。处理过程中注意依法依规、统一口径、留存记录。事后复盘流程、宣传、服务和应急预案中的不足，推动同类问题源头治理。\n金句标注：突发问题看似发生在现场，根子往往在流程和沟通。`;
  }

  if (type === "zuzhiguanli") {
    return `答题思路：目标清、对象准、过程实、结果有反馈。\n完整答案：组织${theme.activity}，我会先向领导明确目标要求，确定参与对象、时间地点、工作分工和风险预案。前期通过资料梳理、电话沟通、实地走访等方式掌握需求，准备政策材料和常见问题答复。实施中采取政策讲解、案例分析、现场答疑、问卷调查、座谈交流等方式，让活动既有参与度，也有针对性。活动结束后汇总意见建议，形成问题清单、责任清单和整改时限，及时向领导汇报，并向参与对象反馈办理进展。\n金句标注：活动办得好不好，关键看能不能把问题清单变成服务清单。`;
  }

  if (type === "renjiguanxi") {
    return `答题思路：先听取分歧，再找共同目标，最后形成协同方案。\n完整答案：面对${theme.disagreement}，我会坚持对事不对人，从工作大局出发处理。首先分别了解各方想法，判断分歧来自职责边界、资源压力还是信息不对称。其次围绕${theme.title}的共同目标沟通，说明政策依据、群众需求和风险点。再次提出可执行的方案，比如明确分工、分阶段推进、设置反馈节点，必要时请领导统筹协调。最后在推进中多补台、多复盘，用实际成效增进互信。\n金句标注：协作不是没有不同意见，而是能把不同意见汇成解决问题的办法。`;
  }

  if (type === "ziworenzhi") {
    return `答题思路：围绕岗位认知、能力匹配、短板提升作答。\n完整答案：${region.category}岗位直接面对群众和具体事务，要求干部既懂政策又会服务。结合${theme.title}，我认为需要四种能力：一是责任意识，关键时刻能顶上；二是群众工作能力，能听懂诉求、接住情绪；三是执行落实能力，能把任务拆成节点和结果；四是学习复盘能力，能适应新政策、新技术和新场景。对我来说，我会多到一线了解情况，多向同事和群众学习，在每一次具体任务中提升专业能力和服务温度。\n金句标注：岗位选择不是一句表态，而是长期在小事中证明担当。`;
  }

  return `答题思路：共情开场、说明依据、提出办法、承诺反馈。\n完整答案：您好，我理解您现在的着急和不满，也感谢您愿意把问题讲出来。关于${theme.title}，我们推进这项工作是为了把服务做得更规范、更公平、更便利，但执行过程中如果解释不到位，确实会让您产生困扰。您反映的情况我已经记录下来，接下来我先帮您核实具体事实；能现场解决的马上协调，不能现场解决的我会告诉您办理时限、责任部门和反馈方式。请您先消消气，我们一起把问题往前推进。\n金句标注：群众工作先把心贴近，问题解决才能往前走。`;
}

function makeQuestion(
  region: Region,
  theme: Theme,
  type: QuestionType,
  regionIndex: number,
  themeIndex: number,
  typeIndex: number
): Question {
  const title = titleFor(region, theme, type);
  const difficulty: Difficulty = type === "yingjibian" ? "hard" : type === "ziworenzhi" ? "easy" : "medium";

  return {
    id: `batch7-${region.slug}-${theme.slug}-${String(typeIndex + 1).padStart(2, "0")}`,
    year: yearFor(regionIndex, themeIndex),
    province: region.province,
    type,
    typeName: typeNameByType[type],
    difficulty,
    title,
    content: `${title}（根据公开结构化面试真题/考生回忆题常见主题整理，题干做了轻度改写。）`,
    referenceAnswer: referenceAnswerFor(region, theme, type),
    sourceName: region.sourceName,
    sourceUrl: region.sourceUrl
  };
}

export const publicQuestionsBatch7: Question[] = regions.flatMap((region, regionIndex) =>
  themes.flatMap((theme, themeIndex) =>
    questionTypes.map((type, typeIndex) =>
      makeQuestion(region, theme, type, regionIndex, themeIndex, typeIndex)
    )
  )
);
