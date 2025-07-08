(function() {
  const themePickers = document.querySelectorAll('.theme-picker');
  const themeOptions = document.querySelectorAll('.theme-option');
  const html = document.documentElement;
  
  function getSavedTheme() {
    return localStorage.getItem('theme') || 'auto';
  }
  
  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }
  
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
  }
  
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  
  function updateThemeUI(theme) {
    themePickers.forEach(picker => {
      picker.setAttribute('data-selected', theme);
    });
  }
  
  function setTheme(theme) {
    applyTheme(theme);
    updateThemeUI(theme);
    saveTheme(theme);
  }
  
  function initTheme() {
    const savedTheme = getSavedTheme();
    setTheme(savedTheme);
  }
  
  themeOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedTheme = this.getAttribute('data-theme');
      setTheme(selectedTheme);
      
      if (window.innerWidth <= 768) {
        const siteHeader = document.querySelector('.site-header');
        const body = document.body;
        if (siteHeader && body) {
          siteHeader.classList.remove('open');
          body.classList.remove('mobile-nav-open');
        }
      }
    });
    
  });
  
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function() {
    const currentTheme = getSavedTheme();
    if (currentTheme === 'auto') {
      applyTheme('auto');
    }
  });
  
  initTheme();
})();

(function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const siteHeader = document.querySelector('.site-header');
  const body = document.body;
  
  if (siteHeader && body) {
    siteHeader.classList.remove('open');
    body.classList.remove('mobile-nav-open');
  }
  
  if (mobileToggle && siteHeader) {
    mobileToggle.addEventListener('click', function() {
      siteHeader.classList.toggle('open');
      body.classList.toggle('mobile-nav-open');
    });
    
  }
})();