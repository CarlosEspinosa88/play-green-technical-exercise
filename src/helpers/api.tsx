import axios from "axios";

export const getAllSportsData = async () => {
  const URL = "https://www.thesportsdb.com/api/v1/json/3/all_sports.php"
  const res = await axios.get(URL)

  if (res.status !== 200) {
    throw new Error("Unable to get all sports data");
  }
  const data = await res.data;  
  return data
}