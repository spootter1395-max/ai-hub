const logoTools = [
  {
    name: "Canva",
    logo: "https://www.canva.com/favicon.ico",
    description: "طراحی لوگو با رابط کاربری ساده و قابلیت شخصی‌سازی بالا",
    link: "https://www.canva.com/logo-maker/"
  },
  {
    name: "Looka",
    logo: "https://looka.com/favicon.ico",
    description: "ساخت لوگو با انتخاب سبک، رنگ، فونت و تنظیمات برند",
    link: "https://looka.com/"
  },
  {
    name: "LogoAI",
    logo: "https://logoai.com/favicon.ico",
    description: "طراحی لوگو با الگوریتم‌های یادگیری ماشین و خروجی حرفه‌ای",
    link: "https://logoai.com/"
  },
  {
    name: "Brandmark",
    logo: "https://www.brandmark.io/favicon.ico",
    description: "ساخت لوگو با سبک‌های متنوع و هوش مصنوعی خلاق",
    link: "https://www.brandmark.io/"
  },
  {
    name: "Tailor Brands",
    logo: "https://www.tailorbrands.com/favicon.ico",
    description: "طراحی لوگو با تست شخصیت برند و خروجی قابل ویرایش",
    link: "https://www.tailorbrands.com/"
  },
  {
    name: "Hatchful",
    logo: "https://hatchful.shopify.com/favicon.ico",
    description: "طراحی لوگو رایگان با قالب‌های هوشمند برای کسب‌وکارها",
    link: "https://hatchful.shopify.com/"
  }
];

function renderLogoTools(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  logoTools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <img src="${tool.logo}" alt="${tool.name}">
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <button onclick="window.open('${tool.link}', '_blank')">استفاده کن</button>
    `;
    container.appendChild(card);
  });
}
