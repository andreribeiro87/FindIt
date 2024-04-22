"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import Autocomplete from '@mui/joy/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/joy/FormControl';

import Chip from '@mui/joy/Chip';
import Close from '@mui/icons-material/Close'

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const [SuperMarket, addSuperMarket] = React.useState([]);
    var id =0;
    return (
    <>
        <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
        </Button>
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
        <Sheet
            variant="outlined"
            sx={{
            maxWidth: 500,
            width:"90%",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            }}
        >
            <ModalClose variant="plain" color="danger"/>
            <Typography
            component="h2"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            mt={2}
            >
                <FormControl>

            <Autocomplete
            multiple
            placeholder="Search SuperMarket..." 
            variant="soft"  
            startDecorator={<SearchIcon />}
            options={['Option 1', 'Option 2','Option 3','Option 4','Option 5','Option 6','Option 7','Option 8']}  
            renderTags={(tags, getTagProps) =>{addSuperMarket(tags)}}
            /> 
                </FormControl>
            </Typography>



            <Typography textColor="text.tertiary">
                <ul>
                    {SuperMarket.map(e => (
                        <Chip
                            variant="solid"
                            color="primary"
                            sx={{ minWidth: 0 }}
                            key={id++}
                        >
                            {e}
                            <div onClick={()=>{console.log("oi")}}>
                            <Close fontSize="sm"/>

                            </div>
                        </Chip>
                        
                    ))}
                </ul>
            </Typography>
        </Sheet>
        </Modal>
    </>
  );
  
}
// renderTags={(tags, getTagProps) =>
//     tags.map((item, index) => (
//       <Chip
//         variant="solid"
//         color="primary"
//         endDecorator={<Close fontSize="sm" />}
//         sx={{ minWidth: 0 }}
//         {...getTagProps({ index })}
//       >
//         {item}
//       </Chip>
//     ))}