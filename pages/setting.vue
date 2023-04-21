<template>
  <div class="max-xl:p-4 xl:max-w-[1280px] mx-auto xl:mt-6">
    <div
      class="flex items-center gap-x-2 p-4 backdrop-blur-md bg-white/75 rounded-xl shadow-md"
    >
      {{ colorMode }}
      <p class="Catamaran__Medium18">Color mode:</p>
      <!-- {{ $colorMode.value }} -->
      <!-- <button
        v-if="$colorMode.preference == 'dark'"
        onclick="$colorMode.preference ='system'"
        class="flex items-center gap-x-2 border border-gray-700 p-2 rounded-md Catamaran__Medium18"
      >
        Auto <ComputerDesktopIcon class="w-6 h-6" />
      </button>
      <button
        v-if="$colorMode.preference == 'system'"
        onclick="$colorMode.preference ='light'"
        class="flex items-center gap-x-2 border border-gray-700 p-2 rounded-md Catamaran__Medium18"
      >
        Light <SunIcon class="w-6 h-6" />
      </button>
      <button
        v-if="$colorMode.preference == 'light'"
        onclick="$colorMode.preference ='dark'"
        class="flex items-center gap-x-2 border border-gray-700 p-2 rounded-md Catamaran__Medium18"
      >
        Dark <MoonIcon class="w-6 h-6" />
      </button> -->
      <!-- <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> -->
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
// colorMode = useColorMode();
// console.log(colorMode.preference);
</script>
