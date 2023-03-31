import React, { useState } from 'react'
import Switch from "@mui/material/Switch";
import { fbCoustomPost } from '../Config/firebasemethod';
import { Button } from 'react-bootstrap';

function SMRegistrationcontrol() {
    const [model , setModal] = useState({})

    console.log(model)

    const Save = () => {
        fbCoustomPost("Regcontrol", model)
        .then((res) =>{
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })

    }


  return (
    <div>
      <Switch
        onChange={(e) => setModal({...model, registration: e.target.checked})}
        defaultChecked
      />
      <Button onClick={Save}>Registration Open And Closed</Button>
    </div>
  );
}

export default SMRegistrationcontrol