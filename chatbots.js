// chatbots.js
export function renderChatbots() {
  return `
    <div class="category">
      <div class="category-header" onclick="toggleCategory(this)">💬 چت‌بات‌های هوش مصنوعی</div>
      <div class="category-content">
        <div class="tool-card">
          <img src="assets/images/chatgpt.png" alt="ChatGPT">
          <h3>ChatGPT</h3>
          <p>چت‌بات قدرتمند برای تولید متن و پاسخ‌گویی</p>
          <button onclick="window.open('https://chat.openai.com/', '_blank')">شروع چت</button>
        </div>
        <!-- سایر چت‌بات‌ها... -->
      </div>
    </div>
  `;
}
