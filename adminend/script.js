// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');
//     loginForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const username = loginForm.elements['username'].value;
//         const password = loginForm.elements['password'].value;
//         // Add logic to send login request to server
//         console.log('Username:', username);
//         console.log('Password:', password);
//     });
// });
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;
    
    try {
        const response = await fetch('http://localhost:3000/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        if (response.ok) {
            // Login successful
            const data = await response.json();
            alert('Login successful:', data);
            // Store token in local storage
            localStorage.setItem('token', data.token);
            // Redirect to home.html
            window.location.href = 'home.html';
        } else {
            // Login failed
            const errorData = await response.json();
            alert('Login failed:', errorData.error);
        }
    } catch (error) {
        alert('An error occurred:', error);
    }
});