import { FaceBookIcon } from "../sub_components/Icons";

export default function Footer(){
    return (
        <section className='mx-auto flex flex-col items-center md:flex-row md:justify-between my-6 max-w-6xl px-6 lg:px-10'>
            <header className='text-center md:text-justify'>
                <a href='https://www.facebook.com/PrettylooksbyJuday' className='flex justify-center md:hidden'>
                    <FaceBookIcon height={'w-6'} width={'h-6'} />
                </a>
                <h1>Juday Belmonte</h1>
                <h1>Professional Hair & Makeup Artist</h1>
            </header>
            
            <footer className='flex items-center text-center md:text-justify'>
                <p>© 2023 JB <br/>Developed by <a className='underline underline-offset-auto' href='https://jfusedesigns.com'>Jfuse</a></p>
            </footer>
        </section>
    )
}