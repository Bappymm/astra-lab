/* ============================================================================
   CRISP Lab — rendering engine
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
          (h.image ? "<div><img src='" + esc(h.image) + "' alt='CRISP Lab' " +
             "onerror=\"this.style.display='none'\"></div>" : "");
      }
      if (el("hero-title")) el("hero-title").textContent = h.heroTitle || "";
      if (el("hero-sub")) el("hero-sub").textContent = h.heroSubtitle || "";
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
