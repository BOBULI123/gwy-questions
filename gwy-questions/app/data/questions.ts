import { publicQuestions } from "@/app/data/public-questions";
import { publicQuestionsBatch2 } from "@/app/data/public-questions-batch-2";
import { publicQuestionsBatch3 } from "@/app/data/public-questions-batch-3";
import { publicQuestionsBatch4 } from "@/app/data/public-questions-batch-4";
import type { Question } from "@/lib/question-utils";

export const questions: Question[] = [
  // 综合分析（zonghefenxi）
  {
    id: "2026-guokao-001",
    year: 2026,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "某地推行'无事不扰'企业监管模式，减少对企业检查频次，有人担心这会放松监管，你怎么看？",
    content: "某地推行'无事不扰'企业监管模式，减少对企业检查频次，有人担心这会放松监管，你怎么看？"
  },
  {
    id: "2026-guokao-002",
    year: 2026,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "hard",
    title: "有人说，基层工作要'留痕'以证明做了事；也有人说，'留痕'太多增加负担。对此你怎么看？",
    content: "有人说，基层工作要'留痕'以证明做了事；也有人说，'留痕'太多增加负担。对此你怎么看？"
  },
  {
    id: "2025-jiangsu-001",
    year: 2025,
    province: "江苏",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "随着人工智能的发展，有人担心AI会取代公务员，你怎么看？",
    content: "随着人工智能的发展，有人担心AI会取代公务员，你怎么看？"
  },
  {
    id: "2025-shandong-001",
    year: 2025,
    province: "山东",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "easy",
    title: "'枫桥经验'强调小事不出村、大事不出镇。请结合基层治理，谈谈你的理解。",
    content: "'枫桥经验'强调小事不出村、大事不出镇。请结合基层治理，谈谈你的理解。"
  },
  {
    id: "2024-zhejiang-001",
    year: 2024,
    province: "浙江",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "hard",
    title: "浙江推行'最多跑一次'改革，但有人认为这会导致服务质量下降。你怎么看？",
    content: "浙江推行'最多跑一次'改革，但有人认为这会导致服务质量下降。你怎么看？"
  },
  
  // 人际关系（renjiguanxi）
  {
    id: "2026-guokao-003",
    year: 2026,
    province: "国考",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "easy",
    title: "你新到一个单位，领导安排你做一些琐碎的事务性工作，与你期望的相差甚远，你怎么办？",
    content: "你新到一个单位，领导安排你做一些琐碎的事务性工作，与你期望的相差甚远，你怎么办？"
  },
  {
    id: "2025-beijing-001",
    year: 2025,
    province: "北京",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "你和同事共同完成一项任务，同事经常迟到，导致进度滞后，领导批评了你，你怎么办？",
    content: "你和同事共同完成一项任务，同事经常迟到，导致进度滞后，领导批评了你，你怎么办？"
  },
  {
    id: "2025-guangdong-001",
    year: 2025,
    province: "广东",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "你提出的工作方案被领导否定，但同事的方案被采纳，你内心不平衡，怎么办？",
    content: "你提出的工作方案被领导否定，但同事的方案被采纳，你内心不平衡，怎么办？"
  },
  {
    id: "2024-sichuan-001",
    year: 2024,
    province: "四川",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "easy",
    title: "作为新人，老员工不愿意教你，还经常在领导面前说你的坏话，你怎么办？",
    content: "作为新人，老员工不愿意教你，还经常在领导面前说你的坏话，你怎么办？"
  },
  
  // 应急应变（yingjibian）
  {
    id: "2026-guokao-004",
    year: 2026,
    province: "国考",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "你正在接待群众上访，突然有记者要采访，且问题涉及单位敏感信息，你怎么办？",
    content: "你正在接待群众上访，突然有记者要采访，且问题涉及单位敏感信息，你怎么办？"
  },
  {
    id: "2025-henan-001",
    year: 2025,
    province: "河南",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "medium",
    title: "单位组织会议，突然停电，参会领导即将到达，你作为负责人怎么办？",
    content: "单位组织会议，突然停电，参会领导即将到达，你作为负责人怎么办？"
  },
  {
    id: "2025-hubei-001",
    year: 2025,
    province: "湖北",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "你在执法过程中，被群众拍照并上传网络，配文'暴力执法'，引发舆情，你怎么办？",
    content: "你在执法过程中，被群众拍照并上传网络，配文'暴力执法'，引发舆情，你怎么办？"
  },
  {
    id: "2024-fujian-001",
    year: 2024,
    province: "福建",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "medium",
    title: "台风来临前，你负责疏散低洼地区群众，但有老人不愿离开，你怎么办？",
    content: "台风来临前，你负责疏散低洼地区群众，但有老人不愿离开，你怎么办？"
  },
  
  // 组织管理（zuzhiguanli）
  {
    id: "2026-guokao-005",
    year: 2026,
    province: "国考",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "领导让你组织一次'优化营商环境'的调研活动，你会如何开展？",
    content: "领导让你组织一次'优化营商环境'的调研活动，你会如何开展？"
  },
  {
    id: "2025-shanghai-001",
    year: 2025,
    province: "上海",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "easy",
    title: "单位要组织一次新员工培训，领导交由你负责，你会怎么安排？",
    content: "单位要组织一次新员工培训，领导交由你负责，你会怎么安排？"
  },
  {
    id: "2025-jiangsu-002",
    year: 2025,
    province: "江苏",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "hard",
    title: "市里要举办'人才招引'活动，要求吸引500名高层次人才参加，你会如何策划？",
    content: "市里要举办'人才招引'活动，要求吸引500名高层次人才参加，你会如何策划？"
  },
  {
    id: "2024-shandong-002",
    year: 2024,
    province: "山东",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位要开展'党史学习教育'系列活动，领导让你负责，你会如何组织？",
    content: "单位要开展'党史学习教育'系列活动，领导让你负责，你会如何组织？"
  },
  
  // 自我认知（ziworenzhi）
  {
    id: "2026-guokao-006",
    year: 2026,
    province: "国考",
    type: "ziworenzhi",
    typeName: "自我认知",
    difficulty: "easy",
    title: "请做一个自我介绍，并谈谈你为什么报考这个岗位。",
    content: "请做一个自我介绍，并谈谈你为什么报考这个岗位。"
  },
  {
    id: "2025-zhejiang-002",
    year: 2025,
    province: "浙江",
    type: "ziworenzhi",
    typeName: "自我认知",
    difficulty: "medium",
    title: "你的优点和缺点分别是什么？结合岗位谈谈你如何看待自己的缺点。",
    content: "你的优点和缺点分别是什么？结合岗位谈谈你如何看待自己的缺点。"
  },
  {
    id: "2025-beijing-002",
    year: 2025,
    province: "北京",
    type: "ziworenzhi",
    typeName: "自我认知",
    difficulty: "medium",
    title: "如果你被录取，发现实际工作内容与预期相差很大，你会怎么办？",
    content: "如果你被录取，发现实际工作内容与预期相差很大，你会怎么办？"
  },
  
  // 情景模拟（qingjingmoni）
  {
    id: "2026-guokao-007",
    year: 2026,
    province: "国考",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "hard",
    title: "你是社区工作人员，一位居民因楼上漏水问题情绪激动地来找你，请现场模拟你如何与他沟通。",
    content: "你是社区工作人员，一位居民因楼上漏水问题情绪激动地来找你，请现场模拟你如何与他沟通。"
  },
  {
    id: "2025-guangdong-002",
    year: 2025,
    province: "广东",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "medium",
    title: "你是窗口工作人员，一位群众因材料不全无法办理业务，在大厅吵闹，请模拟你如何劝说他。",
    content: "你是窗口工作人员，一位群众因材料不全无法办理业务，在大厅吵闹，请模拟你如何劝说他。"
  },
  {
    id: "2024-jiangsu-003",
    year: 2024,
    province: "江苏",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "hard",
    title: "你是项目负责人，团队成员因分工不均产生矛盾，导致项目停滞，请模拟你如何召开协调会。",
    content: "你是项目负责人，团队成员因分工不均产生矛盾，导致项目停滞，请模拟你如何召开协调会。"
  },
  
  // 补充更多题目以达到30道
  {
    id: "2025-anhui-001",
    year: 2025,
    province: "安徽",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "有人认为，公务员应该'多做多错，少做少错，不做不错'，你怎么看？",
    content: "有人认为，公务员应该'多做多错，少做少错，不做不错'，你怎么看？"
  },
  {
    id: "2025-hunan-001",
    year: 2025,
    province: "湖南",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "medium",
    title: "你负责的项目出现数据泄露，涉及群众隐私，上级要求立即处理，你会怎么做？",
    content: "你负责的项目出现数据泄露，涉及群众隐私，上级要求立即处理，你会怎么做？"
  },
  {
    id: "2024-henan-002",
    year: 2024,
    province: "河南",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "easy",
    title: "领导安排你和有矛盾的同事一起出差，你会如何处理？",
    content: "领导安排你和有矛盾的同事一起出差，你会如何处理？"
  },
  {
    id: "2025-sichuan-002",
    year: 2025,
    province: "四川",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "单位要组织一次'乡村振兴'主题党日活动，你会如何策划？",
    content: "单位要组织一次'乡村振兴'主题党日活动，你会如何策划？"
  },
  {
    id: "2024-guokao-008",
    year: 2024,
    province: "国考",
    type: "ziworenzhi",
    typeName: "自我认知",
    difficulty: "easy",
    title: "请谈谈你过去经历中，最让你有成就感的一件事。",
    content: "请谈谈你过去经历中，最让你有成就感的一件事。"
  },
  {
    id: "2025-shandong-003",
    year: 2025,
    province: "山东",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "medium",
    title: "你是驻村第一书记，村民因土地流转补偿款未到位而聚集上访，请模拟你如何安抚大家。",
    content: "你是驻村第一书记，村民因土地流转补偿款未到位而聚集上访，请模拟你如何安抚大家。"
  },
  {
    id: "2025-zhejiang-003",
    year: 2025,
    province: "浙江",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "hard",
    title: "'共同富裕'背景下，有人认为应该'杀富济贫'，你怎么看？",
    content: "'共同富裕'背景下，有人认为应该'杀富济贫'，你怎么看？"
  },
  {
    id: "2024-guangdong-003",
    year: 2024,
    province: "广东",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "你正在主持一场直播带岗活动，突然网络中断，直播间涌入大量负面评论，你怎么办？",
    content: "你正在主持一场直播带岗活动，突然网络中断，直播间涌入大量负面评论，你怎么办？"
  },
  {
    id: "2025-jiangsu-004",
    year: 2025,
    province: "江苏",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "你工作出色，领导表扬你，但同事因此疏远你，认为你爱出风头，你怎么办？",
    content: "你工作出色，领导表扬你，但同事因此疏远你，认为你爱出风头，你怎么办？"
  },
  {
    id: "2024-beijing-003",
    year: 2024,
    province: "北京",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "hard",
    title: "为落实'双减'政策，你所在的教育局要组织一次校外培训机构专项整治，你会如何开展？",
    content: "为落实'双减'政策，你所在的教育局要组织一次校外培训机构专项整治，你会如何开展？"
  },
  {
    id: "2026-guokao-009",
    year: 2026,
    province: "国考",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "hard",
    title: "2026国考模拟题风格：政府工作报告提出持续推进“人工智能+”行动，有人认为基层政务应用AI越多越好，也有人担心会削弱服务温度与公平，你怎么看？",
    content: "2026国考模拟题风格：政府工作报告提出持续推进“人工智能+”行动，有人认为基层政务应用AI越多越好，也有人担心会削弱服务温度与公平，你怎么看？"
  },
  {
    id: "2026-zhejiang-004",
    year: 2026,
    province: "浙江",
    type: "zonghefenxi",
    typeName: "综合分析",
    difficulty: "medium",
    title: "2026浙江模拟题风格：多地推进“高效办成一件事”，有干部认为流程越简越好，也有人担心责任边界模糊、风险上移。对此你怎么理解？",
    content: "2026浙江模拟题风格：多地推进“高效办成一件事”，有干部认为流程越简越好，也有人担心责任边界模糊、风险上移。对此你怎么理解？"
  },
  {
    id: "2026-hebei-001",
    year: 2026,
    province: "河北",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "medium",
    title: "2026河北模拟题风格：你牵头推进老旧小区加装电梯，社区、物业和居民代表意见分歧较大，项目一度停滞，领导让你继续协调，你怎么办？",
    content: "2026河北模拟题风格：你牵头推进老旧小区加装电梯，社区、物业和居民代表意见分歧较大，项目一度停滞，领导让你继续协调，你怎么办？"
  },
  {
    id: "2026-guangdong-004",
    year: 2026,
    province: "广东",
    type: "renjiguanxi",
    typeName: "人际关系",
    difficulty: "hard",
    title: "2026广东模拟题风格：你与一名业务能力强但沟通方式比较直接的同事共同下沉企业走访，企业负责人只愿意和你沟通，同事因此有情绪，你怎么处理？",
    content: "2026广东模拟题风格：你与一名业务能力强但沟通方式比较直接的同事共同下沉企业走访，企业负责人只愿意和你沟通，同事因此有情绪，你怎么处理？"
  },
  {
    id: "2026-hubei-002",
    year: 2026,
    province: "湖北",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "hard",
    title: "2026湖北模拟题风格：政务服务平台升级首日，群众集中反映资格认证失败，现场排队、网上吐槽并持续发酵，窗口秩序也受到影响。作为值班负责人，你怎么办？",
    content: "2026湖北模拟题风格：政务服务平台升级首日，群众集中反映资格认证失败，现场排队、网上吐槽并持续发酵，窗口秩序也受到影响。作为值班负责人，你怎么办？"
  },
  {
    id: "2026-fujian-002",
    year: 2026,
    province: "福建",
    type: "yingjibian",
    typeName: "应急应变",
    difficulty: "medium",
    title: "2026福建模拟题风格：汛期临时安置点物资发放时，有群众质疑分配不公并在短视频平台直播，引发围观。你在现场负责统筹处置，会怎么做？",
    content: "2026福建模拟题风格：汛期临时安置点物资发放时，有群众质疑分配不公并在短视频平台直播，引发围观。你在现场负责统筹处置，会怎么做？"
  },
  {
    id: "2025-beijing-004",
    year: 2025,
    province: "北京",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "medium",
    title: "2025北京模拟题风格：围绕发展银发经济、提升为老服务质量，单位计划开展一次社区养老服务需求调研和政策宣传活动，领导交由你组织，你如何安排？",
    content: "2025北京模拟题风格：围绕发展银发经济、提升为老服务质量，单位计划开展一次社区养老服务需求调研和政策宣传活动，领导交由你组织，你如何安排？"
  },
  {
    id: "2025-shanghai-002",
    year: 2025,
    province: "上海",
    type: "zuzhiguanli",
    typeName: "组织管理",
    difficulty: "hard",
    title: "2025上海模拟题风格：为落实高校毕业生就业支持政策，你单位准备举办一场“政策宣讲+岗位对接+职业指导”进校园活动，你会如何策划实施？",
    content: "2025上海模拟题风格：为落实高校毕业生就业支持政策，你单位准备举办一场“政策宣讲+岗位对接+职业指导”进校园活动，你会如何策划实施？"
  },
  {
    id: "2026-shandong-004",
    year: 2026,
    province: "山东",
    type: "ziworenzhi",
    typeName: "自我认知",
    difficulty: "medium",
    title: "2026山东模拟题风格：你报考的是基层岗位，有人说基层工作琐碎、压力大、成长慢。请结合你的经历，谈谈你为什么仍然选择基层、准备如何长期坚持。",
    content: "2026山东模拟题风格：你报考的是基层岗位，有人说基层工作琐碎、压力大、成长慢。请结合你的经历，谈谈你为什么仍然选择基层、准备如何长期坚持。"
  },
  {
    id: "2026-jiangsu-005",
    year: 2026,
    province: "江苏",
    type: "qingjingmoni",
    typeName: "情景模拟",
    difficulty: "medium",
    title: "2026江苏模拟题风格：你是政务服务中心工作人员，一位老人因异地医保报销流程不熟悉、重复跑了几趟后情绪激动。请现场模拟你如何与他沟通。",
    content: "2026江苏模拟题风格：你是政务服务中心工作人员，一位老人因异地医保报销流程不熟悉、重复跑了几趟后情绪激动。请现场模拟你如何与他沟通。"
  }
];

questions.push(...publicQuestions);
questions.push(...publicQuestionsBatch2);
questions.push(...publicQuestionsBatch3);
questions.push(...publicQuestionsBatch4);
