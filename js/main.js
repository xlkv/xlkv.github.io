// Minimal Controller for xlkv.uz (Azizbek Xoliqov)

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});

/* Theme Handling */
function initTheme() {
  const saved = localStorage.getItem('xlkv_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('xlkv_theme', next);
    });
  }
}

/* 1-Click Email Copy with Toast */
let toastTimeout;
function copyEmail() {
  const email = 'mail@xlkv.uz';
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(() => showToast());
  } else {
    const input = document.createElement('textarea');
    input.value = email;
    input.style.position = 'fixed';
    input.style.left = '-9999px';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast();
  }
}

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = 'Copied mail@xlkv.uz to clipboard';
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

window.copyEmail = copyEmail;
