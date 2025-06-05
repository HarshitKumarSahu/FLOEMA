import { gsap } from 'gsap';

export function initHome() {
  gsap.to('.home-section', { opacity: 1, duration: 1.5, ease: 'power2.out' });
  gsap.from("h1", { y:200, duration:1.5})
}