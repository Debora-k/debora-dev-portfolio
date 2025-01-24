// import { animated } from "@react-spring/web";
import Link from "next/link";
import ShootingStarBorder from "./shootingStartBorder";

export default function HomeGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 min-h-screen p-8 pb-20 sm:p-20 bg-white font-[family-name:var(--font-geist-sans)]">
            <Link
                href="/projects"
                className="rounded-xl border-none border-2 border-black text-black row-span-10 hover:bg-indigo-400"
            >
                <span className="font-lilitaOne text-2xl">Projects</span>
            </Link>
            <Link
                href="/education"
                className="rounded-xl border-none border-2 border-black text-black row-span-2 col-span-1 hover:bg-amber-100"
            >
                <span className="font-lilitaOne text-2xl">Education</span>
            </Link>
            <Link
                href="/experience"
                className="rounded-xl border-none border-2 border-black text-black row-span-6 col-span-1 col-start-3 hover:bg-amber-100"
            >
                <span className="font-lilitaOne text-2xl">Work Experience</span>
            </Link>
            <Link
                href="/aboutme"
                className="rounded-xl border-none border-2 border-black text-black row-span-8 col-span-1 hover:bg-indigo-400"
            >
                <span className="font-lilitaOne text-2xl">Debora Kwon</span>
            </Link>
            <Link
                href="/goals"
                className="rounded-xl border-none border border-black text-black row-span-8 hover:bg-indigo-400"
            >
                <span className="font-lilitaOne text-2xl">Goals</span>
            </Link>
            <div className="rounded-xl border-none border border-black text-black col-start-1 row-span-4 hover:bg-amber-100">
                <span className="font-lilitaOne text-2xl">Resume</span>
            </div>
            <div className="rounded-xl border-none border-2 border-black text-black col-span-1 row-span-4 hover:bg-amber-100">
                <span className="font-lilitaOne text-2xl">Contact Me</span>
            </div>
        </div>
    );
}
