let eyeIcon = document.getElementById('eyeIcon');
let password = document.getElementById('password');

function showHide() 
{   console.log( password.type);
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } 
    else {
        password.setAttribute('type', 'password');
        eyeIcon.classList.add('fa-eye-slash');
        eyeIcon.classList.remove('fa-eye');
    }
}