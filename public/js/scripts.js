const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

home.addEventListener("click", function(){  
    window.location.href = "http://localhost:3000/";
  });

  about.addEventListener("click", function(){  
    window.location.href = "http://localhost:3000/about";
  });

  contact.addEventListener("click", function(){  
    window.location.href = "http://localhost:3000/contact";
  });