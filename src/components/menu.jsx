import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { RxLapTimer } from 'react-icons/rx';
import { TbNumbers, TbForms } from 'react-icons/tb';

function menu()
{
    const [visible, setVisible] = useState(false);

    function handleDropDownMenu()
    {
        setVisible(!visible);
    }
    return(
        <header className="w-full bg-white shadow-lg flex flex-row justify-between">
            <nav className="h-8 flex flex-col md:flex-row">
                <label className="cursor-pointer flex w-8 h-8 leading-8 items-center justify-center text-2xl md:hidden">
                    <button type="button" onClick={handleDropDownMenu}>
                        ☰
                    </button>
                </label>
                <ul className={`bg-white px-4 ${visible ? '' : 'hidden'} flex-col md:flex md:flex-row md:gap-4`}>
                    <li className="h-8 leading-8">
                        <NavLink to="/" className="nav-link">
                            <span className="flex flex-row gap-2 items-center">
                                <FaHome/>
                                {' '}
                                Inicial
                            </span>
                        </NavLink>
                    </li>
                    <li className="h-8 leading-8">
                        <NavLink to="/timer" className="nav-link">
                            <span className="flex felx-row gap-2 items-center">
                                <RxLapTimer/>
                                {' '}
                                Timer
                            </span>
                        </NavLink>
                    </li>
                    <li className="h-8 leading-8">
                        <NavLink>

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default menu;