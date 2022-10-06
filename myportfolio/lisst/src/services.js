import axios from "axios";
// axios method
export default function GetData() {
  let response = axios
    .get(`https://reqres.in/api/users?page=2`)
    .catch((error) => console.error(`Error : ${error}`));
  return response;
}
export const removeData = (id) => {
  let response = axios.delete(`https://reqres.in/api/users/${id}`)
    .catch((error) => console.error(`Error : ${error}`));
  return response;
};
//fetch method
//  const GetData = async () =>await fetch("https://reqres.in/api/users?page=2");
// export default GetData;
