"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
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
            
            <Typography
            component="h2"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            >
            <Input 
            placeholder="Search SuperMarket..." 
            variant="soft"   
            startDecorator={<SearchIcon />}
            />
            </Typography>
            <ModalClose variant="plain"/>
            <Typography textColor="text.tertiary">
            Make sure to use <code>aria-labelledby</code> on the modal dialog
            with an optional <code>aria-describedby</code> attribute.
            </Typography>
        </Sheet>
        </Modal>
    </>
  );
}
