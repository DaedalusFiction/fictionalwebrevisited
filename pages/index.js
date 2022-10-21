import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/home/Hero";

import Meta from "../components/home/Meta";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
        </Container>
    );
}
