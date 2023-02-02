// 1 - which information will be printed on the screen ?
/* 
  alert(calculateBinomial(2,3)) => 25
  alert(calculateBinomial(4,5)) => 81
  alert(numberOfCalls) => 2
  alert(typeof squareOfA) => "undefined". La variable squareOfA pertenece unicamente al scope de la function calculateBinomial, por lo 
                             que fuera de ésta function, no es posible acceder a ella. 
*/

// 2 - Given the following data array: ["Apple", "Orange", "Banana", "Strawberry", "Grape", "Mango", "Melon", "Pineapple", "Peach", "Peach"];
const array = [
  "Apple",
  "Orange",
  "Banana",
  "Strawberry",
  "Grape",
  "Mango",
  "Melon",
  "Pineapple",
  "Peach",
  "Peach",
];

// a) Get all strings containing the letter 'p'
const letter = "p";

/* Case strict */
function findStringsWithLetterStrict(array, letter) {
  const stringsWithLetterFound = array.filter((string) =>
    string.includes(letter)
  );
  return stringsWithLetterFound.length
    ? stringsWithLetterFound
    : [`String with letter "${letter}" not found`];
}
/* Case not strict */
function findStringsWithLetterNotStrict(array, letter) {
  const letterToUpperCase = letter.toUpperCase();
  const stringsWithLetterFound = array.filter((string) =>
    string.toUpperCase().includes(letterToUpperCase)
  );
  return stringsWithLetterFound.length
    ? stringsWithLetterFound
    : [`String with letter "${letter}" not found`];
}

// b) Obtain the "Grape" string
const str = "grape";

/* Case strict */
function findStringStrict(array, str) {
  const stringFound = array.find((string) => string === str);
  return stringFound ? stringFound : "String not found";
}
/* Case not strict */
function findStringNotStrict(array, str) {
  const strToUpperCase = str.toUpperCase();
  const stringFound = array.find(
    (string) => string.toUpperCase() === strToUpperCase
  );
  return stringFound ? stringFound : "String not found";
}

// 3 - Using the following function, print by console the message: “Etendo!!!”
const etendo = () => {
  console.log("Etendo!!!");
};
const mostrar = (param) => {
  param();
};
mostrar(etendo);

// 4 - Write a JavaScript program to check whether a matrix is a diagonal matrix or not
const matrixTrue = [
  [1, 0, 0],
  [0, 2, 0],
  [0, 0, 3],
];
const matrixFalse = [
  [1, 0, 0],
  [0, 2, 3],
  [0, 0, 3],
];
const matrixTrueB = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

function isDiagonalMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

// REACT //

/* 
1) They are parameters of a component

2) A function or class that returns an element

3) Class Component & Function Component

4) It is the mix between pure HTML and javascript , for this reason JSX is used to identify React syntax

5) Using props & Using values from the global application context usage

6) setValue(“my value”)

7) Two arguments, which are the effect and the dependencies

8) import name from 'name';

9) It is a mechanism that provides a way to pass data through the component tree without manually passing props at all levels

10) import { MyComponent } from 'MyComponent';

11) La diferencia es que un componente funcional es una funcion plana de JavaScript que acepta propiedades 
    como argumento y retorna un elemento de React. Un componente de clase en cambio, requiere que sea extendido de la 
    clase React.Components y al que se le define la funcion render() que retorna un elemento de React.

12) Se puede setear uno o varios estados en un componente mediante le Hook useState

13) Cuando cambiamos el estado de un componente este se vuelve a renderizar y los valores actualizados del estado
    son usados para generar un nuevo DOM virtual

14)
    function Elements({ array }) {
      return (
        <>
          <ul>
            {array &&
              array.map(({ firstname, lastname, dni }, index) => (
                <div key={index}>
                  <li>{firstname}</li>
                  <li>{lastname}</li>
                  <li>{dni}</li>
                </div>
              ))}
          </ul>
        </>
      );
    }

15)
    function Title ({data}) {
      return (
        <h1>{data}</h1>
      )
    }

16) El error es que no esta retornando nada. La solucion quedaria de la siguiente manera:
    export const Button = ({text}) => {
      return (
        <div className="button">
          <h1 className="text-button">{text}</h1>
        </div>
      )
    }

17) Lo que hace la primera vez que se monta el componente es renderizar un h1 con un "1" dentro 
    y debajo un boton que al acerle click actualiza el estado sumandole 1 al valor previo. 
    Al cambiar el estado se vuelve a renderizar el componente con el valor actualizado a "2".

18) En el caso que quisiera obtener data:
    async function getData() {
      try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();

    En el caso que quisiera postear data:
    async function postData(dataToPost) {
      try {
        
        const response = await fetch("https://api.example.com/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToPost),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    postData();

    Podria tambien utilizar alguna libreria de JS para peticiones o llamadas como axios

19) El useEffect permite la ejecucion de efectos secundarios dentro de componentes como
    el fetching de datos y actualizacion del DOM principalmente. Recibe 2 argumentos:
    - El primero es la funcion a ejecutar al montar el componente
    - El segundo es un array de dependencias las cuales estara "escuchando" o "mirando" y cuando
      detecta algun cambio volvera a ejecutar la funcion del primer argumento

20) 
    function useCounter() {
      const [count, setCount] = useState(0);

      const increment = (number) => setCount(count + number);
      const decrement = (number) => setCount(count - number);

      return {
        count,
        increment,
        decrement,
      };
    }

    function Component() {
      const { increment, decrement, count } = useCounter();
      const number = 2; // aqui el desarrollador podra setear la cantidad a incrementar / disminuir

      return (
        <>
          <h1>{count}</h1>
          <button onClick={() => increment(number)}>Increment</button>
          <button onClick={() => decrement(number)}>Decrement</button>
        </>
      );
    }
*/
