import { FaceBookIcon } from "../sub_components/Icons"
// import { FormSpreeForm } from "../sub_components/myLibrary"
import { ContactForm } from "../sub_components/myLibrary"

export default function Contact(){
    return(
        <section id='contact' className='px-6 w-full mx-auto max-w-6xl lg:px-10 mt-20 flex flex-col md:flex-row md:justify-between'>
            
            <section className='md:w-1/2'>
                <h1 className="text-4xl font-black mb-16 text-center md:text-justify">Just say hi.</h1>
                <p className='md:text-2xl mb-4 md:w-[80%] text-center md:text-justify'>I am always open to discuss your hair and makeup needs.</p>
                <p className='md:text-xl text-slate-500 mb-[.2px] text-center md:text-justify mt-12'>Email me at</p>
                <p className='md:text-2xl font-bold text-center md:text-justify'>
                    <a href="mailto: prettylooksbyjuday@gmail.com">prettylooksbyjuday@gmail.com</a>
                </p>

                <section className='hidden md:flex md:flex-col md:mt-12'>
                    <header>
                        <h1 className='font-medium text-slate-500 mb-2'>Follow</h1>
                    </header>
                    <a href="https://www.facebook.com/PrettylooksbyJuday">
                        <FaceBookIcon width={'w-8'} height={'h-8'}/>
                    </a>
                </section>
            </section>
                
            {/* <form className='flex flex-col md:flex-col md:w-1/2 mt-12' action="">
                    
                    <header className='md:hidden'>
                        <h1 className='text-2xl text-center font-bold'>Or fill out the form below</h1>
                    </header>
                    
                    <section className='flex flex-col mt-4'>
                        <input className='h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6' type="text" name="" id="" placeholder='Your name'/>
                        <input className='h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6' type="text" name="" id="" placeholder='Your email or phone number/messenger'/>
                        <textarea className='rounded-3xl border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6 pt-6' name="" id="" cols="30" rows="10" placeholder='How can I help?'></textarea> 
                    </section>
                    
                    <footer>
                        <button className='bg-[#f9d07e] opacity-100 font-bold w-full max-w-[475px] sm:w-[210px] h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] hover:shadow-button hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 lg:w-52'>Message Me</button>
                    </footer>
                    
            </form> */}
            {/* <FormSpreeForm/> */}
           {/* <section> */}
                <ContactForm/>
            {/* </section> */}
        </section>
    )
}