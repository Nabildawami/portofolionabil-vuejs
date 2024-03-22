<script setup>
import About from "../components/About.vue";
</script>

<template>
  <div class="full-page">
    <section class="biodat">
      <div class="content">
        <div class="image-container">
          <img alt="Vue logo" class="round-image" src="@/assets/NAABILDAWAMI.png" width="125" height="125" />
        </div>
        <h2>Welcome to My Website</h2>
        <p>Mari bersama membangun mitra dan komunitas bersama Nabil Dawami</p>
        <router-link to="/biodata" class="button">Get Started</router-link>
      </div>
    </section>
  </div>
  <About
    small-description="Semangat ku Full Terus! gas gas online."
    description="Nama saya adalah Nabil Dawami, saya adalah seorang mahasiswa di UIN Suska Riau jurusan Teknik Informatika. Saya memiliki minat yang besar dalam pengembangan perangkat lunak dan teknologi informasi. Saya senang belajar hal baru dalam dunia teknologi dan berbagi pengetahuan dengan orang lain.Selain belajar di perguruan tinggi, saya juga aktif dalam berbagai kegiatan di luar kampus, termasuk pengembangan proyek-proyek open source, seminar dan workshop, serta kegiatan sosial di komunitas lokal"
    github="Nabildawami"
    linkedin="m-nabil-dawami"
    instagram="naabildawami"
  />
</template>

<style scoped>
.full-page {
  height: 100vh; 
  width: 100%;  
  background-size: cover;
  background-position: center; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
} 

.biodat {
  color: #040339;
  text-align: center;
}

.content {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
}

.round-image {
  border-radius: 30%;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.image-container {
  display: inline-block;
  overflow: hidden;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffc107;
  color: #222;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.button:hover {
  background-color: #ffdb4d;
}
</style>
