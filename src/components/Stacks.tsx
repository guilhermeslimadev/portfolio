import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";

export default function Stacks() {
    return (
        <section className="w-screen flex flex-col items-center justify-center gap-3 mt-24">
            <h2 className="text-xl xl:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 font-bold">Habilidades</h2>
            <div className="flex flex-col text-center w-screen gap-3">
                <p className="text-white/30 text-md pr-4 lg:pr-20 lg:pl-20 xl:pr-52 xl:pl-52 font-semibold">Como desenvolvedor front-end, tenho experiência sólida nas principais linguagens e tecnologias que são  essenciais para construir interfaces modernas, responsivas e de alta performance.</p>
            </div>
            <article className="flex flex-wrap p-3 gap-4 items-center justify-center lg:p-18 lg:pr-5">

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <FaReact className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">React</h3>
            <p className="text-white/30 font-semibold">Componentes de servidor e cliente com uso de Hooks.</p>
            </div>

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <RiTailwindCssFill className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">Tailwind Components</h3>
            <p className="text-white/30 font-semibold">
            Componentes de UI usando Shadcn UI e estilizados com TailwindCSS.</p>
            </div>

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <SiStyledcomponents className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">Styled Components</h3>
            <p className="text-white/30 font-semibold">É uma ferramenta muito fácil para estilizar um aplicativo.</p>
            </div>

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <SiTypescript className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">TypeScript</h3>
            <p className="text-white/30 font-semibold">
                
Linguagem de programação inteligente.</p>
            </div>

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <IoLogoJavascript className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">JavaScript</h3>
            <p className="text-white/30 font-semibold">
            Linguagem que permite adicionar interatividade às páginas da web.</p>
            </div>

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <FaHtml5 className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">HTML5</h3>
            <p className="text-white/30 font-semibold"> 
            Linguagem de marcação para sites básicos.</p>
            </div>

            <div className="flex flex-col p-3.5 rounded-md border border-white/10 gap-3 w-[320px] h-[165px] hover:bg-white/10 transition hover:scale-105">
            <FaCss3 className="text-4xl text-white"/>
            <h3 className="font-semibold text-white text-1xl">CSS3</h3>
            <p className="text-white/30 font-semibold"> 
                Linguagem de estilização.</p>
            </div>

            </article>
        </section>
    )
}