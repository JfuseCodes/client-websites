import {useEffect} from 'react'
import { RightArrowIcon } from "../sub_components/Icons";
import {useForm, ValidationError } from '@formspree/react'

export const OfferCard = ({image,title, description, callToAction, imageALT, href}) => {
    return(
        callToAction && href ? 
            <a href={`#${href}`} className='border-[.5px] border-solid border-[#1E1E1E] max-w-6xl space-y-2 p-4 hover:shadow-button rounded-xl hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 border-b-4 border-r-4 text-justify'>
                <img src={`./assets/offer_cards/logo_${image}.png`} alt={`${imageALT}`} />
                <h1 className='font-black text-2xl'>{title}</h1>
                <p className='text-md'>{description}</p>
                {callToAction && <p className='hover:text-gray-600 flex'>{callToAction}<span className='ml-2'><RightArrowIcon/></span> </p>}
            </a>
        :
        <div className='border-[.5px] border-solid border-[#1E1E1E] max-w-6xl space-y-2 p-4 hover:shadow-button rounded-xl hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 border-b-4 border-r-4'>
            <img src={`./assets/offer_cards/logo_${image}.png`} alt={`${imageALT}`} />
                <h1 className='font-black text-2xl'>{title}</h1>
                <p>{description}</p>
        </div>
    )
};

export const EventCard = ({image, imageALT, title, description, imageSide}) => {
    
    const direction = imageSide == 'left' ? 'md:flex-row' : 'md:flex-row-reverse';

    return(
        <div className={`border-b-[.1px] border-[#1E1E1E] flex flex-col ${direction} bg-white`}>
            <img className='w-screen md:max-w-[50%]' src={`./assets/featured_looks/featured_look_${image}.jpeg`} alt={`${imageALT}`} />
            <div className='md:w-[40%] flex flex-col justify-center px-10 text-center md:mx-auto py-10 bg-white'>
                <h1 className='text-4xl font-black md:self-start'>{title}</h1>
                <p className='text-l md:text-xl mt-8 w-full text-justify'>{description}</p>
            </div>
        </div>
    )
}

export const Image = ({src}) => {

    return(
        <>
            <img src={`./assets/gallery/fl${src}.jpeg`} alt="make up look" />

        </>
    )
};

// export const FormSpreeForm = () => {
//     return(
//         <form className='flex flex-col md:flex-col md:w-1/2 mt-12' id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
//             <header className='md:hidden text-2xl text-center font-bold'>Or fill out the form below</header>
//             <fieldset className='flex flex-col mt-4' id="fs-frm-inputs">
                
//                 <input className='h-12 rounded-full border-[.5px] border-b-[3px] border-solid border-[#1E1E1E] mb-4 pl-6' type="text" name="name" id="full-name" placeholder="*Your name" required=""/>
              
//                 <input className='h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6' type="email" name="_replyto" id="email-address" placeholder="*email@domain.tld" required=""/>
 
//                 <textarea className='rounded-3xl border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6 pt-6' name="" id="" cols="30" rows="10" rows="5" name="message" id="message" placeholder="*How can I help?" required=""></textarea>
//                 <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
//             </fieldset>
//             <input className='bg-[#f9d07e] opacity-100 font-bold w-full max-w-[475px] sm:w-[210px] h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] hover:shadow-button hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 lg:w-52 md:cursor-pointer'  type="submit" value="Submit"/>
//         </form>
//     )
// }

export const ContactForm = () => {
    const [state, handleSubmit] = useForm('mzblelzd');
    if(state.succeeded) return <h1 className='text-5xl text-center md:w-1/2'>Thanks, I will get back to you shortly!</h1>

    // return(
    //     <form className='flex flex-col md:flex-col md:w-1/2 mt-12' onSubmit={handleSubmit}>
            
    //         <input className='h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6' placeholder='*Your name' type="text" id='full-name' name='full-name' />
    //         <input className='h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6' placeholder='*Your email' id='email' type='email' name='email' />
    //         <ValidationError 
    //             prefix='Email'
    //             field='email'
    //             errors={state.errors}
    //         />
    //         <textarea className='rounded-3xl border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] mb-4 pl-6 pt-6' placeholder='*How can I help?' id='message' name='message' cols="30" rows="10" rows="5">

    //         </textarea>
    //         <ValidationError 
    //             prefix='Message'
    //             field='message'
    //             errors={state.errors}
    //         />
    //         <button className='bg-[#f9d07e] opacity-100 font-bold w-full max-w-[475px] sm:w-[210px] h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] hover:shadow-button hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 lg:w-52'  type='submit' disabled={state.submitting}>Message Me</button>
    //     </form>
    // )
    return(
        <h1 className='text-12 text-center md:text-4xl md:w-1/2 font-black mt-12 md:mt-24'>Thank you for choosing me to be your makeup artist, I will get back to you shortly!</h1>
    )
}

