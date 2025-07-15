<script setup lang="ts">
/*El siguiente componente es una Prueba de concepto
con este se debe comenzar el desarrollo y conexiones a las APIs*/
import LogoIcon from "~/components/icons/LogoIcon.vue";

const {data: posts, pending: postsPending} = await useFetch('https://portaldj.pro/wp-json/wp/v2/posts', {
  query: {
    per_page: 5,
    orderby: 'date',
    order: 'desc',
  }
});

const route = useRoute();
const id = route.params.id

if (id !== 'portaldj') {
  throw createError({ statusCode: 404, statusMessage: 'No encontrado' })
}

useSeoMeta({
  title: 'Portal DJ',
  ogTitle: 'Portal DJ, la comunidad DJ más grande en habla hispana',
  description: 'Comparte fácilmente tus redes sociales, música y enlaces con tu comunidad usando la herramienta de enlaces de Portal DJ.',
  ogDescription: 'Noticias y análisis del mundo DJ',
  ogImage: 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Portal DJ - Comunidad DJ',
  twitterDescription: 'Portal DJ es la comunidad DJ más grande en habla hispana',
  twitterImage: 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png',
  ogUrl: 'https://link.pdj.cl/portaldj',
  ogType: 'website'
});
</script>

<template>
<div class="bg-gray-900 text-white">
  <main class="max-w-2xl mx-auto p-4 pt-8 md:pt-12">
    <div class="flex flex-col items-center text-center">

      <img
          class="w-24 h-24 rounded-full object-cover mb-4"
          src="https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png"
          alt="Imagen de perfil de Portal DJ"
          onerror="this.onerror=null;this.src='https://placehold.co/96x96/1a202c/ffffff?text=DJ';"
      >

      <h1 class="text-xl font-bold text-white">@portaldj.pro</h1>
      <p class="text-sm text-gray-300 mt-1">Noticias y análisis del mundo DJ</p>
      <p class="text-sm text-gray-300 mt-1">Contenido profesional para DJs</p>
    </div>

    <div  v-if="!postsPending" class="mt-8 flex flex-col space-y-4">
        <a v-for="post in posts" :key="post" :href="post.guid.rendered" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
          {{ post.title.rendered }}
        </a>
    </div>
    <div class="mt-8 flex flex-col space-y-4">



    <a href="https://www.instagram.com/portaldj.pro" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
        Instagram
      </a>

      <a href="https://www.tiktok.com/@portaldj.pro" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
        TikTok
      </a>

      <a href="https://ko-fi.com/portaldj" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
        Apóyanos en Ko-fi
      </a>


      <a href="https://www.youtube.com/c/PortalDJ" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
        YouTube
      </a>

      <a href="https://www.facebook.com/portaldeejay" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
        Facebook
      </a>

      <a href="https://x.com/portaldj_pro" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
        X (Twitter)
      </a>

    </div>

    <footer class="mt-12 mb-6 text-center">
      <a href="https://portaldj.pro" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 gap-1">
        <LogoIcon width="24" height="24"/>
        <span class="text-lg font-bold">portaldj.pro</span>
      </a>
    </footer>

  </main>
</div>
</template>