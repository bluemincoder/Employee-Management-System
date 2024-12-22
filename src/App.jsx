import React, { useEffect, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Outlet } from "react-router-dom";
import { AppProvider } from "@toolpad/core/react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

const NAVIGATION = [
    {
        kind: "header",
        title: "Company",
    },
    {
        segment: "",
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
        segment: "leave",
        title: "Leave",
        icon: <ChatIcon />,
    },
    {
        segment: "resignation",
        title: "Resignation",
        icon: <ChatIcon />,
    },
    {
        segment: "Notes",
        title: "Notes",
        icon: <ChatIcon />,
    },
];
export default function App() {
    return (
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                title: "Employee-Management-System",
            }}
        >
            <Outlet />
        </AppProvider>
    );
}
