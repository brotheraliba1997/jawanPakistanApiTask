import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Thirdapi() {
  const [data, setdata] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/albums";

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
              body: "Jawan Pakistan",
              title: "ABH",
              userid: 1,
            })
            .then((res) => {
              console.log("Data Sent");
            })
            .catch((err) => {
              console.log("Data Not Sent");
            });

          axios
            .put(api + "/1", { body: "Hamza Ali" })
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
            <Link to="/Fourapi" className="navigation">
              FourApi
            </Link>
          </div>

          {data.map((x, i) => {
            return (
              <div key={i}>
                <h3>{x.id}</h3>
                <h3>{x.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Thirdapi;
