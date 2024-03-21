<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #250445;">
    <div class="container">
      <a class="navbar-brand" href="#" style="color: white; font-weight: bold;">NabilDawami</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" style="color: white;" exact-active-class="active">HOME</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/biodata" class="nav-link" style="color: white;" exact-active-class="active">BIODATA</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/galeri" class="nav-link" style="color: white;" exact-active-class="active">GALERI</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/portofolio" class="nav-link" style="color: white;" exact-active-class="active">PORTOFOLIO</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/prestasi" class="nav-link" style="color: white;" exact-active-class="active">PRESTASI</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" style="color: white;" exact-active-class="active">Q&A</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-item.active .nav-link {
  background-color: #250445; 
}
</style>
