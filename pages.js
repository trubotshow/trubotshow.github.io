/*! © 2026 Trubotshow. All rights reserved. Trubot™, the Trubot character and Trubotshow™ belong to Trubotshow. Not open source: no license is granted. https://trubotshow.com/rights.html */
/* Renders the Apps list (apps.html) and one app's page (app.html?id=...) from apps.js. */
(function () {
  var APPS = window.TRUBOT_APPS || [];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function el(text, tag, cls) { tag = tag || "span"; return "<" + tag + (cls ? ' class="' + cls + '"' : "") + ">" + esc(text) + "</" + tag + ">"; }
  var COMING = "Coming soon", LIVE = "Available now";
  function status(a) { return a.status === "live" ? LIVE : COMING; }
  // a little picture for each app: the icon if there is one, otherwise a frosted square with its color inside
  function thumb(a) {
    if (a.model === "dice") return '<div class="thumb"><img src="apps/trudice.png" alt=""></div>';
    if (a.model === "egg") return '<div class="thumb egg"><svg viewBox="0 0 56 56" aria-hidden="true"><defs><radialGradient id="eggfill" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#dba777"/><stop offset="1" stop-color="#96592f"/></radialGradient></defs><path d="M28 8c9 0 16 14.5 16 24S37 48 28 48s-16-6.500-16-16S19 8 28 8z" fill="url(#eggfill)"/></svg></div>';
    return '<div class="thumb frost" style="--c:' + esc(a.color || "#ccc") + '"><i></i></div>';
  }

  var list = document.querySelector("[data-app-list]");
  if (list) {
    var made = APPS.filter(function (a) { return !a.placeholder; });
    var boxes = APPS.filter(function (a) { return a.placeholder; });
    list.innerHTML = made.map(function (a) {
      var row = thumb(a) + '<div class="app-row-text">' + el(a.name, "div", "app-row-name") + el(a.tagline, "div", "app-row-tag") + '</div>' +
        '<div class="app-row-side">' + el(status(a), "span", "led") + (a.detail ? '<span class="arrow">→</span>' : "") + '</div>';
      // nothing to read yet: a plain row, not a link to an empty page
      return a.detail ? '<a class="app-row" href="app.html?id=' + encodeURIComponent(a.id) + '">' + row + '</a>' : '<div class="app-row">' + row + '</div>';
    }).join("") + (boxes.length ? '<div class="app-row app-row-q" aria-label="Coming soon"><div class="thumb q">?</div></div>' : "");
  }

  var page = document.querySelector("[data-app-page]");
  if (page) {
    var id = new URLSearchParams(location.search).get("id");
    var a = APPS.filter(function (x) { return x.id === id; })[0] || APPS[0];
    if (!a) return;
    if (a.placeholder) {
      page.innerHTML = '<a class="back" href="apps.html">← All apps</a>' +
        '<div class="app-hero"><div class="thumb frost" style="--c:' + esc(a.color) + '"><i></i><b>?</b></div><div>' + el(COMING, "div", "led") + '<h1>?</h1></div></div>' +
        el("Still inside its box. Opening soon.", "p", "lead");
      return;
    }
    document.title = a.name + " — Trubotshow";
    var d = a.detail || {}, h = "";
    h += '<a class="back" href="apps.html">← All apps</a>';
    h += '<div class="app-hero">' + thumb(a) + '<div>' + el(status(a), "div", "led") + el(a.name, "h1") + el(a.tagline, "p", "tag") + '</div></div>';
    h += el(d.intro || a.desc, "p", "lead");
    if (a.links && a.links.appStore) h += '<p><a class="mail" href="' + esc(a.links.appStore) + '" target="_blank" rel="noopener">App Store ↗</a></p>';
    if (d.sections) {
      h += '<h2>What it does</h2><div class="features">';
      d.sections.forEach(function (s, k) {
        h += '<div class="feature"><div class="num">' + String(k + 1).padStart(2, "0") + '</div>' + el(s.title, "h3") + el(s.body, "p") + '</div>';
      });
      h += '</div>';
    }
    h += '<h2>Dev log</h2>';
    if (a.log && a.log.length) {
      h += '<ol class="log">' + a.log.map(function (e) {
        return '<li><time>' + esc(e.date) + '</time>' + el(e.title, "h3") + el(e.body, "p") + '</li>';
      }).join("") + '</ol>';
    } else {
      h += el("Nothing here yet. It's still inside its box.", "p", "tag");
    }
    // this app's own support and privacy pages (each app has its own privacy policy: the address given to the App Store)
    var L = a.links || {}, more = [];
    if (L.support) more.push('<a href="' + esc(L.support) + '">Support</a>');
    if (L.privacy) more.push('<a href="' + esc(L.privacy) + '">Privacy Policy</a>');
    if (more.length) h += '<p class="app-links">' + more.join("") + '</p>';
    page.innerHTML = h;
  }
})();
