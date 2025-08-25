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
const texts = ["Software Engineering Student", "Graphics Designer", "Web Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;  

const speed = 100;  
const backSpeed = 80; 
const delay = 1200; 
function typeEffect() {
  const element = document.querySelector(".multiple-text");
  const currentText = texts[textIndex];

  if (!isDeleting) {
    element.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delay);
      return;
    }
  } else {
    element.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? backSpeed : speed);
}
typeEffect();