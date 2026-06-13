import type { Difficulty, Question, QuestionType } from "@/lib/question-utils";

type SourceKey = "offcnGuokao" | "aiptaGuokao" | "aiptaTax" | "aiptaCustoms" | "huatu";

type PublicQuestionSeed = {
  id: string;
  year: number;
  province: string;
  type: QuestionType;
  difficulty: Difficulty;
  title: string;
  source: SourceKey;
};

const typeNameByType: Record<QuestionType, string> = {
  renjiguanxi: "人际关系",
  yingjibian: "应急应变",
  zonghefenxi: "综合分析",
  zuzhiguanli: "组织管理",
  ziworenzhi: "自我认知",
  qingjingmoni: "情景模拟"
};

const sources: Record<SourceKey, { name: string; url: string }> = {
  offcnGuokao: {
    name: "中公网校历年国考面试题公开汇总",
    url: "https://ahbxgwy.com/item/24959.html?displaymode=pc"
  },
  aiptaGuokao: {
    name: "爱真题国考面试历年真题栏目",
    url: "https://www.aipta.com/zt/gk/"
  },
  aiptaTax: {
    name: "爱真题税务局面试真题公开资料",
    url: "https://www.aipta.com/mianshi/zt/shuiwuju/"
  },
  aiptaCustoms: {
    name: "爱真题海关面试真题公开资料",
    url: "https://www.aipta.com/mianshi/zt/haiguan/"
  },
  huatu: {
    name: "华图教育面试真题公开栏目",
    url: "https://www.huatu.com/mianshi/"
  }
};

