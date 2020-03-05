
(simplyNavDuty => {

  const sideNav = document.querySelector('.nav-list'),
    toggleNavBtn = document.querySelector('.toggle-nav'),
    burger = document.querySelector('.burger'),
    pageOverlay = document.querySelector('.overlay'),
    navLinks = document.querySelectorAll(".link"),
    body = document.querySelector('body'),
    html = document.querySelector('html');     


  function disablePageScroll() {
    if (sideNav.classList.contains('-open')) {
      body.classList.add('_disableScroll');
      html.classList.add('_disableScroll');
    } else {
      body.classList.remove('_disableScroll');
      html.classList.remove('_disableScroll');
    }
  };


  function toggleNav() {
    sideNav.classList.toggle('-open');
    burger.classList.toggle('open');
    disablePageScroll();
  };

  toDefaults = () => {

    sideNav.classList.remove('-open');
    burger.classList.remove('open');

    body.classList.remove('_disableScroll');
    html.classList.remove('_disableScroll');
  }

  toggleNavBtn.addEventListener('click', toggleNav);
  pageOverlay.addEventListener('click', toggleNav);


  navLinks.forEach(el => {
    el.addEventListener('click', (event) => {
      toDefaults();
    });
  });



  (function() {

    window.addEventListener("resize", resizeThrottler, false);
    let resizeTimeout;

    function resizeThrottler() {

      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          actualResizeHandler();

         }, 66);
      }
    }
  
    function actualResizeHandler() {

      let width = window.innerWidth;


      if (width >= 800) {
        toDefaults();      
      }        
    }
  
  }());
  

})();