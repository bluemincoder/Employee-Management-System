import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";


const NAVIGATION = [
    {
        kind: "header",
        title: "Company",
    },
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "chats",
        title: "chats",
        icon: <ChatIcon />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Utilities",
    },
    {
        segment: "Application",
        title: "Application",
        icon: <MailIcon />,
        children: [
            {
                segment: "Leave",
                title: "Leave",
                icon: <DescriptionIcon />,
            },
            {
                segment: "Resignation",
                title: "Resignation",
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: "Notes",
        title: "Notes",
        icon: <SpeakerNotesIcon />,
    },
];

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: "class",
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}


const Skeleton = styled("div")(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function DashboardLayoutBasic(props) {
    const { window } = props;

    const router = useDemoRouter("/dashboard");

    return (
        <AppProvider
            branding={{
                logo: (
                    <img src="https://mui.com/static/logo.png" alt="MUI logo" />
                ),
                title: "Employee-Management",
                homeUrl: "/toolpad/core/introduction",
            }}
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
        >
            <DashboardLayout>
                <PageContainer>
                    <Grid container spacing={1}>
                        <Grid size={5} />
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>
                        <Grid size={4}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={8}>
                            <Skeleton height={100} />
                        </Grid>

                        <Grid size={12}>
                            <Skeleton height={150} />
                        </Grid>
                        <Grid size={12}>
                            <Skeleton height={14} />
                        </Grid>

                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                        <Grid size={3}>
                            <Skeleton height={100} />
                        </Grid>
                    </Grid>
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
