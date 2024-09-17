import React from 'react';
import Grid from '@mui/material/Grid';


import WhatToExpectSection1 from '../Components/Contact/WhatToExpectSection1';
import WhatToExpectFloating from '../Components/Contact/WhatToExpectFloating';
import HomeSection11 from '../Components/Home/HomeSection11';
import Policies from '../Components/Contact/Policies';


const WhatToExpect = () => {


  return (
    <Grid 
      container 
      spacing={0}
   
    >
     
     <Grid item xs={12}>
        <WhatToExpectFloating/>
      </Grid>

      <Grid item xs={12}>
        <WhatToExpectSection1/>
      </Grid>

      <Grid item xs={12}>
        <HomeSection11/>
      </Grid>
    
   
    </Grid>
  );
};

export default WhatToExpect;