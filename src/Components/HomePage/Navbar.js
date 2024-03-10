import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Login';
import Logout from '../Logoutwithredirect';
import DropdownBtn from '../Button';
import NotificationButton from './NotificationButton';
import SearchBar from '../Search';
import BtnEvent from '../BntEvent';

export function Navbar() {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="text-gray-900 bg-amber-400 body-font sticky top-0">
            <div className="container mx-auto flex justify-between flex-wrap p-2 md:p-5 flex-col md:flex-row items-center">

                <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
                    <img
                        src="./puma2.png"
                        className="w-12 h-16 text-white p-2 bg-transparent rounded-full"
                    />
                    <span className="ml-3 text-2xl text-white font-bold">
                        PUMAS PLANNER
                    </span>
                </div>
                {
                    isAuthenticated && (
                        <SearchBar />
                    )
                }
                <nav className="flex flex-wrap items-center text-base justify-center md:justify-end space-x-4 md:space-x-6">
                    {/*md:ml-auto*/}
                    {
                        isAuthenticated && (
                            <>
                                <NotificationButton />
                                <div className="h-12 border-2 border-white"></div>
                                <BtnEvent />
                            </>
                        )
                    }
                    <DropdownBtn />
                </nav>

                {!isAuthenticated && <Login />}
            </div>
        </header>
    );
}

