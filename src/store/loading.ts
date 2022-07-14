import { defineStore } from 'pinia'
import { LoadingStatus } from '../datatype/loading';

export interface UseLoadingStoreType {
  loadingArray: LoadingStatus[],
}

export const useLoadingStore = defineStore('useLoadingStore', {
  state: () => {
    return <UseLoadingStoreType>{
      loadingArray: [],
    }
  },
  actions: {
    isCurrentLoading(loadingStatus: LoadingStatus) {
      return this.loadingArray.includes(loadingStatus);
    },
    addLoadingStatus(loadingStatus: LoadingStatus) {
      this.loadingArray.push(loadingStatus);
    },
    removeLoadingStatus(loadingStatus: LoadingStatus) {
      const loadingIndex = this.loadingArray.findIndex((loadingItem) => {
        return loadingItem === loadingStatus;
      });
      if (loadingIndex === -1) return;
      this.loadingArray.splice(loadingIndex, 1);
    }
  },
});
