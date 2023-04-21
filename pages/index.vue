<template>
  <div class="w-full relative">
    <img
      src="~/assets/img/hero_bg.png"
      alt="hero_bg"
      class="w-full xl:object-none xl:h-[500px]"
    />
    <div class="px-4 xl:max-w-[1280px] mx-auto">
      <div
        class="flex flex-col items-center backdrop-blur-md bg-white/75 rounded-xl shadow-md -translate-y-20"
      >
        <img
          src="~/assets/img/profile.png"
          alt="profile"
          class="w-[150px] h-[150px] rounded-full shadow-md -translate-y-16"
        />
        <p class="-mt-12 Catamaran__Bold24">Phuwanan Noiwaengpim</p>
        <p
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 Catamaran__Medium18"
        >
          Bueng Kal, Thailand
        </p>
        <div class="w-full flex justify-around py-7">
          <img
            src="~/assets/img/react_logo.png"
            alt="react_logo"
            class="w-10 h-10"
          />

          <img src="~/assets/img/Vue_Log.png" alt="Vue_Log" class="w-10 h-10" />

          <img
            src="~/assets/img/Typescript_logo.png"
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
