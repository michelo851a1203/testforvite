import { defineStore } from "pinia";
import TestingApi from "../api/testing";
import { HttpStatusCodeStatus } from "../datatype/api";
import { 
  AddTestingRequestType, 
  CallTestingListApiResponseType, 
  DeleteTestingRequestType, 
  UpdateTestingRequestType 
} from "../datatype/api/testing";
import { LoadingStatus } from "../datatype/loading";
import router from "../router";
import { useBoxMessageStore } from "./boxMessage";
import { useLoadingStore } from "./loading";

export interface UseMainTestStoreType {
  testingList: CallTestingListApiResponseType[],
}

export const useMainTestStore = defineStore('useMainTestStore', {
  state: () => {
    return <UseMainTestStoreType>{
      testingList: [],
    }
  },
  actions: {
    async getTestingListHandler() {
      const {
        isCurrentLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      try {
        if (isCurrentLoading(LoadingStatus.GET_TESTING_LIST)) return;
        addLoadingStatus(LoadingStatus.GET_TESTING_LIST);
        const testingApi = TestingApi();
        const testingList = await testingApi.callTestingList();
        this.testingList = testingList;
      } catch(error) {
        this.getTestingListError(error);

      } finally {
        removeLoadingStatus(LoadingStatus.GET_TESTING_LIST);
      }
    },
    getTestingListError(error: unknown) {
      const {
        setTemporaryErrorMessage,
      } = useBoxMessageStore()
      if (error === HttpStatusCodeStatus.METHOD_NOT_ALLOW) {
        setTemporaryErrorMessage('輸入參數不合法');
        return;
      }

      if (error === HttpStatusCodeStatus.NOT_AUTHORIZED) {
        setTemporaryErrorMessage('沒有權限');
        return;
      }

      if (error === HttpStatusCodeStatus.SYSTEM_INTERNAL_ERROR) {
        setTemporaryErrorMessage('系統錯誤');
        return;
      }

      router.push({ name: 'NetworkError'});
    },
    async addTestingHandler(request: AddTestingRequestType): Promise<boolean> {
      const {
        isCurrentLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      try {
        if (isCurrentLoading(LoadingStatus.ADD_TESTING)) return false;
        addLoadingStatus(LoadingStatus.ADD_TESTING);
        const testingApi = TestingApi();
        const isOk = await testingApi.addTesting(request);
        return isOk;
      } catch(error) {
        this.addTestingError(error);
        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.ADD_TESTING);
      }
    },
    addTestingError(error: unknown) {
      const {
        setTemporaryErrorMessage,
      } = useBoxMessageStore()
      if (error === HttpStatusCodeStatus.METHOD_NOT_ALLOW) {
        setTemporaryErrorMessage('輸入參數不合法');
        return;
      }

      if (error === HttpStatusCodeStatus.NOT_AUTHORIZED) {
        setTemporaryErrorMessage('沒有權限');
        return;
      }

      if (error === HttpStatusCodeStatus.SYSTEM_INTERNAL_ERROR) {
        setTemporaryErrorMessage('系統錯誤');
        return;
      }

      router.push({ name: 'NetworkError'});
    },
    async updateTestingHandler(request: UpdateTestingRequestType): Promise<boolean> {
      const {
        isCurrentLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      try {
        if (isCurrentLoading(LoadingStatus.GET_TESTING_LIST)) return false;
        addLoadingStatus(LoadingStatus.GET_TESTING_LIST);
        const testingApi = TestingApi();
        const isOk = await testingApi.updateTesting(request);
        return isOk;
      } catch(error) {

        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.GET_TESTING_LIST);
      }
    },
    async deleteTestingHandler(request: DeleteTestingRequestType): Promise<boolean> {
      const {
        isCurrentLoading,
        addLoadingStatus,
        removeLoadingStatus,
      } = useLoadingStore()

      try {
        if (isCurrentLoading(LoadingStatus.GET_TESTING_LIST)) return false;
        addLoadingStatus(LoadingStatus.GET_TESTING_LIST);
        const testingApi = TestingApi();
        const isOk = await testingApi.deleteTesting(request);
        return isOk;
      } catch(error) {
        this.deleteTestingError(error);
        return false;
      } finally {
        removeLoadingStatus(LoadingStatus.GET_TESTING_LIST);
      }
    },
    deleteTestingError(error: unknown) {
      const {
        setTemporaryErrorMessage,
      } = useBoxMessageStore()
      if (error === HttpStatusCodeStatus.METHOD_NOT_ALLOW) {
        setTemporaryErrorMessage('輸入參數不合法');
        return;
      }

      if (error === HttpStatusCodeStatus.NOT_AUTHORIZED) {
        setTemporaryErrorMessage('沒有權限');
        return;
      }

      if (error === HttpStatusCodeStatus.SYSTEM_INTERNAL_ERROR) {
        setTemporaryErrorMessage('系統錯誤');
        return;
      }

      router.push({ name: 'NetworkError'});
    },
  },
});
