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



export default function Cartao() {
  return (
    <Card 
        orientation="vertical"
        size="sm"
        sx={{minHeight: 200, bgcolor: 'background.surface', borderRadius: 0, mb: 1 }}>

        <CardContent 
        sx={{display:"flex", flexDirection:"row"}}>

      
        <CardContent
        sx={{width:"25%",height:"100%"}}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          
        />
        </CardContent>
        <CardContent sx={{  }}>
          <Typography level="h2">Product Name</Typography>
          <Typography level="h3">Supermarket</Typography>
          <Typography level="h1">12.34</Typography>
          <Typography level="body-sm">in stock</Typography>


        </CardContent>
        </CardContent>
        <CardContent sx={{}}>
          <Typography level="body-sm">olá</Typography>


        </CardContent>


    </Card>
  );
}