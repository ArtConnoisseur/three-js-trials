<script setup>
import * as THREE from "three";
import { onMounted } from "vue";

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer(); 

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "#671290"});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube); 
camera.position.z = 5;

function animate() {
  cube.rotation.y += 0.01
  camera.rotation.y += 0.01

  renderer.render(scene, camera)
}

const mounted = onMounted(() => {
  const rendererContainer = document.getElementById("renderer-container")
  renderer.setSize(rendererContainer.clientWidth, rendererContainer.clientHeight);
  renderer.setAnimationLoop(animate);
  rendererContainer.append(renderer.domElement)
})
</script>

<template>
  <div id="renderer-container" class="h-full w-full">
  </div>
</template>