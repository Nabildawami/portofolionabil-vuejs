<template>
  <section class="biodataa">
    <h2>Biodata</h2>
    <table>
      <tr>
        <td>Nama</td>
        <td>{{ biodata.nama }}</td>
      </tr>
      <tr>
        <td>Tempat Lahir</td>
        <td>{{ biodata.tempat_lahir }}</td>
      </tr>
      <tr>
        <td>Tanggal Lahir</td>
        <td>{{ biodata.tanggal_lahir }}</td>
      </tr>
      <tr>
        <td>Zodiak</td>
        <td>{{ biodata.zodiak }}</td>
      </tr>
      <tr>
        <td>Hobi</td>
        <td>
          <ul class="no-bullet">
            <li v-for="(hobi, index) in biodata.hobi" :key="index">{{ hobi }}</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Link Sosial Media</td>
        <td>
          <ul class="no-bullet">
            <li v-for="(link, name) in biodata.link_sosial_media" :key="name">
              <a :href="link" style="color: white;">{{ name }}</a>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Riwayat Sekolah</td>
        <td>
          <ul class="no-bullet">
            <li v-for="(sekolah, index) in biodata.riwayat_sekolah" :key="index">{{ sekolah }}</li>
          </ul>
        </td>
      </tr>
    </table>

    <h3>Kata-Kata Motivasi</h3>
    <p>{{ biodata.kata_motivasi }}</p>

    <h3>Audio FAVORIT</h3>
    <audio controls>
      <source src="../assets/oline.mp3" type="audio/mpeg">o/mpeg">
    Your browser does not support the audio element.
    </audio>
    
    <h3>Video PRIBADI</h3>
    <iframe width="560" height="315" :src="biodata.video_pribadi" frameborder="0" allowfullscreen></iframe>

  </section>

  <div class="button-container">
    <router-link to="/prestasi" class="button">NEXT</router-link>
    <a href="/" class="button1">PREVIOUS</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      biodata: {
        nama: 'Muhammad Nabil Dawami',
        tempat_lahir: 'Pekanbaru',
        tanggal_lahir: '03 November 2004',
        zodiak: 'Scorpio',
        hobi: ['menulis', 'musik', 'sastra', 'finnace'],
        link_sosial_media: {
          'Facebook': 'https://www.facebook.com/nabildawami',
          'Twitter': 'https://www.twitter.com/nabildawami',
          'Instagram': 'https://www.instagram.com/naabildawami/?hl=en'
        },
        riwayat_sekolah: ['SDN 021 TANJUNG PALAS', 'SMPN 14 DUMAI', 'SMKN 2 DUMAI', 'UIN SUSKA RIAU'],
        kata_motivasi: `"Sudah pasti aku tidak mau kalah dari kakak kelasku. Kami ingin buat show diri kami sendiri. Ada hariku menangis sedih saat ku libur karena ku cedera. Ada hariku sudah menyerah imbangi sekolah beserta latihan. Tapi ku mendengar encore dari suatu tempat. Impian setelah air mata, bunga senyuman setelah tangis berhenti. Kuncup yang berusaha keras pun akan mekar. Impian setelah air mata, ku percaya takkan kalah dari angin hujan, sampai doaku mencapai langit cerah. Penuh semangat mari menari, penuh semangat mari bernyanyi. Tak lupakan tujuan awal, kerahkan seluruh tenaga. Impian ada di tengah peluh, bagai bunga yang mekar secara perlahan. Usaha keras itu tak akan mengkhianati. Impian ada di tengah peluh, selalu menunggu agar ia menguncup. Suatu hari pasti sampai harapan terkabul."`,
        video_pribadi: 'https://www.youtube.com/embed/nYriFNF6EOA',
      
      }
    };
  }
};
</script>

<style scoped>
.biodataa {
  text-align: center;
  margin: 10px auto;
  max-width:70%;
  padding: 10px;
  background-color: #250445;
  border-radius: 50px;
  box-shadow: 0 0 10px rgb(255, 255, 255);
}

table {
  margin: 0 auto; 
  width: auto; 
  max-width: 100%;
  border-collapse: collapse;
}

table td {
  padding: 10px;
  border: 1px solid #fbf8f8;
}

td{
  margin-top: 20px;
  color: #ffffff;
}

tr{
  margin-top: 20px;
  color: #ffffff;
}

h2{
  margin-top: 20px;
  color: #ffffff;
}
h3 {
  margin-top: 20px;
  color: #ffffff;
}

p{
  margin-top: 20px;
  color: #ffffff;
}

iframe {
  
  margin-top: 20px;
  width: 100%;
  max-width: 80%; 
  background-color: #250445;
  border-radius: 60px;
  padding: 10px;
}

.audio-player {
  margin-top: 20px;
  width: 100%;
  max-width: 80%; 
  background-color: #021244;
  border-radius: 5px;
  padding: 10px;
}

.audio-player audio {
  width: 100%;
  outline: none;
}

.audio-player audio::-webkit-media-controls-panel {
  background-color: #4a0262;
  border-radius: 5px;
}

.no-bullet {
  list-style-type: none; 
}

/* Tombol NEXT */
.button {
  display: inline-block;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #4a0262; 
  color: #fff; 
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #67038e;
}

/* Tombol PREVIOUS */
.button1 {
  display: inline-block;
  padding: 10px 20px;
  background-color: #021244; 
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button1:hover {
  background-color: #063f7d; 
}

.button-container {
  text-align: center;
  margin-top: 20px;
}
</style>