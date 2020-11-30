import React, { useState } from 'react';

function FilterProduct({plural_name, singular_name, marcas, functionFilter}) {
    const optionDefault =  { text: "Selecione uma "+singular_name, value: 0 }
    const [select, setSelect] = useState(optionDefault);

    var handleChange = (event) => {
        setSelect(event.target.value);
        functionFilter("marca", event.target.value)
    }

    var text_label = () =>{
        return plural_name ? "Filtrar por "+(plural_name)+":" : "Filtrar"
    }

    return (<>
        <form>
            <div className="form-group">
                <br />
                <label> {text_label()} </label>
                <select className="form-control" id="FormControlSelect" value={select} onChange={handleChange}>
                <option value={optionDefault.value}>{optionDefault.text}</option>
                    {
                        marcas.map((marca, index) => {
                            return (
                                <option key={index} value={marca.marca} >{marca.marca}</option>
                            );
                        })
                    }
                </select>
                <br />
                <br />
            </div>
        </form>
    </>);
}
export default FilterProduct;