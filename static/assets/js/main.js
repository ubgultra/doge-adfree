function loadScript(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadCSS(href, callback) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  var supportsOnLoad = "onload" in link;
  if(supportsOnLoad) {
    link.onload = callback;
  }
  else {
    setTimeout(function() {
      callback();
    }, 1000);
  }
  document.head.appendChild(link);
}

loadCSS('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css', function() {
  console.log('[✔️] Bootstrap icons');
});
if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
  console.log("[✔️] Index.html");
  const options = ["youve got a serious skill issue, get that checked", "youve got a serious skill issue, get that checked", "youve got a serious skill issue, get that checked", "Have you prayed today? Cause if not im gonna eat yo-", "Tab Cloaking is unhighly recommended", "STOP PIGGYBACKING OFF NATEPROX BRUH", "This version of this site was originally to f-", "Hosted on the worst hardware!", "SHARE THIS LINK WITH EVERYONE YOU FUCKING KNOW", "Join our Discord for NOTHING", "©2024 ubgultra. All Rights Reserved.", "©2024 ubgultra. All Rights Reserved.", "©2024 ubgultra. All Rights Reserved.", "©2024 ubgultra. All Rights Reserved.", "©2024 ubgultra. All Rights Reserved.", "©2024 ubgultra. All Rights Reserved.", "Customize Doge by GOING TO SETTINGS AND NOT BEING A IDIOT", "Want more links? Our Discord provides NO links!", "Hi, ubgultra here!", "💀", "💀", "💀", ];

  function getRandomOption() {
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }

  function setRandomPlaceholder() {
    const placeholder = document.getElementById("placeholder");
    placeholder.textContent = getRandomOption();
  }
  setRandomPlaceholder();
  var bar = document.querySelector(".browse-input");
  var search = document.getElementById("search");
  bar.addEventListener("focus", () => {
    search.style.marginLeft = "-367px";
  });
  bar.addEventListener("blur", () => {
    search.style.marginLeft = "-150px";
  });
  const img = document.createElement('img');
  img.src = '/assets/img/mchost.gif';
  img.className = 'banner footer';
  img.addEventListener('click', function() {
    location.href = 'https://freeminecrafthost.com/doge/';
  })
  document.body.appendChild(img);
}
window.addEventListener("load", function() {
  loadScript("/worker.js");
  if(window.location.pathname === "/index.html" || window.location.pathname === "/") {
    if(window.innerWidth < 676) {
      location.href = "/mobile.html";
    }
  }
  if(window.location.pathname === '/loading.html') {
    if(window.innerWidth < 676) {
      var rm = document.querySelector('.themesExcluded');
      rm.style.display = 'none';
    }
  }
});
