const frameLabel = document.querySelector(".frame-label");
const heroNote = document.querySelector(".hero-note");

const projectOne = document.querySelector("#project-01");
const projectTwo = document.querySelector("#project-02");
const projectThree = document.querySelector("#project-03");
const projectFour = document.querySelector("#project-04");
const projectFive = document.querySelector("#project-05");
const aboutSection = document.querySelector("#about .about-copy");

if (frameLabel) frameLabel.remove();
if (heroNote) heroNote.remove();

if (projectOne) {
  const summary = projectOne.querySelector(".project-summary");
  const cards = projectOne.querySelectorAll(".detail-card p");

  if (summary) {
    summary.textContent =
      "这个项目从文化调研出发，把场景、人物、仪式和空间关系整理成一套可视化叙事，并进一步发展为 AI 概念视频的前期世界观设定。";
  }

  if (cards.length >= 3) {
    cards[0].textContent =
      "以文化调研为基础，提取地景、活动、角色和叙事节点，并把它们组织成可被观看和扩展的视觉系统。";
    cards[1].textContent =
      "通过路线分析、空间分区、场景设定和角色编排，把研究内容转译成适合后续影像发展的概念图谱。";
    cards[2].textContent =
      "最终输出不仅是调研图和叙事框架，也为后续 AI 概念视频提供了镜头语言、场景结构和视觉方向。";
  }
}

if (projectTwo) {
  const summary = projectTwo.querySelector(".project-summary");
  const cards = projectTwo.querySelectorAll(".detail-card p");

  if (summary) {
    summary.textContent =
      "这个项目是一个结合 AR 空间识别与移动端交互的关怀型 App 设计，面向老年人与家庭成员的日常陪伴、记忆辅助和家庭沟通需求。";
  }

  if (cards.length >= 3) {
    cards[0].textContent =
      "如何将 AR 空间识别、语音交互和家庭沟通功能整合进一个适合老年用户的移动端关怀体验。";
    cards[1].textContent =
      "通过 AR 家庭空间导航、语音快速提问、生活记录、家人联系和微决策辅助等模块，将复杂的照护需求转化为清晰的日常使用场景。";
    cards[2].textContent =
      "最终输出包括核心 App 页面、AR 交互界面、高保真 UI、功能流程和视觉系统，展示了一个结合 AR 与家庭关怀的移动端产品概念。";
  }
}

if (projectThree) {
  const summary = projectThree.querySelector(".project-summary");
  const cards = projectThree.querySelectorAll(".detail-card p");

  if (summary) {
    summary.textContent =
      "这里放入了 VR 项目的场景和截图，用来展示空间叙事、沉浸氛围与角色关系的表达方式。";
  }

  if (cards.length >= 3) {
    cards[0].textContent =
      "围绕空间、角色和观看路径建立具有沉浸感的虚拟场景。";
    cards[1].textContent =
      "通过场景搭建、角色编排与镜头测试形成完整的视觉体验方向。";
    cards[2].textContent =
      "最终呈现为一组 VR 场景截图和体验片段，强调空间感与叙事感。";
  }
}

if (projectFour) {
  const summary = projectFour.querySelector(".project-summary");
  const cards = projectFour.querySelectorAll(".detail-card p");

  if (summary) {
    summary.textContent =
      "这个项目以虚拟相册空间为核心，将家庭照片、书架、漂浮物件和空间装置组合成一个可以被进入和观看的记忆场景。";
  }

  if (cards.length >= 3) {
    cards[0].textContent =
      "通过把相册从平面物件转化成可进入的空间，重新组织照片、记忆和观看关系。";
    cards[1].textContent =
      "空间里结合了书架、照片装置和漂浮物件，让档案感和沉浸感同时存在。";
    cards[2].textContent =
      "观者像在记忆内部移动，而不是只浏览图片本身，使项目更接近一种叙事式展览。";
  }
}

if (projectFive) {
  const summary = projectFive.querySelector(".project-summary");
  const cards = projectFive.querySelectorAll(".detail-card p");

  if (summary) {
    summary.textContent =
      "这是一个以修手机为主题的轻量 VR 项目，重点展示场景搭建、物件观察和基础交互尝试。";
  }

  if (cards.length >= 3) {
    cards[0].textContent =
      "以维修工作台为核心，模拟用户进入一个与电子设备维护相关的虚拟操作场景。";
    cards[1].textContent =
      "通过桌面、显示器、座椅和设备陈设建立一个带有工作室感的空间氛围。";
    cards[2].textContent =
      "作为小项目，它更适合展示交互尝试和场景表达，而不是展开成长篇案例。";
  }
}

if (aboutSection) {
  aboutSection.textContent =
    "这里可以替换成个人介绍、创作方向、学校或工作状态以及联系方式。当前页面是单页滚动作品集，适合从上到下完整浏览。";
}

const revealTargets = document.querySelectorAll(
  [
    ".hero-heading",
    ".cover-card",
    ".project-section .section-head",
    ".project-cover",
    ".project-summary",
    ".detail-card",
    ".project-01-side-mini",
    ".project-01-side-image",
    ".storyboard-panel",
    ".storyboard-shot",
    ".gallery-tile",
    ".about-copy"
  ].join(", ")
);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll", "is-visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.setProperty("--reveal-delay", `${Math.min(index * 24, 180)}ms`);
    revealObserver.observe(target);
  });
}
