const button = document.getElementById('loginButton');


button.addEventListener('click', function() {
    
    if (button.textContent === 'Login') {
        button.textContent = 'Logout';
    } else {
        button.textContent = 'Login';
    }
});


function removeButton() {
 
  const button = document.getElementById('addButton');
 
  button.remove();
};

function showAlert() {
  alert('Ninja was liked');
}