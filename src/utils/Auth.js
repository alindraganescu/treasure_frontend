import axios from 'axios';

const login = async (credentials) => {
  try {
    const { headers } = await axios.post(
      'https://wbs-simple-auth.herokuapp.com',
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
