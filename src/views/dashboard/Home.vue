<script setup lang="ts">
  import { useField, useForm } from 'vee-validate';
  import { toFormValidator } from '@vee-validate/zod'
  import * as zod from 'zod';

  const validationSchema = toFormValidator(zod.object({
    title: zod.string({
      required_error: 'title is required',
      invalid_type_error: 'title should be string',
    }),
    content: zod.string({
      invalid_type_error: 'this must be string',
    }).nullable(),
    userStatus: zod.boolean({
      required_error: 'this status must be required',
      invalid_type_error: 'this datatype is not boolean',
    })
  }));

  const { resetForm, handleSubmit } = useForm({
    validationSchema,
  })

  const { 
    value: title, 
    errorMessage: titleError 
  } = useField('title', undefined, {
    initialValue: '',
  });

  const { 
    value: content, 
    errorMessage: contentError 
  } = useField('content', undefined, {
    initialValue: '',
  });

  const { 
    value: userStatus, 
    errorMessage: userStatusError 
  } = useField('userStatus', undefined, {
    initialValue: false,
  });

  const submitTesting = handleSubmit((submitForm) => {
    console.log(submitForm);
  });

</script>

<template>
  <section 
    class="border min-h-[calc(80vh)] mt-8 rounded-xl px-10 py-8 space-y-8"
  >
    <div class="flex items-center space-x-4">
      <label for="input_one">Title</label>
        <input 
          v-model="title"
          class="px-3 py-2 rounded-xl border border-gray-400 w-full focus:outline-none"
          id="input_one"
          type="text"
        >
    </div>
    <div 
      class="text-red-500"
      v-if="titleError"
    >
      <small>
        {{ titleError }}
      </small>
    </div>

    <div class="flex items-center space-x-4">
      <label for="input_two">Content</label>
        <input 
          v-model="content"
          class="px-3 py-2 rounded-xl border border-gray-400 w-full focus:outline-none"
          id="input_two"
          type="text"
        >
    </div>

    <div 
      class="text-red-500"
      v-if="contentError"
    >
      <small>
        {{ contentError }}
      </small>
    </div>


    <div class="flex items-center space-x-4">
      <label for="input_three">UserStatus : </label>
      <div class="space-x-2">
        <input 
          v-model="userStatus"
          :value="true"
          id="userStatus_one"
          type="radio"
        >
        <label for="userStatus_one">True</label>
      </div>

      <div class="space-x-2">
        <input 
          v-model="userStatus"
          :value="false"
          id="userStatus_two"
          type="radio"
        >
        <label for="userStatus_two">false</label>
      </div>
    </div>

    <div 
      class="text-red-500"
      v-if="userStatusError"
    >
      <small>
        {{ userStatusError }}
      </small>
    </div>

    <div>
      <button
        @click="submitTesting"
        class="px-4 py-3 rounded-xl bg-blue-300"
      >
        submit
      </button>
    </div>
  
  </section>
</template>
