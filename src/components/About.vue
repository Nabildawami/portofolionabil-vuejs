<template>
  <!-- make about me -->
  <div class="ful-page">
  <div class="bg-light p-5">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <h1 class="fw-bold">About Me</h1>
          <div class="d-flex justify-content-center" style="width: 100%">
            <p style="max-width: 30rem; font-size: 20px">
              {{ props.smallDescription }}
            </p>
              </div>
          <p style="max-width: 40rem" class="mx-auto">
            {{ props.description }}
          </p>
          <div class="d-flex align-items-center justify-content-center gap-2">
            <a :href="'https://linkedin.com/in/'+props.linkedin">
              <img
                style="width: 30px; height: 100px"
                src="../assets/linkedin.svg"
                alt="" />
            </a>
            <a :href="'https://github.com/'+props.github">
              <img
                style="width: 30px; height: 100px"
                src="../assets/github.svg"
                alt="" />
            </a>
            <a :href="'https://instagram.com/'+props.instagram">
              <img
                style="width: 40px; height: 100px"
                src="../assets/instagram.svg"
                alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
const props = defineProps({
  smallDescription: String,
  description: String,
  github: String,
  linkedin: String,
  instagram: String,
});
</script>


<style>
.ful-page {
  height: 100vh; 
  width: 100%; 
  padding: 0px; 
  box-sizing: border-box; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: rgba(248, 249, 250, 1);;
} 
</style> 