import axios from "axios";

// const url: string = `http://localhost:2299`;
const url: string = `https://piginbe.onrender.com`;

export const addAsFriend = async (userID: string, friendID: string) => {
  try {
    return await axios
      .patch(`${url}/api/add-friends/${userID}/${friendID}`)
      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createAgentAccount = async (data: {}) => {
  try {
    return await axios.post(`${url}/api/create-user`, data).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const loginAgentAccount = async (data: {}) => {
  try {
    return await axios.post(`${url}/api/login-user`, data).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const forgetPasswordAgentAccount = async (data: {}) => {
  try {
    return await axios.post(`${url}/api/forget-password`, data).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyAgentAccount = async (userID: string) => {
  try {
    return await axios.get(`${url}/api/verify-user/${userID}`).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const resetPasswordAgentAccount = async (userID: string, data: {}) => {
  try {
    return await axios
      .patch(`${url}/api/change-password/${userID}`, data)
      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const avatarUpdate = async (userID: string, data: {}) => {
  try {
    const config: any = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    return await axios
      .patch(`${url}/api/update-avatar/${userID}`, data, config)
      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateUserInfo = async (userID: string, data: {}) => {
  try {
    return await axios
      .patch(`${url}/api/update-info/${userID}`, data)
      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getUser = async () => {
  try {
    return await axios.get(`${url}/api/users/`).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const getOneUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/api/user/${userID}`).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const APIStarted = async () => {
  try {
    return await axios.get(`${url}/`).then((res) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};
