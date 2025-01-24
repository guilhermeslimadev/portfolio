import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import eu from '../assets/IMG_0387.jpg'

export default function About() {
    return (
            <section className="w-screen h-[500px] bg-zinc-900/50 flex flex-col-reverse lg:flex-row justify-center items-center gap-3 lg:gap-6 xl:gap-24">
         <div className="flex lg:w-[450px] lg:items-start lg:text-start flex-col items-center justify-center text-center gap-3 p-3">
            <h2 className="text-xl xl:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 font-bold">Sobre mim</h2>
            <p className="font-semibold text-md text-white/30">Olá! me chamo Guilherme Lima, sou um desenvolvedor Front-End apaixonado por criar experiências digitais incríveis e interativas. Com uma sólida formação em HTML, CSS, JavaScript e frameworks modernos como React meu foco é sempre entregar interfaces responsivas, intuitivas e com ótimo desempenho.</p>
            <div className="w-full flex gap-3 justify-center lg:justify-start">
                <a href="https://github.com/guilhermeslimadev" target="blank" className="bg-transparent p-4 border rounded-md text-white font-bold transition-all ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:border-none opacity-10 hover:opacity-100 hover:scale-105 duration-500">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/guilherme-da-silva-lima-356668348/" target="blank" className="bg-transparent p-4 border rounded-md text-white font-bold transition-all ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:border-none opacity-10 hover:opacity-100 hover:scale-105 duration-500">
                    <FiLinkedin />
                </a>
                <a href="https://wa.me/5511966144965" target="blank" className="bg-transparent p-4 border rounded-md text-white font-bold transition-all ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600 hover:border-none opacity-10 hover:opacity-100 hover:scale-105 duration-500">
                    <FaWhatsapp />
                </a>
            </div>
         </div>
         <img src={eu} className="w-32 h-32 lg:w-72 lg:h-72 rounded-full rotate-3"  alt="" />
        </section>
    )
}