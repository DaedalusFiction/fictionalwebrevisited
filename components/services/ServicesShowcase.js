import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import { ArrowRightAlt } from "@mui/icons-material";
import theme from "../../styles/themes/theme";
import { navigateToTop } from "../../utility/navigateToTop";
import Link from "next/link";

const ServicesShowcase = ({ services, isPreview }) => {
    return (
        <Box>
            <Grid container>
                {services.map((service, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                className="border-bottom"
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    height: "100%",
                                    borderTop: isPreview
                                        ? "none"
                                        : theme.border,
                                    paddingLeft: theme.custom.spacing.small,
                                    paddingRight: theme.custom.spacing.small,
                                    paddingTop: theme.custom.spacing.xl,
                                    paddingBottom: theme.custom.spacing.xl,

                                    borderLeft: {
                                        xs: "none",
                                        md: index === 1 ? theme.border : "none",
                                    },
                                    borderRight: {
                                        xs: "none",
                                        md: index === 1 ? theme.border : "none",
                                    },
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        starting at
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",
                                            color: theme.palette.custom.accent,
                                            marginBottom: ".5em",
                                        }}
                                    >
                                        {service.price}
                                    </Typography>
                                    {isPreview && (
                                        <Typography
                                            sx={{
                                                textAlign: "center",
                                                color: theme.palette.custom
                                                    .darkMuted,
                                            }}
                                        >
                                            {service.content}
                                        </Typography>
                                    )}
                                    {!isPreview && (
                                        <Box>
                                            {service.features.map(
                                                (feature, index) => {
                                                    return (
                                                        <Box
                                                            key={index}
                                                            sx={{
                                                                padding:
                                                                    ".25rem 0",
                                                                display: "flex",
                                                                gap: ".5rem",
                                                            }}
                                                        >
                                                            <CheckIcon
                                                                sx={{
                                                                    transform:
                                                                        "translateY(3px)",
                                                                }}
                                                            />
                                                            <Box>
                                                                <Typography variant="h6">
                                                                    {
                                                                        feature.name
                                                                    }
                                                                </Typography>
                                                                <Typography variant="caption">
                                                                    {
                                                                        feature.description
                                                                    }
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    );
                                                }
                                            )}
                                        </Box>
                                    )}
                                </Box>
                                <Box sx={{ marginTop: "4rem" }}>
                                    <Link
                                        href={service.button.href}
                                        onClick={() => {
                                            navigateToTop();
                                        }}
                                    >
                                        <Button
                                            onClick={() => {
                                                navigateToTop();
                                            }}
                                            color="secondary"
                                            variant={service.button.variant}
                                            endIcon={<ArrowRightAlt />}
                                        >
                                            {service.button.text}
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ServicesShowcase;
