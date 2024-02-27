import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Login';
import Logout from '../Logoutwithredirect';
import DropdownBtn from '../Button';
export function Navbar() {
    const { isAuthenticated, isLoading } = useAuth0()
    

    return (
        <header className="text-gray-00 bg-amber-400 body-font sticky">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img
                        src="./puma2.png"
                        className="w-12 h-16 text-white p-2 bg-transparent rounded-full"
                    />
                    <span className="ml-3 text-2xl text-white font-bold">
                        PUMAS PLANNER
                    </span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {
                        isAuthenticated ?
                            (
                                <div className='grid grid-flow-col gap-3 px-4'>
                                    <div class="flex items-center justify-center p-5">
                                        <div class="rounded-lg bg-gray-200 p-5">
                                            <div class="flex">
                                                <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                                    <svg viewBox="0 0 20 20" ariaHidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
                                                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                                    </svg>
                                                </div>
                                                <input type="text" class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />
                                                <input type="button" value="Search" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    <DropdownBtn />
                                    
                                </div>
                            ) : (
                                <>
                                    <a className="mr-5 hover:text-gray-900 border-y-2 border-y-stone-900">
                                        Inicio
                                    </a>
                                    <a className="mr-5 hover:text-gray-900 border-y-2 border-y-stone-900">
                                        Proximos eventos
                                    </a>
                                    <a className="mr-5 hover:text-gray-900 border-y-2 border-y-stone-900">
                                        Contacto
                                    </a>
                                </>
                            )
                    }
                </nav>
                {isAuthenticated ? <Logout /> : <Login />}
            </div>
        </header>
    );
}