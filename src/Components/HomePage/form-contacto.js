

export function FormContacto() {

    return (
        <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
            <form className="lg:w-1/3 md:w-1/2 bg-sky-700 flex flex-col p-3 w-full rounded-lg md:py-8 mt-8 md:mt-0">
                <h2 className="text-white text-lg mb-1 font-medium title-font">Contacto</h2>
                <div className="relative mb-4">
                    <label for="name" className="leading-7 text-sm text-gray-100">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-100">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>

                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </form>
        </div>
    )
}