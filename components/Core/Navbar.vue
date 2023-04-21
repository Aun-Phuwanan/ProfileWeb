<template>
  <nav
    class="fixed max-xl:bottom-0 xl:top-0 backdrop-blur-md bg-white/75 w-full flex max-xl:justify-around xl:justify-end items-center h-[80px] xl:gap-x-10 xl:pr-20"
  >
    <button
      class="max-xl:w-full h-full center gap-x-2 max-xl:border-t-4 max-xl:border-[#9B5AB4] max-xl:bg-gradient-to-b from-[#ebdcf1] to-white"
    >
      <HomeIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">Home</p>
    </button>
    <button class="max-xl:w-full h-full center gap-x-2">
      <MagnifyingGlassIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">Search</p>
    </button>
    <button class="max-xl:w-full h-full center gap-x-2">
      <BellAlertIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">Alert</p>
    </button>
    <button class="max-xl:w-full h-full center gap-x-2">
      <Bars3Icon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">Other</p>
    </button>
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
