// Loader: tech loading bar animation, then show 'Portfolio Initialized' and hide
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const loaderInit = document.getElementById('loader-init');
  const loaderDone = document.getElementById('loader-done');
  const loaderBar = document.getElementById('loader-bar-inner');
  let percent = 0;
  let interval = null;
  if (loader && loaderBar) {
    interval = setInterval(() => {
      percent += Math.random() * 7 + 2; // random techy increments
      if (percent > 100) percent = 100;
      loaderBar.style.width = percent + '%';
      if (percent >= 100) {
        clearInterval(interval);
        if (loaderInit && loaderDone) {
          loaderInit.style.display = 'none';
          loaderDone.style.display = 'block';
        }
        setTimeout(() => {
          loader.style.opacity = '0';
          loader.style.pointerEvents = 'none';
          setTimeout(() => {
            loader.style.display = 'none';
            document.body.classList.add('portfolio-loaded');
            // Restore typewriter and fade-in animation for main heading and description
            const heading = document.getElementById('main-heading');
            const desc = document.getElementById('main-desc');
            if (heading && desc) {
              const text = heading.innerText;
              heading.innerText = '';
              heading.classList.add('typewriter');
              let i = 0;
              function typeWriter() {
                if (i < text.length) {
                  heading.innerHTML += text[i] === '\n' ? '<br>' : text[i];
                  i++;
                  setTimeout(typeWriter, 70);
                } else {
                  heading.classList.remove('typewriter');
                  heading.innerHTML = text.replace(/\n/g, '<br>');
                  heading.style.opacity = 1;
                  setTimeout(() => {
                    desc.classList.add('fade-in');
                  }, 300);
                }
              }
              setTimeout(typeWriter, 300);
            }
          }, 500);
        }, 1200);
      }
    }, 120);
  }
});
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
