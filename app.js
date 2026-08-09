const projectConfigs = [
  {
    id: "awe",
    title: "追觅 AWE Sky Universe",
    type: "AWE 展会 / 沉浸式品牌空间",
    category: "expo",
    featured: true,
    directories: ["05_awe_sky_universe"],
    cover: "./assets/works/05_awe_sky_universe/awe_sky_universe_001_display_overview.jpg",
    description: "面向高客流展会场景打造的沉浸式品牌空间，连接产品展示、观众动线与传播触点。",
    highlights: [
      "负责低空、航空与航天主题展区的 0-1 策划。",
      "整合观众路线、互动模块与 KOL 打卡触点。",
      "简历素材记录 2.8w+ 现场参观与 1200w+ 公域曝光。",
    ],
  },
  {
    id: "aerospace",
    title: "商业航天展",
    type: "展会策划 / 产品营销",
    category: "expo",
    featured: true,
    directories: ["04_aerospace_expo", "06_live_video"],
    cover: "./assets/works/04_aerospace_expo/aerospace_expo_022_wuxi_expo_site_photo.jpg",
    description: "围绕航天产品叙事建立的展会系统，覆盖 KV、手册触点、展台内容与现场影像记录。",
    highlights: [
      "沉淀可复用的展会视觉输出与供应商交付 SOP。",
      "将产品价值转化为面向投资方、政府与行业观众的展示语言。",
      "包含现场视频素材，作为落地执行的可视化证明。",
    ],
  },
  {
    id: "samsung",
    title: "Samsung HA POP System",
    type: "产品营销 / 终端 POP",
    category: "retail",
    featured: false,
    directories: ["01_samsung_ha_pop"],
    cover: "./assets/works/01_samsung_ha_pop/samsung_ha_pop_008_slide_04_img_01_qr_solution_pop_hd.png",
    description: "面向消费者的家电 POP 物料系统，把产品利益点转化为清晰、高级的门店沟通。",
    highlights: [
      "覆盖冰箱、洗衣机、洗烘套装与 Air Dresser 等产品利益点表达。",
      "物料逻辑与上市节奏、终端执行保持一致。",
      "平衡产品科技感、可读性与高端零售质感。",
    ],
  },
  {
    id: "xiaomi-phone",
    title: "Xiaomi 手机陈列道具",
    type: "终端道具 / 全球陈列",
    category: "retail",
    featured: false,
    directories: ["02_xiaomi_phone_props"],
    cover: "./assets/works/02_xiaomi_phone_props/xiaomi_phone_props_037_slide_12_img_01_xiaomi_13.jpg",
    description: "服务手机新品上市与海外零售渠道的陈列道具、橱窗与展示系统，便于多市场复用执行。",
    highlights: [
      "支持多种门店类型下的海外终端陈列一致性。",
      "为不同代际手机产品创建上市展示道具。",
      "通过模块化零售叙事提升产品可见度。",
    ],
  },
  {
    id: "eco-products",
    title: "生态产品陈列道具",
    type: "AIoT / 生态产品展示",
    category: "retail",
    featured: false,
    directories: ["03_eco_products_props"],
    cover: "./assets/works/03_eco_products_props/eco_products_props_060_slide_26_img_08_xiaomi_smart_sensor_set.png",
    description: "面向 Pad、Band、空气净化器、滑板车与智能传感器等生态产品的道具与展示资产。",
    highlights: [
      "将手机陈列语言延展到 AIoT 与可穿戴品类。",
      "通过模块化道具梳理产品层级。",
      "适配跨市场门店执行需求。",
    ],
  },
  {
    id: "roadshow",
    title: "路演 / 快闪店",
    type: "活动空间 / 线下激活",
    category: "campaign",
    featured: false,
    directories: ["03_roadshow_popup_store"],
    cover: "./assets/works/03_roadshow_popup_store/other_asset_022_wechat_source_visual.jpg",
    description: "围绕快速识别、拍照传播与高效搭建组织的线下流量场景。",
    highlights: [
      "适合短周期活动快速部署。",
      "通过强视觉锚点支持用户参与和社交传播。",
      "由现有路演与快闪店源素材归类整理。",
    ],
  },
  {
    id: "events",
    title: "节日活动设计",
    type: "节日活动 / 终端视觉",
    category: "campaign",
    featured: false,
    directories: ["04_special_events"],
    cover: "./assets/works/04_special_events/special_events_070_slide_32_img_01_awesome_2021_anniversary_2021_mi_fan_festival.jpg",
    description: "覆盖 Mi Fan Festival、圣诞、周年庆、Black Friday 与 Valentine's Day 等节日零售场景。",
    highlights: [
      "为海外门店场景创建活动视觉资产。",
      "兼顾主题识别度与实际终端安装逻辑。",
      "服务门店引流、转化与节日氛围营造。",
    ],
  },
  {
    id: "guideline",
    title: "陈列标准体系",
    type: "品牌标准 / 执行手册",
    category: "guideline",
    featured: false,
    directories: ["05_display_guideline"],
    cover: "./assets/works/05_display_guideline/display_guideline_077_slide_37_img_01_xiaomi_store_display_guideline.png",
    description: "围绕门店陈列、区域划分、AIoT 连接逻辑与新品展示标准建立的结构化执行指引。",
    highlights: [
      "把视觉决策转化为可复用的运营标准。",
      "用清晰执行语言支持全球零售团队。",
      "连接品牌一致性与本地市场落地。",
    ],
  },
  {
    id: "store-support",
    title: "全球门店支持",
    type: "门店分区 / 零售运营",
    category: "guideline",
    featured: false,
    directories: ["06_samsung_store_support"],
    cover: "./assets/works/06_samsung_store_support/store_support_081_slide_42_img_01_italy_xiaomi_store_zoning_1_0_store_design_146_sqm.png",
    description: "覆盖国际零售场景中的门店分区、开业支持与渠道执行资产。",
    highlights: [
      "根据不同国家、不同店型，进行区域规划逻辑。",
      "连接总部标准与本地执行反馈。",
      "用于展示运营型设计思维与落地能力。",
    ],
  },
  {
    id: "early",
    title: "早期视觉作品",
    type: "时尚视觉陈列",
    category: "archive",
    featured: false,
    directories: ["07_early_works"],
    cover: "./assets/works/07_early_works/early_works_095_slide_49_img_01_saint_laurent_paris_collection_au_tomne_hiver_17.png",
    description: "早期视觉陈列作品，覆盖时尚展示、造型呈现与零售叙事。",
    highlights: [
      "呈现构图、节奏与陈列基本功。",
      "更适合作为视觉背景层，而非主要求职案例。",
      "面向企业营销岗位时可按需弱化或隐藏。",
    ],
  },
];

