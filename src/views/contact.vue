<template>
  <section class="biodata">
    <h2>FORM REGISTRASI DAN Q&A</h2>
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Registrasi</legend>
        <p>
          <label for="nama">Nama:</label>
          <input type="text" id="nama" v-model="formData.nama" placeholder="Nama lengkap..." />
        </p>
        <p>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="formData.username" placeholder="Username..." />
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" placeholder="Your email..." />
        </p>
        <p>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" placeholder="Password..." />
        </p>
        <p>
          <label for="jenis_kelamin">Jenis kelamin:</label>
          <label><input type="radio" id="laki-laki" v-model="formData.jenis_kelamin" value="laki-laki" /> Laki-laki</label>
          <label><input type="radio" id="perempuan" v-model="formData.jenis_kelamin" value="perempuan" /> Perempuan</label>
        </p>
        <p>
          <label for="agama">Agama:</label>
          <select id="agama" v-model="formData.agama">
            <option value="islam">Islam</option>
            <option value="kristen">Kristen</option>
            <option value="hindu">Hindu</option>
            <option value="budha">Budha</option>
          </select>
        </p>
      </fieldset>
      <fieldset>
        <legend>Q&A</legend>
        <p>
          <label for="pertanyaan">PERTANYAAN:</label>
          <textarea id="pertanyaan" v-model="formData.pertanyaan"></textarea>
        </p>
        <p>
          <button v-if="!dataDisimpan" @click="submitForm">Daftar</button>
          <router-link v-else to="/view" class="button">LIHAT DATA</router-link>
        </p>
      </fieldset>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: '',
        username: '',
        email: '',
        password: '',
        jenis_kelamin: '',
        agama: 'islam',
        pertanyaan: ''
      },
      dataDisimpan: false 
    };
  },
  methods: {
    submitForm() {
      localStorage.setItem('formData', JSON.stringify(this.formData));
      alert('Data formulir berhasil disimpan!');
      this.dataDisimpan = true;
    }
  }
};
</script>

<style scoped>
.biodata label {
  color: white; 
}

.biodata legend{
  color: white;
}

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

.biodata input[type="text"],
.biodata input[type="email"],
.biodata textarea,
.biodata select {
  background-color: #ffffff;
  color: black;
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
}

.biodata button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.biodata button[type="submit"]:hover {
  background-color: #45a049;
}


</style>
