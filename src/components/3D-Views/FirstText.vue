<script setup>
import * as THREE from "three"; 
import { onMounted } from "vue";

const renderer = new THREE.WebGLRenderer();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/innerHeight, 1, 500)

camera.position.set(0, 0, 100); 
camera.lookAt(0, 0, 0); 

const scene = new THREE.Scene();
const material = new THREE.LineBasicMaterial({ color: "#118909" }); 

const points = [] 

points.push(new THREE.Vector3(-10, 0, 0)); 
points.push(new THREE.Vector3(0, 10, 0)); 
points.push(new THREE.Vector3(10, 0, 0)); 

const geometry = new THREE.BufferGeometry().setFromPoints(points); 
const line = new THREE.Line(geometry, material);

scene.add(line); 



onMounted(() => {
    const rendererContainer = document.getElementById("renderer-container");
    
    // Get the renderer container's height and width to set the
    // default size of the renderer
    const { clientWidth, clientHeight } = rendererContainer;  
    renderer.setSize(clientWidth, clientHeight);
    rendererContainer.append(renderer.domElement); 
    renderer.render(scene, camera);
});
</script>

<template>
  <div id="renderer-container" class="h-full w-full">
  </div>
</template>