const fallbackManifest = [];
let projects = [];

const grid = document.querySelector("#workGrid");
const modal = document.querySelector("#projectModal");
const modalMedia = document.querySelector("#modalMedia");
const modalGallery = document.querySelector("#modalGallery");
const modalTitle = document.querySelector("#modalTitle");
const modalType = document.querySelector("#modalType");
const modalDescription = document.querySelector("#modalDescription");
const modalHighlights = document.querySelector("#modalHighlights");
let activeProject = null;
let activeAssetIndex = 0;
const assetVersion = "2026080934";

async function loadManifest() {
  try {
    const response = await fetch(`./assets/works-manifest.txt?v=${assetVersion}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Manifest HTTP ${response.status}`);
    const text = await response.text();
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => /\.(jpe?g|png|webp|mp4)$/i.test(line));
  } catch (error) {
    console.warn("无法加载 works-manifest.txt。请使用本地服务器预览网站。", error);
    return fallbackManifest;
  }
}


function assetLabel(path, index) {
  const filename = path.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
  const contentLabels = [
    ["samsung_ha_pop_qr_solution_complete_hd", "QR solution"],
    ["qr_solution_pop", "QR solution"],
    ["ref_pop_and_exp_props", "\u0052\u0045\u0046 \u5c55\u793a\u9053\u5177"],
    ["ref_pop_", "\u51b0\u7bb1 POP"],
    ["wm_and_dv_pop", "\u6d17\u70d8 POP"],
    ["combo_pop", "Combo POP"],
    ["air_dresser_pop", "Air Dresser"],
    ["smartthings_fixture", "SmartThings"],
    ["xiaomi_13", "Xiaomi 13"],
    ["xiaomi_12", "Xiaomi 12"],
    ["xiaomi_11t", "Xiaomi 11T"],
    ["display_props", "Display props"],
    ["xiaomi_11_lite", "Xiaomi 11 Lite"],
    ["xiaomi_11", "Xiaomi 11"],
    ["redmi_note_12", "Redmi Note 12"],
    ["redmi_note_11", "Redmi Note 11"],
    ["redmi_note_10", "Redmi Note 10"],
    ["window_display", "Window display"],
    ["xiaomi_pad_5", "Xiaomi Pad 5"],
    ["xiaomi_band_6", "Xiaomi Band 6"],
    ["xiaomi_air_purifier", "Air Purifier"],
    ["xiaomi_smart_sensor_set", "Smart Sensor"],
    ["xiaomi_scooter", "Scooter"],
    ["phone_plus_wearables_props", "Phone + Wearables"],
    ["wechat_source_visual", "Samsung roadshow"],
    ["aerospace_expo_020_engine_leaflet_design", "\u53d1\u52a8\u673a\u5ba3\u4f20\u5355\u9875"],
    ["aerospace_expo_021_shanghai_expo_visual", "\u4e0a\u6d77\u5c55\u89c6\u89c9"],
    ["aerospace_expo_022_wuxi_expo_site_photo", "\u65e0\u9521\u73b0\u573a"],
    ["aerospace_expo_023_xingsuo_key_visual", "\u661f\u68ad KV"],
    ["live_video_001_wuxi_aerospace_expo_site_walkthrough", "\u65e0\u9521\u5c55\u4f1a\u89c6\u9891"],
    ["awe_sky_universe_001_display_overview", "\u822a\u5929\u5c55\u533a"],
    ["awe_sky_universe_002_display_overview", "\u5c55\u533a\u603b\u89c8"],
    ["awe_sky_universe_003_site_installation_photo", "\u5c55\u533a\u603b\u89c8"],
    ["awe_sky_universe_004_site_installation_photo", "\u5c55\u533a\u603b\u89c8"],
    ["awe_sky_universe_005_site_installation_photo", "\u822a\u5929\u5c55\u533a\uff08\u5927\u4f6c\u751c\uff09"],
    ["awe_sky_universe_006_site_installation_photo", "\u822a\u5929\u5c55\u533a\uff08\u5927\u4f6c\u751c\uff09"],
    ["awe_sky_universe_007_site_installation_photo", "航天展区"],
    ["awe_sky_universe_008_site_installation_photo", "航天展区"],
    ["awe_sky_universe_009_site_installation_photo", "航天展区"],
    ["awe_sky_universe_010_site_installation_photo", "航天展区"],
    ["awe_sky_universe_011_site_installation_photo", "航空展区（大佬甜）"],
    ["awe_sky_universe_012_site_installation_photo", "航天展区"],
    ["2022_mi_fan_festival", "2022 Mi Fan"],
    ["2021_black_friday", "Black Friday"],
    ["2021_anniversary", "Anniversary"],
    ["2020_valentine", "Valentine"],
    ["2020_mi_fan_festival", "2020 Mi Fan"],
    ["2019_x_mas", "2019 X-mas"],
    ["x_mas", "X-mas"],
    ["samsung_product_2024", "Samsung 2024"],
    ["xiaomi_store_display_guideline", "Xiaomi Store"],
    ["retail_channel_display_guideline", "Retail Channel"],
    ["aiot_connection_guideline", "AIoT Connection"],
    ["new_products_display_guideline", "New Products"],
    ["italy_xiaomi_store_zoning", "Italy Store"],
    ["catalog_007_slide_02_img_06", "Samsung store"],
    ["store_support_084_slide_45_img_01", "Samsung store"],
    ["store_support_085_slide_45_img_02", "Samsung store"],
    ["store_support_086_slide_45_img_03", "Xiaomi store"],
    ["store_support_087_slide_45_img_04", "Xiaomi store"],
    ["store_support_088_slide_45_img_05", "Samsung store"],
    ["store_support_089_slide_45_img_06", "Samsung store"],
    ["store_support_090_slide_46_img_01", "Xiaomi store"],
    ["guatemala_xiaomi_store_zoning", "Guatemala Store"],
    ["philippines_xiaomi_store_zoning", "Philippines Store"],
    ["tianjin_jd_mall", "China Stores"],
    ["spain_xiaomi_store", "Europe Stores"],
    ["saint_laurent_homme", "Saint Laurent Homme"],
    ["saint_laurent_paris", "Saint Laurent Paris"],
    ["cos_summer_18", "COS Summer 18"],
    ["untitled", "Archive Visual"],
  ];
  const match = contentLabels.find(([key]) => filename.includes(key));
  if (match) return match[1];

  const afterImageMarker = filename.match(/img_\d+_(.+)$/);
  if (afterImageMarker) return formatAssetName(afterImageMarker[1], index, path);
  return formatAssetName(filename, index, path);
}

