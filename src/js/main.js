import * as THREE from 'three';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';
import { initHome } from './pages/home.js';

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Initialize Three.js scene
function initThreeJS() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

// Run GSAP animation and Three.js on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // GSAP animation
  gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });

  // Initialize Three.js if canvas exists
  if (document.getElementById('three-canvas')) {
    initThreeJS();
  }

  // Page-specific logic
  if (window.location.pathname === '/') {
    initHome();
  }
});