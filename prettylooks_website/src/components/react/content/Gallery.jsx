import { Image } from "../sub_components/myLibrary"
import data from "../sub_components/data"

export default function Gallery() {
console.log(`data:${data[0]}`)
    return (
        <section id='gallery' className='mt-24 mb-20 mx-auto'>
            <h1 className='text-5xl font-black text-center mb-16'>Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6'>{
                data[0].gallery.map( image => {
                    return <Image className='w-full h-full' key={image.id} src={image.id} />
                })
            }</div>
        </section>
    )
}