const container = document.getElementById("categories");

const chatbotsHTML = `
<div class="category">
  <div class="category-header" onclick="toggleCategory(this)">🤖 چت‌بات‌ها</div>
  <div class="category-content">
    <!-- کارت‌های چت‌بات‌ها اینجا قرار می‌گیرن -->
    <!-- مثل ChatGPT، Copilot، Poe و... -->
  </div>
</div>
`;

container.innerHTML += chatbotsHTML;
