import Card from "@mui/joy/Card";
import  Typography  from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import CardContent from '@mui/joy/CardContent';
import Button  from "@mui/joy/Button";


export default function InitialSearchPage() {
  return (

    
    <Card
      color="primary"
      variant="soft"
      sx={{
        boxShadow: "lg",
        position: "absolute",
        top: "2%",
        left: 0,
        right: 0,
        margin: "auto",
        maxWidth: "85%",
        height: "78%",
      }}
    >
    <Typography level="h1" sx={{textAlign:'center', marginTop:'30px'}}>Search for</Typography>
    <Divider sx={{ my: '10px', height:'1.8px' }} />
      
      <Button
          variant="contained"
          color="warning"
          size="large" 
          sx={{
            borderRadius: '50px', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  
            height: '100px',
            textTransform: 'none', 
            padding: '15px 30px', 
            fontSize: '1.4rem', 
            backgroundColor: '#F4A261', 
            marginTop:"70px",
          }}
        >
          Products
        </Button>


        <Button
          variant="contained"
          color="warning"
          size="large" 
          sx={{
            borderRadius: '50px', 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
            height: '100px',
            textTransform: 'none', 
            padding: '15px 30px', 
            fontSize: '1.4rem', 
            backgroundColor: '#2A9DBF', 
            marginTop:"50px",
          }}
        >
          Supermarkets
        </Button>
      


    </Card>
  );
}