function formatAssetName(raw, index, path) {
  const cleaned = raw
    .replace(/slide_\d+/g, "")
    .replace(/img_\d+/g, "")
    .replace(/\b\d{3}\b/g, "")
    .replace(/_and_/g, " & ")
    .replace(/_plus_/g, " + ")
    .replace(/_/g, " ")
    .replace(/\bpop\b/g, "POP")
    .replace(/\bai\b/g, "AI")
    .replace(/\baiot\b/g, "AIoT")
    .replace(/\bkv\b/g, "KV")
    .replace(/\bmi\b/g, "Mi")
    .replace(/\bx\s*mas\b/g, "X-mas")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned) return cleaned.slice(0, 30);
  return path.toLowerCase().endsWith(".mp4") ? "\u65e0\u9521\u5c55\u4f1a\u89c6\u9891" : `\u56fe\u50cf ${index + 1}`;
}

function assetsForDirectories(manifest, directories) {
  return manifest
    .filter((path) => directories.some((dir) => path.includes(`/${dir}/`)))
    .map((path, index) => ({
      src: `./${path}`,
      type: path.toLowerCase().endsWith(".mp4") ? "video" : "image",
      name: path.split("/").pop(),
      label: assetLabel(path, index),
    }));
}

function normalizeProjectGallery(project, gallery) {
  if (project.id === "awe") {
    const order = [
      "awe_sky_universe_004_site_installation_photo",
      "awe_sky_universe_003_site_installation_photo",
      "awe_sky_universe_002_display_overview",
      "awe_sky_universe_001_display_overview",
      "awe_sky_universe_005_site_installation_photo",
      "awe_sky_universe_006_site_installation_photo",
    ];
    return [...gallery].sort((a, b) => {
      const aIndex = order.findIndex((key) => a.src.includes(key));
      const bIndex = order.findIndex((key) => b.src.includes(key));
      if (aIndex === -1 && bIndex === -1) return 0;
      return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
    });
  }

  if (project.id === "aerospace") {
    const order = [
      "aerospace_expo_022_wuxi_expo_site_photo",
      "live_video_001_wuxi_aerospace_expo_site_walkthrough",
      "aerospace_expo_021_shanghai_expo_visual",
      "aerospace_expo_023_xingsuo_key_visual",
      "aerospace_expo_020_engine_leaflet_design",
    ];
    return [...gallery].sort((a, b) => {
      const aIndex = order.findIndex((key) => a.src.includes(key));
      const bIndex = order.findIndex((key) => b.src.includes(key));
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });
  }
  if (project.id !== "samsung") return gallery;
  const qrMain = gallery.find((asset) => asset.src.includes("samsung_ha_pop_008_slide_04_img_01_qr_solution_pop_hd"));
  if (!qrMain) return gallery.filter((asset, index, all) => {
    if (!asset.src.includes("qr_solution")) return true;
    return all.findIndex((item) => item.src.includes("qr_solution")) === index;
  });
  return [qrMain, ...gallery.filter((asset) => !asset.src.includes("qr_solution"))];
}

