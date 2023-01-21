form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    
    if (name.length < 2) {
      alert("Name must be at least 2 letters long.");
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
      return;
    }
  
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
      alert("Password must have at least 1 capital letter, 1 small letter, 1 number and 1 special characters, and be at least 8 characters long.");
      return;
    }
    if (password === name || password === email) {
      alert("Password cannot be the same as name or email.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
  });

  let isValid = true;

  if (name.length < 2) {
    errorParagraph.innerHTML = "Name must be at least 2 letters long.";
    errorParagraph.style.color = "red";
    isValid = false;
  }

  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    errorParagraph.innerHTML = "Invalid email address.";
    errorParagraph.style.color = "red";
    isValid = false;
  }

 
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!passwordRegex.test(password)) {
    errorParagraph.innerHTML = "Password must have at least 1 capital letter, 1 small letter, 1 number and 1 special characters, and be at least 8 characters long.";
    errorParagraph.style.color = "red";
    isValid = false;
  }
  if (password === name || password === email) {
    errorParagraph.innerHTML = "Password cannot be the same as name or email.";
    errorParagraph.style.color = "red";
    isValid = false;
  }

  if (password !== confirmPassword) {
    errorParagraph.innerHTML = "Passwords do not match.";
    errorParagraph.style.color = "red";
    isValid = false;
  }

  
  
  if(isValid){
     
      window.location.href = "./login.html";
  }
});
  