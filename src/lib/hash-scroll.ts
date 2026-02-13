export function scrollToHashTarget(hash: string, behavior: ScrollBehavior = "smooth") {
  if (!hash || !hash.startsWith("#")) return;

  const targetId = decodeURIComponent(hash.slice(1));
  let attempts = 0;
  const maxAttempts = 20;
  const intervalMs = 50;

  const tryScroll = () => {
    const element = document.getElementById(targetId);
    if (!element) {
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, intervalMs);
      }
      return;
    }

    const nav = document.querySelector("nav");
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top: Math.max(top, 0), behavior });
  };

  tryScroll();
}
