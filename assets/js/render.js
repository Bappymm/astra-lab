/* ============================================================================
   ASTRA Lab — rendering engine
   Builds the shared sidebar / nav / footer and fills each page from data.js.
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
    { href: "team.html",         label: "Team",         key: "team" },
    { href: "publications.html", label: "Publications", key: "publications" },
    { href: "awards.html",       label: "Awards",       key: "awards" },
    { href: "resources.html",    label: "Resources",    key: "resources" },
    { href: "join.html",         label: "Join Us",      key: "join" }
  ];

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

  // --- shared chrome -------------------------------------------------------
  function renderSidebar() {
    var host = el("sidebar"); if (!host) return;
    var links = "";
    if (S.email)        links += link("mailto:" + S.email, "📧 Email", false);
    if (S.scholar)      links += link(S.scholar, "Scholar", true);
    if (S.researchgate) links += link(S.researchgate, "ResearchGate", true);
    if (S.linkedin)     links += link(S.linkedin, "LinkedIn", true);
    if (S.github)       links += link(S.github, "GitHub", true);

    var mapSrc = "https://maps.google.com/maps?q=" +
      encodeURIComponent(S.mapQuery || S.location || "") + "&z=14&output=embed";

    host.innerHTML =
      '<div class="sidebar-logo">' +
        '<img src="' + esc(S.logo || "") + '" alt="' + esc(S.labShort || "Lab") + ' logo" ' +
          'onerror="this.style.display=\'none\'">' +
      '</div>' +
      '<h1 class="sidebar-title">' + esc(S.labName || "") + '</h1>' +
      (S.tagline ? '<p class="sidebar-tagline">' + esc(S.tagline) + '</p>' : "") +
      '<p class="sidebar-subtitle">' + esc(S.department || "") + '</p>' +
      (S.location ? '<p class="sidebar-location">📍 ' + esc(S.location) + '</p>' : "") +
      '<div class="sidebar-map"><iframe title="Location map" src="' + mapSrc +
        '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>' +
      '<div class="sidebar-links">' + links + '</div>';
  }

  function renderNav(active) {
    var host = el("nav"); if (!host) return;
    var items = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.key === active ? ' class="active"' : "") +
             ">" + esc(n.label) + "</a></li>";
    }).join("");
    host.innerHTML =
      '<div class="nav-container">' +
        '<button class="nav-toggle" aria-label="Menu" onclick="document.getElementById(\'navLinks\').classList.toggle(\'active\')">☰</button>' +
        '<ul class="nav-links" id="navLinks">' + items + "</ul>" +
      "</div>";
  }

  function renderFooter() {
    var host = el("footer"); if (!host) return;
    var y = new Date().getFullYear();
    host.innerHTML = "<p>&copy; " + y + " " + esc(S.labName || "") + " · " +
      esc(S.department || "") + "</p>";
  }

  // --- person card ---------------------------------------------------------
  function personLinks(m) {
    var out = "";
    if (m.email)        out += link("mailto:" + m.email, "📧 Email", false);
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

  // --- page renderers ------------------------------------------------------
  var PAGES = {
    home: function () {
      var h = D.home || {};
      var about = el("about");
      if (about) {
        about.innerHTML =
          "<div><p style='font-size:1.1rem;color:var(--text-primary)'>" + esc(h.aboutLead) + "</p>" +
          "<p>" + esc(h.aboutBody) + "</p></div>" +
          (h.image ? "<div><img src='" + esc(h.image) + "' alt='ASTRA Lab' " +
             "onerror=\"this.style.display='none'\"></div>" : "");
      }
      if (el("hero-title")) el("hero-title").textContent = h.heroTitle || "";
      if (el("hero-sub")) el("hero-sub").textContent = h.heroSubtitle || "";
      renderShowcase();
      var nb = el("news");
      if (nb) {
        nb.innerHTML = (D.news || []).map(function (n) {
          return '<li class="news-item"><span class="news-date">📢 ' + esc(n.date) +
            '</span><span class="news-text">' + esc(n.text) + "</span></li>";
        }).join("") || '<li class="news-item muted">No updates yet.</li>';
      }
    },

    research: function () {
      var host = el("research"); if (!host) return;
      host.innerHTML = (D.research || []).map(function (p) {
        var links = (p.links || []).map(function (l) {
          return link(l.url, "[" + l.label + "]", true);
        }).join("");
        return '<div class="card">' +
          "<img class='card-image' src='" + esc(p.image || "") + "' alt='" + esc(p.title) +
            "' loading='lazy' onerror=\"this.src='assets/images/placeholder.svg'\">" +
          "<div class='card-body'><h3 class='card-title'>" + esc(p.title) + "</h3>" +
          "<p class='card-text'>" + esc(p.description) + "</p>" +
          (links ? "<div class='card-links'>" + links + "</div>" : "") +
          "</div></div>";
      }).join("");
    },

    team: function () {
      var team = D.team || [];
      function fill(id, cat) {
        var host = el(id); if (!host) return;
        var members = team.filter(function (m) { return m.category === cat; });
        var section = host.closest(".section");
        if (!members.length) { if (section) section.style.display = "none"; return; }
        if (cat === "director") {
          host.innerHTML = members.map(function (m) {
            return '<div class="director-card">' + photo(m, "team-card-image") +
              '<div class="team-card-content"><h3 class="team-card-name">' + esc(m.name) + "</h3>" +
              '<p class="team-card-position">' + esc(m.position || "") + "</p>" +
              (m.interests ? '<p class="team-card-interests"><strong>Research Interests:</strong> ' + esc(m.interests) + "</p>" : "") +
              (m.bio ? '<p class="team-card-bio">' + esc(m.bio) + "</p>" : "") +
              '<div class="team-card-links">' + personLinks(m) + "</div></div></div>";
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
    },

    publications: function () {
      var pubs = D.publications || [];
      function fmt(p) {
        var tail = esc(p.venue || "");
        return '<li class="publication-item"><p class="publication-text">' +
          esc(p.authors) + " (" + esc(p.year) + "). " +
          '<span class="pub-title">' + esc(p.title) + ".</span> <em>" + tail + "</em>.</p>" +
          (p.link ? link(p.link, "🔗 View Publication", true).replace("<a ", '<a class="publication-link" ') : "") +
          "</li>";
      }
      function fill(id, cat) {
        var host = el(id); if (!host) return;
        var items = pubs.filter(function (p) { return p.category === cat; })
                        .sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
        var section = host.closest(".section");
        if (!items.length) { if (section) section.style.display = "none"; return; }
        host.innerHTML = items.map(fmt).join("");
      }
      fill("pub-journal", "journal");
      fill("pub-conference", "conference");
      fill("pub-preprint", "preprint");
    },

    awards: function () {
      var host = el("awards"); if (!host) return;
      host.innerHTML = (D.awards || []).map(function (a) {
        return '<div class="award-card"><h4>' + esc(a.title) + "</h4>" +
          '<p class="award-meta"><strong>' + esc(a.year) + "</strong>" +
          (a.org ? " · " + esc(a.org) : "") +
          (a.person ? " · " + esc(a.person) : "") + "</p></div>";
      }).join("") || '<p class="muted">Awards will be listed here.</p>';
    },

    resources: function () {
      var host = el("resources"); if (!host) return;
      var items = D.resources || [];
      // preserve first-seen group order
      var order = [], groups = {};
      items.forEach(function (r) {
        var g = r.group || "Other";
        if (!groups[g]) { groups[g] = []; order.push(g); }
        groups[g].push(r);
      });
      host.innerHTML = order.map(function (g) {
        var cards = groups[g].map(function (r) {
          return '<div class="card">' +
            "<img class='card-image' src='" + esc(r.image || "") + "' alt='" + esc(r.name) +
              "' loading='lazy' onerror=\"this.src='assets/images/placeholder.svg'\">" +
            "<div class='card-body'><h3 class='card-title'>" + esc(r.name) + "</h3>" +
            "<p class='card-text'>" + esc(r.description) + "</p>" +
            (r.specs ? "<p class='card-specs'>" + esc(r.specs) + "</p>" : "") +
            "</div></div>";
        }).join("");
        return "<section class='section'><h2 class='section-title'>" + esc(g) + "</h2>" +
          "<div class='card-grid'>" + cards + "</div></section>";
      }).join("");
    },

    join: function () {
      var j = D.join || {}; var host = el("join"); if (!host) return;
      host.innerHTML =
        "<p style='font-size:1.1rem;color:var(--text-primary)'>" + esc(j.intro) + "</p>" +
        "<div class='join-section'><h2>Ph.D. Positions</h2><p>" + esc(j.phd) + "</p></div>" +
        "<div class='join-section'><h2>Undergraduate Researchers</h2><p>" + esc(j.undergrad) + "</p></div>" +
        "<div class='highlight-box'><h2 style='margin-bottom:.5rem'>How to Apply</h2><p style='margin:0'>" +
          esc(j.howToApply) + "</p></div>";
    }
  };

  // --- scroll reveal animation --------------------------------------------
  function setupReveal() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // auto-tag the main content blocks on each page
    var sel = ".card, .team-card, .director-card, .award-card, .publication-item, .news-item, .about-grid > div, .join-section, .highlight-box";
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
    renderSidebar();
    renderNav(active);
    renderFooter();
    if (PAGES[active]) { try { PAGES[active](); } catch (e) { console.error(e); } }
    try { setupReveal(); } catch (e) { console.error(e); }
  });
})();
