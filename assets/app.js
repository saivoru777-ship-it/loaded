(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var tabs       = $$('.tab');
  var find       = $('.find');
  var listView   = $('#produce-list');
  var detailView = $('#produce-detail');
  var tileGrid   = $('#tile-grid');
  var sortBtn    = $('#sort-toggle');

  var sortMode = 'az'; // 'az' | 'rating'

  /* ---------------- tabs ---------------- */
  function showTab(name) {
    tabs.forEach(function (t) {
      var on = t.dataset.panel === name;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      document.getElementById(t.dataset.panel).hidden = !on;
    });
    find.value = '';
    find.placeholder = name === 'produce'
      ? 'Search 44 fruits and vegetables — try blueberries, spinach, avocado…'
      : 'Filter this section…';
    closeDetail();
    filter('');
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { showTab(t.dataset.panel); });
  });

  /* ---------------- tiles ----------------
     Deliberately neutral. No tier colour, no rating, no ranking on the tile.
     A shopper who sees "Avoid" before they see the context just stops buying
     the vegetable, which is the opposite of what the data supports.        */
  function tileFor(p) {
    var b = document.createElement('button');
    b.className = 'tile';
    b.type = 'button';
    b.dataset.id = p.id;
    b.dataset.search = (p.name + ' ' + p.about).toLowerCase();
    b.innerHTML = '<span class="tn"></span><span class="tm"></span>';
    $('.tn', b).textContent = p.name;
    $('.tm', b).textContent = p.n.kcal + ' kcal · ' + p.n.fiber + 'g fibre';
    b.addEventListener('click', function () { openDetail(p.id); });
    return b;
  }

  function renderTiles() {
    var list = PRODUCE.slice();
    if (sortMode === 'az') {
      list.sort(function (a, b) { return a.name.localeCompare(b.name); });
    } else {
      list.sort(function (a, b) {
        var d = TIERS[b.tier].n - TIERS[a.tier].n;
        return d !== 0 ? d : a.name.localeCompare(b.name);
      });
    }
    tileGrid.innerHTML = '';
    list.forEach(function (p) { tileGrid.appendChild(tileFor(p)); });
  }

  sortBtn.addEventListener('click', function () {
    sortMode = sortMode === 'az' ? 'rating' : 'az';
    sortBtn.textContent = sortMode === 'az' ? 'Sort: A–Z' : 'Sort: cleanest first';
    renderTiles();
    filter(find.value);
  });

  /* ---------------- detail ---------------- */
  function ul(items) {
    return '<ul>' + items.map(function (i) {
      var li = document.createElement('li'); li.textContent = i; return li.outerHTML;
    }).join('') + '</ul>';
  }

  function meter(tier) {
    var n = TIERS[tier].n, out = '';
    for (var i = 7; i >= 1; i--) {
      out += '<span class="pip' + (i === n ? ' on' : (i < n ? ' lit' : '')) + '"></span>';
    }
    return '<div class="meter" aria-hidden="true">' + out + '</div>';
  }

  function openDetail(id) {
    var p = PRODUCE.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var t = TIERS[p.tier];

    detailView.innerHTML =
      '<button class="back" type="button">&larr; All produce</button>' +
      '<div class="d-head"><h2 class="d-name"></h2></div>' +

      '<div class="nutri">' +
        '<div><div class="nv">' + p.n.kcal  + '</div><div class="nl">calories</div></div>' +
        '<div><div class="nv">' + p.n.fiber + 'g</div><div class="nl">fibre</div></div>' +
        '<div><div class="nv">' + p.n.sugar + 'g</div><div class="nl">sugar</div></div>' +
        '<div><div class="nv">' + p.n.vitc  + '</div><div class="nl">vit C mg</div></div>' +
        '<div><div class="nv">' + p.n.k     + '</div><div class="nl">potassium mg</div></div>' +
      '</div>' +
      '<p class="nutri-note">Per 100 g raw, USDA reference values.</p>' +

      '<p class="about"></p>' +

      '<div class="flags">' +
        '<div class="flag green"><h4>Green flags — what a good one looks like</h4>' + ul(p.green) + '</div>' +
        '<div class="flag red"><h4>Red flags — what to walk away from</h4>' + ul(p.red) + '</div>' +
      '</div>' +

      '<div class="flag hand"><h4>Handling &amp; storage</h4>' + ul(p.hand) + '</div>' +

      '<div class="rating rating-' + p.tier + '">' +
        '<div class="r-top"><span class="r-eyebrow">Residue rating</span>' + meter(p.tier) + '</div>' +
        '<div class="r-label"></div>' +
        '<p class="r-blurb"></p>' +
        '<p class="r-src"></p>' +
      '</div>';

    $('.d-name',  detailView).textContent = p.name;
    $('.about',   detailView).textContent = p.about;
    $('.r-label', detailView).textContent = t.label;
    $('.r-blurb', detailView).textContent = t.blurb;
    $('.r-src',   detailView).textContent = p.src;
    $('.back',    detailView).addEventListener('click', closeDetail);

    listView.hidden   = true;
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

  /* ---------------- filter ---------------- */
  function activePanel() {
    var open = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0];
    return open ? document.getElementById(open.dataset.panel) : null;
  }

  function filter(q) {
    q = (q || '').trim().toLowerCase();
    var panel = activePanel();
    if (!panel) return;
    if (q && panel.id === 'produce') closeDetail();

    var shown = 0;
    $$('[data-list]', panel).forEach(function (list) {
      var visible = 0;
      $$('.tile, .tag, .read', list).forEach(function (el) {
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
    } else if (msg) {
      msg.style.display = 'none';
    }
  }
  find.addEventListener('input', function () { filter(find.value); });

  /* ---------------- label reads ---------------- */
  function renderLabelReads() {
    var wrap = $('#label-reads');
    if (!wrap) return;
    var v = { real: 'Verified', mixed: 'Partly useful', none: 'Means nothing' };
    var cls = { real: 'v-real', mixed: 'v-paper', none: 'v-null' };
    LABEL_READS.forEach(function (l) {
      var d = document.createElement('div');
      d.className = 'read' + (l.v === 'real' ? ' ok' : '');
      d.innerHTML = '<span class="verdict ' + cls[l.v] + '"></span><h3></h3><p></p>';
      $('.verdict', d).textContent = v[l.v];
      $('h3', d).textContent = l.t;
      $('p', d).textContent = l.d;
      wrap.appendChild(d);
    });
  }

  /* ---------------- PLU decoder ---------------- */
  function decodePLU() {
    var raw = $('#plu-in').value.replace(/\D/g, '');
    var out = $('#plu-out');
    var res;
    if (!raw) {
      res = { tone: 'v-null', label: 'Enter the number from the sticker', note: 'Loose produce carries a 4 or 5 digit PLU code.' };
    } else if (raw.length === 5 && raw[0] === '9') {
      res = { tone: 'v-real', label: 'Certified organic', note: PLU_RULES[1].note };
    } else if (raw.length === 5 && raw[0] === '8') {
      res = { tone: 'v-null', label: 'Reserved for GMO — never adopted', note: PLU_RULES[2].note };
    } else if (raw.length === 4) {
      res = { tone: 'v-paper', label: 'Conventionally grown', note: PLU_RULES[0].note };
    } else {
      res = { tone: 'v-null', label: 'Not a valid PLU', note: 'PLU codes are 4 or 5 digits. Check the sticker again.' };
    }
    out.innerHTML = '<span class="verdict ' + res.tone + '"></span><p class="pn"></p>';
    $('.verdict', out).textContent = res.label;
    $('.pn', out).textContent = res.note;
  }
  var pluIn = $('#plu-in');
  if (pluIn) pluIn.addEventListener('input', decodePLU);

  /* ---------------- init ---------------- */
  renderTiles();
  renderLabelReads();
  if (location.hash.indexOf('#p/') === 0) openDetail(location.hash.slice(3));
  window.addEventListener('hashchange', function () {
    if (location.hash.indexOf('#p/') === 0) openDetail(location.hash.slice(3));
  });
})();
