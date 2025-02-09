"use client";
// import { animated } from "@react-spring/web";
import Link from "next/link";
import ShootingStarBorder from "./shootingStartBorder";
import { ModeToggle } from "./modeToggle";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import MyMapComponent from "./googleMaps";

export default function HomeGrid() {
    const { theme } = useTheme();

    return (
        <div className="grid grid-cols-4 grid-rows-4 grid-flow-row-dense gap-4 min-h-screen p-4 pb-20 sm:p-10 bg-white dark:bg-black font-[family-name:var(--font-geist-sans)]">
            <Link
                href="/aboutme"
                className="pt-2 rounded-xl border-none border-2 border-black text-black row-start-1 row-end-13 row-span-3 col-span-1 hover:bg-indigo-400 dark:border-white dark:border-solid dark:text-white"
            >
                <span className="font-lilitaOne text-2xl pl-3">
                    Debora Kwon
                </span>
            </Link>
            <Link
                href="/education"
                className="pt-2 rounded-xl border-none border-2 border-black text-black row-span-2 col-span-1 hover:bg-amber-100 dark:border-white dark:border-solid dark:text-white"
            >
                <span className="font-lilitaOne text-2xl pl-3">Resume</span>
            </Link>
            <div className="pt-2 rounded-xl border-none border-2 border-black text-black row-span-2 col-span-1 hover:bg-amber-100 dark:border-white dark:border-solid dark:text-white">
                <span className="font-lilitaOne text-2xl pl-3">Location</span>
                <div className="pl-3 pb-2">
                    <MyMapComponent />
                </div>
            </div>
            <span className="justify-self-end col-start-5">
                <ModeToggle />
            </span>
            <Link
                href="/experience"
                className="pt-2 rounded-xl border-none border-2 border-black text-black row-span-6 col-span-1 col-start-4 hover:bg-amber-100 dark:border-white dark:border-solid dark:text-white"
            >
                <span className="font-lilitaOne text-2xl pl-3">Education</span>
            </Link>
            <Link
                href="/goals"
                className="pt-2 rounded-xl border-none border col-start-4 border-black text-black row-span-8 hover:bg-indigo-400 dark:border-white dark:border-solid dark:text-white"
            >
                <span className="font-lilitaOne text-2xl pl-3">Experience</span>
            </Link>
            <Link
                href="/projects"
                className="pt-2 rounded-xl border-none border-2 border-black text-black row-span-10 col-span-2 row-start-3 col-start-2 hover:bg-indigo-400 dark:border-white dark:border-solid dark:text-white"
            >
                <span className="font-lilitaOne text-2xl pl-3">Projects</span>
            </Link>
            <div className="rounded-xl border-none border border-black text-black col-start-1 row-start-14 col-span-3 row-span-7 pl-24 hover:bg-amber-100 dark:border-white dark:border-solid dark:text-white">
                <span className="font-lilitaOne text-2xl pl-5">Github</span>
                <GitHubCalendar
                    username="debora-k"
                    colorScheme={
                        theme === "light" || theme === "dark"
                            ? theme
                            : undefined
                    }
                />
            </div>
            <div className="pt-2 rounded-xl border-none border-2 border-black text-black col-span-1 row-span-5 col-start-4 hover:bg-amber-100 dark:border-white dark:border-solid dark:text-white">
                <span className="font-lilitaOne text-2xl pl-3">Contact</span>
            </div>
        </div>
    );
}