const publicQuestionSeeds: PublicQuestionSeed[] = [
  {
    id: "public-2025-haiguan-001",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "海关窗口推广智能审单系统后，企业办事更快，但部分办事群众担心机器判断不够灵活。请谈谈你的看法。",
    source: "aiptaCustoms"
  },
  {
    id: "public-2025-haiguan-002",
    year: 2025,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "口岸查验现场旅客集中滞留，有人拍视频质疑通关效率低，你作为现场负责人会怎么处理？",
    source: "aiptaCustoms"
  },
  {
    id: "public-2025-haiguan-003",
    year: 2025,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位准备开展一次进出口企业合规经营政策宣讲，领导交由你负责，你会如何组织？",
    source: "aiptaCustoms"
  },
  {
    id: "public-2025-haiguan-004",
    year: 2025,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "一名旅客因携带物品被暂扣情绪激动，认为工作人员故意刁难。请现场模拟你的沟通。",
    source: "aiptaCustoms"
  },
  {
    id: "public-2025-haiguan-005",
    year: 2025,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "你和同事共同负责查验数据复核，同事坚持沿用旧做法，影响新流程推进，你会怎么办？",
    source: "aiptaCustoms"
  },
  {
    id: "public-2025-haiguan-006",
    year: 2025,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "hard",
    title: "有人说严格执法会影响口岸营商环境，也有人说没有严格监管就没有公平贸易。你怎么看？",
    source: "aiptaCustoms"
  },
  {
    id: "public-2024-haiguan-007",
    year: 2024,
    province: "国考",
    type: "yingjibian",
    difficulty: "medium",
    title: "进口冷链货物查验中发现标签信息疑似不一致，企业负责人情绪着急，现场车辆排队较长，你怎么办？",
    source: "aiptaCustoms"
  },
  {
    id: "public-2024-haiguan-008",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "海关要调研跨境电商企业通关便利化需求，你作为负责人会如何开展调研？",
    source: "aiptaCustoms"
  },
  {
    id: "public-2024-haiguan-009",
    year: 2024,
    province: "国考",
    type: "ziworenzhi",
    difficulty: "easy",
    title: "海关岗位责任重、标准严，请结合自身经历谈谈你为什么适合这个岗位。",
    source: "aiptaCustoms"
  },
  {
    id: "public-2024-haiguan-010",
    year: 2024,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "企业办事人员因重复提交材料不满，在大厅抱怨政策变化太快。请模拟你如何解释。",
    source: "aiptaCustoms"
  },
  {
    id: "public-2024-shuiwu-001",
    year: 2024,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "税务部门推广非接触式办税，有人觉得方便高效，也有人担心老年人不会操作。你怎么看？",
    source: "aiptaTax"
  },
  {
    id: "public-2024-shuiwu-002",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "税务局计划开展小微企业税费优惠政策宣传月活动，领导让你负责，你会怎么组织？",
    source: "aiptaTax"
  },
  {
    id: "public-2024-shuiwu-003",
    year: 2024,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "办税服务厅系统短时故障，排队群众较多，网上出现办税难的负面评论，你作为值班人员怎么办？",
    source: "aiptaTax"
  },
  {
    id: "public-2024-shuiwu-004",
    year: 2024,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "一位纳税人因未能及时享受优惠政策情绪激动，认为工作人员没有提醒到位。请现场模拟沟通。",
    source: "aiptaTax"
  },
  {
    id: "public-2024-shuiwu-005",
    year: 2024,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "同事在纳税服务中解释口径与你不一致，企业因此产生误解，你会如何处理？",
    source: "aiptaTax"
  },
  {
    id: "public-2023-shuiwu-006",
    year: 2023,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "hard",
    title: "请结合税收治理现代化，谈谈你对以数治税、精准监管和优化服务之间关系的理解。",
    source: "aiptaTax"
  },
  {
    id: "public-2023-shuiwu-007",
    year: 2023,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位准备对新入职干部开展廉政教育和业务培训，你会如何设计培训方案？",
    source: "aiptaTax"
  },
  {
    id: "public-2023-shuiwu-008",
    year: 2023,
    province: "国考",
    type: "yingjibian",
    difficulty: "medium",
    title: "企业反映退税进度慢，负责人带多人到大厅要求立即办理，现场秩序受到影响，你怎么办？",
    source: "aiptaTax"
  },
  {
    id: "public-2023-shuiwu-009",
    year: 2023,
    province: "国考",
    type: "ziworenzhi",
    difficulty: "easy",
    title: "税务工作既要懂政策又要会服务，请谈谈你的优势和需要提升的地方。",
    source: "aiptaTax"
  },
  {
    id: "public-2023-shuiwu-010",
    year: 2023,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "领导交办一项数据核验任务，你发现前期同事统计口径可能有误，但时间很紧，你怎么办？",
    source: "aiptaTax"
  },
  {
    id: "public-2024-guokao-001",
    year: 2024,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "部分地区推行一件事一次办，但基层干部反映跨部门协同难、数据共享难。对此你怎么看？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2024-guokao-002",
    year: 2024,
    province: "国考",
    type: "yingjibian",
    difficulty: "hard",
    title: "政务大厅突发群众聚集，有人质疑预约系统不公平并现场直播，你是大厅负责人会怎么办？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2024-guokao-003",
    year: 2024,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位要围绕学习贯彻新发展理念开展青年干部研讨活动，你会如何组织？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2024-guokao-004",
    year: 2024,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "你牵头的工作需要多个处室配合，但有处室认为不是本部门职责，推进缓慢，你怎么办？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2024-guokao-005",
    year: 2024,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "群众投诉办理结果不满意，认为你们只是在走流程。请现场模拟你如何回应。",
    source: "aiptaGuokao"
  },
  {
    id: "public-2024-guokao-006",
    year: 2024,
    province: "国考",
    type: "ziworenzhi",
    difficulty: "easy",
    title: "请结合报考岗位，谈谈你对忠诚、干净、担当的理解。",
    source: "aiptaGuokao"
  },
  {
    id: "public-2023-guokao-007",
    year: 2023,
    province: "国考",
    type: "zonghefenxi",
    difficulty: "hard",
    title: "有人认为基层治理要靠技术赋能，也有人认为关键还是干部下沉和群众路线。你怎么看？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2023-guokao-008",
    year: 2023,
    province: "国考",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "领导让你组织一次面向基层群众的惠民政策满意度调查，你会怎么做？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2023-guokao-009",
    year: 2023,
    province: "国考",
    type: "yingjibian",
    difficulty: "medium",
    title: "你负责的线上咨询平台当天访问量激增，回复不及时引发投诉，你怎么办？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2023-guokao-010",
    year: 2023,
    province: "国考",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "老同志习惯线下办理，新同事坚持全部线上化，两人在工作中产生分歧，你如何协调？",
    source: "aiptaGuokao"
  },
  {
    id: "public-2022-guokao-011",
    year: 2022,
    province: "国考",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "社区居民担心便民服务点调整后办事不方便，请你作为工作人员现场向居民解释。",
    source: "offcnGuokao"
  },
  {
    id: "public-2022-guokao-012",
    year: 2022,
    province: "国考",
    type: "ziworenzhi",
    difficulty: "easy",
    title: "如果进入机关后发现工作重复性强、短期难见成绩，你会怎样保持状态？",
    source: "offcnGuokao"
  },
  {
    id: "public-2025-beijing-001",
    year: 2025,
    province: "北京",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "北京推进接诉即办向未诉先办延伸，有人担心基层负担会更重。请谈谈你的看法。",
    source: "huatu"
  },
  {
    id: "public-2025-beijing-002",
    year: 2025,
    province: "北京",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "街道准备开展未诉先办典型案例复盘会，领导让你负责，你会如何组织？",
    source: "huatu"
  },
  {
    id: "public-2025-beijing-003",
    year: 2025,
    province: "北京",
    type: "yingjibian",
    difficulty: "hard",
    title: "居民因小区停车位调整集中到街道反映问题，现场情绪激动，你作为工作人员怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-beijing-004",
    year: 2025,
    province: "北京",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "社区工作任务重，网格员认为你安排的入户走访过于频繁，不愿配合，你怎么处理？",
    source: "huatu"
  },
  {
    id: "public-2025-shanghai-001",
    year: 2025,
    province: "上海",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "上海推动政务服务免申即享，有人担心数据误差导致政策享受不精准。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-shanghai-002",
    year: 2025,
    province: "上海",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "企业负责人对惠企政策申报结果有异议，到窗口要求马上重新审核，请模拟沟通。",
    source: "huatu"
  },
  {
    id: "public-2025-shanghai-003",
    year: 2025,
    province: "上海",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位要开展优化国际化营商环境专项调研，你会如何确定对象和调研方式？",
    source: "huatu"
  },
  {
    id: "public-2025-guangdong-001",
    year: 2025,
    province: "广东",
    type: "zonghefenxi",
    difficulty: "hard",
    title: "广东多地发展低空经济，有人期待产业升级，也有人担心安全监管跟不上。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-guangdong-002",
    year: 2025,
    province: "广东",
    type: "yingjibian",
    difficulty: "hard",
    title: "低空物流试点中无人机临时迫降，引发市民围观和网络质疑，你作为主管部门工作人员怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-guangdong-003",
    year: 2025,
    province: "广东",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "领导让你调研本地低空经济应用场景和监管需求，你会怎么开展？",
    source: "huatu"
  },
  {
    id: "public-2025-guangdong-004",
    year: 2025,
    province: "广东",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "居民担心低空飞行噪音影响生活，请你作为工作人员现场解释政策和保障措施。",
    source: "huatu"
  },
  {
    id: "public-2025-jiangsu-001",
    year: 2025,
    province: "江苏",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "江苏推进制造业智改数转网联，有企业担心投入大、见效慢。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-jiangsu-002",
    year: 2025,
    province: "江苏",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "你负责组织一次中小企业数字化转型需求座谈会，会如何安排？",
    source: "huatu"
  },
  {
    id: "public-2025-jiangsu-003",
    year: 2025,
    province: "江苏",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "同事认为企业走访只要发问卷即可，你认为还需要实地访谈，双方意见不同，你怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-zhejiang-001",
    year: 2025,
    province: "浙江",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "浙江推进共同富裕示范区建设，有人认为应更重视机会公平而非简单平均。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-zhejiang-002",
    year: 2025,
    province: "浙江",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位准备开展一次乡村共富工坊成效评估，领导交给你负责，你如何开展？",
    source: "huatu"
  },
  {
    id: "public-2025-zhejiang-003",
    year: 2025,
    province: "浙江",
    type: "yingjibian",
    difficulty: "medium",
    title: "直播助农活动中产品库存不足，网友质疑虚假宣传，农户也很着急，你怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-shandong-001",
    year: 2025,
    province: "山东",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "山东推动传统产业绿色低碳转型，有企业认为环保要求会增加经营压力。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-shandong-002",
    year: 2025,
    province: "山东",
    type: "yingjibian",
    difficulty: "hard",
    title: "企业排污整改期间周边群众反映异味明显，现场聚集要求停产，你作为工作人员怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-shandong-003",
    year: 2025,
    province: "山东",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "企业负责人认为整改标准过高、影响生产，请你现场沟通并争取配合。",
    source: "huatu"
  },
  {
    id: "public-2025-henan-001",
    year: 2025,
    province: "河南",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "河南推进高标准农田建设，有群众担心施工影响当季耕种。对此你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-henan-002",
    year: 2025,
    province: "河南",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "领导让你组织一次高标准农田建设政策入村宣传和意见征集活动，你会怎么做？",
    source: "huatu"
  },
  {
    id: "public-2025-henan-003",
    year: 2025,
    province: "河南",
    type: "yingjibian",
    difficulty: "medium",
    title: "施工队与村民因临时占地补偿发生争执，影响项目进度，你作为协调人员怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-sichuan-001",
    year: 2025,
    province: "四川",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "四川推动文旅融合，有人认为网红打卡能带来流量，也有人担心过度商业化。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-sichuan-002",
    year: 2025,
    province: "四川",
    type: "yingjibian",
    difficulty: "hard",
    title: "景区节假日客流超预期，停车场拥堵、游客投诉增多，你作为值班负责人怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-sichuan-003",
    year: 2025,
    province: "四川",
    type: "qingjingmoni",
    difficulty: "medium",
    title: "游客因排队时间长情绪激动，要求退票并在现场拍摄。请模拟你的劝导。",
    source: "huatu"
  },
  {
    id: "public-2025-hubei-001",
    year: 2025,
    province: "湖北",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "湖北推进流域综合治理，有人说生态保护会限制地方发展。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-hubei-002",
    year: 2025,
    province: "湖北",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位准备开展一次河湖保护志愿服务和普法宣传活动，你会如何组织？",
    source: "huatu"
  },
  {
    id: "public-2025-hubei-003",
    year: 2025,
    province: "湖北",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "乡镇、村委和企业对河道整治责任边界理解不同，互相推诿，你如何协调？",
    source: "huatu"
  },
  {
    id: "public-2025-hunan-001",
    year: 2025,
    province: "湖南",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "湖南推进基层减负，有人认为少开会少填表就是减负，也有人担心工作标准下降。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-hunan-002",
    year: 2025,
    province: "湖南",
    type: "renjiguanxi",
    difficulty: "medium",
    title: "上级要求报送材料，基层同事认为与减负精神冲突，不愿配合，你怎么办？",
    source: "huatu"
  },
  {
    id: "public-2025-hunan-003",
    year: 2025,
    province: "湖南",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "领导让你起草基层减负问题排查整改方案，你会如何安排前期工作？",
    source: "huatu"
  },
  {
    id: "public-2025-anhui-001",
    year: 2025,
    province: "安徽",
    type: "zonghefenxi",
    difficulty: "medium",
    title: "安徽发展新质生产力，有人认为只有高科技企业才需要关注，传统产业关系不大。你怎么看？",
    source: "huatu"
  },
  {
    id: "public-2025-anhui-002",
    year: 2025,
    province: "安徽",
    type: "zuzhiguanli",
    difficulty: "medium",
    title: "单位要组织新质生产力专题学习交流会，领导交给你负责，你会怎么策划？",
    source: "huatu"
  },
  {
    id: "public-2025-anhui-003",
    year: 2025,
    province: "安徽",
    type: "ziworenzhi",
    difficulty: "easy",
    title: "面对新技术新业态快速变化，公务员需要持续学习。请结合经历谈谈你的学习能力。",
    source: "huatu"
  }
];

