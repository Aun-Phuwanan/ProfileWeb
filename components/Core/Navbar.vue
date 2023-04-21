<template>
  <nav
    class="fixed bottom-0 backdrop-blur-md bg-white/75 w-full flex justify-around items-center h-[80px]"
  >
    <HomeIcon class="w-8 h-8 text-[#969393]" />
    <MagnifyingGlassIcon class="w-8 h-8 text-[#969393]" />
    <div class="w-16 h-16 bg-red-500 rounded-full shadow-xl"></div>
    <BellAlertIcon class="w-8 h-8 text-[#969393]" />
    <Bars3Icon class="w-8 h-8 text-[#969393]" />
  </nav>
</template>
<script setup>
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  Bars3Icon,
} from "@heroicons/vue/24/solid";
</script>
