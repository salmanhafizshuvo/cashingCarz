function toggleText() {
    const moreText = document.querySelector('.more-text');
    const btn = document.querySelector('.read-more-btn');
    moreText.style.display = moreText.style.display === 'inline' ? 'none' : 'inline';
   
    btn.textContent = btn.textContent === 'Read More' ? 'Show Less' : 'Read More';
}

