import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
              درباره ما
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
               حوزه های فعالیت
            </HashLink>
           
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                تماس با ما
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900"  smooth to="/get-demo">
                Demo our products
            </HashLink>
            <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" to="/" >
            صفحه اصلی
            </Link>
        </>
    )
}

export default NavLinks;