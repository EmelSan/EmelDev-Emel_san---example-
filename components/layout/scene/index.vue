<template>
  <div class="scene-container" ref="sceneContainer">
    <canvas id="bg" class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  data() {
    return {
      scene: null,
      pointLight: null,
      ambientLight: null,
      geometry: null,
      particlesGeometry: null,
      material: null,
      sphere: null,
      particlesMesh: null,

      camera: null,
      renderer: null,
      gltfLoader: null,
      controls: null,

      mouseX: null,
      mouseY: null,
    };
  },

  methods: {
    init() {
      //scene  init
      this.scene = new THREE.Scene();

      //geometry init
      this.geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
      this.particlesGeometry = new THREE.BufferGeometry();

      //geometry settings
      const particlesCnt = 1000;

      const posArray = new Float32Array(particlesCnt * 3);

      for (let i = 0; i < particlesCnt * 3; i++) {
        // posArray[i] = Math.random();
        // posArray[i] = Math.random() - 0.5;
        posArray[i] = (Math.random() - 0.5) * 5;
      }

      this.particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      this.material = new THREE.PointsMaterial({
        size: 0.0005,
        // color: 0x646464,
      });

      this.sphere = new THREE.Points(this.geometry, this.material);
      this.particlesMesh = new THREE.Points(
        this.particlesGeometry,
        this.material
      );
      this.scene.add(this.sphere, this.particlesMesh);

      //camera init and settings
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = 2;
      this.scene.add(this.camera);

      //renderer init and settings
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(new THREE.Color("#1e1e1e"), 0);
    },
    animate() {
      let mouseX;
      let mouseY;
      function animateParticles(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
      document.addEventListener("mousemove", animateParticles);

      const clock = new THREE.Clock();
      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        this.sphere.rotation.y = 0.5 * elapsedTime;

        this.particlesMesh.rotation.y = -0.1 * elapsedTime;
        if (mouseX > 0) {
          this.particlesMesh.rotation.y = mouseX * (-0.00008 * elapsedTime);
          this.particlesMesh.rotation.x = mouseY * (-0.00008 * elapsedTime);
        }
        // this.particlesMesh.position.z = mouseY * 0.0009;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(tick);
      };
      tick();
      // requestAnimationFrame(this.animate);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
main {
  position: absolute;
  width: 100vw;
  // height: auto;
  z-index: 99;
  width: 100%;
  margin: 0px auto;
  padding: 0px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: #6667ab;
    text-shadow: -6px 6px 5px rgba(0, 4, 102, 0.61);
  }
  h4 {
    margin-top: 100px;
    text-align: center;
    color: #6667ab;
    text-shadow: -6px 6px 5px rgba(0, 4, 102, 0.61);
  }
}
</style>