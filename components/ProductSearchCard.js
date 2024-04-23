'use client';

import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BallotIcon from '@mui/icons-material/Ballot';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { AspectRatio } from '@mui/joy';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';



export default function ProductSearchCard() {

  const [value, setValue] = React.useState(1)


  const increment = () => {
    setValue(prevValue => prevValue + 1)
  }
  
  const decrement = () => {
    if(value === 1) {
      return
    }
    setValue(prevValue => prevValue - 1)
  }


  return (
    <Card 
        orientation="vertical"
        size="sm"
        sx={{minHeight: 200, bgcolor: 'background.surface', borderRadius: 0, mb: 1 }}>

        <CardContent 
        sx={{display:"flex", flexDirection:"row"}}>

      
        <CardContent
        sx={{width:"25%",height:"100%"}}>
        <img style={{maxHeight: 160, maxWidth: 167 }}
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          
        />
        </CardContent>
        <CardContent sx={{ }}>
          <div style={{ marginBottom: "30px" }}>
            <Typography level="h1"> Atum </Typography>
            <Typography level="h5"> 🛒 Continente Aveiro</Typography>
            <Typography level="h2">$12.34/un</Typography>
          </div>  
          <Typography level="body-sm">in stock</Typography>  
        </CardContent>
        </CardContent>

        <CardContent sx={{display:"flex", flexDirection:"row" }}>

        <div style={{ marginRight: "4px" }}>
          <ButtonGroup aria-label="outlined primary button group" size="lg">
            <Button  variant="soft" color="primary" onClick={decrement}> - </Button>
            <Button>{value}</Button>
            <Button  variant="soft" color="primary" onClick={increment}> + </Button>
          </ButtonGroup>
        </div>

        <ButtonGroup
        color="primary"
        disabled={false}
        orientation="horizontal"
        size="lg" 
        spacing={1}
        variant="solid"
      >
        <Button> Add </Button>
        <Button> Details </Button>
      </ButtonGroup>

      </CardContent>


    </Card>
  );
}