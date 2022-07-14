import { defineStore } from 'pinia';

export interface UseBoxMessageStoreType {
  isShowMessage: boolean;
  message: string;
  lastMilliSecond: number;
}

export const useBoxMessageStore = defineStore('useBoxMessageStore', {
  state: () => {
    return <UseBoxMessageStoreType>{
      isShowMessage: false,
      message: '',
      lastMilliSecond: 3000,
    }
  },
  actions: {
    setTemporaryMessage(message: string) {
      this.isShowMessage = true;
      this.message = message;
      this.closeBoxMessageWithTime();
    },
    setTemporaryErrorMessage(errorMessage: string) {
      this.isShowMessage = true;
      this.message = errorMessage;
      this.closeBoxMessageWithTime();
    },
    closeBoxMessageWithTime() {
      setTimeout(() => {
        this.isShowMessage = false;
        this.message = '';
      }, this.lastMilliSecond)
    },
  }
})
