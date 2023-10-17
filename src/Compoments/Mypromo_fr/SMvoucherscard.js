import React from "react";
import SMText from "./SMText";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { height } from "@mui/system";

function SMvoucherscard() {
  const showvocher = [
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/Dr%20Martens.png",
      title: "Bis zu 40% Rabatt auf ausgewählte Teile + kostenfreie Lieferung €99 Bis zu 40% Rabatt auf ausgewählte Teile + kostenfreie Lieferung €99 ",
    },

    {
      image: "https://d2pp598c7iga4q.cloudfront.net/image/logos/B&Q.png",
      title: "10% Rabatt auf alles bei Bonprix ",
    },

    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/galaxus%20gutscheincode.png",
      title: "15€ Bestellungen Über €100 ",
    },
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/groupon-logo.jpg",
      title: "Extra 20% Off on Restaurant and More ",
    },
    {
      image: "https://d2pp598c7iga4q.cloudfront.net/image/logos/Philips.png",
      title: "Bis zu 40% Rabatt auf ausgewählte Teile + kostenfreie Lieferung €99   ",
    },
    {
      image:
        "https://d2pp598c7iga4q.cloudfront.net/image/logos/grover-gutschein.png",
      title: "10%-Gutschein für die erste Bestellung ",
    },
    {
        image:
          "https://d2pp598c7iga4q.cloudfront.net/image/logos/grover-gutschein.png",
        title: "10%-Gutschein für die erste Bestellung ",
      },
      {
        image:
          "https://d2pp598c7iga4q.cloudfront.net/image/logos/grover-gutschein.png",
        title: "10%-Gutschein für die erste Bestellung ",
      },
      {
        image:
          "https://d2pp598c7iga4q.cloudfront.net/image/logos/grover-gutschein.png",
        title: "10%-Gutschein für die erste Bestellung ",
      },
      {
        image:
          "https://d2pp598c7iga4q.cloudfront.net/image/logos/grover-gutschein.png",
        title: "10%-Gutschein für die erste Bestellung ",
      },
  ];
  return (
    <div>
      <Box sx={{ marginTop: "20px" }}>
        <SMText
          title="Unsere besten Gutscheine"
          fsize="2em"
          fweight="600"
          m-space="20px 0px"
        />
    <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          {showvocher.map((x) => (
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{
                  border: "1px solid black",
                  display: {sm: "flex"} ,
                  justifyContent: "start",
                  alignItems: "center",
                  padding: "0px 0px",
                  gap: "15px",
                  height: {md: "170px"}
                  
                }}
              >
                <Box sx={{ background: "gray", padding:  {xs: "10px",  sm: "30px"} , height: "100%" }}>
                  <img src={x.image} width="100px" height="100%" mix-blend-mode= "darken"  />
                </Box>

                <Box sx={{padding:  {xs: "20px 05px"} , textAlign:  {xs : "center", sm:"left"  }}}>
                  <SMText
                    title={x.title}
                    fsize="1em"
                    fweight="600"
                    m-space="20px 0px"
                  /> 
                </Box>
              </Box>
            </Grid>
          ))}

        </Grid>
</Box>
      </Box>
    </div>
  );
}

export default SMvoucherscard;
