<template>
  <div class="max-xl:p-4 xl:max-w-[1280px] mx-auto xl:mt-6">
    <div
      class="p-4 backdrop-blur-md bg-white/75 rounded-xl shadow-md space-y-4"
    >
      <div class="flex items-center gap-x-2">
        <p class="Catamaran__Medium18">{{ $t("setting.mode") }}:</p>
        <button
          v-if="$colorMode.preference == 'dark'"
          @click="$colorMode.preference = 'system'"
          class="Catamaran__Medium18"
        >
          {{ $t("setting.color_mode.auto") }}
          <ComputerDesktopIcon class="w-6 h-6" />
        </button>
        <button
          v-if="$colorMode.preference == 'system'"
          @click="$colorMode.preference = 'light'"
          class="Catamaran__Medium18"
        >
          {{ $t("setting.color_mode.light") }} <SunIcon class="w-6 h-6" />
        </button>
        <button
          v-if="$colorMode.preference == 'light'"
          @click="$colorMode.preference = 'dark'"
          class="Catamaran__Medium18"
        >
          {{ $t("setting.color_mode.dark") }} <MoonIcon class="w-6 h-6" />
        </button>
      </div>
      <div class="flex items-center gap-x-2">
        <p class="Catamaran__Medium18">{{ $t("setting.lang") }}:</p>
        <div class="flex border border-gray-700 rounded-md shadow-md">
          <NuxtLink
            v-for="i in availableLocales"
            :key="i.code"
            :to="switchLocalePath(i.code)"
            @click.prevent.stop="setLocale(i.code)"
            class="w-[86.94px] p-2 text-center Catamaran__Medium18"
            :class="{
              'bg-[#9B5AB4] rounded-md text-white': locale == i.code,
            }"
            >{{ i["code"] }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  //   colorMode: "system",
});
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/vue/24/solid";
// const colorMode = useColorMode();
// const { locale } = useI18n();
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
// const localeRoute = useLocaleRoute();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code);
});
</script>
<style scoped>
button,
.link {
  @apply flex items-center gap-x-2 border border-gray-700 p-2 rounded-md shadow-md;
}
</style>
