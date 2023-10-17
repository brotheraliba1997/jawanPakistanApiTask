import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import logo from "../../images/Logo(1).svg";
import SMText from "./SMText";
import { Container } from "@mui/system";


function SMFooter() {
  return (
    <div style={{ background: "#f2f2f2" }}>
    <Container >
    
     
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: { md: "100px", sm: "0px" },
            flexDirection: { xs: "column", md: "row" },
            
           
          }}
        >
          <Box sx={{margin: "30px 0px "}} >
            <Box
              sx={{ maxWidth: "250px", margin: { xs: "0 auto", md: "0px" } }}
            >
              <img src={logo} />
            </Box>

            <SMText
              title="Entdecken Sie unglaubliche Ersparnisse mit Gutscheincodes! Unsere Website ist Ihre ultimative Anlaufstelle für exklusive Angebote und Gutscheine einer Vielzahl von Marken in verschiedenen Kategorien. Egal, ob Sie Mode, Elektronik, Reisen oder mehr kaufen, bei uns sind Sie an der richtigen Adresse."
              fsize="12px"
              fweight="600"
              Mspace="20px 0px"
              Talign="left"
              TalignCen="center"
            />
          </Box>

          <Box>
            <SMText
              title="Durchsuchen"
              fsize="20px"
              fweight="600"
              Mspace="3px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Kategorien"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Terms and conditions"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Veranstaltungen"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />
            <SMText
              title="Seitenverzeichnis"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />
          </Box>

          <Box>
            <SMText
              title="Nützliche Links"
              fsize="19px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Über Uns"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Kontakt details"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Datenschutz Bestimmungen "
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />
            <SMText
              title="Seitenverzeichnis"
              fsize="16px"
              fweight="600"
              Mspace="2px 0px"
              Talign="left"
              TalignCen="center"
            />
          </Box>
          <Box>
            <SMText
              title="Liens sociaux"
              fsize="20px"
              fweight="600"
              Mspace="5px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Kategorien"
              fsize="16px"
              fweight="600"
              Mspace="02px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Terms and conditions"
              fsize="16px"
              fweight="600"
              Mspace="02px 0px"
              Talign="left"
              TalignCen="center"
            />

            <SMText
              title="Veranstaltungen"
              fsize="16px"
              fweight="600"
              Mspace="02px 0px"
              Talign="left"
              TalignCen="center"
            />
            <SMText
              title="Seitenverzeichnis"
              fsize="16px"
              fweight="600"
              Mspace="02px 0px"
              Talign="left"
              TalignCen="center"
            />
          </Box>
        </Box>
   
      </Container>
      </div>
  );
}

export default SMFooter;
