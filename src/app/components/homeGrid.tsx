// import { animated } from "@react-spring/web";
import Link from 'next/link';

export default function HomeGrid() {
    return (
    <div className="grid grid-cols-3 gap-4 min-h-screen p-8 pb-20 sm:p-20 bg-white font-[family-name:var(--font-geist-sans)]">
        <Link href="/projects" className="border-solid border-2 border-black text-black">Projects</Link>
        <Link href="/education" className="border-solid border-2 border-black text-black">Education</Link>
        <Link href="/aboutme" className="border-solid border-2 border-black text-black">Debora Kwon</Link>
        <Link href="/experience" className="border-solid border-2 border-black text-black">Work Experience</Link>
        <div className="border-solid border-2 border-black text-black">Resume</div>
        <div className="border-solid border-2 border-black text-black">Contact Me</div>
        <Link href="/goals" className="border-solid border-2 border-black text-black">Goals</Link>
    </div>
    )


}