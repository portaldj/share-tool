<script setup lang="ts">
useSeoMeta({
  title: 'Hub.dj by Portal DJ - A DJ link in bio built for you',
  description: 'Join the DJ network to create your bio link. A single link helps you share everything you create, showcase your talent, and get bookings from Instagram, TikTok, Twitter, YouTube, and other social media platforms.'
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white font-body selection:bg-fuchsia-500 selection:text-white relative overflow-hidden flex flex-col items-center justify-center">
    
    <!-- Abstract Ambient Background Gradients -->
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
    <div class="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

    <!-- Navigation Bar / Login-Register -->
    <header class="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50 absolute top-0 left-0 right-0">
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold tracking-tighter bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">Hub.dj</h1>
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">by Portal DJ</span>
      </div>
      
      <div class="flex items-center gap-4">
        <a href="https://my.portaldj.pro/login" class="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 hidden sm:block">Log in</a>
        <a href="https://my.portaldj.pro/register" class="group relative px-6 py-2.5 font-bold text-sm bg-white text-slate-950 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
          <span class="relative z-10">Sign up free</span>
          <div class="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-slate-200/50"></div>
        </a>
      </div>
    </header>

    <!-- Main Hero Content -->
    <main class="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 pt-32 pb-20 text-center flex-1">
      
      <!-- Eyebrow Tag -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-inner animate-fade-in-up">
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
        </span>
        <span class="text-xs font-semibold text-indigo-200 uppercase tracking-widest">For DJs, Producers & Artists</span>
      </div>

      <!-- Super Headline -->
      <h2 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-2xl animate-fade-in-up animation-delay-100">
        A DJ link in bio <br class="hidden sm:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500">
          built for you.
        </span>
      </h2>

      <!-- Subheadline -->
      <p class="mt-6 text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-3xl font-medium animate-fade-in-up animation-delay-200">
        Join the DJ network to create your bio link. A single link helps you share everything you create, showcase your talent, and get bookings from Instagram, TikTok, Twitter, YouTube, and other social media platforms.
      </p>

      <!-- Primary CTA Area -->
      <div class="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center w-full animate-fade-in-up animation-delay-300">
        <a href="https://my.portaldj.pro/register" class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-fuchsia-600 hover:from-fuchsia-500 to-indigo-600 hover:to-indigo-500 text-white rounded-full font-bold text-lg shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group flex items-center justify-center gap-2">
          Claim your link
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="https://my.portaldj.pro/login" class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-lg text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 flex items-center justify-center">
          Login to Dashboard
        </a>
      </div>

      <!-- Feature Spotlight -->
      <div class="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto animate-fade-in-up animation-delay-400">
        <!-- Card 1 -->
        <div class="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/15 to-white/5 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative h-full bg-slate-900/80 backdrop-blur-xl p-8 rounded-[23px] flex flex-col items-start border border-white/5 group-hover:border-white/10 transition-colors">
            <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Create in Minutes</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Create and customize your Hub.dj in minutes. No coding required, just drag, drop and launch.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/15 to-white/5 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative h-full bg-slate-900/80 backdrop-blur-xl p-8 rounded-[23px] flex flex-col items-start border border-white/5 group-hover:border-white/10 transition-colors">
            <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Connect Everything</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Connect all your social media links, streams, and mixes with a single beautiful link in your bio.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/15 to-white/5 overflow-hidden lg:col-span-1 md:col-span-2">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative h-full bg-slate-900/80 backdrop-blur-xl p-8 rounded-[23px] flex flex-col items-start border border-white/5 group-hover:border-white/10 transition-colors">
            <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Reflect Your Brand</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              Customize every detail from your Portal DJ Profile to match your brand vibe and generate more clicks.
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="w-full text-center py-8 z-10 border-t border-white/5 mt-auto bg-slate-950/50 backdrop-blur-lg">
      <p class="text-slate-500 font-medium text-sm">
        &copy; {{ new Date().getFullYear() }} Portal DJ. All rights reserved.
      </p>
    </footer>

  </div>
</template>

<style scoped>
/* Custom animations tailored for the landing page vibe */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }

.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .6;
  }
}
</style>
