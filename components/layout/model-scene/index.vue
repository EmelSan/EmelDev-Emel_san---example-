<template>
  <div class="scene-container">
    <canvas id="bg" class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

export default {
  data() {
    return {
      scene: null,
      pointLight: null,
      pointLightTwo: null,
      ambientLight: null,
      geometry: null,
      particlesGeometry: null,
      material: null,
      sphere: null,
      particlesMesh: null,

      camera: null,
      renderer: null,
      gltfLoader: null,
      model: null,
      controls: null,

      mouseX: null,
      mouseY: null,

      tl: null,
    };
  },
  methods: {
    init() {
      this.gltfLoader = new GLTFLoader();

      //scene  init
      this.scene = new THREE.Scene();

      this.tl = gsap.timeline();

      //model
      this.gltfLoader.load("model/scene.gltf", (gltf) => {
        this.model = gltf;
        gltf.scene.position.set(-25, -16, 0);
        gltf.scene.rotation.set(0, -30, 0);

        this.scene.add(gltf.scene);
      });

      //lights
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      this.pointLight = new THREE.PointLight(0x351f39, 1);
      this.pointLight.position.x = 0;
      this.pointLight.position.y = 0;
      this.pointLight.position.z = 20;
      this.pointLightTwo = new THREE.PointLight(0x351f39, 1);
      this.pointLightTwo.position.x = 0;
      this.pointLightTwo.position.y = 0;
      this.pointLightTwo.position.z = -20;

      const sphereSize = 2;
      const pointLightHelper = new THREE.PointLightHelper(
        this.pointLight,
        sphereSize
      );
      const pointLightHelperTwo = new THREE.PointLightHelper(
        this.pointLightTwo,
        sphereSize
      );

      this.scene.add(this.pointLight, this.pointLightTwo);

      //camera init and settings
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        5000
      );
      this.camera.position.z = 30;

      //renderer init and settings
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
        alpha: true,
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    },
    animate() {
      requestAnimationFrame(this.animate);

      let mouseX;
      let mouseY;
      function animateParticles(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
      }
      document.addEventListener("mousemove", animateParticles);

      setTimeout(() => {
        this.camera.position.x = window.scrollY * -0.001;
        this.camera.position.y = window.scrollY * 0.001;

        this.camera.rotation.x = window.scrollY * -0.0001;
        this.camera.rotation.y = window.scrollY * -0.0001;

        if (mouseX > -1) {
          this.model.scene.position.x = mouseX * -0.0003 - 25.01;
          this.model.scene.position.y = mouseY * -0.0003 - 16.01;
        }

        this.model.scene.rotation.x += 0.0001;

        this.model.scene.rotation.z += 0.0001;
      }, 300);

      this.renderer.render(this.scene, this.camera);
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
</style>