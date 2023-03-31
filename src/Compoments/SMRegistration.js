import React, { useEffect, useState } from 'react'
import { fbGet, fbPost } from '../Config/firebasemethod'
import Typography from "@mui/material/Typography";
import { Button, Form } from 'react-bootstrap';
import { Box } from '@mui/material';


function SMRegistration() {
    const [model, setModel] = useState({});
    const [registrationOpen, setRegistrationOpen] = useState(true);

   

    const getUserControl  = () =>{
        fbGet("Regcontrol")
          .then((res) => {
              setRegistrationOpen( ...res );
            console.log("Data Fetched Successfully  ", res);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
      getUserControl();
    }, [registrationOpen]);

   


    


   
  return (
    <>
      {registrationOpen ? (
        <Box sx={{ flexGrow: 1 }}>
          <div className="row p-2">
            <div className="col-lg-6">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  setModel({ ...model, SelectCity: e.target.value })
                }
              >
                <option>SelectCity</option>
                <option value="karachi">karachi</option>
                <option value="All Pakistan">All pakistan</option>
              </Form.Select>
            </div>

            <div className="col-lg-6">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) =>
                  setModel({ ...model, SelectCourse: e.target.value })
                }
              >
                <option>SelectCourse</option>
                <option value="mobie repaireing">mobie repaireing</option>
                <option value="typescript">typescript</option>
              </Form.Select>
            </div>
          </div>

          <Form>
            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <div className="row py-3">
                <div className="col-lg-6">
                  <Form.Control
                    type="text"
                    placeholder="Enter fullname"
                    onChange={(e) =>
                      setModel({ ...model, FullName: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-6 ">
                  <Form.Control
                    type="text"
                    placeholder="father name"
                    onChange={(e) =>
                      setModel({ ...model, FatherName: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-6 py-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) =>
                      setModel({ ...model, Email: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-6 py-3">
                  <Form.Control
                    type="number"
                    placeholder="phone"
                    onChange={(e) =>
                      setModel({ ...model, PhoneNumber: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-6 py-3">
                  <Form.Control
                    type="number"
                    placeholder="CNIC"
                    onChange={(e) =>
                      setModel({ ...model, CNIC: e.target.value })
                    }
                    disabled={true}
                  />
                </div>

                <div className="col-lg-6 py-3">
                  <Form.Control
                    type="number"
                    placeholder="father CNIC"
                    onChange={(e) =>
                      setModel({ ...model, FatherCnic: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-6 py-3">
                  <Form.Control
                    type="date"
                    onChange={(e) =>
                      setModel({ ...model, date: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-6 py-3">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setModel({ ...model, SelecGender: e.target.value })
                    }
                  >
                    <option>SelectGender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </div>
              </div>

             
            </Form.Group>

            <div className="row p-2">
              <div className="col-lg-6">
                <Form.Control
                  type="text"
                  placeholder="Addres"
                  onChange={(e) =>
                    setModel({ ...model, Address: e.target.value })
                  }
                />
              </div>

              <div className="col-lg-6  ">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) =>
                    setModel({ ...model, LastQualification: e.target.value })
                  }
                >
                  <option>Last Qualification</option>
                  <option value="1">matric</option>
                  <option value="2">Intermidate</option>
                </Form.Select>
              </div>

              <div
                className="col-lg-6 p-2 "
                onChange={(e) =>
                  setModel({ ...model, HaveLaptop: e.target.value })
                }
              >
                <Form.Select aria-label="Default select example">
                  <option>Do You Have Laptop</option>
                  <option value="1">yes </option>
                  <option value="2">No</option>
                </Form.Select>
              </div>

              <div className="col-lg-6 p-2 ">
                <Form.Control
                  type="file"
                  placeholder="file"
                  onChange={(e) =>
                    setModel({ ...model, fileUpload: e.target.value })
                  }
                />
              </div>
            </div>
          </Form>
        </Box>
      ) : (
        <div>Form Closed !</div>
      )}
    </>
  );
}

export default SMRegistration