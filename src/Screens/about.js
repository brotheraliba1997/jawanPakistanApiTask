import { color } from '@mui/system';
import React, { useEffect, useState } from 'react'
import SMGrid from '../Compoments/SMGrid';
import { Get } from '../Config/apibasemethod';


function About() {

    const [list, setList] = useState([])
   
    const [searchfilter, setSearchfilter ] = useState([])

    const getUser = () => {
        Get("users").then((res) => {
                console.log(res.data)
                setList([...res.data])
                setSearchfilter([...res.data])
        }).catch((err) =>{
            console.log(err)
        })
    }

    useEffect(() => {
        getUser()
    },[])


    

 


 


   


    const aboutTable = [
      {
        key: "name",
        displayName: "username",
        displayField: (i) => <a href=""> {i.name} </a>,
      },
      {
        key: "email",
        displayName: "Email",
        displayField: (i) => <div style={{color: "red"}}> {i.email} </div>,
      },

      {
        key: "phone",
        displayName: "Phone",
      },

      {
        key: "website",
        displayName: "Website",
      },
    ];
  return (
    <div>
      <SMGrid
        aboutTable={aboutTable}
        list={list}
        tilte="Table List"
        setList={setList}
        searchfilter={searchfilter}
        setSearchfilter={setSearchfilter}
      />
    </div>
  );
}

export default About;