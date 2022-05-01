import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
export default function ProductSlider({ images }) {
    return (
        <div className='relative prose mx-auto rounded-full'>
            <Gallery >
                <div className='grid grid-cols-3'>
                    {
                        images && images.map(img => <Item key={img.url}
                            original={img.url}
                            thumbnail={img.url}
                            width={800}
                            height={800}
                        >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={img.url} width={200} height={200} />
                            )}
                        </Item>)
                    }

                </div>


            </Gallery>
        </div>
    )
}
