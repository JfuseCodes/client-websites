import { Image } from "../sub_components/myLibrary"
import data from "../sub_components/data"

export default function Gallery() {

    return (
        <section id='gallery' className='mt-24 mb-20 mx-auto'>
            <h1 className='text-5xl font-black text-center mb-16'>Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6'>{
                data[0].gallery.map( image => {
                    return <Image key={image.id} src={image.id} alt='make up looks'/>
                })
            }</div>
        </section>
    )
}