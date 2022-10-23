import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import Header from "./Header";

const PageLayout = ({ name, children }) => {
    return (
        <>
            {/* <Header /> */}
            <Box sx={{ paddingTop: "8rem" }}>
                <Meta siteName={name} />

                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    {name}
                </Typography>
                {children}
            </Box>
        </>
    );
};

export default PageLayout;
