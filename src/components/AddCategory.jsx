import { useState } from "react"

export const AddCategory = () => {

    const[inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
   /*  sin desestructuracion
   const onInputChange = ({event}) => {
        console.log(event.arget.value);
        setInputValue( event.target.value);
    }*/

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue)

    }


    return(
        <form onSubmit = { (event) => onSubmit(event)}>
            <input 
            type="text" 
            placeholder="Ingrese una Categoria"
            value={ inputValue }
            onChange={ onInputChange }   // onChange={ (event) => onInputChange(event) }
        />
        </form>
    )
}