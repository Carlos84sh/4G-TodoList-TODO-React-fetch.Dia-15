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
		// Función para eliminar tarea, como parametros index y eventt

		let newTodo = [...todo];
		let removed = newTodo.splice(index, 1);
		setTodo(newTodo);
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
		<div className="text-center mt-5 col-md-12">
			<div className="col-md-12 header">
				<h1 className="display-2 titulo">Todo List</h1>
			</div>
			<div className="row w-100">
				<div className="input container input-group mx-auto col-md-3 position-absolute">
					<h1 className="display-4 col-md-12">Escribe tu tarea</h1>
					<input
						onChange={handleChange} // Si el input tiene un value lo recoge
						onKeyPress={handleKeyPress} // Llama a la funcion handleKeyPress al pulsar Intro
						value={Value} // {Value} es el nombre que ponemos al valor que contenga el input
						placeholder=""
						type="text"
						className="form-control"
					/>
				</div>
				<div className="list container col-md-4">
					<ul>
						{todo.map((value, index) => (
							<ol className="Lista" key={index}>
								{value}
								{"                   "}
								<button
									className="btn btn-outline-dark"
									type="button"
									onClick={event => deleteRow(index, event)}>
									<i className="fas fa-times-circle" />
								</button>
							</ol>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
