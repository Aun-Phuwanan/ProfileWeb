<template>
  <nav
    class="fixed max-xl:bottom-0 xl:top-0 backdrop-blur-md bg-white/75 w-full flex max-xl:justify-around xl:justify-end items-center h-[80px] xl:gap-x-10 xl:pr-20"
  >
    <NuxtLink
      :to="localeRoute('/')"
      class="max-xl:w-full h-full center gap-x-2"
      :class="{
        'max-xl:border-t-4 max-xl:border-[#9B5AB4] max-xl:bg-gradient-to-b from-[#ebdcf1] to-white':
          route.fullPath == '/' || route.fullPath == '/th',
      }"
    >
      <HomeIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">{{ $t("navbar.li1") }}</p>
    </NuxtLink>

    <NuxtLink
      :to="localeRoute('/chatbot')"
      class="max-xl:w-full h-full center gap-x-2"
      :class="{
        'max-xl:border-t-4 max-xl:border-[#9B5AB4] max-xl:bg-gradient-to-b from-[#ebdcf1] to-white':
          route.fullPath == '/chatbot' || route.fullPath == '/th/chatbot',
      }"
    >
      <ChatBubbleBottomCenterIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">Chat Bot</p>
    </NuxtLink>
    <NuxtLink
      :to="localeRoute('/news')"
      class="max-xl:w-full h-full center gap-x-2"
      :class="{
        'max-xl:border-t-4 max-xl:border-[#9B5AB4] max-xl:bg-gradient-to-b from-[#ebdcf1] to-white':
          route.fullPath == '/news' || route.fullPath == '/th/news',
      }"
    >
      <NewspaperIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">News</p>
    </NuxtLink>
    <NuxtLink
      :to="localeRoute('/setting')"
      class="max-xl:w-full h-full center gap-x-2"
      :class="{
        'max-xl:border-t-4 max-xl:border-[#9B5AB4] max-xl:bg-gradient-to-b from-[#ebdcf1] to-white':
          route.fullPath == '/setting' || route.fullPath == '/th/setting',
      }"
    >
      <Cog8ToothIcon class="w-8 h-8 text-[#9B5AB4]" />
      <p class="mt-1 max-xl:hidden Catamaran__Bold16">{{ $t("navbar.li2") }}</p>
    </NuxtLink>
  </nav>
</template>
<script setup lang="ts">
import {
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  NewspaperIcon,
  Cog8ToothIcon,
} from "@heroicons/vue/24/solid";
const route = useRoute();
const localeRoute = useLocaleRoute();
</script>
