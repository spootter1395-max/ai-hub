function loadTools() {
  fetch('ai-hub/tools.json')
    .then(response => response.json())
    .then(tools => {
      const content = document.getElementById('content');
      content.innerHTML = '<h2>ابزارهای هوش مصنوعی</h2><ul>';
      tools.forEach(tool => {
        content.innerHTML += `
          <li>
            <strong>${tool.name}</strong> (${tool.category})<br>
            ${tool.description}<br>
            <a href="${tool.link}" target="_blank">مشاهده ابزار</a>
          </li><br>
        `;
      });
      content.innerHTML += '</ul>';
    })
    .catch(error => {
      content.innerHTML = '<p>خطا در بارگذاری ابزارها.</p>';
      console.error(error);
    });
}
