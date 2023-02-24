import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Fiveapi() {
  const [data, setdata] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/users";
  console.log(api)

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {
        setdata([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .post(api, {
        name: "Jawan Pakistan",
        username: "ABH",
        userid: 1,
      })
      .then((res) => {
        console.log("Data Sent");
      })
      .catch((err) => {
        console.log("Data Not Sent");
      });

    axios
      .put(api + "/1", { name: "Hamza Ali" })
      .then((res) => {
        console.log("Data Edit", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .delete(api + "/2")
      .then((res) => {
        console.log("Data Delet", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <div className="App">
          <Button onClick={getAPIData} variant="contained">
            Add
          </Button>
          <div>
            <Link to="/" className="navigation">
              FirstApi
            </Link>
          </div>

          {data.map((x, i) => {
            return (
              <div key={i}>
                <h3>{x.id}</h3>
                <h3> {x.name}</h3>
                <p>{x.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fiveapi;
