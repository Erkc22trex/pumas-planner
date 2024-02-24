export function Navbar() {
    return (
        <header className="text-gray-00 bg-amber-400 body-font sticky">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="./puma2.png" className="w-12 h-16 text-white p-2 bg-transparent rounded-full" />
                    <span className="ml-3 text-2xl text-white font-bold">PUMAS PLANNER</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 border-y-2 border-y-stone-900">Inicio</a>
                    <a className="mr-5 hover:text-gray-900 border-y-2 border-y-stone-900">Proximos eventos</a>
                    <a className="mr-5 hover:text-gray-900 border-y-2 border-y-stone-900">Contacto</a>

                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Iniciar Sesión
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}