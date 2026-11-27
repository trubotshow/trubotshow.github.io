/*! © 2026 Trubotshow. All rights reserved. Not open source: no license is granted. https://trubotshow.com/rights.html */
/* The sky in the dome spreads its light toward where you look: the mouse's distance from the middle
   on a computer, tilting left or right on a phone. Two more copies of the same loop, with the sky leaning
   left or right, fade in over the main one, in step with it. The room itself never moves. */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var main = document.querySelector("video.bg");
  if (!main) return;
  var side = null, target = 0, cur = 0, raf = 0, last = 0;
  function make(name) {
    var v = document.createElement("video");
    v.className = "bg"; v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto";
    v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); v.setAttribute("aria-hidden", "true");
    v.src = main.currentSrc.replace(/studio-(wide|tall)\.mp4/, "studio-$1-" + name + ".mp4");
    v.style.opacity = "0";
    main.after(v);
    return v;
  }
  function align(v) {                                              // how far a copy is from the main loop, across the loop's end
    var T = main.duration || 0, d = v.currentTime - main.currentTime;
    if (T) d = ((d % T) + T * 1.5) % T - T / 2;
    if (Math.abs(d) > 0.1) v.currentTime = main.currentTime;
  }
  function show(v, a) {
    v.style.opacity = a.toFixed(3);
    if (a > 0.01 && v.paused) { v.currentTime = main.currentTime; v.play().catch(function () {}); }
    else if (a <= 0.01 && !v.paused) v.pause();                   // a hidden copy rests, so a phone decodes one loop
  }
  function tick(now) {
    var dt = last ? Math.min(0.1, (now - last) / 1000) : 0.016; last = now;
    cur += (target - cur) * (1 - Math.exp(-dt / 0.35));            // eased over about a second, at any frame rate
    if (side) { show(side.l, Math.max(0, -cur)); show(side.r, Math.max(0, cur)); }
    raf = Math.abs(target - cur) > 0.001 ? requestAnimationFrame(tick) : (last = 0);
  }
  function set(x) {
    if (!side && main.currentSrc) side = { l: make("left"), r: make("right") };   // fetched only once someone moves
    target = Math.max(-1, Math.min(1, x));
    if (!raf) raf = requestAnimationFrame(tick);
  }
  setInterval(function () {                                         // keep the copies in step with the main loop
    if (side) [side.l, side.r].forEach(function (v) { if (!v.paused) align(v); });
  }, 1000);
  addEventListener("pointermove", function (e) { if (e.pointerType === "mouse") set((e.clientX / innerWidth) * 2 - 1); });
  document.documentElement.addEventListener("mouseleave", function () { set(0); });
  function orient(e) { if (e.gamma != null) set(e.gamma / 25); }   // about 25° of tilt spreads it all the way
  var D = window.DeviceOrientationEvent;
  if (D && typeof D.requestPermission === "function") {           // iPhone asks once, and only after a tap
    addEventListener("touchend", function () {
      D.requestPermission().then(function (s) { if (s === "granted") addEventListener("deviceorientation", orient); }).catch(function () {});
    }, { once: true });
  } else if (D) addEventListener("deviceorientation", orient);
})();
