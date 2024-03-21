<template>
    <section class="biodata">
      <h2>Data yang Disimpan</h2>
      <ul>
        <li><strong>Nama:</strong> {{ storedData.nama }}</li>
        <li><strong>Username:</strong> {{ storedData.username }}</li>
        <li><strong>Email:</strong> {{ storedData.email }}</li>
        <li><strong>Password:</strong> {{ storedData.password }}</li>
        <li><strong>Jenis Kelamin:</strong> {{ storedData.jenis_kelamin }}</li>
        <li><strong>Agama:</strong> {{ storedData.agama }}</li>
        <li><strong>Pertanyaan:</strong> {{ storedData.pertanyaan }}</li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        storedData: {}
      };
    },
    mounted() {
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
        this.storedData = JSON.parse(storedFormData);
      }
    }
  };
  </script>
  
  <style scoped>
  .biodata {
    text-align: center;
    margin: 20px auto;
    max-width: 500px;
    padding: 20px;
    background-color: #0d0341;
    border-radius: 8px;
    box-shadow: 0 0 10px rgb(12, 12, 12);
  }
  
  .biodata h2 {
    margin-bottom: 20px;
    color: #ffffff;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
    color: #ffffff;
  }
  </style>
  