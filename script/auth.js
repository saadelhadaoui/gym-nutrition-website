const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const resetForm = document.getElementById('resetForm');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login attempt:', { email, password });

    alert('Login successful!');
    window.location.href = 'index.html';
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup attempt:', { name, email, password });

    alert('Account created successfully! Please log in.');
    window.location.href = 'login.html';
  });
}

if (resetForm) {
  resetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;

    console.log('Password reset request:', { email });
 
    alert('If an account exists with this email, you will receive reset instructions.');
    window.location.href = 'login.html';
  });
}
