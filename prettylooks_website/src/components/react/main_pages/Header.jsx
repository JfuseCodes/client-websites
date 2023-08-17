import ModalHeader from "../sub_components/Modal/ModalHeader"
import ModalNav from "../sub_components/Modal/ModalNav"
import { HamburgerIcon } from "../sub_components/Icons"

export default function Header({modalState,handleModalOpen, modalHidden, handleModalClose, modalLinkClick}) {
    return (
        <header className='flex z-40 w-full items-center justify-between border-transparent px-2 py-8 lg:px-4 mx-auto max-w-6xl'>
                <a className={`${modalState}`}>
                    <img className='absolute w-24 top-0' src="./prettylookslogo.png" alt="" />
                </a>
                
                <div>
                    <div>
                        <nav className='hidden sm:block' role='navigation'>
                            <ul className='flex items-center gap-6'>
                                <li>
                                    <a className='text-md' href="#featuredlooks">Featured Looks</a>
                                </li>
                                <li>
                                    <a className='text-md' href="#gallery">Gallery</a>
                                </li>
                                <li>
                                    <a className='text-md' href="#aboutme">About Me</a>
                                </li>
                            </ul>
                        </nav>
                        <button onClick={handleModalOpen} className={`sm:hidden ${modalState}`}>
                            <HamburgerIcon/>
                        </button>
                    </div>
                </div>

                <div id='menu-modal' className={`modal ${modalHidden}`} aria-hidden='false'>
                    <div className='fixed inset-0 bg-default px-8 py-4 text-default'>
                        <div className='space-y-6' role='dialog' aria-modal='true'>
                            <ModalHeader handleClick={handleModalClose}/>
                            <ModalNav modalLinkClick={modalLinkClick}/>
                        </div>
                    </div>
                </div>
        </header>
    )
}