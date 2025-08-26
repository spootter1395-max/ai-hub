function startChat() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>چت‌بات</h2>
    <input type="text" id="userInput" placeholder="پیام خود را وارد کنید">
    <button onclick="sendMessage()">ارسال</button>
    <div id="chatLog"></div>
  `;
}

function sendMessage() {
  const input = document.getElementById('userInput').value;
  const chatLog = document.getElementById('chatLog');
  let response = '';

  if (input.includes('سلام')) {
    response = 'سلام! چطور می‌تونم کمکت کنم؟';
  } else if (input.includes('خداحافظ')) {
    response = 'فعلاً! هر وقت خواستی برگرد.';
  } else {
    response = 'متوجه نشدم، لطفاً واضح‌تر بگو.';
  }

  chatLog.innerHTML += `<p><strong>شما:</strong> ${input}</p>`;
  chatLog.innerHTML += `<p><strong>چت‌بات:</strong> ${response}</p>`;
}
