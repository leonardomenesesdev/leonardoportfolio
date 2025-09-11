  AOS.init({
    duration: 1000,
    once: true      
  });
  (function () {
  const STORAGE_KEY = 'leomeneses-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const saved = localStorage.getItem(STORAGE_KEY);
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (systemDark ? 'dark' : 'light');

  apply(initial, false);

  if (!saved && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      apply(e.matches ? 'dark' : 'light', false);
    });
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next, true);
    });
  }

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (btn) {
      const dark = theme === 'dark';
      btn.setAttribute('aria-pressed', dark);
      btn.innerHTML = `<i class="fa-solid ${dark ? 'fa-sun' : 'fa-moon'}"></i>`;
    }
    if (persist) localStorage.setItem(STORAGE_KEY, theme);
  }
})();
  const btn = document.getElementById("hamburguer-btn");
  const menu = document.getElementById("menu-navegacao");

  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
