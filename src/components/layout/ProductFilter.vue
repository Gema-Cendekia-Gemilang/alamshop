<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useFilter from "../../composables/useFilter";
import { computed } from "vue";

const {categories} = useFilter();
// console.log(categories.value);
const cat = computed(() => categories.value?.map((m: {[key: string]: string}) => ({optVal: m.product_code.toLowerCase(), optName: m.name})) || []);
// console.log(cat);

const selectedCategory = defineModel<string>();

</script>

<template>
  <div
    class="bg-white border border-neutral-200 rounded-2xl h-fit p-4 flex flex-col justify-between md:w-1/6 md:sticky md:top-20"
  >
    <div>
      <h3 class="text-base font-medium mb-3">Categories</h3>

      <RadioGroup v-model="selectedCategory">
        <div
          v-for="(opt, index) in cat"
          :key="index"
          class="flex items-start space-x-2 my-1"
        >
          <RadioGroupItem
            :id="`category-${index}`"
            :value="opt.optVal"
          />

          <Label
            :for="`category-${index}`"
            class="leading-4 font-normal"
          >
            {{ opt.optName }}
          </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>