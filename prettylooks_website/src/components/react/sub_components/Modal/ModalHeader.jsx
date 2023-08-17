import { CancelIcon } from "../Icons"
export default function ModalHeader({handleClick}){
    return (
        <header className='text-right'>
        <button onClick={handleClick} type='button' className='btn' aria-label='Close navigation'>
            <CancelIcon/>
        </button>
    </header>
    )
};