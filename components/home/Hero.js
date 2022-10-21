import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";

const Hero = () => {
    return (
        <Box
            className="section border-bottom"
            sx={{
                backgroundImage: {
                    xs: `linear-gradient(to right, rgba(255, 252, 235, .5), rgba(255, 252, 235, 0.75), rgba(255, 252, 235, 1)), url(/images/rose2.webp)`,
                    md: `linear-gradient(to right, rgba(255, 252, 235, 0), rgba(255, 252, 235, 0.5), rgba(255, 252, 235, 1)), url(/images/rose2.webp)`,
                },
                backgroundSize: "cover",
                backgroundPosition: { xs: "50% 0%", md: "0% 0%" },
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                padding: {
                                    xs: "15vh 0 22vh 0",
                                    md: "20vh 0 20vh 0",
                                },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    textAlign: "end",
                                    marginBottom: ".5em",
                                }}
                            >
                                FICTIONAL{" "}
                                <span className="color-accent">WEB.</span>
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    marginBottom: ".5em",
                                    textAlign: "end",
                                }}
                            >
                                We are a web development agency that focuses on
                                creating websites that capture and further the
                                image, personality, mission, and voice of our
                                clients.
                            </Typography>
                            <Box
                                sx={{ display: "flex", justifyContent: "end" }}
                            >
                                <Link href="/projects">
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        view our work
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
