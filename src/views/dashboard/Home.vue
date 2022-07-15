<script setup lang="ts">
  import { useField, useForm } from 'vee-validate';
  import { ref, Ref } from 'vue';
  import { toFormValidator } from '@vee-validate/zod'
  import * as zod from 'zod';
  import FormTextInput from '../../components/FormTextInput.vue';
  import { CategoryType } from '../../datatype/views/home';

  const totalCategoryList: Ref<CategoryType[]> =  ref([
    {
      id: 'id-1',
      name: 'test01',
    },
    {
      id: 'id-2',
      name: 'test02',
    },
    {
      id: 'id-3',
      name: 'test03',
    },
  ])

  const inputName = ref([
    'test-01',
    'test-02',
    'test-03',
    'test-04',
    'test-05',
  ])

  const validationSchema = toFormValidator(zod.object({
    title: zod.string({
      required_error: 'title is required',
      invalid_type_error: 'title should be string',
    }).min(1),
    userEmail: zod.string({
      required_error: 'user need email',
      invalid_type_error: 'user email type error',
    }).email({ 
      message: 'this require email format',
    }),
    content: zod.string({
      invalid_type_error: 'this must be string',
    }),
    linkUrl: zod.string({
      required_error: 'link url required',
      invalid_type_error: 'not string type',
    }).url({
      message: 'this is not rul string',
    }).min(1),
    nameList: zod.array(zod.string()),
    userStatus: zod.boolean({
      required_error: 'this status must be required',
      invalid_type_error: 'this datatype is not boolean',
    }),
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
    value: linkUrl,
    errorMessage: linkUrlError,
  } = useField('linkUrl', undefined, {
    initialValue: '',
  });

  const {
    value: category,
    errorMessage: categoryError,
  } = useField('category', undefined, {
    initialValue: <CategoryType[]>[]
  });

  const {
    value: nameList,
    errorMessage: nameListError,
  } = useField('nameList', undefined, {
    initialValue: <string[]>[],
  });

  const {
    value: price,
    errorMessage: piriceError,
  } = useField('price', undefined, {
    initialValue: 0,
  });

  const {
    value: recordTime,
    errorMessage: recordTimeError,
  } = useField('recordTime', undefined, {
    initialValue: '',
  })

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
      :errorMessage="titleError"
    ></FormTextInput>

    <FormTextInput
      labelTitle="Email"
      v-model:inputText="userEmail"
      :errorMessage="userEmailError"
    ></FormTextInput>

    <FormTextInput
      labelTitle="Content"
      v-model:inputText="content"
      :errorMessage="contentError"
    ></FormTextInput>

    <FormTextInput
      labelTitle="LinkUrl"
      v-model:inputText="linkUrl"
      :errorMessage="linkUrlError"
    ></FormTextInput>

    <section>
      <button
        v-for="item in inputName"
        :key="item"
        class="rounded-full bg-blue-300 border border-gray-300"
      >
        {{ inputName }}
      </button>
    </section>


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
