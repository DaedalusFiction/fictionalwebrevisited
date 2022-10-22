import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ServicesShowcase from "../components/services/ServicesShowcase";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { servicesContent } from "../siteInfo";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box
                        className="gradient border-bottom"
                        sx={{
                            padding: theme.custom.spacing.large,
                            borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                        }}
                    >
                        <Typography variant="h1" sx={{ textAlign: "end" }}>
                            We create websites that tell stories.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box
                        className="border-bottom"
                        sx={{
                            padding: theme.custom.spacing.large,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography>
                                But that&apos;s perhaps a bit misleading. In the
                                real world, <em>everything</em> tells a story.
                            </Typography>
                            <br />
                            <Typography>
                                If you&apos;re a chef, your menu tells the story
                                of your heritage and your taste. If you&apos;re
                                a photographer, your portfolio tells the story
                                of how you see the world and how that vision has
                                changed and changes over time. If you&apos;re a
                                novelist... Well, your stories tell stories.
                            </Typography>
                            <br />
                            <Typography>
                                Your website can help that story reach a wider
                                audience. But more than that, in telling your
                                story it becomes part of the story itself.
                                Everything about your website colors it, from
                                the fonts and the images to the animated
                                elements and the use of negative space.
                            </Typography>
                            <br />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "1rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <Typography>
                                So make sure you tell it well.
                            </Typography>
                            <Link href="/contact">
                                <Button
                                    endIcon={<ArrowRightAlt />}
                                    variant="outlined"
                                    color="secondary"
                                >
                                    View Services
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <ProjectsPreview />
            <ServicesShowcase services={servicesContent} isPreview />
            <Grid container className="border-bottom">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "end",
                            borderRight: { xs: "none", md: theme.border },
                            padding: theme.custom.spacing.small,
                            background: theme.palette.primary.main,
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    color: theme.palette.custom.light,
                                    textAlign: "end",
                                }}
                            >
                                Copyediting Included
                            </Typography>
                            <br />
                            <Typography
                                sx={{
                                    maxWidth: "45ch",
                                    color: theme.palette.custom.lightMuted,
                                    textAlign: "end",
                                }}
                            >
                                Our background in newspaper and fiction editing
                                has given us an ear for language. If you know
                                what you want to tell people but aren&apos;t
                                sure quite how to word it, we can help.
                            </Typography>
                        </Box>
                        <br />
                        <Box>
                            <Link href="/contact">
                                <Button
                                    endIcon={<ArrowRightAlt />}
                                    variant="contained"
                                    color="secondary"
                                >
                                    get in touch
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: theme.custom.spacing.small,
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .75), rgba(255, 252, 235, 0.75)), url(/images/rose4.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: { xs: "50% 0%", md: "15% 10%" },
                        }}
                    >
                        <Typography
                            variant="h1"
                            component="h6"
                            sx={{ maxWidth: "30rem" }}
                        >
                            You won&apos;t know what your story is about until
                            it&apos;s finished
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
