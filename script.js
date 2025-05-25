const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

const macroForm = document.getElementById('macroForm');
const results = document.getElementById('results');
const recalculateBtn = document.getElementById('recalculate');

if (macroForm) {
  function calculateMacros(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let tdee = bmr * activity;

    let calories;
    switch (goal) {
      case 'lose':
        calories = tdee - 500;
        break;
      case 'gain':
        calories = tdee + 500;
        break;
      default:
        calories = tdee;
    }


    const protein = weight * 2.2;
    const fat = (calories * 0.25) / 9;
    const carbs = (calories - (protein * 4) - (fat * 9)) / 4;

    document.getElementById('calories').textContent = Math.round(calories);
    document.getElementById('protein').textContent = Math.round(protein) + 'g';
    document.getElementById('carbs').textContent = Math.round(carbs) + 'g';
    document.getElementById('fat').textContent = Math.round(fat) + 'g';

    macroForm.classList.add('hidden');
    results.classList.remove('hidden');
  }

  function resetCalculator() {
    macroForm.reset();
    macroForm.classList.remove('hidden');
    results.classList.add('hidden');
  }

  macroForm.addEventListener('submit', calculateMacros);
  if (recalculateBtn) {
    recalculateBtn.addEventListener('click', resetCalculator);
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    }
  });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}
