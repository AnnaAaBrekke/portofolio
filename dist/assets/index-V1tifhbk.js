(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = r(e);
    fetch(e.href, o);
  }
})();
const d = () => {
    const n = document.getElementById("profileDropdown"),
      t = document.getElementById("sidebarMenu"),
      r = document.getElementById("closeSidebar");
    if (!n || !t || !r) {
      console.error("Dropdown elements not found! Check your HTML IDs.");
      return;
    }
    const s = () => t.classNameList.toggle("hidden");
    n.addEventListener("click", s),
      r.addEventListener("click", () => t.classNameList.add("hidden")),
      document.addEventListener("click", (e) => {
        !t.contains(e.target) &&
          !n.contains(e.target) &&
          t.classNameList.add("hidden");
      });
  },
  c = () => {
    const n = document.getElementById("skillsSidebar"),
      t = document.getElementById("footer");
    if (!n || !t) {
      console.error("Skills sidebar or footer elements not found!");
      return;
    }
    const r = () => {
      const s = t.getBoundingClientRect().top,
        e = window.innerHeight;
      n.style.display = s <= e ? "none" : "block";
    };
    window.addEventListener("scroll", r);
  },
  l = () => {
    const n = document.getElementById("skeleton-loader");
    n && (n.style.display = "none");
  };
document.addEventListener("DOMContentLoaded", () => {
  d(), c(), setTimeout(l, 2e3);
});
