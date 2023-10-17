import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';

function Busservices() {


 

  const [inputValues, setInput] = useState("");
  const [showValues, setShowValues] = useState([]);
  const [studentServices, setStudentServices] = useState([]);
  const [valuecon, setValuecon] = useState(false)

  const studentUserHandler = () => {
    setShowValues([...showValues, inputValues]);
    setValuecon(true)
   
  };

 
  useEffect(() => {

    if(valuecon){
    setStudentServices([
      ...studentServices,
      {
        student: inputValues,
        type: "Pick",
      },
      {
        student: inputValues,
        type: "Drop",
      },
    ]);
  }
     
  }, [showValues]);

  const arrowUpHandler = (index) => {
    if (index <= studentServices.length-1  ) {
      let temperyArr = [...studentServices];
      let a = temperyArr[index];
      let b = temperyArr[index - 1];

      temperyArr[index] = b;
      temperyArr[index - 1] = a;

      setStudentServices(temperyArr);
  }

    
    
    
  }


  const arrowDownHandler = (index) => {
    if (index < studentServices.length - 1) {
      let temperyArr = [...studentServices];
      let a = temperyArr[index];
      let b = temperyArr[index + 1];

      temperyArr[index] = b;
      temperyArr[index + 1] = a;

      setStudentServices(temperyArr);
  }



      
 
 
}







  return (
    <div>
      <div className="bg-success my-5 p-4">
        <Container>
          <div className="row">
            <div className="col-lg-6">
              <div>
                <input
                  text="text"
                  placeholder="enter your student"
                  className="p-2"
                  style={{ width: "80%", borderRadius: "10px" }}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <input
                  text="text"
                  placeholder="enter your student"
                  className="p-2"
                  style={{ width: "80%", borderRadius: "10px" }}
                />
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <button
                onClick={studentUserHandler}
                className="bg-info p-2 text-white"
                style={{
                  fontSize: "18px",
                  border: "1px solid #0DCAF0",
                  borderRadius: "10px",
                }}
              >
                add Student
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-success my-5 p-4">
        <Container>
          <div className="row" style={{ minHeight: "300px" }}>
            <div className="col-lg-6">
              {showValues.map((x, i) => (
                <div
                  className="w-75 bg-white p-2 my-2"
                  style={{ border: "1px solid black", borderRadius: "5px" }}
                >
                  {x}
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              {studentServices.map((x, i) => (
                <div className="d-flex justify-content-between">
                <div
                  className="w-75 bg-white p-2 my-2 d-flex  justify-content-between "
                  style={{ border: "1px solid black", borderRadius: "5px" }}
                >
                  {x.student} {x.type}
                  <div>
                  <AiOutlineArrowDown onClick={() => arrowDownHandler(i)} />
                  
                  <AiOutlineArrowUp onClick={() => arrowUpHandler(i)}/>
                </div>
                </div>

                
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Busservices;
