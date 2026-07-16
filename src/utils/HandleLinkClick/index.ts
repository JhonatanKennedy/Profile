export function handleLinkClick(e: Event) {
  const target = e.currentTarget as HTMLElement;
  const href = target.dataset.href;
  if (!href) return;

  if (href.startsWith("mailto:")) {
    window.location.href = href;
  } else {
    window.open(href, "_blank", "noopener,noreferrer");
  }
}
