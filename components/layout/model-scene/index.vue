<template>
  <div class="scene-container">
    <canvas id="bg" class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  data() {
    return {
      scene: null,
      pointLight: null,
      pointLightTwo: null,
      camera: null,
      renderer: null,
      gltfLoader: null,
      model: null,
    };
  },
  methods: {
    init() {
      this.gltfLoader = new GLTFLoader();
      //scene  init
      this.scene = new THREE.Scene();
      //model
      this.gltfLoader.load("model/scene.gltf", (gltf) => {
        this.model = gltf;
        gltf.scene.position.set(-25, -16, 0);
        gltf.scene.rotation.set(0, -30, 0);

        this.scene.add(gltf.scene);
      });
      //lights
      this.pointLight = new THREE.PointLight(0x351f39, 1);
      this.pointLight.position.set(0, 0, 20);
      this.pointLightTwo = new THREE.PointLight(0x351f39, 1);
      this.pointLightTwo.position.set(0, 0, -20);
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
      setTimeout(() => {
        this.camera.position.x = window.scrollY * -0.001;
        this.camera.position.y = window.scrollY * 0.001;

        this.camera.rotation.x = window.scrollY * -0.0001;
        this.camera.rotation.y = window.scrollY * -0.0001;

        this.model.scene.rotation.x += 0.0001;

        this.model.scene.rotation.z += 0.0001;
      }, 600);
      requestAnimationFrame(this.animate);
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