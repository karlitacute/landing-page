(function () {
  var b = document.getElementById('burger');
  var m = document.getElementById('menu');

  function t(o) {
    m.classList.toggle('open', o);
    b.setAttribute('aria-expanded', String(o));
    b.setAttribute('aria-label', o ? 'Tutup menu' : 'Buka menu');
  }

  b.addEventListener('click', function () { t(!m.classList.contains('open')); });
  m.addEventListener('click', function (e) { if (e.target.tagName === 'A') t(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') t(false); });
})();