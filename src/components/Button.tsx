import {useState} from "react";

/**
 * propriedades do component
 * para utilizar propriedades, precisamos criar uma interface e passala como param na function
 * o children eutilizado para adicionar propriedades dentro da tag do component
 *
 * Estrutura
 *  Component: sempre pensando em estrutura e reuso.
 *  Propriedade: params do component.
 *  Estado: basicamente cada component é uma instancia e tem seu estado.
 *
 */
interface ButtonProps {
  color: string;
  children: string;
}

export function Button(props: ButtonProps) {
  /**
   *  A function useStata() do react retorna um array
   *  então podemos podemos usar os [] para fazer uma desestruturação do retorno
   *  no caso value/function
   */
  const [counter, setCounter] = useState(1)

  function increment() {
    //neste momento estamos populando o atritubo counter com um novo valor
    //cada btn tem seu estado!
    //
    setCounter(counter+1)
  }

  return (
    <button type="button"
            style={{backgroundColor: props.color}}
            onClick={increment}
    >
      <strong>{props.children} </strong>
      <strong>{props.color} </strong>
      <strong> {counter} </strong>
    </button>
  )
}