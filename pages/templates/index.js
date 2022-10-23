import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import Template from "../../components/templates/Template";
import { templatesContent } from "../../siteInfo";
import theme from "../../styles/themes/theme";

const index = () => {
    return (
        <PageLayout name="TEMPLATES">
            <Box className="section">
                <Grid container className="border-top border-bottom">
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "end",
                                backgroundColor: theme.palette.primary.main,
                                padding: theme.custom.spacing.small,
                                borderRight: {
                                    xs: "none",
                                    md: theme.border,
                                },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    textAlign: "end",
                                    maxWidth: "30rem",
                                    color: theme.palette.custom.light,
                                }}
                            >
                                There is nothing new under the Sun
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                height: "100%",
                                backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose4.webp)`,
                                backgroundPosition: {
                                    xs: "50% 0%",
                                    md: "0% 100%",
                                },
                                padding: theme.custom.spacing.medium,
                            }}
                        >
                            <Typography>
                                All of our templates are built exclusively by us
                                in React and MUI, two of the latest JavaScript
                                and CSS frameworks. This means that your website
                                will be extremely fast, will look great on any
                                mobile device, and will be optimized for search
                                engines and accessibility.
                            </Typography>
                            <br />
                            <Typography>
                                A templated website holds it&apos;s own, but it
                                can also be a great starting point. Like every
                                website we build, small changes are as simple as
                                letting us know what you&apos;d like changed,
                                while larger changes, such as adding pages,
                                reorganizing layout, or updating the aesthetic,
                                can be accomplished at an hourly rate or an
                                agreed-upon price.
                            </Typography>
                            <br />
                            <Typography>
                                If you&apos;re on a budget, or if for any reason
                                you&apos;d prefer to start small, a template can
                                be a great choice.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container className="border-bottom">
                    {templatesContent.map((template, index) => {
                        return (
                            <Grid item xs={12} md={4} key={index}>
                                <Template template={template} />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container className="border-bottom">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                padding: theme.custom.spacing.medium,
                                backgroundColor: theme.palette.primary.main,
                                display: "flex",
                                justifyContent: "end",
                                borderRight: theme.border,
                                height: "100%",
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    color: theme.palette.custom.light,
                                    textAlign: "end",
                                }}
                            >
                                Close, but no cigar?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                padding: theme.custom.spacing.large,
                                maxWidth: "30rem",
                            }}
                        >
                            <Typography>
                                Try our hybrid plan instead. Leverage all the
                                utility of a template, but fine tune it to your
                                liking.
                            </Typography>
                            <Box sx={{ marginTop: "2rem" }}>
                                <Link
                                    href="/contact"

                                    // onClick={() => {
                                    //     navigateToTop();
                                    // }}
                                >
                                    <Button
                                        // onClick={() => {
                                        //     navigateToTop();
                                        // }}
                                        color="secondary"
                                        variant="outlined"
                                        endIcon={<ArrowRightAlt />}
                                    >
                                        go hybrid
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;