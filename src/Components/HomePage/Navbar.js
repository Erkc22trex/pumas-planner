import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Login';
import Logout from '../Logoutwithredirect';
import DropdownBtn from '../Button';
import NotificationButton from './NotificationButton';
import SearchBar from '../Search';

export function Navbar() {
    const { isAuthenticated } = useAuth0();

    return (
        <header className="text-gray-900 bg-amber-400 body-font sticky">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
                    <img
                        src="./puma2.png"
                        className="w-12 h-16 text-white p-2 bg-transparent rounded-full"
                    />
                    <span className="ml-3 text-2xl text-white font-bold">
                        PUMAS PLANNER
                    </span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:justify-end space-x-6">
                    {
                        isAuthenticated && (
                            <>
                                <SearchBar />
                                <NotificationButton />
                            </>
                        )
                    }
                    {/* {isAuthenticated ? (
                        <>
                            <NotificationButton />
                            <SearchBar />
                        </>
                    ) : (
                        <a className="hover:text-gray-900 border-y-2 border-y-stone-900">
                            CONTACTOS 
                        </a>
                    )} */}
                    <DropdownBtn />
                </nav>
                {!isAuthenticated && <Login />}
            </div>
        </header>
    );
}