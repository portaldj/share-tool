<script setup lang="ts">
/*El siguiente componente es una Prueba de concepto
con este se debe comenzar el desarrollo y conexiones a las APIs*/
import LogoIcon from "~/components/icons/LogoIcon.vue";

const { t } = useI18n()

const route = useRoute();
const id = route.params.id as string;
const isPortalDj = id === 'portaldj';

// 1. Fetch posts only for portaldj (Static logic)
const { data: posts, pending: postsPending } = await useFetch('/api/posts', {
  lazy: true,
  immediate: isPortalDj // solo cargar si es portaldj
});

// 2. Fetch Profile from backend for dynamic users
const { data: apiResponse, error: profileError, pending: profilePending } = await useFetch<any>(`https://my.portaldj.pro/api/profiles/${id}`, {
  immediate: !isPortalDj // solo cargar si NO es portaldj
});

if (!isPortalDj && (profileError.value || !apiResponse.value)) {
  throw createError({ statusCode: 404, statusMessage: t('profile.not_found') })
}

const profileData = computed(() => apiResponse.value?.data);
const profileDetails = computed(() => profileData.value?.profile);

const isProfileComplete = computed(() => {
  if (isPortalDj) return true;
  if (!profileData.value) return false;
  
  const hasPhoto = !!profileDetails.value?.images?.original;
  const hasNetworks = (profileData.value.social_networks?.length || 0) > 0;
  const hasEvents = (profileData.value.events?.length || 0) > 0;
  
  return hasPhoto && (hasNetworks || hasEvents);
});

// Social networks sorted by order
const socialNetworks = computed(() => {
  if (!profileData.value?.social_networks) return [];
  return [...profileData.value.social_networks].sort((a, b) => a.order - b.order);
});

// URL Formatter Helper
const getSocialUrl = (platformName: string, identifier: string) => {
  if (identifier.startsWith('http://') || identifier.startsWith('https://')) return identifier;
  const name = platformName.toLowerCase();
  let base = '';
  if (name.includes('instagram')) base = 'https://instagram.com/';
  else if (name.includes('facebook')) base = 'https://facebook.com/';
  else if (name.includes('soundcloud')) base = 'https://soundcloud.com/';
  else if (name.includes('youtube')) base = 'https://youtube.com/';
  else if (name.includes('tiktok')) { base = 'https://tiktok.com/'; if (!identifier.startsWith('@')) identifier = '@' + identifier; }
  else if (name.includes('x') || name.includes('twitter')) base = 'https://x.com/';
  else if (name.includes('spotify')) base = 'https://open.spotify.com/artist/';
  else if (name.includes('twitch')) base = 'https://twitch.tv/';
  
  if (base) {
    if (base === 'https://youtube.com/' && !identifier.startsWith('@')) return base + '@' + identifier;
    return base + identifier;
  }
  return `https://${identifier}`;
}

useSeoMeta({
  title: isPortalDj ? 'Portal DJ' : () => `${profileData.value?.name} (@${id}) | Hub.dj`,
  ogTitle: isPortalDj ? () => t('profile.seo_og_title') : () => `${profileData.value?.name} (@${id}) | Hub.dj`,
  description: isPortalDj ? () => t('profile.seo_desc') : () => profileDetails.value?.biography || t('profile.seo_desc'),
  ogDescription: isPortalDj ? () => t('profile.seo_og_desc') : () => profileDetails.value?.biography || t('profile.seo_desc'),
  ogImage: isPortalDj ? 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png' : () => profileDetails.value?.images?.original || 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png',
  twitterCard: 'summary_large_image',
  twitterTitle: isPortalDj ? 'Portal DJ - Comunidad DJ' : () => `${profileData.value?.name} (@${id}) | Hub.dj`,
  twitterDescription: isPortalDj ? () => t('profile.seo_tw_desc') : () => profileDetails.value?.biography || t('profile.seo_desc'),
  twitterImage: isPortalDj ? 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png' : () => profileDetails.value?.images?.original || 'https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png',
  ogUrl: `https://hub.dj/${id}`,
  ogType: 'website'
});
</script>

