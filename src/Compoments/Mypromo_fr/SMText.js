import { Typography } from "@mui/material";
import React from "react";

function SMText({title, fsize, fweight, Mspace,Talign, TalignCen}) {
   
  return (
    <div>
      <Typography
        variant="body1"
        sx={{
          fontSize: fsize,
          fontWeight: fweight,
          margin: Mspace,
          fontFamily: "Poppins, sans-serif !important",
          textAlign: {md:Talign,  sm:TalignCen  }  
          
        }}
      >
        {title}
      </Typography>
    </div>
  );
}

export default SMText;
