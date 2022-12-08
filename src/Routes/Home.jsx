import { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setData(res.data);
      }
    )
  }, [])

  return(
    <>
      <h1>Home</h1>
      <div className="card-grid container">
      {data.map(resp => <Card key={resp.id} name={resp.name} username={resp.username} id={resp.id}/>)}
      </div>
    </>
  );
};

export default Home;