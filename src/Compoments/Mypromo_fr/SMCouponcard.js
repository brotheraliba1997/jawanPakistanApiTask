import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { height, margin } from "@mui/system";

function SMCouponcard() {
  const cardCoupones = [
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/Dr%20Martens.png",
      title: "Shoes From €129",
      showOffer: "show offer",
    },

    {
      image: "https://d2pp598c7iga4q.cloudfront.net/image/logos/B&Q.png",
      title: "Free Next Day Delivery ",
      showOffer: "showoffer",
    },

    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/galaxus%20gutscheincode.png",
      title: "SSD Already from 30€",
      showOffer: "show offer",
    },
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/groupon-logo.jpg",
      title: "Upto 75% off on Activity, beauty and tech",
      showOffer: "show offer",
    },
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/Philips.png",
      title: "10% PHILIPS Gutschein  ",
      showOffer: "show offer",
    },
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/grover-gutschein.png",
      title: "Grover Gutschein ",
      showOffer: "show offer",
    },
  ];
  return (
    <div>






      <Box sx={{ marginTop: "40px" }}>
      <Typography
                  variant="body1"
                  sx={{ fontSize: "2em", fontWeight: 600, margin: "20px 0px", fontFamily: "Poppins, sans-serif !important" }}
                >
              Trendige Gutscheincodes
                </Typography>
        <Grid container spacing={3}>
          {cardCoupones.map((x) => (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box
                sx={{
                  boxShadow: "0 0 5px 3px rgba(0,0,0,.07)",
                  borderRadius: "10px 0px 20px 0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem 1rem 20px"
                  
                  
                }}
              >
                <Box sx={{ padding: "20px 0px" }}>
                  <img
                    src={x.image}
                    style={{ width: "100px" , height: "100%" , objectFit: "contain", borderRadius: "5px" }}
                  />
                </Box>

                <Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.1em", fontWeight: 500, margin: "10px 0px" }}
                >
                  {" "}
                  {x.title}{" "}
                </Typography>

                <Box >
                <button
                  style={{
                    background: "#ff8b13",
                    margin: "10px auto 0",
                    borderRadius: "3px",
                    transition: "0.2s",
                    padding: "10px 40px",
                    borderRadius: "0px 15px 0px 15px",
                    border: "none",
                    color: "white"
                

                  }}
                >

                    {x.showOffer}



                </button>
                </Box>

                </Box>

              
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default SMCouponcard;
