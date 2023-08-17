import { useState } from "react"
import { useEffect } from "react"

export default function ModalNav({modalLinkClick}) {

    return (
        <nav role='navigation'>
            <ul className='flex flex-col'>
                <li>
                   <a onClick={modalLinkClick} className='block py-4 text-center text-xl' href='#featured_looks'>Featured Looks</a>
                </li>
                <li>
                    <a onClick={modalLinkClick} className='block py-4 text-center text-xl' href='#gallery'>Gallery</a>
                </li>
                <li>
                    <a onClick={modalLinkClick} className='block py-4 text-center text-xl' href='#about_me'>About Me</a>
                </li>
            </ul>
        </nav>
    )
}