var typed = new Typed('.span', {
    strings: ['FullStack Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed:30,
    loop:true
  });

  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const homeContent = document.querySelector('.home-content');
  
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if (navbar.classList.contains('active')) {
      homeContent.style.marginTop = '250px'; // Ajuste selon la hauteur de ta navbar
    } else {
      homeContent.style.marginTop = '0'; // Remet la marge à zéro quand la navbar est cachée
    }
  }
  