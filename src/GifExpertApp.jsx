import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['naruto', 'dragon ball']);   //el use state se deja con [] para que sea un arreglo

    const onAddCategory = () => {

        setCategories(prevCate => [...prevCate, 'blade']);

    }

    return(
        <>
        <h1>hola mundillo</h1>
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {   //la llaves determinan una expersion de java script
                categories.map( category => {
                    return <li Key={category}>{category}</li>
                })    //el map me permite barrer cada uno de los elementos de los arreglos
            }
        </ol>
        </>
    )
}