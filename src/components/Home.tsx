export default function Home() {
    return ( 
        <section className="w-screen xl:h-[600px] h-[700px] md:h-[500px] flex flex-col items-center justify-center mb-2">
            <div className="text-center">
                <div className="text-md lg:text-2xl font-semibold items-center justify-center text-white 2xl:text-start sm:text-xl flex gap-2" >Olá, me chamo <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-blue-500 to-violet-600"> Guilherme Lima</span> <span className="animate-bounce">👋</span> </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white md:text-6xl 2xl:text-7xl"><span className="hover:text-indigo-600 transition-all">D</span><span className="hover:text-indigo-600 transition-all">E</span><span className="hover:text-indigo-600 transition-all">S</span><span className="hover:text-indigo-600 transition-all">E</span><span className="hover:text-indigo-600 transition-all">N</span><span className="hover:text-indigo-600 transition-all">V</span><span className="hover:text-indigo-600 transition-all">O</span><span className="hover:text-indigo-600 transition-all">L</span><span className="hover:text-indigo-600 transition-all">V</span><span className="hover:text-indigo-600 transition-all">E</span><span className="hover:text-indigo-600 transition-all">D</span><span className="hover:text-indigo-600 transition-all">O</span><span className="hover:text-indigo-600 transition-all">R</span></h1>
                <h2 className="text-5xl font-bold md:text-7xl bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text inline-block text-transparent xl:tracking-wide">FRONT-END</h2>
                <p className="m-4 text-white/30 lg:pl-32 lg:pr-32 xl:pr-64 xl:pl-64 2xl:pr-96 2xl:pl-96 2xl:text-lg font-semibold">Desenvolvedor Front-End com experiências em <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-blue-500 to-violet-600">React</span> e <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-blue-500 to-violet-600">TypeScript</span>, focado em fazer as melhores interfaces, de melhores manuseios para a sua experiência.</p>
            </div>
                <a href="https://wa.me/5511966144965" target="blank" className="p-2 bg-transparent  text-white rounded-md mt-2 bg-gradient-to-r from-blue-500 to-violet-600 hover:tracking-widest hover:backdrop-blur-[10px] transition-all hover:bg-gradient-to-br ease-in-out duration-[500ms] hover:from-blue-700  hover:to-violet-600">
                    <span className="font-normal">Entre em contato</span>
                </a>
        </section>
    )
}