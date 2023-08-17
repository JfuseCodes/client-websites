export default function Landing(){
   
    return (
        <section className='md:flex py-12'>
            <header className='min-h-full'>
                <h3 className='py-4 text-2xl md:text-xl'>Hi, my name is Juday.</h3>
                <h1 className='py-4 text-5xl md:text-7xl font-black'>I'm a Hair and Makeup Artist.</h1>
                <p className='py-2 text-xl md:w-4/5 lg:w-3/5'>I have expertise in stunning makeup looks for all occasions, bringing out your best features.</p>
                <div className='pt-10'>
                    <a href='#contact'><button className='bg-[#f9d07e] opacity-100 font-bold w-full max-w-[475px] sm:w-[210px] h-12 rounded-full border-[.5px] border-b-[3px] border-r-[3px] border-solid border-[#1E1E1E] hover:shadow-button hover:-translate-y-2 hover:-translate-x-2 ease-in-out duration-300 lg:w-52'>Book Me</button></a>
                </div>
            </header>
            <div>
                <img className='sm:w-[60rem]' src="./assets/landing_page/landing.png" alt="" />
            </div>
        </section>
    )
}