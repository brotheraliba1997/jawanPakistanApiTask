import { Container } from '@mui/system';
import React from 'react'
import SMCouponcard from '../Compoments/Mypromo_fr/SMCouponcard';
import SMFooter from '../Compoments/Mypromo_fr/SMFooter';
import SMheader from '../Compoments/Mypromo_fr/SMheader';
import SMSubscribe from '../Compoments/Mypromo_fr/SMSubscribe';
import SMvoucherscard from '../Compoments/Mypromo_fr/SMvoucherscard';

function Home() {


  
  return (
    <div>
      <Container>
      <SMheader/>
      <p style={{fontSize: "2.5em", fontWeight: 600 , margin: 0 }}>Save more at your favorite stores</p>
      <p style={{ fontSize: "1.2em", fontWeight: 600, margin: 0}}>Find the best coupon codes and discounts every day</p>
      <SMCouponcard/>
      <SMvoucherscard/>
      <SMSubscribe/>
      </Container>
      <SMFooter/>
      
      
   

     

   
    </div>
  )
}

export default Home;