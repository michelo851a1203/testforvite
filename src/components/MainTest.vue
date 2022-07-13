<script setup lang="ts">
  import { ref, computed } from 'vue';
  const props = withDefaults(defineProps<{
    buttonTitle: string;
    timesNumber: number;
  }>(), {
    buttonTitle: 'click',
    timesNumber: 1,
  });

  const emit = defineEmits<{
    (e: 'update:callbackClick', inputNumber: number): void
  }>()

  const inputNumber = ref(0);

  const clickHandler = () => {
    inputNumber.value++;
    emit('update:callbackClick', inputNumber.value);
  }

  const resultNumber = computed(() => {
    return props.timesNumber * inputNumber.value;
  });
</script>

<template>
  <button
    @click="clickHandler"
    class="border-none bg-blue-300 rounded-md px-4 py-3"
  >
    {{ buttonTitle }} - {{ resultNumber }}
  </button>
</template>
