<template>
  <div>
    <h2 class="kocak">Galeri</h2>
    <section class="gallery">
      <div v-for="(item, index) in galleryItems" :key="index" :class="['item', item.type]">
        <template v-if="item.type === 'image'">
          <img :src="`../src/assets/${item.src}`" :alt="'Gambar ' + (index + 1)">
        </template>
        <template v-else-if="item.type === 'video'">
          <iframe width="80%" height="50%" :src="item.src" frameborder="0" allowfullscreen></iframe>
        </template>
        <div class="caption">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <a class="link" :href="`https://${item.link}.com`" target="_blank">Lihat Detail</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        {
          type: 'image',
          src: 'Untitled-1.jpg',
          title: 'DESAINT 1',
          description: 'desaint ini teradaptasi dari tangga yang memiliki celah yang dapat digunakan dalam atraksi manuver tikung menikung',
          link: 'instagram'
        },
        {
          type: 'video',
          src: 'https://www.youtube.com/embed/vFfHc-xILCc',
          title: 'Sosial engenering',
          description: 'video pembahasan mengenai sosial engenering yang marak terjadi di lingkungan dunia it',
          link: 'youtube'
        },
        {
          type: 'image',
          src: 'taktik.jpg',
          title: 'DESAINT 3',
          description: 'desaint ini terinspirasi dari poster propaganda barack obama dalam pemilahan pilpres di amerika yang sangat mempegaruhui haluan politik dunia pada waktu itu',
          link: 'instagram'
        },
        {
          type: 'image',
          src: 'STREET ERR.jpg',
          title: 'DESAINT 4',
          description: 'desaint ini terinspirasi dari poster replika abstarksi dunia',
          link: 'instagram'
        },
        {
          type: 'video',
          src: 'https://www.youtube.com/embed/qRY6zL9rohc',
          title: 'Graph',
          description: 'video pembahasan mengenai Graph yang marak terjadi di lingkungan dunia it',
          link: 'youtube'
        },
        {
          type: 'image',
          src: 'taktik2.jpg',
          title: 'DESAINT 5',
          description: 'desaint ini terinspirasi dari poster propaganda barack obama dalam pemilahan pilpres di amerika yang sangat mempegaruhui haluan politik dunia pada waktu itu',
          link: 'instagram'
        }
      ]
    };
  }
};
</script>

<style scoped>
.kocak {
  padding: 5%;
  font-style: italic;
  color: #1b033f;
}

.gallery {
  display: flex;
  color: rgb(27, 7, 63)f;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: calc(33% - 20px);
  min-width: 200px;
  text-align: center;
  background-color: #fff;
  position: relative;
}

.item img {
  width: 80%;
  height: 50%;
  padding: 1%;
}

.caption {
  padding: 15px;
  text-align: center;
  overflow-y: auto;
}

.caption h3 {
  margin-top: 0;
  text-align: center;
  color: #000;
}

.caption p {
  margin-bottom: 0;
  color: #000;
}

.item:hover {
  transform: translateY(-5px);
}

.item .title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #000000;
  padding: 10px;
  box-sizing: border-box;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.item:hover .title {
  opacity: 1;
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.item.image .video-placeholder {
  display: none;
}

.item.video img {
  display: none;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: none;
}

.popup.active {
  display: block;
}

.link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #1B073F;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s, font-size 0.3s; }

.link:hover {
  background-color: #350E66;
  transform: scale(1.0); 
  font-size: 15px; 
}
</style>