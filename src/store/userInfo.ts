import { defineStore } from "pinia";

export interface UseUserInfoStoreType {
  title: string;
  content: string;
  userStatus: boolean;
  isShow: boolean;
}

export const useUserInfoStore = defineStore('useUserInfoStore', {
  state: () => {
    return <UseUserInfoStoreType>{
      title: '',
      content: '',
      userStatus: false,
      isShow: false,
    }
  },
  actions: {
    showModal() {
      this.isShow = true;
    },
    closeModal() {
      this.isShow = false;
    },
    setContent(content: string) {
      this.content = content;
    },
  }
})
