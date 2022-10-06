import { useEffect, useState } from "react";
import GetUsers from "./services";
import LoginForm  from './LoginForm'
import "./styles.css";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    // getData(); //same file axios and fetch method and diff file fetch
    GetUsers().then(response=>setData(response.data.data)) 

  }, []);

  
  //diff file fetch method
// const getData = async()=>{
//    const detail = await GetUsers()
//    const json =await detail.json();
//     setData(json.data)
// }


  //same file fetch method
  // const getData = async () => {
  //   const response = await fetch("https://reqres.in/api/users?page=2");
  //  const json =await response.json();
  //  setData(json.data)
  // };

  //same file axios method
  // const getData =() =>{
  //   axios.get(`https://reqres.in/api/users?page=2`)
  //   .then((response)=>{
  //     const allData= response.data.data
  //     console.log(allData)
  //     setData(allData)
  //   })
  // }
  return (
    <div className="App">
      {/* {data &&
        data.map((user) => {
          return (
            <div>
              <p> {user.email}</p>
            </div>
          );
        })} */}
      <h1 style={{marginTop:'20px'}}>User Accounts Manager</h1> 
      <LoginForm/>
    </div>
  );
}
