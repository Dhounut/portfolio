//DEVEN WEEDEN 2026
//0 to 1 as the element scrolls by
export function scrollProgress(el, span, rev) {
  const rect = el.getBoundingClientRect();
  const top = rev ? rect.top : -rect.top;
  return clamp(top / (rect.height * span));
}

export function clamp(val) {
  return Math.min(Math.max(val, 0), 1);
}
