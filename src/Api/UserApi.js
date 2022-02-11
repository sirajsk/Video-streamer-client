import axios from 'axios'

const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
export const GoogleAuth = async (Data) => {
    axios.post('http://localhost:3001/api/Googlelogin', Data)
}

export const userLogin = async (Data) => {
    axios.post('http://localhost:3001/api/login', Data)
}