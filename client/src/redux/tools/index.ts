import axios from 'axios';

export const getData = async <T>(url: string): Promise<T> => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e: any) {
    console.log(e);
    throw e.response.data;
  }
};

export const editData = async <T>(url: string, body: any): Promise<T> => {
  try {
    const { data } = await axios.put(`${url}/${body.id}`, body);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
};

export const editUser = async <T>(url: string, { formData, userId }: any): Promise<T> => {
  try {
    const { data } = await axios.put(`${url}/${userId}`, formData);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
};

export const patchData = async <T>(url: string, body: any): Promise<T> => {
  try {
    const { data } = await axios.patch(`${url}/${body.id}`, body);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
};

export const deleteData = async (url: string, id: string) => {
  try {
    await axios.delete(`${url}/${id}`);
    return true;
  } catch (e: any) {
    throw e.response.data;
  }
};

export const postData = async <T>(url: string, body: any): Promise<T> => {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
};
