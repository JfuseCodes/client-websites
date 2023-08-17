import { OfferCard } from "../sub_components/myLibrary"
import data from "../sub_components/data"
export default function Introduction() {

console.log(data);

    return (
        <section className='flex flex-col items-center gap-8 mt-8'>
            <header className='text-center'>
                <h3 className='text-2xl mb-4'>Driven by Beauty, Guided by Expertise</h3>
                <h1 className='font-black text-5xl mb-4'>What I Offer</h1>
            </header>
            <div className=''>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data && data[0].cards.map( card => {
                        return <OfferCard key={card.id} image={card.imgName} alt={card.alt} title={card.title} description={card.description} callToAction={card.action} href={card.href}/>
                    })
                }
                </div>
            </div>
        </section>
    )
}