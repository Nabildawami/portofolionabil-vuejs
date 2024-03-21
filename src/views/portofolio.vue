<template>
  <div>
    <section class="portofolio">
      <h2>Portofolio</h2>
      <div class="project" v-for="(project, index) in projects" :key="index">
        <img :src="`../src/assets/${project.image}`" :alt="project.title" width="80%" height="80%">
        <h3>{{ project.title }}</h3>
        <p class="deskri">{{ project.description }}</p>
        <p class="namaor">creator: {{ project.subtitle }}</p> 
        <a class="github-link" :href="`https://github.com/${project.github}`" target="_blank">Lihat di GitHub</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'APLIKASI BUKU STORE',
          subtitle: 'nabil, rafly, faruq, surya', 
          image: 'portofolio-1c.png',
          description: 'Aplikasi ini dibuat dengan menggunakan bahasa pemrograman Java dan JavaFX sebagai desainnya. Di dalam aplikasi ini menerapkan graf sebagai pencarian rekomendasi buku yang terdapat di dalam database.',
          github: 'nabildawami'
        },
        {
          title: 'Ilm',
          subtitle: 'nabil, gilang, faruq', 
          image: 'ilm.jpg',
          description: 'Desain UI dan UX yang dikembangkan dalam network Figma ini mengadaptasi aplikasi yang digunakan sebagai e-learning dari segala segi ilmu baik agama maupun dunia.',
          github: 'nabildawami'
        }
      ]
    };
  }
};
</script>

<style scoped>
.namaor{
  color: #1B073F;
  font-style: italic;
  font-size: 15px; 
  margin-top: 5px; 
  padding: 5px; 
  background-color: #f2f2f2; 
  border-radius: 5px; 
}
.portofolio {
  padding: 80px;
  color: #1B073F;
  text-shadow: #555;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: calc(33% - 20px);
  min-width: 250px;
  text-align: center;
  transition: transform 0.3s ease; 
}

.project:hover {
  transform: translateY(-5px);
}

.project img {
  border-radius: 8px;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.project h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
}

.project h4 {
  font-size: 18px; 
  margin-bottom: 5px; 
  color: #555555; 
}

.deskri {
  font-size: 16px;
  color: #555;
}

.github-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #1B073F;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.github-link:hover {
  background-color: #350E66;
}
</style>
