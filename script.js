function toggleCategory(header) {
  const allContents = document.querySelectorAll('.category-content');
  allContents.forEach(content => {
    if (content !== header.nextElementSibling) {
      content.style.display = 'none';
    }
  });

  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
