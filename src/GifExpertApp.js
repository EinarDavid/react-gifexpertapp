import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dave']);

    /*const handleAdd = () => {
        //setCategories( [...categories, 'Ai']);
        setCategories(cats => [...cats, 'Ai']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            

            {/*<button onClick={handleAdd}>Agregar</button>*/}
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (<GifGrid 
                            key={category}
                            category={category}
                            />
                    ))
                }
            </ol>

        </>
    );
};
export default GifExpertApp;