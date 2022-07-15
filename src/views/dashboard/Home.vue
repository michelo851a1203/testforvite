<script setup lang="ts">
  import { useField, useForm } from 'vee-validate';
  import { toFormValidator } from '@vee-validate/zod'
  import * as zod from 'zod';
  import FormTextInput from '../../components/FormTextInput.vue';

  const validationSchema = toFormValidator(zod.object({
    title: zod.string({
      required_error: 'title is required',
      invalid_type_error: 'title should be string',
    }).min(1),
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
    value: userEmail,
    errorMessage: userEmailError,
  } = useField('userEmail', undefined, {
    initialValue: '',
  })

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

  const resetAllError = () => {
    resetForm();
  }

</script>

<template>
  <section 
    class="border min-h-[calc(80vh)] mt-8 rounded-xl px-10 py-8 space-y-8"
  >
    <FormTextInput
      labelTitle="Title"
      v-model:inputText="title"
      errorMessage="titleError"
    ></FormTextInput>

    <FormTextInput
      labelTitle="Content"
      v-model:inputText="content"
      errorMessage="contentError"
    ></FormTextInput>

    <FormTextInput
      labelTitle="email"
      v-model:inputText="userEmail"
      errorMessage="userEmailError"
    ></FormTextInput>

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
        class="px-4 py-3 rounded-xl bg-blue-300 border-none"
      >
        submit
      </button>
      <button
        @click="resetAllError"
        class="px-4 py-3 rounded-xl bg-blue-300 border-none"
      >
        ResetForm
      </button>
    </div>
  
  </section>
</template>
