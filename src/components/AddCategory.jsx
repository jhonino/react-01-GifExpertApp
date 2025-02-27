import { useState } from "react"

export const AddCategory = () => {

    const[inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value);
    }
   /*  sin desestructuracion
   const onInputChange = ({event}) => {
        console.log(event.arget.value);
        setInputValue( event.target.value);
    }*/

    return(
        <input 
            type="text" 
            placeholder="Ingrese una Categoria"
            value={ inputValue }
            onChange={ onInputChange }   // onChange={ (event) => onInputChange(event) }
        />
    )
}