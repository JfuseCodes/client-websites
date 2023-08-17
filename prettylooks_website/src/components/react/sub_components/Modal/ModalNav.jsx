import { useState } from "react"
import { useEffect } from "react"

export default function ModalNav({modalLinkClick}) {

    return (
        <nav role='navigation'>
            <ul className='flex flex-col'>
                <li>
                   <a onClick={modalLinkClick} className='block py-4 text-center text-xl' href='#skills'>Skills</a>
                </li>
                <li>
                    <a onClick={modalLinkClick} className='block py-4 text-center text-xl' href='#showcase'>Showcase</a>
                </li>
                <li>
                    <a onClick={modalLinkClick} className='block py-4 text-center text-xl' href='#latest-Articles'>Latest Articles</a>
                </li>
            </ul>
        </nav>
    )
}