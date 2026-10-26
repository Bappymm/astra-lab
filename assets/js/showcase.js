/* ============================================================================
   ASTRA Lab — home showcase animations
   ----------------------------------------------------------------------------
   Four small, self-contained SVG "simulations" shown in the rotating panel on
   the home page. Each scene builds its own SVG elements once and returns a
   tick(t, dt) function that render.js calls every animation frame while the
   scene is on screen (t = seconds since the scene was shown, dt = frame time).

   Unlike simple CSS loops, every moving part here is driven by the same clock,
   so the motion is causal: the nozzle actually lays down each layer, the twin
   mirrors the real motor, the robot picks the part the camera inspected, and
   the network's prediction follows the data inside its input window.

   You normally do NOT need to edit this file. Titles/captions live in data.js
   (home.showcase); the "art" field there picks one of the scenes below.
   ============================================================================ */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var GOLD = "#e3a400", GREEN = "#1f9d63", RED = "#e5484d";   // tuned for the light background

  // --- tiny helpers ----------------------------------------------------------
  function mk(parent, tag, attrs, text) {
    var e = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  function attr(e, a) { for (var k in a) e.setAttribute(k, a[k]); }
  function stops(g, list) {
    for (var i = 0; i < list.length; i++) {
      mk(g, "stop", { offset: list[i][0], "stop-color": list[i][1], "stop-opacity": list[i][2] });
    }
  }
  function blur(defs, id, dev) {
    var f = mk(defs, "filter", { id: id, x: "-1", y: "-1", width: "3", height: "3" });
    mk(f, "feGaussianBlur", { stdDeviation: dev });
  }
  function label(parent, x, y, txt, anchor) {
    return mk(parent, "text", { x: x, y: y, "class": "sp-lbl", "text-anchor": anchor || "middle" }, txt);
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, k) { return a + (b - a) * k; }
  function seg(t, a, b) { return clamp((t - a) / (b - a), 0, 1); }
  function ease(k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }
  function easeSine(k) { return -(Math.cos(Math.PI * k) - 1) / 2; }
  function F(n) { return Math.round(n * 10) / 10; }        // trim attribute decimals
  function F2(n) { return Math.round(n * 100) / 100; }
  function mix(c1, c2, k) {
    return "rgb(" + Math.round(lerp(c1[0], c2[0], k)) + "," +
      Math.round(lerp(c1[1], c2[1], k)) + "," + Math.round(lerp(c1[2], c2[2], k)) + ")";
  }
  // smooth pseudo-noise in roughly [-1, 1]
  function wob(x) { return .5 * Math.sin(x * 1.7) + .3 * Math.sin(x * 3.1 + 1.3) + .2 * Math.sin(x * 7.3 + .4); }
  function bez(P, k) {
    var u = 1 - k;
    return [u * u * u * P[0][0] + 3 * u * u * k * P[1][0] + 3 * u * k * k * P[2][0] + k * k * k * P[3][0],
            u * u * u * P[0][1] + 3 * u * u * k * P[1][1] + 3 * u * k * k * P[2][1] + k * k * k * P[3][1]];
  }
  function bezD(P) {
    return "M" + P[0] + " C" + P[1] + " " + P[2] + " " + P[3];
  }

  var SCENES = {};

  /* ==========================================================================
     1. ADVANCED MANUFACTURING — a gantry deposition head builds a part layer
        by layer: serpentine passes, a flickering melt pool, sparks, freshly
        deposited metal cooling from orange to grey, a thermal camera tracking
        the melt pool, and a live layer counter.
     ========================================================================== */
  SCENES.printing = function (svg, id) {
    var defs = mk(svg, "defs");
    var melt = mk(defs, "radialGradient", { id: id + "melt" });
    stops(melt, [["0", "#fffbe6", 1], [".3", "#ffe27a", 1], [".65", "#ff8a3d", .6], ["1", "#ff6a2a", 0]]);
    blur(defs, id + "blur", 4);
    var trR = mk(defs, "linearGradient", { id: id + "trR" });
    stops(trR, [["0", "#ff8a3d", 0], ["1", "#ffc24a", 1]]);
    var trL = mk(defs, "linearGradient", { id: id + "trL", x1: "1", x2: "0" });
    stops(trL, [["0", "#ff8a3d", 0], ["1", "#ffc24a", 1]]);

    var BED = 214, LH = 13, N = 6, X0 = 236, X1 = 404, TAPER = 7;
    var TL = .95, TZ = .22, LAYER = TL + TZ, BUILD = N * LAYER, HOLD = 1.1, RESET = .9;
    var CYCLE = BUILD + HOLD + RESET;
    var i;

    // machine frame
    mk(svg, "line", { x1: 20, y1: 240, x2: 620, y2: 240, "class": "sp-dim" });
    mk(svg, "rect", { x: 146, y: 224, width: 348, height: 14, rx: 4, "class": "sp-body" });
    mk(svg, "rect", { x: 124, y: 30, width: 12, height: 208, rx: 4, "class": "sp-body" });
    mk(svg, "rect", { x: 504, y: 30, width: 12, height: 208, rx: 4, "class": "sp-body" });
    mk(svg, "rect", { x: 124, y: 26, width: 392, height: 9, rx: 4, "class": "sp-body" });
    var screwL = mk(svg, "line", { x1: 130, y1: 38, x2: 130, y2: 222, "class": "sp-screw" });
    var screwR = mk(svg, "line", { x1: 510, y1: 38, x2: 510, y2: 222, "class": "sp-screw" });
    mk(svg, "rect", { x: 172, y: BED, width: 296, height: 10, rx: 2, "class": "sp-bed" });

    // the part, one rect per layer (slightly tapered, like a real build)
    var partG = mk(svg, "g");
    var layers = [];
    for (i = 0; i < N; i++) {
      var ly = BED - (i + 1) * LH;
      layers.push({ x0: X0 + i * TAPER, x1: X1 - i * TAPER, y: ly,
        el: mk(partG, "rect", { y: ly + .5, height: LH - 1, rx: 3, width: 0, x: X0 }) });
    }
    var trail = mk(partG, "rect", { height: LH - 1, rx: 3, width: 0, opacity: 0 });

    // thermal camera sight line (behind the head)
    var sight = mk(svg, "line", { x1: 554, y1: 62, "class": "sp-sight" });

    // gantry beam + deposition head
    var beam = mk(svg, "rect", { x: 132, width: 376, height: 9, rx: 3, "class": "sp-body2" });
    var head = mk(svg, "g");
    mk(head, "rect", { x: -24, y: -60, width: 48, height: 34, rx: 6, "class": "sp-car" });
    mk(head, "rect", { x: -14, y: -52, width: 28, height: 4, rx: 2, "class": "sp-vent" });
    mk(head, "rect", { x: -14, y: -44, width: 28, height: 4, rx: 2, "class": "sp-vent" });
    mk(head, "path", { d: "M-11 -26 L-4 -6 L4 -6 L11 -26 Z", "class": "sp-nozzle" });
    mk(head, "rect", { x: -3, y: -6, width: 6, height: 5, rx: 1, fill: GOLD });

    var glowOuter = mk(svg, "circle", { r: 16, fill: "url(#" + id + "melt)", filter: "url(#" + id + "blur)", opacity: 0 });
    var glow = mk(svg, "circle", { r: 6, fill: "url(#" + id + "melt)", opacity: 0 });

    var sparks = [];
    for (i = 0; i < 18; i++) sparks.push({ el: mk(svg, "circle", { r: 1.4, opacity: 0 }), life: 0, on: false });

    // thermal camera + readouts
    var cam = mk(svg, "g", { transform: "translate(574 62)" });
    mk(cam, "rect", { x: -20, y: -12, width: 42, height: 24, rx: 5, "class": "sp-car" });
    mk(cam, "circle", { cx: -20, cy: 0, r: 7, "class": "sp-lens" });
    var rec = mk(cam, "circle", { cx: 13, cy: -5, r: 2.2, fill: RED });
    label(svg, 574, 100, "MELT POOL");
    var tempTxt = mk(svg, "text", { x: 574, y: 121, "class": "sp-val", "text-anchor": "middle" }, "");
    label(svg, 66, 100, "LAYER");
    var layerTxt = mk(svg, "text", { x: 66, y: 121, "class": "sp-val", "text-anchor": "middle" }, "");

    var gold = [253, 208, 35], hot = [255, 150, 60], cool = [150, 128, 190];
    var temp = 400, spawn = 0, glowLevel = 0, lastLayerTxt = "", lastTemp = -1;

    function layerColor(age) {
      var k = clamp(age / 2.4, 0, 1);
      return k < .18 ? mix(hot, gold, k / .18) : mix(gold, cool, (k - .18) / .82);
    }
    function emit(x, y, dirR) {
      for (var j = 0; j < sparks.length; j++) {
        var s = sparks[j];
        if (s.life > 0) continue;
        s.x = x + (Math.random() - .5) * 3; s.y = y;
        s.vx = (Math.random() - .5) * 120 + (dirR ? -35 : 35);  // thrown back from the travel direction
        s.vy = -50 - Math.random() * 110;
        s.max = s.life = .3 + Math.random() * .3; s.on = true;
        return;
      }
    }

    return function (T, dt) {
      var t = T % CYCLE, nx, tipY, dep = false, li, lt = 0, L, dirR = true, a = 0, partOp = 1;

      if (t < BUILD) {
        li = Math.floor(t / LAYER); lt = t - li * LAYER; L = layers[li]; dirR = li % 2 === 0;
        a = dirR ? L.x0 : L.x1;
        var b = dirR ? L.x1 : L.x0;
        if (lt < TL) { dep = true; nx = lerp(a, b, easeSine(lt / TL)); tipY = L.y; }
        else { nx = b; tipY = L.y - (li < N - 1 ? ease((lt - TL) / TZ) * LH : 0); }   // z-step up
      } else {
        li = N;
        var last = layers[N - 1], endX = (N - 1) % 2 === 0 ? last.x1 : last.x0, parkY = last.y - 18;
        if (t < BUILD + HOLD) { nx = endX; tipY = last.y - 18 * ease(seg(t, BUILD, BUILD + .5)); }
        else {
          var rk = ease(seg(t, BUILD + HOLD, CYCLE));
          nx = lerp(endX, layers[0].x0, rk); tipY = lerp(parkY, layers[0].y, rk);
          partOp = 1 - seg(t, BUILD + HOLD, BUILD + HOLD + RESET * .6);
        }
      }

      for (var j = 0; j < N; j++) {
        var Lj = layers[j], done = j < li || (j === li && lt >= TL);
        if (done) attr(Lj.el, { x: Lj.x0, width: F(Lj.x1 - Lj.x0), fill: layerColor(t - (j * LAYER + TL)) });
        else if (j === li && dep) attr(Lj.el, { x: F(dirR ? Lj.x0 : nx), width: F(Math.abs(nx - a)), fill: "rgb(255,196,74)" });
        else Lj.el.setAttribute("width", 0);
      }
      if (dep) {
        var tl = Math.min(54, Math.abs(nx - a));
        attr(trail, { x: F(dirR ? nx - tl : nx), y: L.y + .5, width: F(tl), opacity: 1,
          fill: "url(#" + id + (dirR ? "trR" : "trL") + ")" });
      } else trail.setAttribute("opacity", 0);
      partG.setAttribute("opacity", F2(partOp));

      var by = tipY - 69;
      beam.setAttribute("y", F(by));
      head.setAttribute("transform", "translate(" + F(nx) + " " + F(tipY) + ")");
      screwL.setAttribute("stroke-dashoffset", F(by));
      screwR.setAttribute("stroke-dashoffset", F(by));

      glowLevel += ((dep ? 1 : 0) - glowLevel) * Math.min(1, dt * 10);
      attr(glow, { cx: F(nx), cy: F(tipY + 1), r: F(5 + 1.3 * Math.sin(T * 41) + Math.random() * .8), opacity: F2(glowLevel) });
      attr(glowOuter, { cx: F(nx), cy: F(tipY + 1), r: F(15 + 2.5 * Math.sin(T * 17)), opacity: F2(glowLevel * .85) });

      if (dep) { spawn += dt; while (spawn > .028) { spawn -= .028; emit(nx, tipY, dirR); } }
      for (j = 0; j < sparks.length; j++) {
        var s = sparks[j];
        if (s.life > 0) {
          s.life -= dt; s.vy += 480 * dt; s.x += s.vx * dt; s.y += s.vy * dt;
          var k = Math.max(0, s.life / s.max);
          attr(s.el, { cx: F(s.x), cy: F(s.y), opacity: F2(k), fill: k > .5 ? "#ffb020" : "#ff6a1a" });
        } else if (s.on) { s.el.setAttribute("opacity", 0); s.on = false; }
      }

      var target = dep ? 1525 + 28 * wob(T * 2.3) : (t < BUILD ? 1180 : 380);
      temp += (target - temp) * Math.min(1, dt * (dep ? 8 : 2.2));
      var tr = Math.round(temp);
      if (tr !== lastTemp) { tempTxt.textContent = tr.toLocaleString("en-US") + " °C"; lastTemp = tr; }
      var lt2 = Math.min(li + 1, N) + " / " + N;
      if (lt2 !== lastLayerTxt) { layerTxt.textContent = lt2; lastLayerTxt = lt2; }

      attr(sight, { x2: F(nx), y2: F(tipY), opacity: F2(.15 + .5 * glowLevel), "stroke-dashoffset": F(-T * 24) });
      rec.setAttribute("opacity", Math.sin(T * 6) > 0 ? 1 : .25);
    };
  };

  /* ==========================================================================
     2. DIGITAL TWIN — a motor and its virtual twin spin in lock-step while
        sensor data streams across. A vibration fault appears on the real
        machine, the twin's live chart and status catch it, and corrective
        commands flow back until the two are in sync again.
     ========================================================================== */
  SCENES.twin = function (svg, id) {
    var defs = mk(svg, "defs");
    var pat = mk(defs, "pattern", { id: id + "grid", width: 14, height: 14, patternUnits: "userSpaceOnUse" });
    mk(pat, "path", { d: "M14 0H0V14", fill: "none", stroke: "rgba(70,29,124,.07)", "stroke-width": 1 });
    blur(defs, id + "glow", 2.5);
    var BLADE = "M4 -3 C12 -12 24 -14 27 -5 C22 1 12 3 4 3 Z";
    var i;

    // panels + titles
    mk(svg, "rect", { x: 56, y: 56, width: 196, height: 168, rx: 12, "class": "sp-panel" });
    var vPanel = mk(svg, "rect", { x: 388, y: 56, width: 196, height: 168, rx: 12, fill: "url(#" + id + "grid)",
      stroke: "rgba(227,164,0,.65)", "stroke-width": 1.4, "stroke-dasharray": "6 4" });
    label(svg, 154, 46, "PHYSICAL ASSET");
    label(svg, 486, 46, "DIGITAL TWIN");

    // data link (sensor -> twin) and control link (twin -> asset)
    var PA = [[202, 86], [262, 14], [378, 14], [440, 82]];
    var PB = [[388, 200], [340, 246], [300, 246], [252, 200]];
    mk(svg, "path", { d: bezD(PA), "class": "sp-dim" });
    mk(svg, "path", { d: bezD(PB), "class": "sp-dim" });

    // physical motor (inside a group so it can shake)
    mk(svg, "line", { x1: 76, y1: 182, x2: 232, y2: 182, stroke: "rgba(70,29,124,.25)", "stroke-width": 1.4 });
    var phys = mk(svg, "g");
    mk(phys, "rect", { x: 110, y: 170, width: 18, height: 12, rx: 2, "class": "sp-body2" });
    mk(phys, "rect", { x: 180, y: 170, width: 18, height: 12, rx: 2, "class": "sp-body2" });
    mk(phys, "rect", { x: 98, y: 94, width: 112, height: 78, rx: 14, "class": "sp-car" });
    for (i = 0; i < 4; i++) {
      mk(phys, "line", { x1: 103, y1: 108 + i * 15, x2: 117, y2: 108 + i * 15, "class": "sp-fin" });
      mk(phys, "line", { x1: 191, y1: 108 + i * 15, x2: 205, y2: 108 + i * 15, "class": "sp-fin" });
    }
    mk(phys, "circle", { cx: 154, cy: 133, r: 31, fill: "rgba(70,29,124,.07)", stroke: "rgba(70,29,124,.6)", "stroke-width": 1.4 });
    var rotor = mk(phys, "g");
    for (i = 0; i < 6; i++) mk(rotor, "path", { d: BLADE, transform: "rotate(" + i * 60 + ")", fill: "rgba(70,29,124,.88)" });
    mk(phys, "circle", { cx: 154, cy: 133, r: 6, fill: GOLD });
    mk(phys, "rect", { x: 178, y: 85, width: 24, height: 10, rx: 3, fill: "rgba(70,29,124,.9)" });
    var led = mk(phys, "circle", { cx: 190, cy: 90, r: 2.2, fill: GREEN });
    var rings = [];
    for (i = 0; i < 3; i++) rings.push(mk(svg, "circle", { cx: 190, cy: 84, r: 4, fill: "none", "stroke-width": 1.2, opacity: 0 }));
    var rpmTxt = mk(svg, "text", { x: 154, y: 208, "class": "sp-small", "text-anchor": "middle" }, "");

    // virtual twin (wireframe)
    mk(svg, "line", { x1: 448, y1: 117, x2: 524, y2: 117, stroke: "rgba(227,164,0,.35)", "stroke-width": .8 });
    mk(svg, "line", { x1: 486, y1: 82, x2: 486, y2: 152, stroke: "rgba(227,164,0,.35)", "stroke-width": .8 });
    mk(svg, "rect", { x: 438, y: 84, width: 96, height: 66, rx: 12, "class": "sp-wire" });
    mk(svg, "circle", { cx: 486, cy: 117, r: 25, "class": "sp-wire" });
    var vrotor = mk(svg, "g");
    for (i = 0; i < 6; i++) mk(vrotor, "path", { d: BLADE, transform: "rotate(" + i * 60 + ")", fill: "none", stroke: GOLD, "stroke-width": 1.3 });
    mk(svg, "circle", { cx: 486, cy: 117, r: 5, fill: "none", stroke: GOLD, "stroke-width": 1.4 });

    // live vibration chart inside the twin
    label(svg, 403, 168, "VIBRATION", "start");
    mk(svg, "line", { x1: 402, y1: 190, x2: 570, y2: 190, stroke: "rgba(70,29,124,.18)", "stroke-width": 1 });
    mk(svg, "line", { x1: 402, y1: 179, x2: 570, y2: 179, "class": "sp-limit" });
    mk(svg, "line", { x1: 402, y1: 201, x2: 570, y2: 201, "class": "sp-limit" });
    var sig = mk(svg, "polyline", { fill: "none", "stroke-width": 1.6, "stroke-linejoin": "round", stroke: "#fff" });

    // status pill
    mk(svg, "rect", { x: 482, y: 62, width: 96, height: 18, rx: 9, fill: "rgba(70,29,124,.07)" });
    var stDot = mk(svg, "circle", { cx: 493, cy: 71, r: 3.5, fill: GREEN });
    var stTxt = mk(svg, "text", { x: 501, y: 74.5, "class": "sp-tiny" }, "IN SYNC");

    // packets
    var pa = [], pb = [];
    for (i = 0; i < 6; i++) {
      var g = mk(svg, "g");
      mk(g, "circle", { r: 6, fill: GOLD, opacity: .25, filter: "url(#" + id + "glow)" });
      var core = mk(g, "circle", { r: 2.7, fill: GOLD });
      pa.push({ g: g, core: core });
    }
    for (i = 0; i < 4; i++) pb.push(mk(svg, "circle", { r: 2.4, fill: "#461D7C", opacity: 0 }));

    var ang = 0, buf = [], sampAcc = 0, sT = 0, ctrl = 0, state = "";
    for (i = 0; i < 72; i++) buf.push(0);

    return function (T, dt) {
      var t = T % 10;
      var anomaly = t > 3.4 && t < 5.2, adjusting = t >= 5.2 && t < 6.8;
      var sev = anomaly ? seg(t, 3.4, 3.8) : adjusting ? 1 - seg(t, 5.2, 6.8) : 0;   // fault severity 0..1

      var w = 7.5 + sev * 3.5 * Math.sin(T * 13);         // rotor speed, rad/s
      ang = (ang + w * dt * 57.2958) % 360;
      phys.setAttribute("transform", "translate(" + F(sev * (Math.random() - .5) * 3.2) + " " + F(sev * (Math.random() - .5) * 2.4) + ")");
      rotor.setAttribute("transform", "translate(154 133) rotate(" + F(ang) + ")");
      // the twin follows ~60 ms behind, as a real synchronized model would
      vrotor.setAttribute("transform", "translate(486 117) rotate(" + F(ang - w * 3.44) + ") scale(.82)");

      // vibration samples
      sampAcc += dt;
      while (sampAcc > 1 / 36) {
        sampAcc -= 1 / 36; sT += 1 / 36;
        var v = (.32 * Math.sin(sT * 2 * Math.PI * 1.6) + .18 * wob(sT * 5)) * (1 + sev * 2.6);
        if (sev > .2 && Math.random() < .2 * sev) v += (Math.random() > .5 ? 1 : -1) * (.9 + Math.random() * .6) * sev;
        buf.push(v); buf.shift();
      }
      var pts = "";
      for (var j = 0; j < buf.length; j++) pts += F(402 + j * 168 / 71) + "," + F(190 - clamp(buf[j], -2.5, 2.5) * 9) + " ";
      attr(sig, { points: pts, stroke: sev > .15 ? RED : "rgba(70,29,124,.9)" });

      var ns = anomaly && t > 3.7 ? "ANOMALY" : (adjusting ? "CORRECTING" : "IN SYNC");
      if (ns !== state) {
        state = ns;
        var col = ns === "ANOMALY" ? RED : ns === "CORRECTING" ? GOLD : GREEN;
        stTxt.textContent = ns; stDot.setAttribute("fill", col); led.setAttribute("fill", col);
        for (j = 0; j < 3; j++) rings[j].setAttribute("stroke", col);
      }
      vPanel.setAttribute("stroke", state === "ANOMALY" ? "rgba(229,72,77," + F2(.55 + .45 * Math.sin(T * 12)) + ")" : "rgba(227,164,0,.65)");
      stDot.setAttribute("opacity", state === "IN SYNC" ? 1 : (Math.sin(T * 10) > 0 ? 1 : .35));

      for (j = 0; j < 3; j++) {
        var ph = (T * 1.1 + j / 3) % 1;
        attr(rings[j], { r: F(3 + ph * 20), opacity: F2((1 - ph) * .7) });
      }

      var speed = .42 + sev * .35;
      for (j = 0; j < pa.length; j++) {
        var k = (T * speed + j / pa.length) % 1, p = bez(PA, k);
        attr(pa[j].g, { transform: "translate(" + F(p[0]) + " " + F(p[1]) + ")", opacity: F2(Math.sin(Math.PI * k)) });
        pa[j].core.setAttribute("fill", sev > .3 ? RED : GOLD);
      }
      ctrl += ((adjusting ? 1 : 0) - ctrl) * Math.min(1, dt * 4);
      for (j = 0; j < pb.length; j++) {
        var k2 = (T * .7 + j / pb.length) % 1, p2 = bez(PB, k2);
        attr(pb[j], { cx: F(p2[0]), cy: F(p2[1]), opacity: F2((.18 + .82 * ctrl) * Math.sin(Math.PI * k2)) });
      }

      var rpm = Math.round(1480 + 6 * wob(T * 3) + sev * 120 * Math.sin(T * 9));
      rpmTxt.textContent = rpm.toLocaleString("en-US") + " RPM";
    };
  };

  /* ==========================================================================
     3. SMART SYSTEMS — an indexing conveyor brings parts under a vision
        station; each part is scanned and passed or flagged, and a robot arm
        (real two-link inverse kinematics on a rotating base) picks it and
        sorts it into the OK or REJECT bin.
     ========================================================================== */
  SCENES.factory = function (svg, id) {
    var defs = mk(svg, "defs");
    var cone = mk(defs, "linearGradient", { id: id + "cone", x1: "0", y1: "0", x2: "0", y2: "1" });
    stops(cone, [["0", GOLD, .55], ["1", GOLD, 0]]);

    var P = 4.5, BELT = 196, PICKX = 400, SCANX = 250, START = 14, TRAVEL = PICKX - START;
    var S = { x: 488, y: 214 }, L1 = 90, L2 = 82, OPEN = 20, CLOSED = 13;
    var BINS = [{ x: 548, w: 52, good: true, base: 128 }, { x: 606, w: 40, good: false, base: 6 }];
    var H = { yw: 150, r: 40, y: 104 }, A = { yw: 180, r: 88, y: 122 }, G = { yw: 180, r: 88, y: 170 };
    var i;
    function isBad(k) { return k % 3 === 1; }
    function binOf(k) { return BINS[isBad(k) ? 1 : 0]; }

    mk(svg, "line", { x1: 20, y1: 240, x2: 630, y2: 240, "class": "sp-dim" });

    // conveyor
    mk(svg, "line", { x1: 64, y1: 212, x2: 64, y2: 240, "class": "sp-leg" });
    mk(svg, "line", { x1: 400, y1: 212, x2: 400, y2: 240, "class": "sp-leg" });
    mk(svg, "rect", { x: 30, y: BELT, width: 404, height: 16, rx: 8, "class": "sp-body" });
    var beltLine = mk(svg, "line", { x1: 38, y1: BELT + 1, x2: 426, y2: BELT + 1, stroke: "rgba(70,29,124,.55)", "stroke-width": 2, "stroke-dasharray": "10 8" });
    var rollers = [];
    for (i = 0; i < 8; i++) {
      var rx = 46 + i * 52, rg = mk(svg, "g");
      mk(rg, "circle", { r: 6, fill: "#fff", stroke: "rgba(70,29,124,.5)", "stroke-width": 1.2 });
      mk(rg, "path", { d: "M-4.5 0H4.5M0 -4.5V4.5", stroke: "rgba(70,29,124,.55)", "stroke-width": 1.2 });
      rollers.push({ x: rx, el: rg });
    }

    // vision station
    mk(svg, "rect", { x: SCANX - 32, y: 104, width: 6, height: 92, rx: 2, "class": "sp-body2" });
    mk(svg, "rect", { x: SCANX + 26, y: 104, width: 6, height: 92, rx: 2, "class": "sp-body2" });
    mk(svg, "rect", { x: SCANX - 36, y: 98, width: 72, height: 9, rx: 3, "class": "sp-body2" });
    mk(svg, "rect", { x: SCANX - 14, y: 107, width: 28, height: 16, rx: 3, "class": "sp-car" });
    mk(svg, "circle", { cx: SCANX, cy: 125, r: 4, "class": "sp-lens" });
    var stLed = mk(svg, "circle", { cx: SCANX + 28, cy: 102.5, r: 3, fill: GREEN });
    label(svg, SCANX, 90, "VISION QC");
    var coneEl = mk(svg, "path", { d: "M250 129 L224 196 L276 196 Z", fill: "url(#" + id + "cone)", opacity: 0 });
    var laser = mk(svg, "line", { y1: 174, y2: 197, stroke: RED, "stroke-width": 1.6, opacity: 0 });

    // bins (back walls first so falling parts drop "into" them)
    BINS.forEach(function (b) {
      mk(svg, "rect", { x: b.x - b.w / 2, y: 190, width: b.w, height: 50, rx: 3, fill: "rgba(70,29,124,.05)", stroke: "rgba(70,29,124,.25)" });
    });

    // two part slots (one on the belt / in the gripper, one still falling)
    function makePart() {
      var g = mk(svg, "g", { opacity: 0 });
      mk(g, "rect", { x: -13, y: -10, width: 26, height: 20, rx: 3, fill: "rgba(70,29,124,.92)" });
      mk(g, "rect", { x: -13, y: -10, width: 26, height: 5, rx: 2, fill: "rgba(253,208,35,1)" });
      mk(g, "circle", { cx: 0, cy: 3, r: 3.2, fill: "#f1ebfa" });
      var crack = mk(g, "path", { d: "M-8 -3 L-3 1 L-6 4 L0 8", stroke: RED, "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" });
      var bd = mk(svg, "g", { opacity: 0 });
      var bc = mk(bd, "circle", { r: 7.5 });
      var bp = mk(bd, "path", { fill: "none", stroke: "#fff", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" });
      return { g: g, crack: crack, bd: bd, bc: bc, bp: bp, k: -1 };
    }
    var slots = [makePart(), makePart()];

    // bin fronts + counters
    BINS.forEach(function (b) {
      var x0 = b.x - b.w / 2, x1 = b.x + b.w / 2;
      mk(svg, "path", { d: "M" + (x0 - 2) + " 204 L" + (x1 + 2) + " 204 L" + (x1 - 2) + " 240 L" + (x0 + 2) + " 240 Z",
        fill: "#f4effb", stroke: b.good ? "rgba(31,157,99,.75)" : "rgba(229,72,77,.75)", "stroke-width": 1.4 });
      b.txt = mk(svg, "text", { x: b.x, y: 226, "class": "sp-tiny", "text-anchor": "middle", fill: b.good ? GREEN : RED }, "");
      b.last = -1;
    });

    // robot arm on a rotating base
    mk(svg, "rect", { x: 466, y: 216, width: 44, height: 24, rx: 4, "class": "sp-body2" });
    mk(svg, "ellipse", { cx: S.x, cy: S.y + 2, rx: 20, ry: 5, "class": "sp-car" });
    var mark = mk(svg, "circle", { r: 2.2, fill: GOLD });
    var up = mk(svg, "line", { "class": "sp-link", "stroke-width": 12 }), upIn = mk(svg, "line", { "class": "sp-link-in" });
    var fo = mk(svg, "line", { "class": "sp-link", "stroke-width": 9 }), foIn = mk(svg, "line", { "class": "sp-link-in" });
    mk(svg, "circle", { cx: S.x, cy: S.y, r: 9, "class": "sp-joint" });
    var jE = mk(svg, "circle", { r: 7, "class": "sp-joint" });
    var jW = mk(svg, "circle", { r: 4.5, "class": "sp-joint" });
    var grip = mk(svg, "g");
    mk(grip, "rect", { x: -25, y: 3, width: 50, height: 5, rx: 2, fill: "rgba(70,29,124,.75)" });
    mk(grip, "rect", { x: -8, y: 0, width: 16, height: 9, rx: 2, fill: "rgba(70,29,124,.95)" });
    var fL = mk(grip, "rect", { y: 7, width: 4, height: 17, rx: 1.5, fill: "rgba(70,29,124,.95)" });
    var fR = mk(grip, "rect", { y: 7, width: 4, height: 17, rx: 1.5, fill: "rgba(70,29,124,.95)" });

    function mixP(p, q, k) { return { yw: lerp(p.yw, q.yw, k), r: lerp(p.r, q.r, k), y: lerp(p.y, q.y, k) }; }
    function dropAbove(b) { return { yw: 0, r: b.x - S.x, y: 122 }; }
    function drop(b) { return { yw: 0, r: b.x - S.x, y: 152 }; }

    // where the wrist is (yaw, reach, height) and how open the gripper is
    function armAt(tau, k) {
      var b = binOf(k);
      if (tau < 1) {
        if (k === 0) return { p: H, g: OPEN };
        var pb = binOf(k - 1);
        return tau < .25 ? { p: mixP(drop(pb), dropAbove(pb), ease(tau / .25)), g: OPEN }
                         : { p: mixP(dropAbove(pb), H, ease((tau - .25) / .75)), g: OPEN };
      }
      if (tau < 2.0) return { p: H, g: OPEN };
      if (tau < 2.6) return { p: mixP(H, A, ease(seg(tau, 2.0, 2.6))), g: OPEN };
      if (tau < 2.9) return { p: mixP(A, G, ease(seg(tau, 2.6, 2.9))), g: OPEN };
      if (tau < 3.05) return { p: G, g: lerp(OPEN, CLOSED, ease(seg(tau, 2.9, 3.05))) };
      if (tau < 3.35) return { p: mixP(G, A, ease(seg(tau, 3.05, 3.35))), g: CLOSED };
      if (tau < 3.95) return { p: mixP(A, dropAbove(b), ease(seg(tau, 3.35, 3.95))), g: CLOSED };
      if (tau < 4.15) return { p: mixP(dropAbove(b), drop(b), ease(seg(tau, 3.95, 4.15))), g: CLOSED };
      return { p: drop(b), g: lerp(CLOSED, OPEN, ease(seg(tau, 4.15, 4.27))) };
    }
    function wristXY(p) { return [S.x + p.r * Math.cos(p.yw * Math.PI / 180), p.y]; }
    function partX(tau) {
      if (tau < 1.2) return lerp(START, SCANX, ease(tau / 1.2));
      if (tau < 1.9) return SCANX;
      if (tau < 2.6) return lerp(SCANX, PICKX, ease(seg(tau, 1.9, 2.6)));
      return PICKX;
    }

    function drawArm(p, g) {
      var c = Math.cos(p.yw * Math.PI / 180), dy = p.y - S.y, r = p.r;
      var d = clamp(Math.sqrt(r * r + dy * dy), Math.abs(L1 - L2) + 1, L1 + L2 - .5);
      var a = Math.atan2(dy, r), b = Math.acos(clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1));
      var t1 = a - b;                                         // elbow-up solution in the arm's plane
      var Ex = S.x + L1 * Math.cos(t1) * c, Ey = S.y + L1 * Math.sin(t1);
      var Wx = S.x + r * c, Wy = p.y;
      attr(up, { x1: S.x, y1: S.y, x2: F(Ex), y2: F(Ey) }); attr(upIn, { x1: S.x, y1: S.y, x2: F(Ex), y2: F(Ey) });
      attr(fo, { x1: F(Ex), y1: F(Ey), x2: F(Wx), y2: F(Wy) }); attr(foIn, { x1: F(Ex), y1: F(Ey), x2: F(Wx), y2: F(Wy) });
      attr(jE, { cx: F(Ex), cy: F(Ey) }); attr(jW, { cx: F(Wx), cy: F(Wy) });
      grip.setAttribute("transform", "translate(" + F(Wx) + " " + F(Wy) + ")");
      fL.setAttribute("x", F(-g - 4)); fR.setAttribute("x", F(g));
      var yr = p.yw * Math.PI / 180;
      attr(mark, { cx: F(S.x + 16 * Math.cos(yr)), cy: F(S.y + 2 + 4 * Math.sin(yr)), opacity: Math.sin(yr) >= 0 ? 1 : .35 });
    }

    function drawPart(slot, k, tau) {
      var bad = isBad(k), b = binOf(k), x, y = 186, op = 1;
      if (tau < 3.05) { x = partX(tau); op = seg(tau, 0, .3); }
      else if (tau < 4.21) { var w = wristXY(armAt(tau, k).p); x = w[0]; y = w[1] + 16; }
      else {
        var ft = tau - 4.21; x = b.x; y = 168 + 300 * ft * ft;
        if (y > 232) op = 0;
      }
      if (slot.k !== k) { slot.k = k; slot.crack.setAttribute("opacity", bad ? 1 : 0); }
      attr(slot.g, { transform: "translate(" + F(x) + " " + F(y) + ")", opacity: F2(op) });

      var pop = ease(seg(tau, 1.75, 1.95)), bop = pop * (1 - seg(tau, 2.95, 3.1));
      if (bop > 0) {
        attr(slot.bd, { transform: "translate(" + F(x) + " " + F(y - 25) + ") scale(" + F2(.6 + .4 * pop) + ")", opacity: F2(bop) });
        slot.bc.setAttribute("fill", bad ? RED : GREEN);
        slot.bp.setAttribute("d", bad ? "M-3 -3 L3 3 M3 -3 L-3 3" : "M-3.5 0 L-1 2.8 L3.8 -2.6");
      } else slot.bd.setAttribute("opacity", 0);
    }

    return function (T) {
      var k = Math.floor(T / P), tau = T - k * P;

      // indexing conveyor: the belt only runs while a part is travelling
      var beltPos = k * TRAVEL + (tau < 2.6 ? partX(tau) - START : TRAVEL);
      beltLine.setAttribute("stroke-dashoffset", F(-beltPos));
      for (var i2 = 0; i2 < rollers.length; i2++) {
        rollers[i2].el.setAttribute("transform", "translate(" + rollers[i2].x + " 204) rotate(" + F((beltPos / 6) * 57.2958 % 360) + ")");
      }

      // vision station
      var env = seg(tau, 1.2, 1.35) * (1 - seg(tau, 1.75, 1.9));
      coneEl.setAttribute("opacity", F2(env * .9));
      var sw = seg(tau, 1.25, 1.75), tri = sw < .5 ? sw * 2 : 2 - sw * 2;
      attr(laser, { x1: F(SCANX - 12 + 24 * tri), x2: F(SCANX - 12 + 24 * tri), opacity: F2(env) });
      var ledCol = GREEN, ledOp = .45;
      if (tau >= 1.2 && tau < 1.75) { ledCol = GOLD; ledOp = Math.sin(T * 30) > 0 ? 1 : .3; }
      else if (tau >= 1.75 && tau < 2.6) { ledCol = isBad(k) ? RED : GREEN; ledOp = 1; }
      attr(stLed, { fill: ledCol, opacity: ledOp });

      // parts: current one, plus the previous one if it is still falling
      drawPart(slots[k % 2], k, tau);
      var prev = slots[(k + 1) % 2];
      if (k > 0 && tau + P < P + .7) drawPart(prev, k - 1, tau + P);
      else prev.g.setAttribute("opacity", 0), prev.bd.setAttribute("opacity", 0);

      var a = armAt(tau, k);
      drawArm(a.p, a.g);

      // bin counters
      var done = k + (tau >= 4.21 ? 1 : 0), good = 0;
      for (var j = 0; j < done; j++) if (!isBad(j)) good++;
      var counts = [BINS[0].base + good, BINS[1].base + done - good];
      for (j = 0; j < 2; j++) {
        if (counts[j] !== BINS[j].last) {
          BINS[j].last = counts[j];
          BINS[j].txt.textContent = (j === 0 ? "OK " : "REJ ") + counts[j];
        }
      }
    };
  };

  /* ==========================================================================
     4. ARTIFICIAL INTELLIGENCE — a live vibration stream scrolls through an
        input window; every second the network runs a forward pass (pulses
        travel layer by layer, neurons light up) and outputs class
        probabilities. When fault impulses enter the window the prediction
        flips to FAULT DETECTED.
     ========================================================================== */
  SCENES.ai = function (svg, id) {
    var defs = mk(svg, "defs");
    blur(defs, id + "glow", 3);
    var i, j, l;

    label(svg, 117, 58, "SENSOR STREAM");
    label(svg, 374, 58, "NEURAL NETWORK");
    label(svg, 550, 58, "PREDICTION");

    // signal panel
    mk(svg, "rect", { x: 26, y: 72, width: 182, height: 128, rx: 10, "class": "sp-panel" });
    mk(svg, "line", { x1: 34, y1: 136, x2: 200, y2: 136, stroke: "rgba(70,29,124,.12)", "stroke-width": 1 });
    var wave = mk(svg, "path", { fill: "none", stroke: "rgba(70,29,124,.9)", "stroke-width": 1.5, "stroke-linejoin": "round" });
    var waveF = mk(svg, "path", { fill: "none", stroke: RED, "stroke-width": 2, "stroke-linejoin": "round" });
    var win = mk(svg, "rect", { x: 150, y: 78, width: 52, height: 116, rx: 6, fill: "rgba(227,164,0,.08)", stroke: GOLD, "stroke-width": 1.5 });

    // network
    var LAY = [{ x: 262, ys: [94, 122, 150, 178] }, { x: 336, ys: [80, 108, 136, 164, 192] },
               { x: 410, ys: [94, 122, 150, 178] }, { x: 486, ys: [116, 156] }];
    var START = [0, .18, .36, .54], ARRIVE = [.18, .36, .54, .72], HOP = .18, PASS = 1.1;
    // edges[l] = connections arriving at layer l (l = 0 are the window -> input feeds)
    var edges = [[], [], [], []];
    for (i = 0; i < 4; i++) {
      edges[0].push({ x1: 202, y1: 136, x2: LAY[0].x, y2: LAY[0].ys[i], src: 0, dst: i, glow: 0,
        el: mk(svg, "line", { x1: 202, y1: 136, x2: LAY[0].x, y2: LAY[0].ys[i], "class": "sp-edge" }) });
    }
    for (l = 1; l < 4; l++) {
      for (i = 0; i < LAY[l - 1].ys.length; i++) {
        for (j = 0; j < LAY[l].ys.length; j++) {
          var e = { x1: LAY[l - 1].x, y1: LAY[l - 1].ys[i], x2: LAY[l].x, y2: LAY[l].ys[j], src: i, dst: j, glow: 0 };
          e.el = mk(svg, "line", { x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2, "class": "sp-edge" });
          edges[l].push(e);
        }
      }
    }
    var OUTC = [GREEN, RED];
    var nodes = [];
    for (l = 0; l < 4; l++) {
      nodes.push([]);
      for (i = 0; i < LAY[l].ys.length; i++) {
        var r = l === 3 ? 9 : 7, col = l === 3 ? OUTC[i] : GOLD;
        var halo = mk(svg, "circle", { cx: LAY[l].x, cy: LAY[l].ys[i], r: r + 6, fill: col, opacity: 0, filter: "url(#" + id + "glow)" });
        var core = mk(svg, "circle", { cx: LAY[l].x, cy: LAY[l].ys[i], r: r, fill: col, "fill-opacity": .3, stroke: "rgba(70,29,124,.75)", "stroke-width": 1.2 });
        nodes[l].push({ halo: halo, core: core, g: 0, act: .5 });
      }
    }
    var pulses = [];
    for (i = 0; i < 16; i++) pulses.push(mk(svg, "circle", { r: 2.4, fill: GOLD, opacity: 0 }));

    // outputs
    var outs = [];
    ["NORMAL", "FAULT"].forEach(function (name, o) {
      var y = LAY[3].ys[o];
      label(svg, 504, y - 6, name, "start");
      var pct = mk(svg, "text", { x: 596, y: y - 6, "class": "sp-tiny", "text-anchor": "end" }, "");
      mk(svg, "rect", { x: 504, y: y + 1, width: 92, height: 6, rx: 3, fill: "rgba(70,29,124,.14)" });
      var bar = mk(svg, "rect", { x: 504, y: y + 1, width: 0, height: 6, rx: 3, fill: OUTC[o] });
      outs.push({ pct: pct, bar: bar, last: -1 });
    });
    var pill = mk(svg, "rect", { x: 504, y: 184, width: 92, height: 22, rx: 11, "stroke-width": 1.2 });
    var pillTxt = mk(svg, "text", { x: 550, y: 198.5, "class": "sp-tiny", "text-anchor": "middle" }, "");

    // signal generator: rotating-machine vibration; during a fault, periodic
    // decaying impulses appear (the classic bearing-defect signature)
    var NSMP = 90, SX0 = 34, SX1 = 200, WIN0 = 63;
    var buf = [], flg = [], ph = 0, acc = 0, imp = 0, nextImp = 0;
    function sample(fault) {
      ph += 2 * Math.PI * 3.4 / 45;
      var v = .38 * Math.sin(ph) + .14 * Math.sin(ph * 2.7 + 1) + (Math.random() - .5) * .16;
      if (fault && --nextImp <= 0) { imp = 1; nextImp = 5 + Math.floor(Math.random() * 3); }
      v += imp * Math.sin(ph * 9) * 1.25; imp *= .62;
      return v;
    }
    for (i = 0; i < NSMP; i++) { buf.push(sample(false)); flg.push(false); }

    var passNo = -1, fired = [false, false, false, false], pTarget = .04, pFault = .04, decision = "";
    function windowFault() {
      var c = 0;
      for (var q = WIN0; q < NSMP; q++) if (flg[q]) c++;
      return c / (NSMP - WIN0);
    }

    return function (T, dt) {
      var t = T % 10, faultNow = t > 3.0 && t < 5.0;

      // stream new samples in at the right edge
      acc += dt;
      while (acc >= 1 / 45) { acc -= 1 / 45; buf.push(sample(faultNow)); flg.push(faultNow); buf.shift(); flg.shift(); }
      var d = "", df = "", step = (SX1 - SX0) / (NSMP - 1);
      for (var q = 0; q < NSMP; q++) {
        var x = F(SX0 + q * step), y = F(136 - clamp(buf[q], -1.5, 1.5) * 38);
        d += (q ? "L" : "M") + x + " " + y;
        if (flg[q]) df += (q && flg[q - 1] ? "L" : "M") + x + " " + y;
      }
      wave.setAttribute("d", d);
      waveF.setAttribute("d", df || "M0 0");
      var wf = windowFault();
      win.setAttribute("stroke", wf > .08 ? RED : GOLD);

      // a new forward pass every PASS seconds
      var pn = Math.floor(T / PASS), qt = T - pn * PASS, n, m;
      if (pn !== passNo) {
        passNo = pn; fired = [false, false, false, false];
        var fault = wf > .08;
        pTarget = fault ? clamp(.6 + wf * 1.3, 0, .97) : .03 + Math.random() * .04;
        for (l = 0; l < 3; l++) {
          for (n = 0; n < nodes[l].length; n++) {
            nodes[l][n].act = fault ? (n % 2 === 0 ? .75 + Math.random() * .25 : .2 + Math.random() * .3)
                                    : .3 + Math.random() * .6;
          }
        }
        nodes[3][0].act = 1 - pTarget; nodes[3][1].act = pTarget;
        // light up the strongest incoming connection(s) of each neuron
        for (l = 0; l < 4; l++) {
          for (m = 0; m < edges[l].length; m++) {
            var ed = edges[l][m];
            ed.on = l === 0 ? true : (nodes[l - 1][ed.src].act > .62 && nodes[l][ed.dst].act > .5);
          }
        }
      }

      for (l = 0; l < 4; l++) {
        if (!fired[l] && qt >= ARRIVE[l]) {
          fired[l] = true;
          for (n = 0; n < nodes[l].length; n++) nodes[l][n].g = Math.max(nodes[l][n].g, nodes[l][n].act);
        }
      }
      var decay = Math.exp(-dt / .38), pi = 0;
      for (l = 0; l < 4; l++) {
        var travelling = qt >= START[l] && qt < START[l] + HOP, u = (qt - START[l]) / HOP;
        for (m = 0; m < edges[l].length; m++) {
          var E = edges[l][m];
          if (travelling && E.on) {
            E.glow = 1;
            if (pi < pulses.length) {
              attr(pulses[pi], { cx: F(lerp(E.x1, E.x2, u)), cy: F(lerp(E.y1, E.y2, u)), opacity: 1 });
              pi++;
            }
          } else E.glow *= Math.exp(-dt / .25);
          E.el.setAttribute("stroke-opacity", F2(.08 + .45 * E.glow));
        }
        for (n = 0; n < nodes[l].length; n++) {
          var N2 = nodes[l][n];
          N2.g *= decay;
          var base = l === 3 ? (n === 1 ? pFault : 1 - pFault) * .6 : 0;
          var lv = Math.max(N2.g, base);
          N2.core.setAttribute("fill-opacity", F2(.25 + .75 * lv));
          N2.halo.setAttribute("opacity", F2(lv * .6));
        }
      }
      for (; pi < pulses.length; pi++) pulses[pi].setAttribute("opacity", 0);

      if (qt >= ARRIVE[3]) pFault += (pTarget - pFault) * Math.min(1, dt * 7);
      var probs = [1 - pFault, pFault];
      for (n = 0; n < 2; n++) {
        outs[n].bar.setAttribute("width", F(92 * probs[n]));
        var pc = Math.round(probs[n] * 100);
        if (pc !== outs[n].last) { outs[n].last = pc; outs[n].pct.textContent = pc + "%"; }
      }
      var dec = pFault > .5 ? "FAULT" : "OK";
      if (dec !== decision) {
        decision = dec;
        if (dec === "FAULT") {
          attr(pill, { fill: "rgba(229,72,77,.12)", stroke: RED });
          pillTxt.textContent = "FAULT DETECTED";
        } else {
          attr(pill, { fill: "rgba(31,157,99,.12)", stroke: GREEN });
          pillTxt.textContent = "HEALTHY";
        }
      }
      pill.setAttribute("stroke-opacity", dec === "FAULT" ? F2(.55 + .45 * Math.sin(T * 10)) : 1);
    };
  };

  window.ASTRA_SCENES = SCENES;
})();
