export default function Home() {
    return ( 
        <section className="w-screen h-screen flex flex-col items-center justify-center mb-2">
            <div className="text-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-white md:text-6xl 2xl:text-7xl"><span className="hover:text-indigo-600 transition-all">D</span><span className="hover:text-indigo-600 transition-all">E</span><span className="hover:text-indigo-600 transition-all">S</span><span className="hover:text-indigo-600 transition-all">E</span><span className="hover:text-indigo-600 transition-all">N</span><span className="hover:text-indigo-600 transition-all">V</span><span className="hover:text-indigo-600 transition-all">O</span><span className="hover:text-indigo-600 transition-all">L</span><span className="hover:text-indigo-600 transition-all">V</span><span className="hover:text-indigo-600 transition-all">E</span><span className="hover:text-indigo-600 transition-all">D</span><span className="hover:text-indigo-600 transition-all">O</span><span className="hover:text-indigo-600 transition-all">R</span></h1>
                <h2 className="text-5xl font-bold md:text-7xl bg-gradient-to-r from-indigo-700 via-purple-800 to-fuchsia-950 bg-clip-text inline-block text-transparent xl:tracking-wide">FRONT-END</h2>
                <p className="m-4 text-white/60 lg:pl-32 lg:pr-32 xl:pr-64 xl:pl-64 2xl:pr-96 2xl:pl-96 2xl:text-lg">Desenvolvedor Front-End com experiências em React e TypeScript, focado em fazer interfaces bonitas e facéis de serem utilizadas.</p>
            </div>
                <a href="https://wa.me/5511966144965" target="blank" className="p-2  text-white rounded-md mt-2 bg-gradient-to-r from-indigo-700 to-violet-900 hover:tracking-widest transition-all">
                    <span className="font-normal">Entre em contato</span>
                </a>
        </section>
    )
}