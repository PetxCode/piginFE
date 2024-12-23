import axios from "axios";

// const url: string = `http://localhost:2299`;
const url: string = `https://piginbe.onrender.com`;

export const createWord = async (userID: string, data: any) => {
  try {
    return await axios
      .post(`${url}/api/create-new-word/${userID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const createNewMeaning = async (
  userID: string,
  wordID: string,
  data: any
) => {
  try {
    return await axios
      .post(`${url}/api/add-meaning/${userID}/${wordID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const readWord = async () => {
  try {
    return await axios.get(`${url}/api/read-word`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const readWordMeaning = async (wordID: string) => {
  try {
    return await axios
      .get(`${url}/api/read-all-meaning/${wordID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const agreedWordMeaning = async (userID: string, wordID: string) => {
  try {
    return await axios
      .patch(`${url}/api/agreed-meaning/${userID}/${wordID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
