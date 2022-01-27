import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    /*const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs));
            //.then(setImages); ESTA FUNCION CON LA DE ARRIBA ES COMPLETAMENTE IGUAL SOLO MAS CORTA
    }, [category])*/

    const {data:images, loading} = useFetchGifs(category);

    //console.log(state);


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {
                loading && <p className='animate__animated animate__flash'>Loading</p>
            }
            <div className='card-grid'>
                {
                    
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }


            </div>
        </>
    )
}
//El mapeo se puede realizar de esta forma tb
/*images.map(images =>{
                        return(
                            <li key={images.id}>
                              {
                                   images.title 
                              }
                            </li>
                        )
                    })
                    images.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                    
{loading ? 'Cargando...' : 'Data Cargada'}*/
