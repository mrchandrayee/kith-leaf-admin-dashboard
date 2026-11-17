// Visible source transcription from src/pages/orders.tsx in the uploaded video.
// The clip ends at this visible line; surrounding pointer handlers are not shown.
const moveH = (ev: PointerEvent) => {
  const dx = ev.clientX - x0, dy = ev.clientY - y0;
  if (!on) {
    if (Math.hypot(dx, dy) < 6) return;
    on = true;
    ghost = card.cloneNode(true) as HTMLElement;
    ghost.classList.add('ocard--ghost');
    gsap.fromTo(ghost, { scale: 1, rotation: 0 },
      { scale: 1.04, rotation: -2, duration: 0.25, ease: 'back.out(2)' });
  }
  gsap.set(ghost, { x: dx, y: dy });
  const under = document.elementFromPoint(ev.clientX, ev.clientY)
    ?.closest<HTMLElement>('.lane');
  const id = (under?.dataset.col as OrderStatus) ?? null;
  if (id !== over) { over = id; setHot(id); }
};
