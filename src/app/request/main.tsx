import axios, { AxiosResponse } from 'axios';

export const server="http://52.5.0.253/api/"
// export const server="http://localhost:3001/"
const auth=localStorage.getItem('auth')
const { token } = auth?(JSON.parse(auth)):{token:""}



export const defaultReqPost = (data: any, path: string): Promise<AxiosResponse> => {
 
  return axios
    .post<AxiosResponse>(server + path, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



export const defaultReqGet = (path: string): Promise<AxiosResponse> => {
  

  return axios
    .get<AxiosResponse>(server + path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const defaultReqDelete = (path: string): Promise<AxiosResponse> => {
  return axios
    .delete<AxiosResponse>(server + path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};









export const statics=server+"get-uploads/"




