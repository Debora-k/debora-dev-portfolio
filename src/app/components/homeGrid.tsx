// import { animated } from "@react-spring/web";
import Link from "next/link";

export default function HomeGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 min-h-screen p-8 pb-20 sm:p-20 bg-white font-[family-name:var(--font-geist-sans)]">
            <Link
                href="/projects"
                className="border-solid border-2 border-black text-black row-span-10"
            >
                <span className="box-decoration-clone bg-indigo-500 border-solid border-2 border-black">
                    Projects
                </span>
            </Link>
            <Link
                href="/education"
                className="border-solid border-2 border-black text-black row-span-2 col-span-1"
            >
                <span className="box-decoration-clone bg-indigo-500 border-solid border-2 border-black">
                    Education
                </span>
            </Link>
            <Link
                href="/experience"
                className="border-solid border-2 border-black text-black row-span-6 col-span-1 col-start-3"
            >
                <span className="box-decoration-clone bg-indigo-500 border-solid border-2 border-black">
                    Work Experience
                </span>
            </Link>
            <Link
                href="/aboutme"
                className="border-solid border-2 border-black text-black row-span-8 col-span-1"
            >
                <span className="box-decoration-clone bg-indigo-500 border-solid border-2 border-black">
                    Debora Kwon
                </span>
            </Link>
            <Link
                href="/goals"
                className="border-solid border-2 border-black text-black row-span-8"
            >
                <span className="box-decoration-clone bg-indigo-500 border-solid border-2 border-black">
                    Goals
                </span>
            </Link>
            <div className="border-solid border-2 border-black text-black col-start-1 row-span-4">
                <span className="box-decoration-clone bg-indigo-500 border-solid border-2 border-black">
                    Resume
                </span>
            </div>
            <div className="border-solid border-2 border-black text-black col-span-1 row-span-4">
                Contact Me
            </div>
        </div>
    );
}
