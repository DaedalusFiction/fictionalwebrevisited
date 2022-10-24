import { Box, Button, Grid, Link, Typography } from "@mui/material";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import theme from "../../styles/themes/theme";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <Grid container className="border-top border-bottom">
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .75), rgba(255, 252, 235, 0.75)), url(/images/rose2.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: {
                                xs: "50% 30%",
                                md: "45% 50%",
                            },
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: theme.custom.spacing.medium,
                            borderRight: { xs: "none", md: theme.border },
                        }}
                    >
                        <Typography variant="h3">
                            {aboutContent.name}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {aboutContent.content}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose3.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: {
                                xs: "50% 30%",
                                md: "75% 30%",
                            },
                        }}
                    ></Box>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default index;