<template>
<div class="bg-gray-900 text-white min-h-screen flex flex-col">
  <main class="w-full max-w-2xl mx-auto p-4 pt-8 md:pt-12 flex-grow">
    
    <!-- Renderizado de Perfil Completo -->
    <template v-if="isProfileComplete">
      <div class="flex flex-col items-center text-center">
        <template v-if="isPortalDj">
          <img class="w-24 h-24 rounded-full object-cover mb-4" src="https://portaldj.pro/wp-content/uploads/2023/04/Icono-1080p.png" alt="Imagen de perfil de Portal DJ" onerror="this.onerror=null;this.src='https://placehold.co/96x96/1a202c/ffffff?text=DJ';">
          <h1 class="text-xl font-bold text-white">@portaldj.pro</h1>
          <p class="text-sm text-gray-300 mt-1">{{ $t('profile.subtitle_1') }}</p>
          <p class="text-sm text-gray-300 mt-1">{{ $t('profile.subtitle_2') }}</p>
        </template>

        <template v-else-if="profileData">
          <img class="w-24 h-24 rounded-full object-cover mb-4 shadow-lg shadow-white/5 border border-white/10" :src="profileDetails?.images?.original" :alt="profileData?.name" onerror="this.onerror=null;this.src='https://placehold.co/96x96/1a202c/ffffff?text=DJ';">
          <h1 class="text-2xl font-bold tracking-tight text-white">@{{ id }}</h1>
          <p class="text-sm text-gray-400 mt-1 font-medium">{{ profileData.name }}</p>
          <div v-if="profileDetails?.dj_type" class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 mt-3">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pdj-cyan opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-pdj-cyan"></span>
            </span>
            <span class="text-[10px] font-semibold text-white uppercase tracking-wider">{{ profileDetails.dj_type.name }}</span>
          </div>
        </template>
      </div>

      <div v-if="isPortalDj">
        <div v-if="!postsPending" class="mt-8 flex flex-col space-y-4">
            <a v-for="post in posts" :key="post.guid.rendered" :href="post.guid.rendered" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 w-full">
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
      </div>

      <div v-else-if="profileData" class="mt-8 flex flex-col space-y-4">
        <a v-for="link in socialNetworks" :key="link.id" :href="getSocialUrl(link.platform.name, link.url)" target="_blank" rel="noopener noreferrer" class="relative overflow-hidden group flex items-center justify-center bg-white/5 border border-white/10 hover:border-pdj-cyan/50 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(28,156,175,0.2)] hover:scale-[1.02] active:scale-[0.98] w-full backdrop-blur-sm">
          <div class="absolute inset-0 bg-gradient-to-r from-pdj-blue/10 to-pdj-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute left-6 w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" v-html="link.platform.icon"></div>
          <span class="relative z-10 tracking-wide">{{ link.platform.name }}</span>
        </a>

        <!-- View Full Profile Button -->
        <a :href="`https://my.portaldj.pro/profile/${id}`" target="_blank" rel="noopener noreferrer" class="group relative px-6 py-4 mt-6 font-bold text-sm bg-white text-slate-950 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full flex items-center justify-center">
          <span class="relative z-10 flex items-center gap-2">
            {{ $t('profile.view_full_profile') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <div class="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-slate-200/50"></div>
        </a>
      </div>
    </template>
    
    <!-- Renderizado de Perfil Incompleto -->
    <template v-else-if="profileData">
      <div class="flex flex-col items-center text-center mt-12 px-6">
        <div class="w-24 h-24 mb-6 rounded-full bg-slate-800 border-2 border-dashed border-slate-600 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold tracking-tight text-white mb-2">@{{ id }}</h1>
        
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6 mt-6 backdrop-blur-md shadow-xl w-full">
          <h2 class="text-lg font-semibold text-pdj-cyan mb-2">{{ $t('profile.incomplete_title') }}</h2>
          <p class="text-slate-300 text-sm mb-8 leading-relaxed">{{ $t('profile.incomplete_desc') }}</p>
          
          <a href="https://my.portaldj.pro/login" class="inline-flex relative px-8 py-3.5 font-bold text-sm bg-gradient-to-r from-pdj-blue to-pdj-cyan text-white rounded-full overflow-hidden shadow-[0_0_20px_rgba(28,156,175,0.3)] hover:shadow-[0_0_30px_rgba(28,156,175,0.5)] transition-all duration-300 hover:-translate-y-1 w-full justify-center">
            <span class="relative z-10">{{ $t('profile.incomplete_cta') }}</span>
          </a>
        </div>
      </div>
    </template>

    <footer class="mt-12 mb-6 text-center">
      <a href="https://my.portaldj.pro/register" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 gap-1">
        <LogoIcon width="24" height="24"/>
        Bio Link by <span class="text-lg font-bold">portaldj.pro</span>
      </a>
    </footer>

  </main>
</div>
</template>