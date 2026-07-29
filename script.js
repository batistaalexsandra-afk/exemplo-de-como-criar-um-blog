function curtirPost(button) {
  const countSpan = button.querySelector('.like-count');
  let currentLikes = parseInt(countSpan.textContent);
  
  // Incrementa a quantidade de curtidas
  currentLikes += 1;
  countSpan.textContent = currentLikes;
}