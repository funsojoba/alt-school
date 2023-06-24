document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');
  
    questions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
    });

    
    const navBurger = document.querySelector('.nav-bugger');
    const navText = document.querySelector('.nav-text');
    
    navBurger.addEventListener('click', ()=> {
      if (navText.style.display === 'none') {
        navText.style.display = 'block';
      } else {
        navText.style.display = 'none';
      }
    })

  });


