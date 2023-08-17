import { EventCard } from "../sub_components/myLibrary"
import data from "../sub_components/data"

export default function FeaturedLooks(){
    return(
        <section className='mt-24 mb-20 mx-auto'>
            <div className='fluid'>
                <h1 className='text-5xl font-black text-center mb-12'>Featured Looks</h1>
            {
                data[0].featured_looks.map( event => {
                    return (<EventCard key={event.id} image={event.id} imageAlt={event.alt} title={event.details.title} description={event.details.description} imageSide={event.imageSide}/>)
                })
            }</div>
        </section>
    )
}