<script setup lang="ts">
import ProductList from "@/components/layout/ProductList.vue";
import ProductFilter from "@/components/layout/ProductFilter.vue";
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute, RouterLink } from "vue-router";

const router = useRouter();
const route = useRoute();

const selectedCategory = ref<string | undefined>(undefined);

const updateURL = () => {
  if (!selectedCategory.value) return;

  // const categoryValue = categories.find(
  //   (cat: any) => cat.optVal === selectedCategory.value
  // )?.optVal;

  // if (!categoryValue) return;

  router.push({
    path: `/products/${selectedCategory.value}`,
  });
};

watch([selectedCategory], updateURL, { deep: true });

onMounted(() => {
  selectedCategory.value = (route.params.catId as string) || undefined;
});
</script>
<template>
  <section class="h-[600px] mb-9 mx-2 md:mx-32 flex-1">
    <RouterLink
      :to="{ path: '/' }"
      class="flex items-center gap-3 cursor-pointer mt-5 w-fit bg-orange-100 py-2 px-3 rounded-xl"
    >
      <span class="pi pi-arrow-left text-xs text-orange-900"></span>
      <p class="text-sm hover:underline text-orange-900">Back</p>
    </RouterLink>

    <!-- Main Content -->
    <div class="grid grid-cols-1 md:flex gap-5 mt-5 w-full">
      <!-- Filter Sidebar -->
       <ProductFilter v-model="selectedCategory"/>
      <div id="allprd" class="md:w-5/6">
        <h1 class="font-semibold">Our Products</h1>
        <ProductList />
      </div>
    </div>
  </section>
</template>
