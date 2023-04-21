<template>
  <div class="max-xl:p-4 xl:max-w-[1280px] mx-auto xl:mt-6">
    <div
      class="flex items-center gap-x-2 p-4 backdrop-blur-md bg-white/75 rounded-xl shadow-md"
    >
      <p class="Catamaran__Medium18">Color mode:</p>
      <button
        v-if="$colorMode.preference == 'dark'"
        @click="$colorMode.preference = 'system'"
        class="Catamaran__Medium18"
      >
        Auto <ComputerDesktopIcon class="w-6 h-6" />
      </button>
      <button
        v-if="$colorMode.preference == 'system'"
        @click="$colorMode.preference = 'light'"
        class="Catamaran__Medium18"
      >
        Light <SunIcon class="w-6 h-6" />
      </button>
      <button
        v-if="$colorMode.preference == 'light'"
        @click="$colorMode.preference = 'dark'"
        class="Catamaran__Medium18"
      >
        Dark <MoonIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  colorMode: "system",
});
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/vue/24/solid";
const colorMode = useColorMode();
// console.log(colorMode.preference);
</script>
<style scoped>
button {
  @apply flex items-center gap-x-2 border border-gray-700 p-2 rounded-md shadow-md;
}
</style>
