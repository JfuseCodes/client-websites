import {useEffect, useState} from 'react'
import Header from './main_pages/Header'
import Main from './main_pages/Main';
import Footer from './main_pages/Footer';

export default function App() {
    const [modalHidden, setModalHidden] = useState('hidden');
    const [modalState, setModalState] = useState('');

    const handleModalOpen = () => {
        console.log('open zeh modal');
        setModalHidden('')
    }

    const handleModalClose = () => {
        setModalHidden('hidden')
    }

    const handleModalLink = () => {
        setModalHidden('hidden');
    }

    useEffect(() => {
        modalHidden === 'hidden' ? setModalState('') : setModalState('hidden');
    }, [modalHidden]);

    switch(modalHidden) {
        case '':
            return (
                <Header modalLinkClick={handleModalLink} modalState={modalState} handleModalOpen={handleModalOpen} modalHidden={modalHidden} handleModalClose={handleModalClose} />
            )
        
        case 'hidden':
            return(
                <>
                    <Header modalLinkClick={handleModalLink} modalState={modalState} handleModalOpen={handleModalOpen} modalHidden={modalHidden} handleModalClose={handleModalClose}/>
                    <Main/>
                </>
            )
    }
}