function buildProjects(manifest) {
  projects = projectConfigs.map((project) => {
    const gallery = assetsForDirectories(manifest, project.directories);
    return {
      ...project,
      gallery: normalizeProjectGallery(project, gallery),
    };
  });
}

function renderProjects(filter = "all") {
  const filtered = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  grid.innerHTML = filtered
    .map((project) => `
      <article class="work-item work-${project.id} ${project.featured ? "featured" : ""} reveal">
        <div class="work-card work-card-${project.id} ${project.featured ? "featured" : ""}">
          <button class="card-main" type="button" data-project="${project.id}">
          <img src="${project.cover}" alt="${project.title}" loading="lazy" decoding="async" />
            <span class="card-copy">
              <span class="card-type">${project.type}</span>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </span>
          </button>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll(".card-main").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.project));
  });
  revealVisible();
}

function versionedSrc(src) {
  return `${src}${src.includes("?") ? "&" : "?"}v=${assetVersion}`;
}

function renderMedia(asset, fallbackAlt = "\u9879\u76ee\u7d20\u6750") {
  if (!asset) return "";
  const src = versionedSrc(asset.src);
  return asset.type === "video"
    ? `<video src="${src}" controls autoplay muted loop playsinline></video>`
    : `<img src="${src}" alt="${fallbackAlt}" decoding="async" class="modal-full-image" style="width:auto;height:auto;max-width:100%;max-height:100%;object-fit:contain;object-position:center center;" />`;
}

function selectGalleryAsset(project, assetIndex) {
  if (!project.gallery.length) return;
  activeProject = project;
  activeAssetIndex = (assetIndex + project.gallery.length) % project.gallery.length;
  const asset = project.gallery[activeAssetIndex];
  const isQrSolution = asset.label === "QR solution" || asset.src.toLowerCase().includes("qr_solution");
  modal.classList.toggle("modal-qr-fit", isQrSolution);
  modalGallery.hidden = isQrSolution;
  modalGallery.style.display = isQrSolution ? "none" : "";
  modalMedia.innerHTML = renderMedia(asset, project.title);
  modalMedia.scrollTo({ top: 0, left: 0, behavior: "instant" });
  modalGallery.querySelectorAll(".gallery-thumb").forEach((thumb) => thumb.classList.remove("active"));
  const active = modalGallery.querySelector(`[data-asset-index="${activeAssetIndex}"]`);
  if (active) {
    active.classList.add("active");
    active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

function stepGallery(direction) {
  if (!activeProject || !activeProject.gallery.length) return;
  selectGalleryAsset(activeProject, activeAssetIndex + direction);
}

function openProject(id, initialAssetIndex = null) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  const firstAsset = project.gallery.find((asset) => asset.src === project.cover) || project.gallery[0] || {
    src: project.cover,
    type: project.cover.endsWith(".mp4") ? "video" : "image",
    name: project.title,
  };
  const firstIndex = Number.isInteger(initialAssetIndex) ? initialAssetIndex : Math.max(project.gallery.indexOf(firstAsset), 0);

  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalHighlights.innerHTML = project.highlights.map((item) => `<span>${item}</span>`).join("");
  modalGallery.innerHTML = project.gallery
    .map((asset, index) => {
      const thumb = asset.type === "video"
        ? `<video src="${asset.src}" muted playsinline preload="metadata"></video>`
        : `<img src="${asset.src}" alt="${asset.name}" loading="lazy" />`;
      return `<button class="gallery-thumb" type="button" data-asset-index="${index}" title="${asset.label || asset.name}">${thumb}<span>${asset.label || `图像 ${index + 1}`}</span></button>`;
    })
    .join("");

  modalGallery.querySelectorAll(".gallery-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => selectGalleryAsset(project, Number(thumb.dataset.assetIndex)));
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  selectGalleryAsset(project, firstIndex);
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalMedia.innerHTML = "";
  modalGallery.innerHTML = "";
  modalGallery.hidden = false;
  modalGallery.style.display = "";
  modal.classList.remove("modal-qr-fit");
  activeProject = null;
  activeAssetIndex = 0;
}

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.querySelectorAll("[data-gallery-nav]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    stepGallery(button.dataset.galleryNav === "next" ? 1 : -1);
  });
});

document.querySelectorAll("[data-modal-home]").forEach((button) => {
  button.addEventListener("click", () => {
    closeProject();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProject();
  if (!modal.classList.contains("open")) return;
  if (event.key === "ArrowLeft") stepGallery(-1);
  if (event.key === "ArrowRight") stepGallery(1);
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

function revealVisible() {
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

async function init() {
  const manifest = await loadManifest();
  buildProjects(manifest);
  renderProjects();
  revealVisible();
}

init();












