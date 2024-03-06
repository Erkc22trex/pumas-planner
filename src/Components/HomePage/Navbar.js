import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Login';
import Logout from '../Logoutwithredirect';
import DropdownBtn from '../Button';
import SearchBtn from '../Search';    
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
                                <div>
                                    <SearchBtn />
                                    <DropdownBtn />
                                </div>
                            ) : (
                                <>
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