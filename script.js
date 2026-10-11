const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-inner')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  }
  if (focus) tab.focus();
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let index = tabs.indexOf(tab);
    if (event.key === 'ArrowRight') index = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') index = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(tabs[index], true);
  });
}

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
let resetCopyLabel;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('k.l.grigorov@gmail.com');
    copyButton.querySelector('span').textContent = 'Email copied';
    copyStatus.textContent = 'Email address copied to clipboard.';
    clearTimeout(resetCopyLabel);
    resetCopyLabel = setTimeout(() => {
      copyButton.querySelector('span').textContent = 'Copy email address';
    }, 3000);
  } catch {
    copyStatus.classList.remove('visually-hidden');
    copyStatus.textContent = 'Please select and copy k.l.grigorov@gmail.com, or use the email link above.';
  }
});
document.getElementById('year').textContent = String(new Date().getFullYear());
