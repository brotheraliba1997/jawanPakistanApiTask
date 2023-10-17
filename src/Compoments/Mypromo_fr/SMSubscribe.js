import { Box, textAlign } from "@mui/system";
import React from "react";
import SMText from "./SMText";

function SMSubscribe() {
  return (
    <div>
      <Box sx={{ margin: "20px 0px" }}>
        <Box
          sx={{
            background: "#f2f2f2",
            display: "flex",
            alignItems: "center",
            gap: "100px",
            justifyContent: {md:"space-between", sm:"center"  } ,
            padding: "1rem",
          }}
        >
          <Box sx={{ display: { xs: "none" ,  sm: "none", md: "block" } }}>
            <img
              src="https://www.gutscheinscodes.de/assets/images/subscribe.svg"
              width="400px"
              height="300px"
            />
          </Box>

          <Box sx={{display: {xs: "flex" , flexDirection: "column", alignItems: "center" , justifyItems: "center" ,md:"block"}  }} >
            <SMText
              title="Abonniere unseren Newsletter"
              fsize="1.5em"
              fweight="600"
              Mspace="0px 0px"
              Talign=  "left"
              TalignCen="center" 
            
            />

            <SMText
              title="Abonnieren Sie jetzt, um unglaubliche Ersparnisse zu erzielen und über die neuesten Angebote auf dem Laufenden zu bleiben. Sparen Sie noch heute mit Gutscheincodes!"
              fsize="13px"
              fweight="600"
              Mspace="10px 0px"
              Talign= "left" 
              TalignCen="center"
              
            />

            <Box sx={{padding: "6px 0 6px 5px" , background: "white" , width: "92%" , borderRadius: "5px" }}>
                <input style={{padding:"0 1rem 0 6px" , width: "calc(100% - 120px)", border: "none" }}  />
                <button style={{padding: "0.5rem 1rem",  backgroundColor: "#ff8b13", borderRadius: "3px", color: "#fff", transition: "0.2s" , border: "none"}}>
                Register
                </button>

            </Box>

            <SMText
              title="and agree to receive emails about offers.Terms and Conditions, privacy policy and agree to receive emails about offers."
              fsize="13px"
              fweight="600"
              Mspace="10px 0px"
              Talign= "left" 
              TalignCen="center"
              
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default SMSubscribe;
