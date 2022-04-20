<template>
  <div class="scene-container">
    <canvas id="bg" class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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
  watch: {
    camera(val) {
      console.log(val);
    },
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
        // gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.position.set(-25, -16, 0);
        gltf.scene.rotation.set(0, -30, 0);

        this.scene.add(gltf.scene);
        // this.tl.to(gltf.scene.rotation, { y: 0, duration: 2 });
        // this.tl.to(
        //   gltf.scene.scale,
        //   { x: 1.12, y: 1.12, z: 1.12, duration: 2 },
        //   "-=1"
        // );
      });
      // this.tl.to(this.camera.position.x, { x: 100 });

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

      this.scene.add(
        this.pointLight,
        // pointLightHelper,
        this.pointLightTwo
        // pointLightHelperTwo
        // this.ambientLight
      );
      // this.scene.add(new THREE.AxesHelper(5000));

      //camera init and settings
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        5000
      );
      // this.camera.position.x = 0;
      // this.camera.position.y = -10;
      this.camera.position.z = 30;

      //renderer init and settings
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
        alpha: true,
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
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
        // this.camera.rotation.z = window.scrollY * 0.002;
        // this.camera.position.z = window.scrollY * 0.001;
        // window.addEventListener("scroll", () => {});
        // this.camera.position.x += -0.002;
        // this.camera.position.y += -0.02;
        // this.camera.position.z += -0.002;
        // if (mouseX > -1) {
        //   this.camera.rotation.x = mouseY * -0.00001;
        //   this.camera.rotation.y = mouseX * -0.00001;
        // }
        // this.camera.rotation.x += 0.009;
        // this.camera.rotation.y += 0.02;
        // this.camera.rotation.z += 0.0009;
        this.model.scene.rotation.x += 0.0001;
        // this.model.scene.rotation.y += 0.02;
        this.model.scene.rotation.z += 0.0001;
        // this.model.scene.position.x += 0.2;
        // this.model.scene.position.y += 0.2;
        // this.model.scene.position.z += 0.2;
      }, 300);
      // this.controls.update();

      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
    setTimeout(() => {
      console.log("MODEL", this.model);
      console.log("CAMERA", this.camera.rotation);
    }, 300);
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