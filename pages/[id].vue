<script setup lang="ts">
/*El siguiente componente es una Prueba de concepto
con este se debe comenzar el desarrollo y conexiones a las APIs*/
import LogoIcon from "~/components/icons/LogoIcon.vue";

const { t } = useI18n()

const { data: posts, pending: postsPending } = await useFetch('/api/posts', {
  lazy: true
});

const route = useRoute();
const id = route.params.id

if (id !== 'portaldj') {
  throw createError({ statusCode: 404, statusMessage: t('profile.not_found') })
}

useSeoMeta({
  title: 'Portal DJ',
  ogTitle: () => t('profile.seo_og_title'),
  description: () => t('profile.seo_desc'),
  ogDescription: () => t('profile.seo_og_desc'),
  ogImage: 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Portal DJ - Comunidad DJ',
  twitterDescription: () => t('profile.seo_tw_desc'),
  twitterImage: 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png',
  ogUrl: 'https://hub.dj/portaldj',
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
      <p class="text-sm text-gray-300 mt-1">{{ $t('profile.subtitle_1') }}</p>
      <p class="text-sm text-gray-300 mt-1">{{ $t('profile.subtitle_2') }}</p>
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
        {{ $t('profile.support_kofi') }}
      </a>


      <a href="https://www.youtube.com/c/PortalDJ?sub_confirmation=1" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
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