<template>
  <div
    class="xl:max-w-[1280px] mx-auto pt-6 xl:my-6 backdrop-blur-md bg-white/75 xl:rounded-xl"
  >
    <p class="px-6 Catamaran__Bold24">News</p>

    <div class="flex md:justify-center w-full overflow-x-auto">
      <div
        v-for="(item, i) in typeObject"
        :key="i"
        @click="handleSelect(item.type)"
        class="px-6 py-2 border-b-[3px] Catamaran__Bold16"
        :class="
          i == 0
            ? item.type == select
              ? 'border-[#9B5AB4] text-[#9B5AB4] ml-4'
              : ' text-gray-500 ml-4'
            : item.type == select
            ? 'border-[#9B5AB4] text-[#9B5AB4]'
            : ' text-gray-500'
        "
      >
        {{ item[locale] }}
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-x-4 p-4 pb-[100px]"
    >
      <div
        v-for="(item, i) in response?.news?.articles"
        :key="i"
        class="flex gap-2"
      >
        <img :src="item.urlToImage" alt="img" class="w-24 h-24 rounded-lg" />
        <div class="block">
          <p class="line-clamp-2 Catamaran__Bold16">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ComputerDesktopIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/vue/24/solid";
const { locale } = useI18n();

const response = ref<any>([]);
const select = ref<String>("general");
const typeObject = ref<any>([
  {
    type: "general",
    en: "General",
    th: "ทั่วไป",
  },
  {
    type: "health",
    en: "Health",
    th: "สุขภาพ",
  },
  {
    type: "science",
    en: "Science",
    th: "วิทยาศาสตร์",
  },
  {
    type: "sports",
    en: "Sports",
    th: "กีฬา",
  },
  {
    type: "technology",
    en: "Technology",
    th: "เทคโนโลยี",
  },
  {
    type: "business",
    en: "Business",
    th: "ธุรกิจ",
  },
  {
    type: "entertainment",
    en: "Entertainment",
    th: "บันเทิง",
  },
]);

onMounted(async () => {
  getNews(select.value);
});

async function handleSelect(typeName: String) {
  await getNews(typeName);
  select.value = typeName;
}

async function getNews(category: String) {
  response.value = await $fetch(`/api/news/${category}`, {
    method: "get",
  });
  console.log(response.value);
}
</script>
<style scoped></style>
