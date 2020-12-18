---- useState ----
Ejemplo-> const [count, setCount] = useState(0);

¿Qué hace la llamada a useState? Declara una “variable de estado”. Nuestra variable se llama count, 
pero podemos llamarla como queramos, por ejemplo banana. Esta es una forma de “preservar” 
algunos valores entre las llamadas de la función - useState es una nueva forma de usar exactamente 
las mismas funciones que this.state nos da en una clase. Normalmente, las variables “desaparecen” 
cuando se sale de la función, pero las variables de estado son conservadas por React.

Qué pasamos a useState como argumento? El único argumento para el Hook useState() es el estado inicial. 
Al contrario que en las clases, el estado no tiene por qué ser un objeto. Podemos usar números o strings 
si es todo lo que necesitamos. En nuestro ejemplo, solamente queremos un número para contar el número de 
clicks del usuario, por eso pasamos 0 como estado inicial a nuestra variable. 
(Si queremos guardar dos valores distintos en el estado, llamaríamos a useState() dos veces).

¿Qué devuelve useState? Devuelve una pareja de valores: el estado actual y una función que lo actualiza. 
Por eso escribimos const [count, setCount] = useState(). Esto es similar a this.state.count y this.setState en 
una clase, excepto que se obtienen juntos.




---- useEffect ----

Es un hook de efecto secundario, es decir, estamos indicando a React que el componente tiene que hacer algo después 
de renderizarse. React recordará la función y la llamará más tarde después de actualizar el DOM
Ejemplo: 

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;      Esto se ejecuta despues de que el return de abajo haya terminado, DOM mejor dicho.
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



---- checkPropTypes -----

Verificacion de tipos.