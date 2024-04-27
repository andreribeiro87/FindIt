import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { blue, green, grey } from "@mui/material/colors";
import Table from '@mui/joy/Table';
import * as React from 'react';




export default function ProductDetails() {
    return (
        <Card
        color = "neutral"
        variant="soft"
        sx={{
            boxShadow: "lg",
            position: "absolute",
            top: "0%",
            left: 0,
            right: 0,
            margin: "auto",
            maxWidth: "100%",
            height: "94.9%",
            backgroundColor: grey[100]
        }}
        >
        

        <Card variant="outlined" sx={{ maxWidth: "100%" , backgroundColor: blue[50], mb:4}}>
        <Typography level="h1">Atum</Typography>
        <div>
        <Typography level="h2" fontSize="xl" sx={{ mb: 0.25 }}>
            Descrição
        </Typography>
        <Typography level="body-lg">
            Peixe rico em proteínas e omega 3    
        </Typography>
        </div>
        </Card>

        <Table aria-label="basic table" size="lg">
        <tbody>
            <tr>
            <td><b>Calorias</b>/cal</td>
            <td></td>
            <td>6</td>
            </tr>

            <tr>
            <td><b>Carbohidratos</b>/g</td>
            <td></td>
            <td>9</td>
            </tr>

            <tr>
            <td><b>Proteinas</b>/g</td>
            <td></td>
            <td>262</td>
            </tr>

            <tr>
            <td><b>Gorduras</b>/g</td> 
            <td></td>
            <td>67</td>
            </tr>
        </tbody>
        </Table>
        
        </Card>
    );
}