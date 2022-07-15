<script setup lang="ts">
  import { computed } from 'vue';
  const props = withDefaults(defineProps<{
    labelTitle: string;
    inputText: string;
    errorMessage?: string;
  }>(), {
    labelTitle: '',
    inputText: '',
  });

  const emit = defineEmits<{
    (e: 'update:inputText', text: string): void,
  }>()

  const inputOnTextBox = (event: Event) => {
    const inputElement = <HTMLInputElement>event.target
    emit('update:inputText', inputElement.value);
  }

  const elementId = computed(() => {
    return `${props.labelTitle}_input`
  })

</script>

<template>
  <div class="flex items-center space-x-4">
    <label :for="elementId">{{ labelTitle }}</label>
      <input 
        @input="inputOnTextBox"
        :value="inputText"
        class="px-3 py-2 rounded-xl border border-gray-400 w-full focus:outline-none"
        :id="elementId"
        type="text"
      >
  </div>

  <div 
    class="text-red-500"
    v-if="errorMessage"
  >
    <small>
      {{ errorMessage }}
    </small>
  </div>

</template>
