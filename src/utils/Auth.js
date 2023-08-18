import axios from 'axios';

const login = async (credentials) => {
  try {
    const { headers } = await axios.post(
      'https://treasure-backend.vercel.app',
      {
        ...credentials,
      }
    );
    console.log(headers);
  } catch (e) {
    console.log(e.message);
  }
};

export { login };
