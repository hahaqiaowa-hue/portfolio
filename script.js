const frameLabel = document.querySelector(".frame-label");
const heroNote = document.querySelector(".hero-note");

const projectOne = document.querySelector("#project-01");
const projectTwo = document.querySelector("#project-02");
const projectThree = document.querySelector("#project-03");
const projectFour = document.querySelector("#project-04");
const projectFive = document.querySelector("#project-05");
const projectSix = document.querySelector("#project-06");
const aboutSection = document.querySelector("#about .about-copy");

const depthScenes = document.querySelectorAll("[data-depth-scene]");
const tiltLiteScenes = document.querySelectorAll("[data-tilt-lite]");

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

if (projectSix) {
  const summary = projectSix.querySelector(".project-summary");
  const cards = projectSix.querySelectorAll(".detail-card p");

  if (summary) {
    summary.textContent =
      "这个项目聚焦 AI 辅助游戏角色设计，结合角色关系、风格探索与造型测试，呈现从概念构思到视觉定稿的过程。";
  }

  if (cards.length >= 3) {
    cards[0].textContent =
      "围绕角色性格、家族关系与视觉辨识度，建立适合游戏叙事的角色设定方向。";
    cards[1].textContent =
      "通过手绘草图、风格测试与 AI 辅助生成，逐步探索角色造型、服装、配色与表情语言。";
    cards[2].textContent =
      "最终输出包括角色概念图、风格探索图与阶段性视觉方案，展示 AI 辅助角色设计的工作流程。";
  }
}

if (aboutSection) {
  aboutSection.textContent =
    "这里可以替换成个人介绍、创作方向、学校或工作状态以及联系方式。当前页面是单页滚动作品集，适合从上到下完整浏览。";
}

depthScenes.forEach((scene) => {
  const resetScene = () => {
    scene.style.setProperty("--bg-shift-x", "0px");
    scene.style.setProperty("--bg-shift-y", "0px");
    scene.style.setProperty("--glow-x", "50%");
    scene.style.setProperty("--glow-y", "50%");
  };

  resetScene();

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const shiftX = (px - 0.5) * -18;
    const shiftY = (py - 0.5) * -14;

    scene.style.setProperty("--bg-shift-x", `${shiftX}px`);
    scene.style.setProperty("--bg-shift-y", `${shiftY}px`);
    scene.style.setProperty("--glow-x", `${px * 100}%`);
    scene.style.setProperty("--glow-y", `${py * 100}%`);
  });

  scene.addEventListener("pointerleave", resetScene);
});

tiltLiteScenes.forEach((scene) => {
  const resetTilt = () => {
    scene.style.setProperty("--tilt-x", "0deg");
    scene.style.setProperty("--tilt-y", "0deg");
  };

  resetTilt();

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const tiltY = (px - 0.5) * 3.2;
    const tiltX = (0.5 - py) * 2.6;

    scene.style.setProperty("--tilt-x", `${tiltX}deg`);
    scene.style.setProperty("--tilt-y", `${tiltY}deg`);
  });

  scene.addEventListener("pointerleave", resetTilt);
});
