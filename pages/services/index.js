import { Box, Grid, Typography } from "@mui/material";
import PageLayout from "../../components/layout/PageLayout";
import ServicesShowcase from "../../components/services/ServicesShowcase";
import { servicesContent } from "../../siteInfo";
const index = () => {
    return (
        <PageLayout name="OUR SERVICES">
            <Box className="section">
                <ServicesShowcase services={servicesContent} />
            </Box>
        </PageLayout>
    );
};

export default index;
