/* ============================================================================
   ASTRA Lab — rendering engine
   Builds the shared header / footer and fills each page from data.js.
   You normally do NOT need to edit this file — edit data.js instead.
   ============================================================================ */
(function () {
  "use strict";
  var D = window.LAB_DATA || {};
  var S = D.site || {};

  // --- helpers -------------------------------------------------------------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function el(id) { return document.getElementById(id); }
  function link(href, label, blank) {
    if (!href) return "";
    var t = blank ? ' target="_blank" rel="noopener"' : "";
    return '<a href="' + esc(href) + '"' + t + ">" + esc(label) + "</a>";
  }

  var NAV = [
    { href: "index.html",        label: "Home",         key: "home" },
    { href: "research.html",     label: "Research",     key: "research" },
    { href: "publications.html", label: "Publications", key: "publications" },
    { href: "teaching.html",     label: "Teaching",     key: "teaching" },
    { href: "people.html",       label: "People",       key: "people" },
    { href: "awards.html",       label: "Awards",       key: "awards" },
    { href: "service.html",      label: "Service",      key: "service" },
    { href: "gallery.html",      label: "Gallery",      key: "gallery" }
  ];
  // Pages without their own menu entry light up their parent.
  var NAV_PARENT = { director: "people" };

  // --- shared chrome -------------------------------------------------------
  function renderHeader(active) {
    var host = el("site-header"); if (!host) return;
    var cur = NAV_PARENT[active] || active;
    var items = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.key === cur ? ' class="active" aria-current="page"' : "") +
             ">" + esc(n.label) + "</a></li>";
    }).join("");
    host.innerHTML =
      '<div class="hdr-inner">' +
        '<a class="brand" href="index.html" aria-label="' + esc(S.labName || "Home") + ' home">' +
          '<img src="' + esc(S.logo || "") + '" alt="" width="44" height="44">' +
          '<span class="brand-text"><strong>' + esc(S.labName || "") + "</strong>" +
          "<small>Louisiana State University</small></span></a>" +
        '<nav class="hdr-nav" aria-label="Main"><ul id="navLinks">' + items +
          '<li class="nav-cta-li"><a class="nav-cta" href="people.html#join">Join Us</a></li></ul></nav>' +
        '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">' +
          "<span></span><span></span><span></span></button>" +
      "</div>";

    var toggle = host.querySelector(".nav-toggle"), list = el("navLinks");
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      host.classList.toggle("menu-open", open);
    });

    // Over the home-page photo the header starts transparent and turns solid
    // once the visitor scrolls; every other page uses the solid style.
    if (document.querySelector(".hero")) {
      host.classList.add("is-overlay");
      var onScroll = function () { host.classList.toggle("is-solid", window.scrollY > 40); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    } else {
      host.classList.add("is-solid");
    }
  }

  function renderFooter() {
    var host = el("footer"); if (!host) return;
    var y = new Date().getFullYear();
    var social = "";
    if (S.scholar)      social += link(S.scholar, "Google Scholar", true);
    if (S.linkedin)     social += link(S.linkedin, "LinkedIn", true);
    if (S.researchgate) social += link(S.researchgate, "ResearchGate", true);
    if (S.github)       social += link(S.github, "GitHub", true);
    host.innerHTML =
      '<div class="footer-grid">' +
        '<div class="footer-col"><div class="footer-brand"><img src="' + esc(S.logo || "") + '" alt="" width="40" height="40">' +
          esc(S.labName || "") + "</div>" +
          (S.tagline ? '<p class="footer-tag">' + esc(S.tagline) + "</p>" : "") +
          "<p>" + esc(S.department || "") + "</p></div>" +
        '<div class="footer-col"><h4>Explore</h4><ul class="footer-links">' +
          NAV.map(function (n) { return '<li><a href="' + n.href + '">' + esc(n.label) + "</a></li>"; }).join("") +
          '<li><a href="people.html#join">Join Us</a></li>' +
        "</ul></div>" +
        '<div class="footer-col"><h4>Contact</h4>' +
          (S.email ? "<p>" + link("mailto:" + S.email, S.email, false) + "</p>" : "") +
          (S.location ? "<p>" + esc(S.location) + "</p>" : "") +
          '<div class="footer-social">' + social + "</div></div>" +
      "</div>" +
      '<p class="footer-bottom">&copy; ' + y + " " + esc(S.labName || "") + " · Louisiana State University</p>";
  }

  /* --- home showcase artwork ----------------------------------------------
     Each entry returns the inner markup of one <svg> panel. The CSS classes
     (sc-*) carry the styling and the animation; see styles.css.            */
  var ART = {

    // A print head sweeping across a bed, laying down one layer at a time.
    printing: function () {
      var layers = "";
      for (var i = 0; i < 5; i++) {
        layers += '<rect class="sc-layer l' + (i + 1) + '" x="212" y="' + (204 - i * 14) +
                  '" width="216" height="11" rx="2" fill="rgba(253,208,35,.75)"/>';
      }
      return '<line class="sc-dim" x1="150" y1="54" x2="492" y2="54"/>' +
             '<g class="sc-head">' +
               '<rect class="sc-fill" x="-21" y="-18" width="42" height="30" rx="5"/>' +
               '<path class="sc-gold" d="M-9 12 L0 30 L9 12"/>' +
               '<line class="sc-gold sc-jet" x1="0" y1="30" x2="0" y2="88"/>' +
             '</g>' +
             layers +
             '<line class="sc-ln" x1="150" y1="220" x2="492" y2="220"/>' +
             '<line class="sc-dim" x1="196" y1="220" x2="196" y2="242"/>' +
             '<line class="sc-dim" x1="446" y1="220" x2="446" y2="242"/>';
    },

    // A physical machine on the left, its live virtual twin on the right.
    twin: function () {
      var bars = "";
      for (var i = 0; i < 4; i++) {
        bars += '<rect class="sc-bar b' + (i + 1) + '" x="' + (424 + i * 26) +
                '" y="214" width="14" height="34" rx="3" fill="rgba(253,208,35,.85)"/>';
      }
      return '<rect class="sc-fill" x="86" y="92" width="152" height="112" rx="9"/>' +
             '<circle class="sc-ln sc-gear" cx="162" cy="148" r="27"/>' +
             '<g class="sc-ln sc-gear">' +
               '<line x1="162" y1="121" x2="162" y2="175"/>' +
               '<line x1="135" y1="148" x2="189" y2="148"/>' +
               '<line x1="143" y1="129" x2="181" y2="167"/>' +
               '<line x1="181" y1="129" x2="143" y2="167"/>' +
             '</g>' +
             '<line class="sc-dim" x1="86" y1="204" x2="238" y2="204"/>' +
             '<path class="sc-gold sc-flow" d="M248 128 H392"/>' +
             '<path class="sc-gold sc-flow rev" d="M392 170 H248"/>' +
             '<rect class="sc-dim" x="398" y="92" width="152" height="112" rx="9"/>' +
             '<circle class="sc-dim" cx="474" cy="148" r="27"/>' +
             '<line class="sc-gold sc-scan" x1="404" y1="100" x2="544" y2="100"/>' +
             bars;
    },

    // A robotic arm working a conveyor line, with an inline sensor check.
    factory: function () {
      var parts = "", rollers = "", i;
      for (i = 0; i < 3; i++) {
        parts += '<g class="sc-part p' + (i + 1) + '">' +
                 '<rect class="sc-fill" x="206" y="192" width="26" height="22" rx="3"/></g>';
      }
      for (i = 0; i < 5; i++) {
        rollers += '<circle class="sc-roll" cx="' + (228 + i * 76) + '" cy="226" r="8"/>';
      }
      return '<rect class="sc-fill" x="118" y="196" width="60" height="22" rx="4"/>' +
             '<line class="sc-limb" x1="148" y1="198" x2="148" y2="152"/>' +
             // shoulder -> elbow -> claw. The groups nest and each pivots on its
             // own joint coordinate (see .sc-arm-* in styles.css), so the
             // segments stay connected as they swing.
             '<g class="sc-arm-u">' +
               '<line class="sc-limb" x1="148" y1="152" x2="220" y2="110"/>' +
               '<circle class="sc-joint" cx="220" cy="110" r="6"/>' +
               '<g class="sc-arm-f">' +
                 '<line class="sc-limb" x1="220" y1="110" x2="258" y2="166"/>' +
                 '<circle class="sc-joint" cx="258" cy="166" r="5"/>' +
                 '<path class="sc-gold" d="M249 172 l-5 12 M267 172 l5 12"/>' +
               '</g>' +
             '</g>' +
             '<circle class="sc-joint" cx="148" cy="152" r="7"/>' +
             parts +
             '<line class="sc-gold sc-belt" x1="200" y1="214" x2="544" y2="214"/>' +
             rollers +
             // inline sensor watching the line
             '<rect class="sc-fill" x="386" y="104" width="36" height="26" rx="4"/>' +
             '<circle class="sc-gfill sc-blink" cx="404" cy="117" r="6"/>' +
             '<line class="sc-dim" x1="404" y1="130" x2="404" y2="200"/>';
    },

    // Sensor signal feeding a small network that produces a decision.
    ai: function () {
      var cols = [[170, [86, 142, 198]], [320, [70, 118, 166, 214]], [470, [118, 166]]];
      var lines = "", nodes = "", n = 0, c, next, i, j;
      for (c = 0; c < cols.length - 1; c++) {
        next = cols[c + 1];
        for (i = 0; i < cols[c][1].length; i++) {
          for (j = 0; j < next[1].length; j++) {
            lines += '<line class="sc-dim sc-sig" x1="' + cols[c][0] + '" y1="' + cols[c][1][i] +
                     '" x2="' + next[0] + '" y2="' + next[1][j] + '"/>';
          }
        }
      }
      for (c = 0; c < cols.length; c++) {
        for (i = 0; i < cols[c][1].length; i++) {
          n++;
          nodes += '<circle class="sc-wfill sc-node n' + ((n % 5) + 1) + '" cx="' + cols[c][0] +
                   '" cy="' + cols[c][1][i] + '" r="6.5"/>';
        }
      }
      return '<g class="sc-wave">' +
               '<path class="sc-gold" d="M40 142 q15 -34 30 0 t30 0 t30 0 t30 0 t30 0 t30 0"/>' +
             '</g>' +
             lines + nodes +
             '<path class="sc-gold" d="M506 142 h42 l-12 -12 m12 12 l-12 12"/>';
    }
  };

  function renderShowcase() {
    var host = el("showcase"); if (!host) return;
    var items = (D.home && D.home.showcase) || [];
    if (!items.length) { host.parentNode.removeChild(host); return; }

    var scenes = "", dots = "";
    items.forEach(function (it, i) {
      var art = ART[it.art] ? ART[it.art]() : "";
      scenes += '<div class="scene' + (i === 0 ? " is-active" : "") + '" data-i="' + i + '">' +
                '<svg viewBox="0 0 640 270" role="img" aria-label="' + esc(it.title) + '">' +
                art + "</svg></div>";
      dots += '<button type="button" data-i="' + i + '" aria-selected="' + (i === 0) +
              '" data-label="' + esc(it.title) + '" aria-label="Show ' + esc(it.title) + '"></button>';
    });

    host.innerHTML =
      '<div class="showcase-inner">' +
        '<div class="showcase-stage">' + scenes + "</div>" +
        '<div class="showcase-caption" id="showcase-caption" aria-live="polite">' +
          "<h3>" + esc(items[0].title) + "</h3><p>" + esc(items[0].text) + "</p>" +
        "</div>" +
        '<div class="showcase-dots" role="tablist">' + dots + "</div>" +
      "</div>";

    var sceneEls = host.querySelectorAll(".scene");
    var dotEls = host.querySelectorAll(".showcase-dots button");
    var cap = el("showcase-caption");
    var idx = 0, timer = null, hovered = false;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(n) {
      if (n === idx) return;
      idx = (n + items.length) % items.length;
      for (var i = 0; i < sceneEls.length; i++) {
        sceneEls[i].classList.toggle("is-active", i === idx);
        dotEls[i].setAttribute("aria-selected", String(i === idx));
      }
      cap.classList.add("is-swapping");
      setTimeout(function () {
        cap.innerHTML = "<h3>" + esc(items[idx].title) + "</h3><p>" + esc(items[idx].text) + "</p>";
        cap.classList.remove("is-swapping");
      }, 300);
    }

    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() {
      stop();
      // Hold a single still panel for reduced motion, and never resume while
      // the pointer is still resting on the showcase (e.g. just after a dot
      // click, which happens with the cursor inside the component).
      if (reduce || items.length < 2 || hovered) return;
      timer = setInterval(function () { show(idx + 1); }, 6000);
    }

    for (var i = 0; i < dotEls.length; i++) {
      dotEls[i].addEventListener("click", function () {
        show(parseInt(this.getAttribute("data-i"), 10));
        start();                                    // restart the clock after a manual pick
      });
    }
    // Pause while the visitor is reading or the tab is in the background.
    host.addEventListener("mouseenter", function () { hovered = true; stop(); host.classList.add("is-paused"); });
    host.addEventListener("mouseleave", function () { hovered = false; host.classList.remove("is-paused"); start(); });
    host.addEventListener("focusin",  function () { stop(); });
    host.addEventListener("focusout", function () { start(); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { stop(); } else { start(); }
    });
    start();
  }

  // --- person card ---------------------------------------------------------
  function personLinks(m) {
    var out = "";
    if (m.email)        out += '<a href="mailto:' + esc(m.email) + '">' + icon("mail") + " Email</a>";
    if (m.linkedin)     out += link(m.linkedin, "LinkedIn", true);
    if (m.scholar)      out += link(m.scholar, "Scholar", true);
    if (m.researchgate) out += link(m.researchgate, "ResearchGate", true);
    if (m.website)      out += link(m.website, "Website", true);
    return out;
  }
  function photo(m, cls) {
    return '<img class="' + cls + '" src="' + esc(m.image || "") + '" alt="' + esc(m.name) +
      '" loading="lazy" onerror="this.src=\'assets/images/placeholder.svg\'">';
  }
  function teamCard(m) {
    return '<div class="team-card">' + photo(m, "team-card-image") +
      '<div class="team-card-content">' +
        '<h3 class="team-card-name">' + esc(m.name) + "</h3>" +
        '<p class="team-card-position">' + esc(m.position || "") + "</p>" +
        (m.education ? '<p class="team-card-interests"><strong>Education:</strong> ' + esc(m.education) + "</p>" : "") +
        (m.interests ? '<p class="team-card-interests"><strong>Research:</strong> ' + esc(m.interests) + "</p>" : "") +
        (m.bio ? '<p class="team-card-bio">' + esc(m.bio) + "</p>" : "") +
        '<div class="team-card-links">' + personLinks(m) + "</div>" +
      "</div></div>";
  }

  // --- shared building blocks ---------------------------------------------
  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Small inline icons (stroke-based, inherit currentColor).
  var ICON = {
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>',
    grant:  '<circle cx="12" cy="9" r="5"/><path d="M8.5 13 7 21l5-3 5 3-1.5-8"/>',
    cap:    '<path d="M2 9 12 4l10 5-10 5L2 9z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    cert:   '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 9h10M7 12h6M15 17l1 4 2-1.5 2 1.5-1-4"/>',
    mail:   '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    link:   '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    arrow:  '<path d="M5 12h14M13 6l6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    school: '<path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/>',
    work:   '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>',
    zoom:   '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>',
    printer: '<path d="M6 3h12v5H6zM4 8h16v8H4z"/><path d="M8 16v5h8v-5M8 12h.01"/>',
    twin:   '<rect x="2" y="6" width="8" height="12" rx="1.5"/><rect x="14" y="6" width="8" height="12" rx="1.5" stroke-dasharray="2.5 2"/><path d="M10 10h4M14 14h-4"/>',
    shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
    gear:   '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    leaf:   '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19c3-4 6-7 10-9"/>',
    pulse:  '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
    users:  '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.7c2 .7 3.2 2.5 3.5 5.3"/>',
    mic:    '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    flag:   '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    review: '<path d="M4 4h12l4 4v12H4z"/><path d="M8 12h8M8 16h5M15 4v5h5"/>',
    medal:  '<path d="M7 3h10l-3 6h-4z"/><circle cx="12" cy="15" r="5"/><path d="m12 13 .9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3z"/>',
    robot:  '<rect x="6" y="7" width="12" height="10" rx="2"/><path d="M12 3v4M9 11h.01M15 11h.01M10 14h4M3 11v3M21 11v3M9 17v4M15 17v4"/>',
    chip:   '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'

  };
  function icon(name, cls) {
    return '<svg class="ico' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true" ' +
           'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
           (ICON[name] || "") + "</svg>";
  }

  // Bold the lab director in an author list (escaped first, so it is safe).
  function authorsHtml(a) {
    return esc(a).replace(/Bappy, M\.(?: M\.)?/g, function (m) { return "<strong>" + m + "</strong>"; });
  }

  function btn(href, label, kind, blank) {
    if (!href) return "";
    return '<a class="btn ' + (kind || "btn-primary") + '" href="' + esc(href) + '"' +
      (blank ? ' target="_blank" rel="noopener"' : "") + ">" + label + "</a>";
  }

  // Unique courses across every teaching entry.
  function courseCount() {
    var seen = {};
    ((D.director || {}).teaching || []).forEach(function (t) {
      (t.courses || []).forEach(function (c) { seen[c] = 1; });
    });
    return Object.keys(seen).length;
  }
  function countPubs(cats) {
    return (D.publications || []).filter(function (p) { return cats.indexOf(p.category) >= 0; }).length;
  }

  // Animate numbers from 0 when they scroll into view.
  function countUp(root) {
    var nums = root.querySelectorAll("[data-count]");
    function run(n) {
      var end = parseInt(n.getAttribute("data-count"), 10) || 0;
      if (REDUCED) { n.textContent = end; return; }
      var t0 = null, dur = 1400;
      function step(t) {
        if (!t0) t0 = t;
        var k = Math.min((t - t0) / dur, 1);
        n.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));   // ease-out
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { Array.prototype.forEach.call(nums, run); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    Array.prototype.forEach.call(nums, function (n) { io.observe(n); });
  }

  // Vertical timeline used on the Director page.
  function timeline(items) {
    return '<ol class="timeline">' + items.map(function (it) {
      return '<li class="tl-item"><span class="tl-dot" aria-hidden="true"></span>' +
        '<div class="tl-card">' +
          '<span class="tl-when">' + esc(it.when) + "</span>" +
          "<h3 class=\"tl-title\">" + esc(it.title) + "</h3>" +
          (it.sub ? '<p class="tl-sub">' + esc(it.sub) + "</p>" : "") +
          (it.detail ? '<p class="tl-detail">' + it.detail + "</p>" : "") +
        "</div></li>";
    }).join("") + "</ol>";
  }

  /* --- lightbox ------------------------------------------------------------
     One shared viewer for gallery photos and research figures. Opens on the
     clicked item, steps with the arrow keys or buttons, closes on Esc or a
     click outside the image, and hands focus back to whatever opened it.   */
  var LB = null;
  function lightbox(items, start, opener) {
    if (!LB) {
      var box = document.createElement("div");
      box.className = "lightbox"; box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Image viewer");
      box.innerHTML =
        '<button class="lb-btn lb-close" aria-label="Close">&times;</button>' +
        '<button class="lb-btn lb-prev" aria-label="Previous image">&#8249;</button>' +
        '<figure class="lb-figure"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
        '<button class="lb-btn lb-next" aria-label="Next image">&#8250;</button>' +
        '<span class="lb-count"></span>';
      document.body.appendChild(box);
      LB = { box: box, img: box.querySelector(".lb-img"), cap: box.querySelector(".lb-cap"),
             count: box.querySelector(".lb-count"), items: [], i: 0, opener: null };
      function go(d) { show(LB.i + d); }
      function show(n) {
        LB.i = (n + LB.items.length) % LB.items.length;
        var it = LB.items[LB.i];
        LB.img.classList.remove("is-in");
        LB.img.src = it.src; LB.img.alt = it.caption || "";
        LB.cap.textContent = it.caption || "";
        LB.count.textContent = (LB.i + 1) + " / " + LB.items.length;
        requestAnimationFrame(function () { LB.img.classList.add("is-in"); });
      }
      function close() {
        box.classList.remove("is-open");
        document.body.classList.remove("lb-lock");
        if (LB.opener) LB.opener.focus();
      }
      LB.show = show; LB.close = close;
      box.querySelector(".lb-close").addEventListener("click", close);
      box.querySelector(".lb-prev").addEventListener("click", function () { go(-1); });
      box.querySelector(".lb-next").addEventListener("click", function () { go(1); });
      box.addEventListener("click", function (e) { if (e.target === box) close(); });
      document.addEventListener("keydown", function (e) {
        if (!box.classList.contains("is-open")) return;
        if (e.key === "Escape") close();
        else if (e.key === "ArrowLeft") go(-1);
        else if (e.key === "ArrowRight") go(1);
      });
    }
    LB.items = items; LB.opener = opener || null;
    var single = items.length < 2;
    LB.box.classList.toggle("is-single", single);
    LB.show(start || 0);
    LB.box.classList.add("is-open");
    document.body.classList.add("lb-lock");
    LB.box.querySelector(".lb-close").focus();
  }

  /* --- home hero slideshow ------------------------------------------------
     Full-screen photos that cross-fade with a slow zoom. Pauses while the
     tab is hidden and holds the first photo still under reduced motion.    */
  function renderHero() {
    var host = el("hero"); if (!host) return;
    var h = D.home || {}, slides = h.heroSlides || [];
    host.innerHTML =
      '<div class="hero-slides">' + slides.map(function (s, i) {
        return '<img class="hero-slide' + (i === 0 ? " is-active" : "") + '" src="' + esc(s.image) + '" alt="" decoding="async"' +
               (i === 0 ? ' fetchpriority="high"' : "") + ">";
      }).join("") + "</div>" +
      '<div class="hero-shade" aria-hidden="true"></div>' +
      '<div class="hero-grid" aria-hidden="true"></div>' +
      '<div class="hero-inner">' +
        '<span class="hero-eyebrow">' + esc(S.department || "") + "</span>" +
        '<h1 class="hero-title">' + esc(h.heroTitle || S.labName || "") + "</h1>" +
        '<p class="hero-sub">' + esc(h.heroSubtitle || "") + "</p>" +
        (h.heroText ? '<p class="hero-text">' + esc(h.heroText) + "</p>" : "") +
        '<div class="btn-row">' + btn("research.html", "Explore our research " + icon("arrow"), "btn-cta") +
          btn("people.html", "Meet the team", "btn-ghost") + "</div>" +
      "</div>" +
      (slides.length ? '<div class="hero-foot"><div class="hero-meta" aria-live="polite">' +
          '<span class="hero-topic"></span><span class="hero-cap"></span><span class="hero-credit"></span></div>' +
        '<div class="hero-dots">' + slides.map(function (s, i) {
          return '<button type="button" aria-label="Show: ' + esc(s.label || s.caption || "photo " + (i + 1)) +
                 '" aria-pressed="' + (i === 0) + '" data-i="' + i + '"></button>';
        }).join("") + "</div></div>" : "");

    var imgs = host.querySelectorAll(".hero-slide"), dots = host.querySelectorAll(".hero-dots button");
    var meta = host.querySelector(".hero-meta"), idx = 0, timer = null, dead = {};
    function fill() {
      if (!meta) return;
      var s = slides[idx] || {};
      meta.classList.remove("is-in");
      meta.querySelector(".hero-topic").textContent = s.label || "";
      meta.querySelector(".hero-cap").textContent = s.caption || "";
      meta.querySelector(".hero-credit").textContent = s.credit || "";
      void meta.offsetWidth;          // restart the entrance animation
      meta.classList.add("is-in");
    }
    function show(n) {
      // step past any photo that failed to load
      for (var k = 0; k < imgs.length; k++) {
        var j = ((n + k) % imgs.length + imgs.length) % imgs.length;
        if (!dead[j]) { n = j; break; }
      }
      idx = n;
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].classList.toggle("is-active", i === idx);
        if (dots[i]) dots[i].setAttribute("aria-pressed", String(i === idx));
      }
      fill();
    }
    // Photos hosted elsewhere can disappear; drop them instead of showing a gap.
    Array.prototype.forEach.call(imgs, function (img, i) {
      img.addEventListener("error", function () {
        dead[i] = true;
        img.style.display = "none";
        if (dots[i]) dots[i].style.display = "none";
        if (i === idx) show(idx + 1);
      });
    });
    function start() { stop(); if (!REDUCED && imgs.length > 1) timer = setInterval(function () { show(idx + 1); }, 6500); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    Array.prototype.forEach.call(dots, function (d) {
      d.addEventListener("click", function () { show(+d.getAttribute("data-i")); start(); });
    });
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
    fill();
    start();
  }

  /* --- page-wide touches: reading progress, back-to-top, card glow ------- */
  function setupExtras() {
    var bar = document.createElement("div");
    bar.className = "progress-bar"; bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var up = document.createElement("button");
    up.className = "to-top"; up.type = "button"; up.setAttribute("aria-label", "Back to top");
    up.innerHTML = icon("arrow");
    up.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }); });
    document.body.appendChild(up);
    var ticking = false;
    function sync() {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
      up.classList.toggle("is-shown", window.scrollY > 700);
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(sync); } }, { passive: true });
    sync();

    // A soft light follows the cursor across cards.
    if (!REDUCED && window.matchMedia && window.matchMedia("(hover: hover)").matches) {
      document.addEventListener("pointermove", function (e) {
        var c = e.target.closest && e.target.closest(".proj-card, .card, .svc-card, .fund-card, .join-card");
        if (!c) return;
        var r = c.getBoundingClientRect();
        c.style.setProperty("--mx", (e.clientX - r.left) + "px");
        c.style.setProperty("--my", (e.clientY - r.top) + "px");
      }, { passive: true });
    }
  }

  function sectionHead(title, more, href) {
    return '<div class="section-head"><h2 class="section-title">' + esc(title) + "</h2>" +
      (more ? '<a class="more-link" href="' + href + '">' + esc(more) + " &rarr;</a>" : "") + "</div>";
  }

  function projectCard(p, i) {
    return '<article class="proj-card">' +
      '<button class="proj-media" type="button" data-i="' + i + '" aria-label="Enlarge figure: ' + esc(p.title) + '">' +
        '<img src="' + esc(p.image) + '" alt="Method figure: ' + esc(p.title) + '" loading="lazy">' +
        '<span class="zoom-hint">' + icon("zoom") + "</span></button>" +
      '<div class="proj-body"><span class="badge badge-gold">' + esc(p.status) + "</span>" +
        "<h3>" + esc(p.title) + "</h3><p>" + esc(p.summary) + "</p>" +
        '<div class="tag-row">' + (p.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '<div class="card-links">' + (p.links || []).map(function (l) { return link(l.url, l.label, true); }).join("") + "</div>" +
      "</div></article>";
  }
  function wireFigures(root, items) {
    var figs = items.map(function (p) { return { src: p.image, caption: p.title }; });
    Array.prototype.forEach.call(root.querySelectorAll("[data-i]"), function (b) {
      b.addEventListener("click", function () { lightbox(figs, +b.getAttribute("data-i"), b); });
    });
  }

  function fundCard(f) {
    return '<div class="fund-card"><span class="fund-mark">' + esc(f.short) + "</span>" +
      "<div><h3>" + esc(f.sponsor) + "</h3>" +
      (f.award ? '<p class="fund-award">' + esc(f.award) + "</p>" : "") +
      "<p>" + esc(f.project) + "</p></div></div>";
  }

  // --- page renderers ------------------------------------------------------
  var PAGES = {
    home: function () {
      var h = D.home || {}, dir = D.director || {};
      renderHero();
      renderShowcase();

      var stats = el("stats");
      if (stats) {
        var S4 = [
          { n: countPubs(["journal"]), label: "Journal Articles" },
          { n: countPubs(["conference", "talk", "poster"]), label: "Conference Papers & Presentations" },
          { n: (D.awards || []).length, label: "Honors & Awards" },
          { n: courseCount(), label: "Courses Taught" }
        ];
        stats.innerHTML = S4.map(function (s) {
          return '<div class="stat"><span class="stat-num" data-count="' + s.n + '">' + s.n + "</span>" +
                 '<span class="stat-label">' + esc(s.label) + "</span></div>";
        }).join("");
        countUp(stats);
      }

      var th = el("home-thrusts");
      if (th) {
        th.innerHTML = (D.research || []).map(function (r, i) {
          var n = (i + 1 < 10 ? "0" : "") + (i + 1);
          return '<a class="tcard" style="--ac:' + esc(r.accent || "#5e2ea0") + '" href="research.html#thrust-' + (i + 1) + '">' +
            '<span class="tcard-media">' +
              '<img src="' + esc(r.cover || r.image) + '" alt="" loading="lazy">' +
              '<span class="tcard-num">' + n + "</span>" +
              '<span class="tcard-ico">' + icon(r.icon || "gear") + "</span>" +
            "</span>" +
            '<span class="tcard-body">' +
              "<h3>" + esc(r.title) + "</h3>" +
              "<p>" + esc(r.description) + "</p>" +
              '<span class="tcard-tags">' + (r.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</span>" +
              '<span class="tcard-more">Explore thrust ' + icon("arrow") + "</span>" +
            "</span>" +
            '<span class="tcard-sheen" aria-hidden="true"></span></a>';
        }).join("");
        // Gentle 3D tilt toward the cursor.
        if (!REDUCED && window.matchMedia && window.matchMedia("(hover: hover)").matches) {
          Array.prototype.forEach.call(th.querySelectorAll(".tcard"), function (c) {
            c.addEventListener("pointermove", function (e) {
              var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
              c.style.setProperty("--ry", ((x - .5) * 7).toFixed(2) + "deg");
              c.style.setProperty("--rx", ((.5 - y) * 7).toFixed(2) + "deg");
              c.style.setProperty("--sx", (x * 100).toFixed(1) + "%");
              c.style.setProperty("--sy", (y * 100).toFixed(1) + "%");
            });
            c.addEventListener("pointerleave", function () { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); });
          });
        }
      }

      var pj = el("home-projects");
      if (pj) {
        var recent = (D.projects || []).slice(0, 3);
        pj.innerHTML = recent.map(projectCard).join("");
        wireFigures(pj, recent);
      }

      var about = el("about");
      if (about) {
        about.innerHTML =
          "<div><span class='eyebrow'>About the Lab</span><h2 class='about-title'>Making manufacturing systems observable, trustworthy, and autonomous</h2>" +
          "<p class='lead'>" + esc(h.aboutLead) + "</p>" +
          "<p>" + esc(h.aboutBody) + "</p>" +
          "<div class='btn-row'>" + btn("research.html", "Our research " + icon("arrow"), "btn-primary") +
            btn("people.html#join", "Join the lab", "btn-outline") + "</div></div>" +
          (h.image ? "<figure class='about-photo'><span class='about-frame'><img src='" + esc(h.image) + "' alt='" + esc(h.imageCaption || "ASTRA Lab") +
             "' loading='lazy' onerror=\"this.closest('figure').style.display='none'\"></span>" +
             (h.imageCaption ? "<figcaption>" + esc(h.imageCaption) + "</figcaption>" : "") + "</figure>" : "");
      }

      var nb = el("news");
      if (nb) {
        nb.innerHTML = (D.news || []).slice(0, 8).map(function (n) {
          return '<li class="news-item"><span class="news-meta"><span class="news-date">' + esc(n.date) + "</span>" +
            (n.type ? '<span class="news-tag news-' + esc(n.type) + '">' + esc(n.type) + "</span>" : "") +
            '</span><span class="news-text">' + esc(n.text) + "</span></li>";
        }).join("") || '<li class="news-item muted">No updates yet.</li>';
      }

      var sp = el("spotlight");
      if (sp && dir.name) {
        sp.innerHTML =
          '<div class="spotlight-photo"><img src="' + esc(dir.image) + '" alt="' + esc(dir.name) + '" loading="lazy"></div>' +
          '<span class="eyebrow">Lab Director</span>' +
          "<h3>" + esc(dir.name) + "</h3>" +
          '<p class="spotlight-title">' + esc(dir.title) + "<br>" + esc(dir.university) + "</p>" +
          '<p class="spotlight-bio">' + esc((dir.bio || [""])[0]) + "</p>" +
          '<div class="btn-row">' + btn("director.html", "Full profile " + icon("arrow"), "btn-primary") +
            btn(dir.email ? "mailto:" + dir.email : "", icon("mail") + " Email", "btn-outline") + "</div>";
      }

      var fac = el("home-facilities");
      if (fac) {
        var shots = (D.resources || []).filter(function (r) { return r.image; }).slice(0, 5);
        fac.innerHTML = shots.map(function (r) {
          return '<a class="fac-tile' + (r.fit === "contain" ? " is-contain" : "") + '" href="research.html#facilities"><img src="' + esc(r.image) + '" alt="' + esc(r.name) + '" loading="lazy">' +
            '<span class="fac-cap"><strong>' + esc(r.name) + "</strong><small>" + esc(r.group || "") + "</small></span></a>";
        }).join("");
      }

      var mo = el("moments");
      if (mo) {
        var ms = h.moments || [];
        if (!ms.length) { mo.closest(".section").style.display = "none"; }
        mo.innerHTML = ms.map(function (m, i) {
          return '<button type="button" class="moment' + (i === 0 ? " is-lead" : "") + '" data-i="' + i + '">' +
            '<img src="' + esc(m.image) + '" alt="' + esc(m.caption) + '" loading="lazy">' +
            '<span class="moment-cap"><span class="moment-label">' + esc(m.label || "") + "</span>" + esc(m.caption) + "</span></button>";
        }).join("");
        var mset = ms.map(function (m) { return { src: m.image, caption: m.caption }; });
        Array.prototype.forEach.call(mo.querySelectorAll(".moment"), function (b) {
          b.addEventListener("click", function () { lightbox(mset, +b.getAttribute("data-i"), b); });
        });
      }

      // Endless photo strip: the list is rendered twice so the loop is seamless.
      var mq = el("marquee");
      if (mq) {
        var pics = (D.gallery || []).filter(function (g) { return g.category !== "life"; }).slice(0, 14);
        if (!pics.length) { mq.closest(".marquee-band").style.display = "none"; }
        else {
          var row = pics.map(function (g) {
            return '<a class="mq-item" href="gallery.html"><img src="' + esc(g.image) + '" alt="' +
                   esc(g.caption) + '" loading="lazy"></a>';
          }).join("");
          mq.innerHTML = '<div class="mq-track">' + row + row.replace(/<a /g, '<a tabindex="-1" aria-hidden="true" ') + "</div>";
        }
      }

      var spn = el("sponsors");
      if (spn) {
        spn.innerHTML = (D.sponsors || []).map(function (m) {
          return m.logo
            ? '<figure class="sponsor-logo" title="' + esc(m.name) + '"><span class="sl-img"><img src="' + esc(m.logo) +
              '" alt="' + esc(m.name) + '" loading="lazy"></span><figcaption>' + esc(m.name) + "</figcaption></figure>"
            : '<span class="sponsor"><b>' + esc(m.short) + "</b>" + esc(m.name) + "</span>";
        }).join("");
      }
    },

    research: function () {
      var host = el("research");
      var areas = D.research || [];
      var jump = el("thrust-nav");
      if (jump) {
        jump.innerHTML = areas.map(function (r, i) {
          return '<a class="chip" href="#thrust-' + (i + 1) + '">' + icon(r.icon || "gear") + " " + esc(r.title) + "</a>";
        }).join("");
      }
      if (host) {
        host.innerHTML = areas.map(function (p, i) {
          var links = (p.links || []).map(function (l) { return link(l.url, l.label, true); }).join("");
          var tags = (p.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
          return '<article class="feature-row thrust-row' + (i % 2 ? " is-flipped" : "") + '" id="thrust-' + (i + 1) + '">' +
            '<button class="feature-media' + (p.fit === "contain" ? "" : " is-photo") + '" type="button" data-i="' + i + '" aria-label="Enlarge image: ' + esc(p.title) + '">' +
              '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">' +
              '<span class="zoom-hint">' + icon("zoom") + "</span></button>" +
            '<div class="feature-body"><span class="thrust-label">' + icon(p.icon || "gear") + " Thrust " + (i + 1) + "</span>" +
              "<h3>" + esc(p.title) + "</h3>" +
              (tags ? "<div class='tag-row'>" + tags + "</div>" : "") +
              "<p>" + esc(p.description) + "</p>" +
              (links ? "<div class='card-links'><span class='links-label'>Key papers</span>" + links + "</div>" : "") +
            "</div></article>";
        }).join("");
        wireFigures(host, areas);
      }

      var pj = el("projects");
      if (pj) { pj.innerHTML = (D.projects || []).map(projectCard).join(""); wireFigures(pj, D.projects || []); }

      var hl = el("highlights");
      if (hl) {
        var items = D.highlights || [];
        hl.innerHTML = items.map(function (p, i) {
          return '<article class="feature-row' + (i % 2 ? " is-flipped" : "") + '">' +
            '<button class="feature-media" type="button" data-i="' + i + '" aria-label="Enlarge figure: ' + esc(p.title) + '">' +
              '<img src="' + esc(p.image) + '" alt="Key figure from: ' + esc(p.title) + '" loading="lazy">' +
              '<span class="zoom-hint">' + icon("zoom") + "</span></button>" +
            '<div class="feature-body"><span class="badge">' + esc(p.venue) + " · " + esc(p.year) + "</span>" +
              "<h3>" + esc(p.title) + "</h3>" +
              '<p class="feature-authors">' + authorsHtml(p.authors) + "</p>" +
              "<p>" + esc(p.summary) + "</p>" +
              (p.link ? btn(p.link, "Read the paper " + icon("arrow"), "btn-outline", true) : "") +
            "</div></article>";
        }).join("");
        wireFigures(hl, items);
      }

      var fl = el("funding-lab"), fd = el("funding-doctoral");
      if (fl) fl.innerHTML = (D.funding || []).filter(function (f) { return f.scope === "lab"; }).map(fundCard).join("");
      if (fd) fd.innerHTML = (D.funding || []).filter(function (f) { return f.scope !== "lab"; }).map(fundCard).join("");

      var fac = el("facilities-list");
      if (fac) {
        var order = [], groups = {};
        (D.resources || []).forEach(function (r) {
          var g = r.group || "Other";
          if (!groups[g]) { groups[g] = []; order.push(g); }
          groups[g].push(r);
        });
        var GI = { "Computing": "chip", "3D Printing": "printer", "Robotics": "gear" };
        fac.innerHTML = order.map(function (g) {
          return '<h3 class="fac-group">' + icon(GI[g] || "gear") + " " + esc(g) + "</h3><div class='card-grid'>" +
            groups[g].map(function (r) {
              return '<div class="card">' +
                (r.image
                  ? "<div class='card-media" + (r.fit === "contain" ? " is-figure" : "") + "'><img class='card-image' src='" + esc(r.image) + "' alt='" + esc(r.name) + "' loading='lazy'></div>"
                  : "<div class='card-media card-icon'>" + icon(GI[g] || "gear") + "</div>") +
                "<div class='card-body'><h3 class='card-title'>" + esc(r.name) + "</h3>" +
                "<p class='card-text'>" + esc(r.description) + "</p>" +
                (r.specs ? "<p class='card-specs'>" + esc(r.specs) + "</p>" : "") +
                "</div></div>";
            }).join("") + "</div>";
        }).join("");
      }
    },

    director: function () {
      var d = D.director || {}; if (!d.name) return;
      var hero = el("profile-hero");
      if (hero) {
        var links = "";
        if (d.email)        links += btn("mailto:" + d.email, icon("mail") + " " + esc(d.email), "btn-light");
        if (d.scholar)      links += btn(d.scholar, "Google Scholar", "btn-ghost", true);
        if (d.linkedin)     links += btn(d.linkedin, "LinkedIn", "btn-ghost", true);
        if (d.researchgate) links += btn(d.researchgate, "ResearchGate", "btn-ghost", true);
        hero.innerHTML =
          '<div class="profile-inner">' +
            '<div class="profile-photo"><img src="' + esc(d.image) + '" alt="' + esc(d.name) + '"></div>' +
            '<div class="profile-id"><span class="eyebrow">' + esc(d.role) + "</span>" +
              "<h1>" + esc(d.name) + "</h1>" +
              '<p class="profile-title">' + esc(d.title) + "</p>" +
              '<p class="profile-dept">' + esc(d.department) + "<br>" + esc(d.university) + "</p>" +
              '<div class="btn-row">' + links + "</div>" +
            "</div>" +
          "</div>";
      }

      var bio = el("profile-bio");
      if (bio) {
        bio.innerHTML = (d.bio || []).map(function (p, i) {
          return "<p" + (i === 0 ? " class='lead'" : "") + ">" + esc(p) + "</p>";
        }).join("") +
        "<h3 class='sub-title'>Research Interests</h3><div class='tag-row'>" +
        (d.interests || []).map(function (t) { return '<span class="tag tag-lg">' + esc(t) + "</span>"; }).join("") + "</div>";
      }

      var facts = el("profile-facts");
      if (facts) {
        var F = [
          { n: countPubs(["journal"]), label: "Journal articles" },
          { n: countPubs(["conference", "talk", "poster"]), label: "Conference works" },
          { n: (D.awards || []).length, label: "Honors & awards" },
          { n: courseCount(), label: "Courses taught" }
        ];
        facts.innerHTML = F.map(function (f) {
          return '<div class="fact"><span class="fact-num" data-count="' + f.n + '">' + f.n +
                 '</span><span class="fact-label">' + esc(f.label) + "</span></div>";
        }).join("");
        countUp(facts);
      }

      var edu = el("profile-education");
      if (edu) edu.innerHTML = timeline((d.education || []).map(function (e) {
        return { when: e.years, title: e.degree, sub: e.school + (e.place ? " · " + e.place : ""),
                 detail: e.thesis ? "<em>" + esc(e.thesisLabel || "Thesis") + ":</em> " + esc(e.thesis) : "" };
      }));

      var aca = el("profile-academic");
      if (aca) aca.innerHTML = timeline((d.academic || []).map(function (a) {
        return { when: a.years, title: a.role, sub: a.org + (a.unit ? " · " + a.unit : ""),
                 detail: a.note ? esc(a.note) : "" };
      }));

      var ind = el("profile-industry");
      if (ind) ind.innerHTML = timeline((d.industry || []).map(function (a) {
        return { when: a.years, title: a.role, sub: a.org, detail: a.note ? esc(a.note) : "" };
      }));

      var pr = el("profile-projects");
      if (pr) {
        pr.innerHTML = (d.projects || []).map(function (p, i) {
          return '<article class="project-row' + (i % 2 ? " is-flipped" : "") + '">' +
            '<div class="project-media' + (p.fit === "contain" ? " is-figure" : "") + '"><img src="' + esc(p.image) + '" alt="" loading="lazy"></div>' +
            '<div class="project-body"><span class="badge badge-gold">Funded by ' + esc(p.funding) + "</span>" +
              "<h3>" + esc(p.title) + "</h3><ul class='check-list'>" +
              (p.points || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") +
            "</ul></div></article>";
        }).join("");
      }

      var te = el("profile-teaching");
      if (te) {
        te.innerHTML = (d.teaching || []).map(function (t) {
          return '<div class="teach-card"><div class="teach-head"><h3>' + esc(t.org) + "</h3>" +
            '<span class="tl-when">' + esc(t.years) + "</span></div>" +
            '<div class="tag-row">' + (t.courses || []).map(function (c) {
              return '<span class="tag">' + esc(c) + "</span>"; }).join("") + "</div>" +
            (t.note ? '<p class="teach-note">' + esc(t.note) + "</p>" : "") + "</div>";
        }).join("");
      }

      var ce = el("profile-certs");
      if (ce) {
        ce.innerHTML = (d.certifications || []).map(function (c) {
          return '<div class="cert-card">' + icon("cert", "cert-ico") +
            "<div><h3>" + esc(c.title) + "</h3><p>" + esc(c.org) + "</p>" +
            '<span class="cert-year">' + esc(c.year) + "</span></div></div>";
        }).join("");
      }

      // Section shortcuts: highlight the section currently under the sticky
      // bars, recomputed on every scroll so it also clears when scrolling up.
      var tabs = Array.prototype.slice.call(document.querySelectorAll(".profile-tabs a"));
      var secs = tabs.map(function (a) { return document.querySelector(a.getAttribute("href")); });
      if (tabs.length) {
        var ticking = false;
        var sync = function () {
          ticking = false;
          var cur = -1;
          secs.forEach(function (sec, i) { if (sec && sec.getBoundingClientRect().top <= 170) cur = i; });
          tabs.forEach(function (a, i) { a.classList.toggle("is-current", i === cur); });
        };
        window.addEventListener("scroll", function () {
          if (!ticking) { ticking = true; requestAnimationFrame(sync); }
        }, { passive: true });
        sync();
      }
    },

    publications: function () {
      var pubs = D.publications || [];
      var CATS = [
        { key: "all",        label: "All" },
        { key: "journal",    label: "Journal Articles" },
        { key: "conference", label: "Conference Papers" },
        { key: "preprint",   label: "Preprints" },
        { key: "talk",       label: "Presentations" },
        { key: "poster",     label: "Posters" },
        { key: "thesis",     label: "Theses" }
      ];
      var LABEL = { journal: "Journal", conference: "Conference", preprint: "Preprint", talk: "Presentation", poster: "Poster", thesis: "Thesis" };
      function count(k) { return k === "all" ? pubs.length : pubs.filter(function (p) { return p.category === k; }).length; }
      var cats = CATS.filter(function (c) { return count(c.key) > 0; });

      var start = (location.hash || "").replace("#", "");
      var state = { cat: cats.some(function (c) { return c.key === start; }) ? start : "all", q: "" };

      var bar = el("pub-toolbar"), list = el("pub-list");
      if (!bar || !list) return;
      bar.innerHTML =
        '<div class="filter-row" role="tablist" aria-label="Filter by type">' + cats.map(function (c) {
          return '<button type="button" role="tab" class="chip" data-cat="' + c.key + '" aria-selected="' +
                 (c.key === state.cat) + '">' + esc(c.label) + ' <span class="chip-n">' + count(c.key) + "</span></button>";
        }).join("") + "</div>" +
        '<label class="search">' + icon("search") +
          '<input type="search" id="pub-q" placeholder="Search title, author, venue or year" aria-label="Search publications">' +
        "</label>";

      // Hyphens are ignored so "bioprinting" also finds "bio-printing".
      function norm(t) { return String(t).toLowerCase().replace(/[-‐–]/g, ""); }
      function render() {
        var q = norm(state.q);
        var items = pubs.filter(function (p) {
          if (state.cat !== "all" && p.category !== state.cat) return false;
          if (!q) return true;
          return norm(p.title + " " + p.authors + " " + p.venue + " " + p.year).indexOf(q) >= 0;
        }).sort(function (a, b) { return (b.year || 0) - (a.year || 0); });

        if (!items.length) {
          list.innerHTML = '<p class="empty">No publications match “' + esc(state.q) + '”.</p>';
          return;
        }
        var html = "", year = null, n = 0;
        items.forEach(function (p) {
          if (p.year !== year) {
            if (year !== null) html += "</ul></section>";
            year = p.year;
            html += '<section class="pub-year"><h3 class="pub-year-label">' + esc(year) + '</h3><ul class="publication-list">';
          }
          html += '<li class="publication-item pub-in" style="--i:' + Math.min(n++, 12) + '">' +
            '<span class="pub-type pub-type-' + esc(p.category) + '">' + esc(LABEL[p.category] || p.category) + "</span>" +
            '<p class="publication-text"><span class="pub-title">' + esc(p.title) + "</span><br>" +
            authorsHtml(p.authors) + (/\.$/.test(p.authors) ? " " : ". ") + "<em>" + esc(p.venue) + "</em>, " + esc(p.year) + ".</p>" +
            (p.link ? '<a class="publication-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">' +
              icon("link") + (p.link.indexOf("doi.org") >= 0 ? " DOI" : " View") + "</a>" : "") +
            "</li>";
        });
        list.innerHTML = html + "</ul></section>";
      }

      Array.prototype.forEach.call(bar.querySelectorAll(".chip"), function (b) {
        b.addEventListener("click", function () {
          state.cat = b.getAttribute("data-cat");
          Array.prototype.forEach.call(bar.querySelectorAll(".chip"), function (x) {
            x.setAttribute("aria-selected", String(x === b));
          });
          if (history.replaceState) history.replaceState(null, "", state.cat === "all" ? location.pathname : "#" + state.cat);
          render();
        });
      });
      var qIn = el("pub-q"), t = null;
      qIn.addEventListener("input", function () {
        clearTimeout(t); t = setTimeout(function () { state.q = qIn.value.trim(); render(); }, 120);
      });
      render();
    },

    people: function () {
      var team = D.team || [];
      function fill(id, cat) {
        var host = el(id); if (!host) return;
        var members = team.filter(function (m) { return m.category === cat; });
        var section = host.closest(".section");
        if (!members.length) { if (section) section.style.display = "none"; return; }
        if (cat === "director") {
          host.innerHTML = members.map(function (m) {
            return '<div class="director-card">' + photo(m, "team-card-image") +
              '<div class="team-card-content"><span class="eyebrow">Principal Investigator</span>' +
              '<h3 class="team-card-name">' + esc(m.name) + "</h3>" +
              '<p class="team-card-position">' + esc(m.position || "") + "</p>" +
              (m.education ? '<p class="team-card-interests"><strong>Education:</strong> ' + esc(m.education) + "</p>" : "") +
              (m.interests ? '<p class="team-card-interests"><strong>Research Interests:</strong> ' + esc(m.interests) + "</p>" : "") +
              (m.bio ? '<p class="team-card-bio">' + esc(m.bio) + "</p>" : "") +
              '<div class="team-card-links">' + personLinks(m) + "</div>" +
              (m.profile ? '<div class="btn-row">' + btn(m.profile, "View full profile & CV " + icon("arrow"), "btn-primary") + "</div>" : "") +
              "</div></div>";
          }).join("");
        } else {
          host.innerHTML = members.map(teamCard).join("");
        }
      }
      fill("team-director", "director");
      fill("team-phd", "phd");
      fill("team-ms", "ms");
      fill("team-undergrad", "undergrad");
      fill("team-alumni", "alumni");

      var sr = el("student-research");
      if (sr) {
        var withSpot = team.filter(function (m) { return m.spotlight; });
        if (!withSpot.length) { sr.closest(".section").style.display = "none"; }
        var byTitle = {};
        (D.projects || []).forEach(function (p) { byTitle[p.title] = p; });
        sr.innerHTML = withSpot.map(function (m, k) {
          var sp = m.spotlight;
          var projs = (sp.projects || []).map(function (t) { return byTitle[t]; }).filter(Boolean);
          var papers = sp.papers || [];
          return '<article class="spot">' +
            '<header class="spot-head">' +
              '<img src="' + esc(m.image) + '" alt="' + esc(m.name) + '" loading="lazy">' +
              '<div><h3>' + esc(m.name) + '</h3><p class="spot-role">' + esc(m.position || "") + "</p>" +
                '<div class="team-card-links">' + personLinks(m) + "</div></div>" +
            "</header>" +
            '<p class="spot-summary">' + esc(sp.summary || "") + "</p>" +
            (projs.length ? '<h4 class="spot-sub">Projects</h4><div class="proj-grid spot-grid" data-set="p' + k + '">' +
              projs.map(projectCard).join("") + "</div>" : "") +
            (papers.length ? '<h4 class="spot-sub">Papers</h4><div class="spot-papers" data-set="q' + k + '">' + papers.map(function (q, i) {
              return '<div class="spot-paper"><button class="spot-fig" type="button" data-i="' + i + '" aria-label="Enlarge figure: ' + esc(q.title) + '">' +
                '<img src="' + esc(q.image) + '" alt="" loading="lazy"></button>' +
                "<div><h5>" + esc(q.title) + "</h5><p>" + esc(q.text) + "</p></div></div>";
            }).join("") + "</div>" : "") +
            (sp.next ? '<p class="spot-next"><span class="badge badge-gold">Next</span> ' + esc(sp.next) + "</p>" : "") +
            ((sp.tools || []).length ? '<h4 class="spot-sub">Tools &amp; methods</h4><div class="tag-row">' +
              sp.tools.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" : "") +
          "</article>";
        }).join("");
        withSpot.forEach(function (m, k) {
          var pg = sr.querySelector('[data-set="p' + k + '"]'), qg = sr.querySelector('[data-set="q' + k + '"]');
          if (pg) wireFigures(pg, (m.spotlight.projects || []).map(function (t) { return byTitle[t]; }).filter(Boolean));
          if (qg) wireFigures(qg, (m.spotlight.papers || []).map(function (q) { return { image: q.image, title: q.title }; }));
        });
      }

      var j = D.join || {}, host = el("join");
      if (host) {
        host.innerHTML =
          '<div class="join-panel">' +
            '<div class="join-copy"><span class="eyebrow">Opportunities</span><h2>Join ASTRA Lab</h2>' +
              '<p class="lead">' + esc(j.intro) + "</p>" +
              '<div class="join-grid">' +
                '<div class="join-card">' + icon("cap", "join-ico") + "<h3>Ph.D. Positions</h3><p>" + esc(j.phd) + "</p></div>" +
                '<div class="join-card">' + icon("users", "join-ico") + "<h3>Undergraduate Researchers</h3><p>" + esc(j.undergrad) + "</p></div>" +
              "</div>" +
              '<div class="apply"><h3>How to apply</h3><p>' + esc(j.howToApply) + "</p>" +
                btn(S.email ? "mailto:" + S.email + "?subject=Prospective%20student%20%E2%80%94%20ASTRA%20Lab" : "",
                    icon("mail") + " Email Dr. Bappy", "btn-cta") + "</div>" +
            "</div>" +
          "</div>";
      }
    },

    teaching: function () {
      var d = D.director || {}, tp = D.teachingPage || {};
      var intro = el("teach-intro");
      if (intro) intro.innerHTML = '<p class="lead">' + esc(tp.intro || "") + "</p>";

      var facts = el("teach-facts");
      if (facts) {
        var orgs = (d.teaching || []).length + ((tp.lsuCourses || []).length ? 1 : 0);
        var F = [
          { n: courseCount() + (tp.lsuCourses || []).length, label: "Courses taught" },
          { n: orgs, label: "Universities" },
          { n: (tp.mentoring || []).length, label: "Mentoring roles" },
          { n: (tp.development || []).length, label: "Teaching certifications" }
        ];
        facts.innerHTML = F.map(function (f) {
          return '<div class="stat"><span class="stat-num" data-count="' + f.n + '">' + f.n + "</span>" +
                 '<span class="stat-label">' + esc(f.label) + "</span></div>";
        }).join("");
        countUp(facts);
      }

      var te = el("teach-courses");
      if (te) {
        var blocks = [];
        if ((tp.lsuCourses || []).length) {
          blocks.push({ org: "Louisiana State University", years: "2024 – present",
                        courses: tp.lsuCourses.map(function (c) { return (c.code ? c.code + ": " : "") + c.title; }), note: "" });
        }
        blocks = blocks.concat(d.teaching || []);
        te.innerHTML = blocks.map(function (t) {
          return '<div class="teach-card"><div class="teach-head"><h3>' + icon("school") + " " + esc(t.org) + "</h3>" +
            '<span class="tl-when">' + esc(t.years) + "</span></div>" +
            '<ul class="course-list">' + (t.courses || []).map(function (c) {
              var parts = c.split(": ");
              return "<li>" + (parts.length > 1 ? '<span class="course-code">' + esc(parts[0]) + "</span>" + esc(parts.slice(1).join(": ")) : esc(c)) + "</li>";
            }).join("") + "</ul>" +
            (t.note ? '<p class="teach-note">' + esc(t.note) + "</p>" : "") + "</div>";
        }).join("");
      }

      var me = el("teach-mentoring");
      if (me) me.innerHTML = timeline((tp.mentoring || []).map(function (m) {
        return { when: m.year || "Mentoring", title: m.name, sub: m.level,
                 detail: (m.link ? '<a href="' + esc(m.link) + '" target="_blank" rel="noopener">' + esc(m.title) + "</a>" : esc(m.title)) };
      }));

      var tph = el("teach-photos");
      if (tph) {
        var ph = tp.photos || [];
        if (!ph.length) { tph.style.display = "none"; }
        tph.innerHTML = ph.map(function (q, i) {
          return '<button type="button" class="moment' + (i === 0 ? " is-lead" : "") + '" data-i="' + i + '"><img src="' + esc(q.image) + '" alt="' + esc(q.caption) + '" loading="lazy">' +
            '<span class="moment-cap">' + esc(q.caption) + "</span></button>";
        }).join("");
        var pset = ph.map(function (q) { return { src: q.image, caption: q.caption }; });
        Array.prototype.forEach.call(tph.querySelectorAll(".moment"), function (b) {
          b.addEventListener("click", function () { lightbox(pset, +b.getAttribute("data-i"), b); });
        });
      }

      var dv = el("teach-dev");
      if (dv) {
        var certs = (d.certifications || []).filter(function (c) { return (tp.development || []).indexOf(c.title) >= 0; });
        dv.innerHTML = certs.map(function (c) {
          return '<div class="cert-card">' + icon("cert", "cert-ico") +
            "<div><h3>" + esc(c.title) + "</h3><p>" + esc(c.org) + "</p>" +
            '<span class="cert-year">' + esc(c.year) + "</span></div></div>";
        }).join("");
      }
    },

    service: function () {
      var sv = D.service || {};
      var KIND = { review: ["review", "Peer review"], committee: ["users", "Committee"], judge: ["flag", "Judging"],
                   outreach: ["users", "Outreach"], organizing: ["flag", "Organizing"], talk: ["mic", "Invited talk"] };
      function kind(k) { var x = KIND[k] || ["flag", "Service"]; return '<span class="svc-kind">' + icon(x[0]) + " " + x[1] + "</span>"; }

      var dh = el("service-director");
      if (dh) {
        var items = sv.director || [];
        dh.innerHTML = items.map(function (s) {
          return '<article class="svc-card' + (s.image ? "" : " no-media") + '">' +
            (s.image ? '<div class="svc-media"><img src="' + esc(s.image) + '" alt="' + esc(s.title) + '" loading="lazy"></div>' : "") +
            '<div class="svc-body">' + kind(s.kind) + "<h3>" + esc(s.title) + "</h3>" +
              ((s.org || s.year) ? '<p class="svc-meta">' + esc([s.org, s.year].filter(Boolean).join(" · ")) + "</p>" : "") +
            "</div></article>";
        }).join("");
      }
      var st = el("service-students");
      if (st) {
        st.innerHTML = (sv.students || []).map(function (s) {
          return '<div class="svc-row">' + kind(s.kind) +
            '<div class="svc-row-main"><h3>' + esc(s.title) + '</h3><p class="svc-meta">' + esc(s.org) + "</p></div>" +
            '<span class="award-year">' + esc(s.year) + "</span></div>";
        }).join("");
        if (!(sv.students || []).length) st.closest(".section").style.display = "none";
      }
    },

    awards: function () {
      var host = el("awards"); if (!host) return;
      var awards = D.awards || [];
      var GROUPS = [
        { key: "research",    title: "Lab Director — Research Honors", icon: "trophy" },
        { key: "student",     title: "Student Honors",                 icon: "medal" },
        { key: "grant",       title: "Grants & Travel Awards",         icon: "grant" },
        { key: "scholarship", title: "Scholarships",                   icon: "cap" }
      ];
      function grp(a) { return a.group || "research"; }
      var used = GROUPS.filter(function (g) { return awards.some(function (a) { return grp(a) === g.key; }); });

      var sum = el("award-summary");
      if (sum) {
        sum.innerHTML = used.map(function (g) {
          var n = awards.filter(function (a) { return grp(a) === g.key; }).length;
          return '<a class="award-stat" href="#aw-' + g.key + '">' + icon(g.icon, "award-stat-ico") +
            '<span class="award-stat-n" data-count="' + n + '">' + n + "</span>" +
            '<span class="award-stat-l">' + esc(g.title.replace("Lab Director — ", "")) + "</span></a>";
        }).join("");
        countUp(sum);
      }

      host.innerHTML = used.map(function (g) {
        var items = awards.filter(function (a) { return grp(a) === g.key; });
        return '<section class="award-group" id="aw-' + g.key + '">' +
          '<h2 class="section-title">' + esc(g.title) + "</h2>" +
          '<div class="award-list">' + items.map(function (a) {
            return '<div class="award-card"><span class="award-ico">' + icon(g.icon) + "</span>" +
              '<div class="award-main"><h4>' + esc(a.title) + "</h4>" +
              '<p class="award-meta">' + esc(a.org || "") + "</p>" +
              (a.person ? '<span class="award-person">' + icon("users") + " " + esc(a.person) + "</span>" : "") + "</div>" +
              '<span class="award-year">' + esc(a.year) + "</span></div>";
          }).join("") + "</div></section>";
      }).join("") || '<p class="muted">Awards will be listed here.</p>';
    },

    gallery: function () {
      var host = el("gallery"), bar = el("gallery-filters"); if (!host) return;
      var all = D.gallery || [];
      var CATS = [
        { key: "all", label: "All" },
        { key: "awards", label: "Awards & Milestones" },
        { key: "talks", label: "Talks & Conferences" },
        { key: "lab", label: "In the Lab" },
        { key: "undergrad", label: "Teaching & Undergraduate Research" },
        { key: "field", label: "Field & Industry Visits" },
        { key: "outreach", label: "Outreach & Service" },
        { key: "life", label: "Lab Life" }
      ].filter(function (c) { return c.key === "all" || all.some(function (g) { return g.category === c.key; }); });
      var cur = "all";

      function shown() { return cur === "all" ? all : all.filter(function (g) { return g.category === cur; }); }
      function render() {
        var items = shown();
        host.innerHTML = items.map(function (g, i) {
          return '<button type="button" class="gallery-item g-in" style="--i:' + Math.min(i, 10) + '" data-i="' + i + '">' +
            '<img src="' + esc(g.image) + '" alt="' + esc(g.caption) + '" loading="lazy">' +
            '<span class="g-cap">' + esc(g.caption) + "</span></button>";
        }).join("");
        var set = items.map(function (g) { return { src: g.image, caption: g.caption }; });
        Array.prototype.forEach.call(host.querySelectorAll(".gallery-item"), function (b) {
          b.addEventListener("click", function () { lightbox(set, +b.getAttribute("data-i"), b); });
        });
      }
      if (bar) {
        bar.innerHTML = CATS.map(function (c) {
          var n = c.key === "all" ? all.length : all.filter(function (g) { return g.category === c.key; }).length;
          return '<button type="button" class="chip" data-cat="' + c.key + '" aria-pressed="' + (c.key === cur) + '">' +
            esc(c.label) + ' <span class="chip-n">' + n + "</span></button>";
        }).join("");
        Array.prototype.forEach.call(bar.querySelectorAll(".chip"), function (b) {
          b.addEventListener("click", function () {
            cur = b.getAttribute("data-cat");
            Array.prototype.forEach.call(bar.querySelectorAll(".chip"), function (x) {
              x.setAttribute("aria-pressed", String(x === b));
            });
            render();
          });
        });
      }
      render();
    }
  };

  // --- scroll reveal animation --------------------------------------------
  function setupReveal() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // auto-tag the main content blocks on each page
    var sel = ".card, .team-card, .director-card, .award-card, .news-item, .about-grid > *, " +
              ".stat, .tcard, .proj-card, .spotlight, .feature-row, .fund-card, .fac-tile, " +
              ".tl-item, .project-row, .teach-card, .cert-card, .fact, .award-stat, .svc-card, .svc-row, .join-card, .spot-paper";
    var nodes = Array.prototype.slice.call(document.querySelectorAll(sel));
    if (reduce || !("IntersectionObserver" in window)) { return; } // leave fully visible
    nodes.forEach(function (n) { n.classList.add("reveal"); });
    // stagger items within the same grid row
    nodes.forEach(function (n, i) { n.style.transitionDelay = (Math.min(i % 6, 5) * 60) + "ms"; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    nodes.forEach(function (n) { io.observe(n); });
  }

  // --- boot ----------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    var active = (document.body.getAttribute("data-page") || "").trim();
    renderHeader(active);
    renderFooter();
    if (PAGES[active]) { try { PAGES[active](); } catch (e) { console.error(e); } }
    try { setupReveal(); } catch (e) { console.error(e); }
    try { setupExtras(); } catch (e) { console.error(e); }
  });
})();
