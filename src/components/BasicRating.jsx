import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// import styled from 'styled-components';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#A02279',
  },
  '& .MuiRating-iconHover': {
    color: '#A02279',
  },
});

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (

    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      
    >
      <StyledRating
        name="customized-color"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
    </Box>


  );
}



