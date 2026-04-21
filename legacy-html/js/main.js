(function(){
  // ── Nav dropdowns ──
  var items = document.querySelectorAll('.nlinks > li');
  items.forEach(function(item){
    var trigger = item.querySelector('.nt');
    if(!trigger) return;
    trigger.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = item.classList.contains('open');
      items.forEach(function(i){ i.classList.remove('open'); });
      if(!isOpen) item.classList.add('open');
    });
  });
  document.addEventListener('click', function(){
    items.forEach(function(i){ i.classList.remove('open'); });
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') items.forEach(function(i){ i.classList.remove('open'); });
  });

  // ── Products mega menu: sidebar category switching ──
  document.querySelectorAll('.dd-cat').forEach(function(cat){
    cat.addEventListener('click', function(e){
      e.stopPropagation();
      var panelId = cat.getAttribute('data-panel');
      var mega = cat.closest('.dd-mega');
      // Update active cat
      mega.querySelectorAll('.dd-cat').forEach(function(c){ c.classList.remove('active'); });
      cat.classList.add('active');
      // Show correct panel
      mega.querySelectorAll('.dd-panel').forEach(function(p){ p.classList.remove('active'); });
      var panel = mega.querySelector('#panel-' + panelId);
      if(panel) panel.classList.add('active');
    });
  });

  // ── Product section tabs ──
  document.querySelectorAll('.pt').forEach(function(t){
    t.addEventListener('click', function(){
      document.querySelectorAll('.pt').forEach(function(x){ x.classList.remove('active'); });
      t.classList.add('active');
    });
  });
})();

// Accordion (for all internal pages)
function initAccordions() {
  document.querySelectorAll('.acc-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var item = btn.closest('.acc-item');
      var list = btn.closest('.acc-list');
      var isOpen = item.classList.contains('open');
      if(list) list.querySelectorAll('.acc-item').forEach(function(i) { i.classList.remove('open'); });
      if(!isOpen) item.classList.add('open');
    });
  });
}
initAccordions();
