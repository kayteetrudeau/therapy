function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}
function toggleSection(id) {
  const section = document.getElementById(id);
  const chevron = document.getElementById(id + '-chevron');
  const isOpen = section.style.display === 'flex';
  section.style.display = isOpen ? 'none' : 'flex';
  chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}
