import { convertBoolToString } from "../common/common.convert";
import { apiUrl } from "../config";
import { HttpStatusCodeStatus } from "../datatype/api";
import { 
  AddTestingRequestType, 
  CallTestingListApiResponseType, 
  DeleteTestingRequestType, 
  UpdateTestingRequestType,
} from "../datatype/api/testing";


export default function TestingApi() {

  const callTestingList = async () => {
    try {
      const testingUrl = `${apiUrl}/testingList`;
      const response = await fetch(testingUrl, {
        method: 'GET',
      });

      if (response.status !== HttpStatusCodeStatus.OK) {
        throw response.status;
      }

      const result = <CallTestingListApiResponseType[]>(await response.json());
      return result;
    } catch(error) {
      throw error;
    }
  }

  const addTesting = async (request: AddTestingRequestType) => {
    try {
      const testingUrl = `${apiUrl}/testing`
      const body = new URLSearchParams();
      body.append('title', request.title);
      body.append('content', request.content);
      body.append('status', convertBoolToString(request.userStatus));

      const response = await fetch(testingUrl, {
        method: 'POST',
        body,
        redirect: 'follow',
      });

      if (response.status !== HttpStatusCodeStatus.CREATED) {
        throw response.status;
      }

      return true;
    } catch(error) {
      throw error;
    }
  }

  const updateTesting = async (request: UpdateTestingRequestType) => {
    try {
      const testingUrl = `${apiUrl}/testing/${request.id}`;
      const body = new URLSearchParams();
      if (request.title) {
        body.append('title', request.title);
      }
      if (request.content) {
        body.append('content', request.content);
      }
      if (request.userStatus) {
        body.append('title', convertBoolToString(request.userStatus));
      }
      const response = await fetch(testingUrl, {
        method: 'PATCH',
        body,
      })

      if (response.status !== HttpStatusCodeStatus.NO_CONTENT) {
        throw response.status;
      }

      return true;
    } catch(error) {
      throw error;
    }
  }

  const deleteTesting = async (request: DeleteTestingRequestType) => {
    try {
      const testingUrl = `${apiUrl}/testing/${request.id}`
      const response = await fetch(testingUrl, {
        method: "DELETE",
      });

      if (response.status !== HttpStatusCodeStatus.NO_CONTENT) {
        throw response.status;
      }
      return true;
    } catch(error) {
      throw error;
    }
  }

  return {
    callTestingList,
    addTesting,
    updateTesting,
    deleteTesting,
  }
}
