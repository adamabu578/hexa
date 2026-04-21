/* hexCore Docs — shared JS */
(function () {

  /* ── Sidebar accordion ── */
  document.querySelectorAll('.sb-item[data-expand]').forEach(function (item) {
    item.addEventListener('click', function () {
      var key = item.dataset.expand;
      var sub = document.querySelector('.sb-sub[data-group="' + key + '"]');
      if (!sub) return;
      var open = sub.classList.toggle('open');
      item.classList.toggle('open', open);
    });
  });

  /* ── Active sidebar link ── */
  var path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sb-item[href], .sb-sub-item[href]').forEach(function (a) {
    if (a.getAttribute('href') && a.getAttribute('href').includes(path)) {
      a.classList.add('active');
      // expand parent
      var sub = a.closest('.sb-sub');
      if (sub) {
        sub.classList.add('open');
        var key = sub.dataset.group;
        var parent = document.querySelector('.sb-item[data-expand="' + key + '"]');
        if (parent) parent.classList.add('open');
      }
    }
  });

  /* ── Copy code blocks ── */
  document.querySelectorAll('.code-block-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.closest('.code-block').querySelector('pre');
      var text = pre ? pre.innerText : '';
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = '✓ Copied';
        setTimeout(function () { btn.innerHTML = '⎘ Copy'; }, 1800);
      });
    });
  });

  /* ── Endpoint accordion ── */
  document.querySelectorAll('.endpoint-header').forEach(function (hdr) {
    hdr.addEventListener('click', function () {
      hdr.closest('.endpoint-card').classList.toggle('open');
    });
  });

  /* ── TOC scroll spy ── */
  var tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length) {
    var headings = Array.from(document.querySelectorAll('h2[id], h3[id]'));
    function updateToc() {
      var scrollY = window.scrollY + 80;
      var current = headings[0];
      headings.forEach(function (h) { if (h.offsetTop <= scrollY) current = h; });
      tocLinks.forEach(function (a) { a.classList.remove('active'); });
      if (current) {
        var active = document.querySelector('.toc-list a[href="#' + current.id + '"]');
        if (active) active.classList.add('active');
      }
    }
    window.addEventListener('scroll', updateToc, { passive: true });
    updateToc();
  }

  /* ── Search shortcut hint ── */
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      var searchEl = document.querySelector('.tb-search');
      if (searchEl) searchEl.focus();
    }
  });

})();
