"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

interface ActionProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}