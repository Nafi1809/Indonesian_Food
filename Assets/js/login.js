window.addEventListener('load', () => {
    alert('Sign in Dulu ya :) !');
 });
 document.getElementById('loginForm').addEventListener('submit', function(event){
      event.preventDefault();
 
     const correctUsername = 'farezki';
     const correctPassword = 'farezki21';
     
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
 
     if (username === correctUsername && password ===correctPassword){
     alert('Login Berhasil');
     window.location.href= 'index.html';
     }else{
     alert('login gagal');
     }
     
   
  });
  

 