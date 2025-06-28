// Add 'scrolling' class to body on scroll, remove after 800ms of no scroll
(function() {
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    document.body.classList.add('scrolling');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      document.body.classList.remove('scrolling');
    }, 800);
  }, { passive: true });
})(); 