function makeReferenceAnswer(seed: PublicQuestionSeed) {
  const topic = seed.title.replace(/请|你|会|如何|怎么|谈谈|看法|对此/g, "").slice(0, 42);

  if (seed.type === "zonghefenxi") {
    return `答题思路：先表明态度，再分析价值和风险，最后提出治理建议。\n完整答案：这道题要辩证看。${topic}背后体现的是治理方式、发展质量和群众感受之间的平衡。一方面，要看到改革创新能提升效率、释放活力、改善服务；另一方面，也要看到执行中可能出现标准不清、数字鸿沟、监管滞后等问题。我的建议是：第一，完善制度边界，把责任、流程、标准公开透明；第二，加强分类施策，对企业、群众和基层单位分别做好指导；第三，建立反馈闭环，用投诉、回访、评估及时修正政策执行偏差。这样才能既有速度，也有温度。\n金句标注：治理不是简单做加法或减法，而是在精准、规范、暖心中找到最大公约数。`;
  }

  if (seed.type === "yingjibian") {
    return `答题思路：先稳现场，再核事实，随后分类处置，最后复盘改进。\n完整答案：遇到${topic}，我会把控制局面和解决问题同步推进。第一，立即到场稳定秩序，说明正在核实处理，避免情绪扩散。第二，快速摸清人员、原因、影响范围和现实诉求，能现场解决的立即解决，不能马上解决的给出时间表和负责人。第三，及时向领导报告，协调业务、宣传、安保等力量，统一口径回应群众和网络关切。第四，事后复盘问题根源，完善应急预案、信息发布和服务流程，防止类似情况重复发生。\n金句标注：应急处置既要快半拍控制风险，也要深一步解决根源。`;
  }

  if (seed.type === "zuzhiguanli") {
    return `答题思路：按前期准备、过程实施、成果转化三步展开。\n完整答案：如果由我负责${topic}，我会先明确目标和对象，制定工作方案，细化时间表、任务书和责任人。前期通过资料梳理、电话沟通、实地走访等方式掌握需求，避免活动空泛。实施中突出参与感和实效性，采用座谈、问卷、案例讲解、现场答疑等方式，让群众和服务对象愿意说真话、得到真帮助。结束后形成问题清单、建议清单和整改台账，重要情况及时向领导汇报，并跟踪反馈办理结果，确保活动不是热闹一阵，而是真正推动工作。\n金句标注：组织活动的落点不在场面大小，而在问题解决和群众获得感。`;
  }

  if (seed.type === "renjiguanxi") {
    return `答题思路：先摆正心态，再主动沟通，最后用制度和结果推动协作。\n完整答案：面对${topic}，我不会先急着评价对错，而是从工作大局出发处理关系。第一，反思自己沟通是否充分、分工是否清晰，避免把问题简单归因于他人。第二，主动找相关同事沟通，肯定对方经验和付出，说明当前任务目标、时间要求和风险点，争取形成共识。第三，必要时把分工、节点、标准书面化，让协作有依据、有边界。第四，在推进中多补台不拆台，遇到困难共同想办法，重大问题及时请示领导。这样既能把事办成，也能把关系理顺。\n金句标注：机关协作不是单打独斗，而是在同一目标下各尽其责、相互成就。`;
  }

  if (seed.type === "ziworenzhi") {
    return `答题思路：围绕岗位认知、个人匹配、未来改进作答。\n完整答案：${topic}这类题目，我会把个人经历放到岗位要求中回答。公务员岗位需要政治可靠、责任心强、学习能力强，也需要耐心细致地服务群众。我过去在学习、实践或团队任务中形成了较强的执行力和沟通意识，遇到复杂任务能够先拆解目标，再按节点推进。当然，我也清楚自己还需要提升政策理解深度和基层实践经验。进入岗位后，我会坚持向书本学、向同事学、向群众学，在具体工作中磨炼作风，把个人成长融入服务群众和推动发展的过程。\n金句标注：选择公务员不是选择安稳，而是选择在平凡岗位上承担公共责任。`;
  }

  return `答题思路：先共情安抚，再解释政策，随后给出可操作方案。\n完整答案：您好，我理解您现在比较着急，换成我也希望问题马上有明确说法。关于${topic}，我先把目前掌握的情况和办理依据向您说明清楚：我们不是简单拒绝或推脱，而是要按照规定把事实核准、材料补齐、流程走实。接下来我会帮您一起梳理还缺什么、能现场办什么、需要转办什么，并留下联系方式和办理时限。您也可以监督我们的处理进度。请您先坐下来，我们一步一步把问题解决好。\n金句标注：群众来办事，带来的不只是材料，更是对政府服务的信任。`;
}

export const publicQuestions: Question[] = publicQuestionSeeds.map((seed) => {
  const source = sources[seed.source];

  return {
    id: seed.id,
    year: seed.year,
    province: seed.province,
    type: seed.type,
    typeName: typeNameByType[seed.type],
    difficulty: seed.difficulty,
    title: seed.title,
    content: `${seed.title}（根据公开回忆题整理，题干做了轻度改写。）`,
    referenceAnswer: makeReferenceAnswer(seed),
    sourceName: source.name,
    sourceUrl: source.url
  };
});
