"use client";
import { createContext, useContext } from "react";

export const SidebarContext = createContext<any>(null);

export const UseSidebar =()=>useContext(SidebarContext)