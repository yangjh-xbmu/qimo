
export interface PersonalInfo {
  name: string;
  nickname: string;
  title: string;
  email: string;
  location: string;
  avatar: string;
  bio: string;
}

export interface Work {
  id: number;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
  link: string;
}

export interface Experience {
  id: number;
  date: string;
  title: string;
  description: string;
  institution: string;
  type: 'project' | 'education' | 'work';
}

export interface Values {
  coreBelief: string;
  creativePhilosophy: string;
  professionalPursuit: string;
}

export interface Scholar {
  id: number;
  name: string;
  field: string;
  influence: string;
  recommendation: string;
  image: string;
}

export const personalInfo: PersonalInfo = {
  name: "林悦然",
  nickname: "悦然",
  title: "戏剧与影视学专业硕士 | 电影导演 | 编剧",
  email: "yueran.lin@example.com",
  location: "北京",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d49d?w=400&h=400&fit=crop&crop=face",
  bio: "专注于实验电影与沉浸式戏剧创作，探索媒介边界与观众参与的新形式。相信艺术是连接个体与世界的桥梁。"
};

export const works: Work[] = [
  {
    id: 1,
    title: "《回声之间》",
    type: "实验短片",
    year: 2023,
    description: "一部探索声音与记忆关系的实验电影，采用双线叙事结构，将传统胶片摄影与数字投影技术结合。该作品获得2023年大学生电影节实验单元最佳影片奖。",
    image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?w=600&h=400&fit=crop",
    link: "https://example.com/work1"
  },
  {
    id: 2,
    title: "《镜面剧场》",
    type: "沉浸式戏剧",
    year: 2022,
    description: "在废弃工厂改造的演出空间，观众可自由选择视角和路径，形成独特的叙事体验。探讨身份认同与自我认知的主题。",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop",
    link: "https://example.com/work2"
  },
  {
    id: 3,
    title: "《屏幕之后：数字时代的表演性研究》",
    type: "学术论文",
    year: 2023,
    description: "发表于《当代戏剧研究》期刊，分析社交媒体时代表演性的转变，探讨虚拟身份与真实自我的边界模糊问题。",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    link: "https://example.com/work3"
  },
  {
    id: 4,
    title: "《城市折叠》",
    type: "跨媒介艺术项目",
    year: 2024,
    description: "结合AR技术、声音装置与现场表演，在城市不同空间展开的参与式艺术体验。探索城市空间、记忆与集体叙事的关系。",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    link: "https://example.com/work4"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    date: "2024.09 - 至今",
    title: "独立电影项目《午夜回响》",
    description: "担任导演与编剧，项目入选国家艺术基金青年创作人才支持计划。目前处于前期筹备阶段，计划采用混合现实技术呈现。",
    institution: "独立创作",
    type: "project"
  },
  {
    id: 2,
    date: "2022.09 - 2024.06",
    title: "中央戏剧学院 戏剧与影视学硕士",
    description: "研究方向：跨媒介叙事与观众参与。硕士论文《沉浸式戏剧中的身体与空间关系研究》获优秀毕业论文奖。",
    institution: "中央戏剧学院",
    type: "education"
  },
  {
    id: 3,
    date: "2023.03 - 2023.08",
    title: "北京国际青年戏剧节 策展助理",
    description: "负责实验戏剧单元作品筛选与艺术家联络，策划了'边界探索'主题展映与研讨会。",
    institution: "北京国际青年戏剧节组委会",
    type: "work"
  },
  {
    id: 4,
    date: "2021.07 - 2022.06",
    title: "《剧场前沿》杂志 特约撰稿人",
    description: "撰写当代剧场艺术评论与导演访谈，发表文章12篇，重点关注亚洲新兴导演的创作实践。",
    institution: "《剧场前沿》杂志社",
    type: "work"
  },
  {
    id: 5,
    date: "2018.09 - 2022.06",
    title: "北京电影学院 戏剧影视文学学士",
    description: "主修戏剧影视文学，辅修数字媒体艺术。在校期间创作短片作品3部，参与戏剧制作5部。",
    institution: "北京电影学院",
    type: "education"
  }
];

export const values: Values = {
  coreBelief: "艺术的核心在于建立连接——连接个体与群体，连接现实与想象，连接过去与未来。我相信戏剧与电影不仅是娱乐或表达的媒介，更是理解人性、探索可能性的工具。",
  creativePhilosophy: "我的创作哲学强调'参与而非观看'。我希望打破传统的观众-表演者二元对立，创造更平等、更开放的交流空间。形式服务于内容，但形式本身也能成为内容的一部分。",
  professionalPursuit: "致力于探索传统剧场与新兴技术的融合可能，特别是虚拟现实、增强现实在叙事中的应用。长期目标是建立跨学科创作团队，开发新型表演与观影体验。"
};

export const scholars: Scholar[] = [
  {
    id: 1,
    name: "尤金尼奥·巴尔巴",
    field: "戏剧人类学、欧丁剧院",
    influence: "巴尔巴的'前表现性'理论和跨文化剧场实践深刻影响了我的创作方法，特别是对身体训练的重视和对表演者-观众能量交换的理解。",
    recommendation: "《纸舟：戏剧人类学导引》《戏剧人类学辞典》",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "列夫·曼诺维奇",
    field: "新媒体理论、数字文化",
    influence: "曼诺维奇对新媒体语言的分析框架为我的跨媒介创作提供了理论支撑，特别是关于数据库叙事和界面美学的讨论。",
    recommendation: "《新媒体语言》《软件掌控一切》",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "铃木忠志",
    field: "身体表演理论、导演艺术",
    influence: "铃木方法对身体能量的关注和'动物能量'的概念，启发了我对表演者身体与空间关系的探索。",
    recommendation: "《文化就是身体》《铃木忠志的戏剧》",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "米歇尔·福柯",
    field: "权力理论、空间哲学",
    influence: "福柯对空间与权力关系的分析，为我的沉浸式戏剧空间设计提供了批判性视角，特别是关于'异托邦'的概念。",
    recommendation: "《规训与惩罚》《不同空间》",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
  }
];
