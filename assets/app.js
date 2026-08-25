(function () {
  'use strict';

  var TIER = {
    dirty: { label: 'Buy organic',        cls: 'v-dirty', tile: 't-dirty' },
    watch: { label: 'High toxicity score', cls: 'v-watch', tile: 't-watch' },
    clean: { label: 'Conventional is fine', cls: 'v-clean', tile: 't-clean' },
    mid:   { label: 'Middle of the guide', cls: 'v-mid',   tile: 't-mid' }
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var tabs = $$('.tab');
  var find = $('.find');
  var listView = $('#produce-list');
  var detailView = $('#produce-detail');

  /* ---------- tabs ---------- */
  function showTab(name) {
    tabs.forEach(function (t) {
      var on = t.dataset.panel === name;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      document.getElementById(t.dataset.panel).hidden = !on;
    });
    find.value = '';
    find.placeholder = name === 'produce'
      ? 'Search 44 fruits and vegetables — try blueberries, kale, avocado…'
      : 'Filter this section…';
    closeDetail();
    filter('');
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { showTab(t.dataset.panel); });
  });

  /* ---------- build produce tiles ---------- */
  function tileFor(p) {
    var b = document.createElement('button');
    b.className = 'tile ' + TIER[p.tier].tile;
    b.type = 'button';
    b.dataset.id = p.id;
    b.dataset.search = (p.name + ' ' + p.tier + ' ' + p.n.star).toLowerCase();
    var rank = p.tier === 'dirty' ? '#' + p.rank + ' dirty dozen'
             : p.tier === 'clean' ? (p.rank ? '#' + p.rank + ' cleanest' : 'clean fifteen')
             : p.tier === 'watch' ? 'just outside the twelve'
             : 'not on either list';
    b.innerHTML = '<span class="tn"></span><span class="tm"></span>';
    $('.tn', b).textContent = p.name;
    $('.tm', b).textContent = rank + ' · ' + p.n.kcal + ' kcal';
    b.addEventListener('click', function () { openDetail(p.id); });
    return b;
  }

  function buildTiles() {
    var groups = { dirty: $('#g-dirty'), watch: $('#g-watch'), clean: $('#g-clean'), mid: $('#g-mid') };
    PRODUCE.forEach(function (p) { groups[p.tier].appendChild(tileFor(p)); });
  }

  /* ---------- detail ---------- */
  function ul(items) {
    return '<ul>' + items.map(function (i) {
      var d = document.createElement('li'); d.textContent = i; return d.outerHTML;
    }).join('') + '</ul>';
  }

  function openDetail(id) {
    var p = PRODUCE.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var t = TIER[p.tier];
    var sub = p.tier === 'dirty' ? 'Ranked ' + p.rank + ' of 12 · ' + p.avg + ' pesticides per sample on average'
            : p.tier === 'clean' ? (p.rank ? 'Ranked ' + p.rank + ' cleanest of 47 crops tested' : 'On the 2026 Clean Fifteen')
            : p.tier === 'watch' ? 'Flagged for high overall pesticide toxicity'
            : 'In the 47-crop guide, outside both published tiers';

    detailView.innerHTML =
      '<button class="back" type="button">&larr; All produce</button>' +
      '<div class="d-head">' +
        '<span class="verdict ' + t.cls + '"></span>' +
        '<h2 class="d-name"></h2>' +
        '<p style="margin:12px 0 0;font-size:14px;color:var(--ink2)" class="d-sub"></p>' +
      '</div>' +
      '<div class="nutri">' +
        '<div><div class="nv">' + p.n.kcal + '</div><div class="nl">calories</div></div>' +
        '<div><div class="nv">' + p.n.fiber + 'g</div><div class="nl">fiber</div></div>' +
        '<div><div class="nv">' + p.n.sugar + 'g</div><div class="nl">sugar</div></div>' +
        '<div><div class="nv">' + p.n.vitc + '</div><div class="nl">vit C mg</div></div>' +
        '<div><div class="nv">' + p.n.k + '</div><div class="nl">potassium mg</div></div>' +
      '</div>' +
      '<p class="star">Per 100 g raw, USDA reference values. Standout: <span class="d-star"></span></p>' +
      '<div class="flags">' +
        '<div class="flag red"><h4>Red flags</h4>' + ul(p.red) + '</div>' +
        '<div class="flag green"><h4>Green flags</h4>' + ul(p.green) + '</div>' +
      '</div>' +
      '<div class="hand-wrap"><div class="flag hand"><h4>Handling &amp; storage</h4>' + ul(p.hand) + '</div></div>';

    $('.verdict', detailView).textContent = t.label;
    $('.d-name', detailView).textContent = p.name;
    $('.d-sub', detailView).textContent = sub;
    $('.d-star', detailView).textContent = p.n.star;
    $('.back', detailView).addEventListener('click', closeDetail);

    listView.hidden = true;
    detailView.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.hash = 'p/' + p.id;
  }

  function closeDetail() {
    if (!detailView) return;
    detailView.hidden = true;
    if (listView) listView.hidden = false;
    if (location.hash.indexOf('#p/') === 0) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  /* ---------- filter ---------- */
  function activePanel() {
    var open = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0];
    return open ? document.getElementById(open.dataset.panel) : null;
  }

  function filter(q) {
    q = q.trim().toLowerCase();
    var panel = activePanel();
    if (!panel) return;
    if (q && panel.id === 'produce') closeDetail();

    var shown = 0;
    $$('[data-list]', panel).forEach(function (list) {
      var visible = 0;
      $$('.tile, .tag, .chip', list).forEach(function (el) {
        var hay = el.dataset.search || el.textContent.toLowerCase();
        var hit = !q || hay.indexOf(q) !== -1;
        el.style.display = hit ? '' : 'none';
        if (hit) visible++;
      });
      shown += visible;
      var head = list.previousElementSibling;
      if (head && head.classList.contains('sec')) head.style.display = visible ? '' : 'none';
    });

    var msg = $('.empty', panel);
    if (q && shown === 0) {
      if (!msg) { msg = document.createElement('div'); msg.className = 'empty'; panel.appendChild(msg); }
      msg.textContent = 'Nothing here matches "' + q + '". Try another section.';
      msg.style.display = '';
    } else if (msg) { msg.style.display = 'none'; }
  }

  find.addEventListener('input', function () { filter(find.value); });

  /* ---------- PLU decoder ---------- */
  function decodePLU() {
    var raw = $('#plu-in').value.replace(/\D/g, '');
    var out = $('#plu-out');
    var res;
    if (!raw) { res = { tone: 'v-mid', label: 'Enter the number from the sticker', note: 'Loose produce carries a 4 or 5 digit PLU code.' }; }
    else if (raw.length === 5 && raw[0] === '9') { res = { tone: 'v-clean', label: 'Certified organic', note: PLU_RULES[1].note }; }
    else if (raw.length === 5 && raw[0] === '8') { res = { tone: 'v-mid', label: 'Reserved for GMO — never actually used', note: PLU_RULES[2].note }; }
    else if (raw.length === 4) { res = { tone: 'v-mid', label: 'Conventionally grown', note: PLU_RULES[0].note }; }
    else { res = { tone: 'v-null', label: 'Not a valid PLU', note: 'PLU codes are 4 or 5 digits. Check the sticker again.' }; }
    out.innerHTML = '<span class="verdict ' + res.tone + '"></span><p style="margin:10px 0 0;font-size:14.5px;color:var(--ink2)" class="pn"></p>';
    $('.verdict', out).textContent = res.label;
    $('.pn', out).textContent = res.note;
  }
  $('#plu-in').addEventListener('input', decodePLU);

  /* ---------- init ---------- */
  buildTiles();
  if (location.hash.indexOf('#p/') === 0) {
    openDetail(location.hash.slice(3));
  }
  window.addEventListener('hashchange', function () {
    if (location.hash.indexOf('#p/') === 0) openDetail(location.hash.slice(3));
  });
})();
