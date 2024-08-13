import React, { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState(['']); //Mantiene una lista de inputs

  const handleInput = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleKey = (index, event) => {
    if (event.key === 'Enter' && inputs[index]) {
      setInputs([...inputs, inputs[index]]); //Agrega un nuevo input con el valor del input actual
	  if (index === 0) {
      }
    }
  };

  const handleRemove = (index) => {
	//cada input será no editable
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <div className="text-center">
      <label for="input">
	  <h1 className="display-3" style={{ fontFamily: "'roboto'",  color: "black"}}>Todos</h1>
	 </label>
      {inputs.map((input, index) => (
        <div key={index} 
		style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}> 
          <input
		  	id="input" 
		  	placeholder="!Ingresa algo!"
            type="text"
            value={input}
            onChange={e => handleInput(index, e)}
            onKeyDown={e => handleKey(index, e)}
            style={{ display: 'block', marginRight: '0px' }}
            readOnly={index !== 0} //Solo el primer input es editable
          />
          {index !== 0 && (
            <button onClick={() => handleRemove(index)} style={{ cursor: 'pointer' }}>
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
