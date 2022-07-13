import { defineStore } from "pinia";

export interface UseUserInfoStoreType {
  title: string;
  content: string;
  isShow: boolean;
}

export const useUserInfoStore = defineStore('useUserInfoStore', {
  state: () => {
    return <UseUserInfoStoreType>{
      title: '',
      content: '',
      isShow: false,
    }
  },
  actions: {
    showModal() {

    },
    closeModal() {

    },

  }
})
