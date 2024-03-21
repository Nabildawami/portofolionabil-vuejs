<template>
  <section class="prestasi">
    <h2>Prestasi</h2>
    <table>
      <thead>
        <tr>
          <th>Tahun</th>
          <th>Nama Kegiatan</th>
          <th>Juara</th>
          <th>Sekolah</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prestasi in prestasiList" :key="prestasi.id">
          <td>{{ prestasi.tahun }}</td>
          <td>{{ prestasi.nama }}</td>
          <td>{{ prestasi.juara }}</td>
          <td>{{ prestasi.sekolah }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      prestasiList: [
        { id: 1, tahun: '2018', nama: 'Kejuaraan FL2N TINGKAT KOTA (MUSIK TRADISIONAL)', juara: 'Juara 1', sekolah: 'SMPN 14 DUMAI' },
        { id: 2, tahun: '2019', nama: 'Kejuaraan FL2N TINGKAT KOTA (MUSIK TRADISIONAL)', juara: 'Juara 1', sekolah: 'SMPN 14 DUMAI'},
        { id: 3, tahun: '2019', nama: 'Kejuaraan FL2N TINGKAT PROVINSI (MUSIK TRADISIONAL)', juara: 'Juara 2', sekolah: 'SMPN 14 DUMAI'},
        { id: 4, tahun: '2020', nama: 'Kejuaraan FL2N TINGKAT KOTA(MUSIK TRADISIONAL)', juara: 'Juara 1', sekolah: 'SMKN 2 DUMAI'},
        { id: 5, tahun: '2020', nama: 'PENULISAN KARYA ILMIAH ESSAY', juara: 'Juara 1', sekolah: 'SMKN 2 DUMAI'},
        { id: 6, tahun: '2023', nama: 'PENULISAN KARYA TULIS PUISI', juara: 'Juara 1', sekolah: 'UIN SUSKA RIAU'},
        { id: 7, tahun: '2023', nama: 'LOMBA UX DAN UI', juara: 'Juara 2', sekolah: 'UIN SUSKA RIAU'},
      ]
    };
  }
};
</script>

<style scoped>

.prestasi {
  padding: 20px;
  text-align: center;
}
.prestasi h2{
  text-align: center;
  padding: 4%;
  font-style: italic;
  background-color: aqua;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #fff;
}

th {
  background-color: #ffffff;
}

tbody tr:nth-child(even) {
  background-color: #fffbfb;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}
</style>
