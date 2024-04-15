import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function DropdownBtn() {
    const { isAuthenticated, logout, user } = useAuth0();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    return (
        <>
            {
                isAuthenticated && (
                    <div className='relative inline-block text-left'>
                        <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 dark:text-white" type="button" onClick={toggleDropdown}>
                            <span className="sr-only">Open user menu</span>
                            <span className='text-center px-2'>
                                {user?.name}
                            </span>
                            <img className="w-8 h-8 me-2 rounded-full" src={user?.picture || "logo512.png"} alt="user photo" />
                            {/* <svg className="w-2.5 h-2.5 ms-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg> */}
                        </button>

                        {/* <div id="dropdownAvatarName" className={`z-10 ${!dropdownVisible ? 'hidden' : ''} bg-white divide-y divide-gray-700 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}> */}
                        <div id="dropdownAvatarName" className={`${!dropdownVisible ? 'hidden' : ''} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                            {
                                dropdownVisible && (
                                    <>
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-gray-900">
                                            {/* <div className="font-medium">Pro User</div> */}
                                            <div className="truncate">{user?.email}</div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-900" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                                            {/* <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li> */}
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">Configuración</a>
                                            </li>
                                        </ul>
                                        <div className="py-2" onClick={() => logout()}>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white">Cerrar sesión</a>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
}

