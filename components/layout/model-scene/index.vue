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
        gltf.scene.scale.set(0.2, 0.2, 0.2);
        gltf.scene.position.set(0, -4, 0);
        gltf.scene.rotation.set(0, 3.3, 0);
        // gltf.scene.rotation.set(0, 5, 0);

        this.scene.add(gltf.scene);
        // this.tl.to(gltf.scene.rotation, { y: 0, duration: 2 });
        this.tl.to(
          gltf.scene.scale,
          { x: 0.12, y: 0.12, z: 0.12, duration: 2 },
          "-=1"
        );
      });

      //lights
      this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      this.pointLight = new THREE.PointLight(0x1201ff, 0.6);
      this.pointLight.position.x = 2;
      this.pointLight.position.y = 3;
      this.pointLight.position.z = 60;

      this.scene.add(this.pointLight, this.ambientLight);
      //camera init and settings
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = 40;
      // this.scene.add(this.camera);

      //renderer init and settings
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#bg"),
        alpha: true,
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      //   this.renderer.setClearColor(new THREE.Color("#1e1e1e"), 0);
    },
    animate() {
      requestAnimationFrame(this.animate);

      setTimeout(() => {
        // this.scene.children[3].position.x += 0.1;
        // this.scene.children[3].position.y += 0.1;
        // this.scene.children[3].scale.y += 0.001;
        // this.scene.children[3].scale.x += 0.001;
        // this.scene.children[3].scale.z += 0.001;
        // this.scene.children[2].rotation.y += 0.01;
        // this.scene.children[2].rotation.x += 0.01;
        this.scene.children[2].rotation.z += 0.01;
        // console.log(this.scene.children[2].rы
      }, 100);
      this.renderer.render(this.scene, this.camera);
    },
    // animate() {
    //   const clock = new THREE.Clock();

    //   const tick = () => {
    //     const elapsedTime = clock.getElapsedTime();

    //     // console.log(this.scene);
    //     this.renderer.render(this.scene, this.camera);
    //     requestAnimationFrame(tick);
    //     this.scene.position.x += 0.1;
    //   };
    //   tick();
    // },
  },
  mounted() {
    this.init();
    this.animate();
    setTimeout(() => {
      console.log("THIS SCENE", this.scene);
      console.log("THIS RENDERER", this.renderer);
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