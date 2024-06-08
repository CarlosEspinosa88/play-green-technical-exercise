import axios from 'axios';

export const getAllSportsData = async () => {
  const URL = 'https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front';
  const res = await axios.get(URL);

  if (res.status !== 200) {
    throw new Error('Unable to get all sports data');
  }
  const data = await res.data;
  return data;
};
