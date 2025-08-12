document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const moreText = button.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none') {
            moreText.style.display = 'inline';
            button.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});

const typed = new Typed('.multiple-text', {
      strings: ['Software Engineering Student', 'Graphics Designer','Web Developer'],
      typeSpeed: 80,
      backSoeed:80,
      backDelay:1200,
      loop:true,
});
