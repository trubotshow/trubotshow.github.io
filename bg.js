/*! © 2026 Trubotshow. All rights reserved. Not open source: no license is granted. https://trubotshow.com/rights.html */
/* The dome behind the words turns a little toward where you look: the mouse's distance from the middle
   on a computer, tilting left or right on a phone. It only slides sideways, so upright lines stay upright. */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var root = document.documentElement, target = 0, cur = 0, raf = 0;
  function tick() {
    cur += (target - cur) * 0.06;                       // eased, so the view drifts rather than jumps
    root.style.setProperty("--pan", cur.toFixed(4));
    raf = Math.abs(target - cur) > 0.0005 ? requestAnimationFrame(tick) : 0;
  }
  function set(x) { target = Math.max(-1, Math.min(1, x)); if (!raf) raf = requestAnimationFrame(tick); }
  addEventListener("pointermove", function (e) { if (e.pointerType === "mouse") set((e.clientX / innerWidth) * 2 - 1); });
  document.documentElement.addEventListener("mouseleave", function () { set(0); });
  function orient(e) { if (e.gamma != null) set(e.gamma / 25); }   // about 25° of tilt turns it all the way
  var D = window.DeviceOrientationEvent;
  if (D && typeof D.requestPermission === "function") {           // iPhone asks once, and only after a tap
    addEventListener("touchend", function () {
      D.requestPermission().then(function (s) { if (s === "granted") addEventListener("deviceorientation", orient); }).catch(function () {});
    }, { once: true });
  } else if (D) addEventListener("deviceorientation", orient);
})();
