export interface CallTestingListApiResponseType {
  title: string;
  content: string;
  status: boolean;
}

export interface AddTestingRequestType {
  title: string;
  content: string;
  userStatus: boolean;
}

export interface AddTestingResponseType {
  isOk : boolean;
}

export interface UpdateTestingRequestType {
  id: string;
  title?: string;
  content?: string;
  userStatus?: boolean;
}

export interface DeleteTestingRequestType {
  id: string;
}
