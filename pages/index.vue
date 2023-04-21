<template>
  <div class="w-full relative">
    <img src="bg.png" alt="bg" class="w-full" />
    <div class="px-4">
      <div
        class="flex flex-col items-center backdrop-blur-md bg-white/75 rounded-xl shadow-md -translate-y-20"
      >
        <div
          class="bg-red-500 w-[150px] h-[150px] rounded-full shadow-md -translate-y-16"
        ></div>
        <p class="-mt-12 text-2xl font-mono font-bold text-gray-700">
          Phuwanan Noiwaengpim
        </p>
        <p
          class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2"
        >
          Bueng Kal, Thailand
        </p>
        <div class="w-full flex justify-around py-7">
          <img src="react_logo.png" alt="react_logo" class="w-10 h-10" />

          <img src="Vue_Log.png" alt="Vue_Log" class="w-10 h-10" />

          <img
            src="Typescript_logo.png"
            alt="Typescript_logo "
            class="w-10 h-10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
