import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import eu from '../assets/f2032d0f-7266-4123-8de5-189f7b6afe4d.jpg'

export default function About() {
    return (
        <section className=" h-screen flex flex-col items-center gap-6 xl:flex-row-reverse xl:justify-start xl:w-[1000px] 2xl:w-[1336px]">
                <img src={eu} alt="" className="w-52 h-52 lg:w-72 lg:h-72 xl:h-72 xl:w-[400px] rounded-md rotate-3" />
            <div className="w-screen ">
                <div className="flex flex-col text-center">
                    <h2 className="text-3xl  font-semibold bg-gradient-to-r from-indigo-600 via-purple-900 to-violet-950 bg-clip-text inline-block text-transparent">Sobre mim</h2>
                    <p className="text-md text-white/50 font-normal m-3 pr-3 lg:pl-36 lg:pr-36 xl:pr-52 xl:pl-52 2xl:text-lg">
                    Olá! me chamo Guilherme Lima, sou um desenvolvedor Front-End apaixonado por criar experiências digitais incríveis e interativas. Com uma sólida formação em HTML, CSS, JavaScript e frameworks modernos como React meu foco é sempre entregar interfaces responsivas, intuitivas e com ótimo desempenho.
                    </p>
                <div className="flex items-center justify-center gap-3">
                    <a href="https://github.com/guilhermeslimadev" target="blank" className="p-3 bg-white/5 rounded-md text-white hover:bg-violet-900/20 transition-all border-white/10 border hover:border-white/10 hover:rotate-12">
                    <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/guilherme-da-silva-lima-356668348/" target="blank" className="p-3 bg-white/5 rounded-md text-white hover:bg-violet-900/20 transition-all border-white/10 border hover:border-white/10 hover:rotate-12">
                    <FiLinkedin />
                    </a>
                    <a href="https://wa.me/5511966144965" target="blank" className="p-3 bg-white/5 rounded-md text-white hover:bg-violet-900/20 transition-all border-white/10 border hover:border-white/10 hover:rotate-12">
                    <FaWhatsapp />
                    </a>
                </div>
                </div>  
            </div>
        </section>
    )
}