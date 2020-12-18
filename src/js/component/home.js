import React from "react";

import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

export function Home() {
	const [todo, setTodo] = useState([]);
	const [Value, setValue] = useState("");

	function handleChange(event) {
		//Esta funcion coge lo que tenga en el value del Label y lo guarda como event
		setValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter" && Value != "") {
			setTodo([...todo, Value]); // los puntos lo que hace es añadir todos los valores a la varibla todo
			setValue("");
		}
	};

	function deleteRow(index, event) {
		// quiero borrar una tarea y quiero identificar qué tarea en específico quiero "borrar", también necesitamos imprimir el nuevo array, sin ese todo que borramos.
		// for(let i=0; i<todo.length; i++) Victor me pregunta por qué lo quiero recorrer
		let newTodo = [...todo]; //aquí copio mi array para utilizarlo con el splice más cómodo
		let removed = newTodo.splice(index, 1); //nos devuelve un array de los elementos eliminados, me da el que eliminé
		setTodo(newTodo); //se hace el setTodo del nuevo array, sino saldría el array antes del splice
	}

	function getTodos() {
		let requestOptions = {
			method: "GET",
			redirect: "follow"
		};
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/carlos984",
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	}

	// Creación del componente
	return (
		<div className="text-center mt-5">
			<div className="row w-100">
				<div className="col-md-12">
					<h1 className="display-2 titulo">LISTA DE TAREAS</h1>

					<div className="input container input-group mx-auto">
						<input
							onChange={handleChange} // Si el input tiene un value lo recoge
							onKeyPress={handleKeyPress} // Llama a la funcion handleKeyPress al pulsar Intro
							value={Value} // {Value} es el nombre que ponemos al valor que contenga el input
							placeholder=""
							type="text"
							className="form-control"
						/>
					</div>
					<div className="list container">
						<ul>
							{todo.map((value, index) => (
								<ol className="Lista" key={index}>
									{value}
									{"  " + index}
									<button
										type="button"
										onClick={event =>
											deleteRow(index, event)
										}>
										<i className="fas fa-times-circle botonx" />
									</button>
								</ol>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

// Nos hace falta añadir value en todo y que se agregue ese input cada vez que apretamos enter 	<ul>{todo.map(value)=>(<li>{value}</li>)}</ul>
// se declara la variable const con un "value" que se cambia al aplicar "setValue", por eso se usa use state
//setTodo(todo
// en el handler no necesitas retornar nada, en ningun lado coloques return.
// Los eventos se colocan sin return, se utilizan con handle<event>
//useEffect está presente cuando hay efectos colaterales (se establece un valor), React busca dispararlo siempre, programación funcional. Efecto secundario: cada vez que cambias una variable SIEMPRE.
// setTodo([...todo, value]); linea 18 a 21 javascript moderno
// falta el evento de eliminar
