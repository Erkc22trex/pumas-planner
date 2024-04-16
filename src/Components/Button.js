import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Modal } from '../Components/HomePage/Modal';
import Configuracion from './Settings';


export default function DropdownBtn() {
    const { isAuthenticated, logout, user } = useAuth0();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        // Al abrir el modal, también cerramos el menú desplegable si está abierto
        if (dropdownVisible) {
            setDropdownVisible(false);
        }
    };

    return (
        <>
            {isAuthenticated && (
                <div className='relative inline-block text-left'>
                    <button
                        id='dropdownAvatarNameButton'
                        data-dropdown-toggle='dropdownAvatarName'
                        className='flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 dark:text-white'
                        type='button'
                        onClick={toggleDropdown}
                    >
                        <span className='sr-only'>Open user menu</span>
                        <span className='text-center px-2'>{user?.name}</span>
                        <img
                            className='w-8 h-8 me-2 rounded-full'
                            src={user?.picture || 'logo512.png'}
                            alt='user photo'
                        />
                    </button>
                    <div
                        id='dropdownAvatarName'
                        className={`${!dropdownVisible ? 'hidden' : ''
                            } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    >
                        {dropdownVisible && (
                            <>
                                <div className='px-4 py-3 text-sm text-gray-900 dark:text-gray-900'>
                                    <div className='truncate'>{user?.email}</div>
                                </div>
                                <ul className='py-2 text-sm text-gray-700 dark:text-gray-900' aria-labelledby='dropdownInformdropdownAvatarNameButtonationButton'>
                                    <li>
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b-0 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                                            onClick={toggleOpen}
                                        >
                                            <svg
                                                className="w-3 h-3 me-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                                                />
                                            </svg>
                                            Settings
                                        </button>
                                    </li>
                                </ul>
                                <div className='py-2'>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-900 dark:hover:text-white'
                                        onClick={() => logout()}
                                    >
                                        Cerrar sesión
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
            <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
                <div>
                    <Configuracion />
                </div>
            </Modal>
        </>
    );
}
