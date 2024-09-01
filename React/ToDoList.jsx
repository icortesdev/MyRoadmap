import { useState } from 'react'; // Importamos el hook useState desde React


function App() {

    // Estado para almacenar el valor de la tarea actual que se está escribiendo
    const [tarea, setTarea] = useState('');

    // Estado para almacenar la lista de tareas añadidas
    const [listaTareas, setListaTareas] = useState([]);

    // Función para manejar el cambio en el input de texto
    const manejarCambioTarea = (event) => {
        setTarea(event.target.value); // Actualiza el estado "tarea" con el valor actual del input
    };

    // Función para añadir una nueva tarea a la lista
    const añadirTarea = () => {
        if (tarea.trim() !== '') { // Verifica que la tarea no esté vacía
            const nuevaTarea = {
                id: Date.now(), // Asigna un ID único a la tarea usando la marca de tiempo actual
                texto: tarea // Guarda el texto de la tarea
            };
            setListaTareas([...listaTareas, nuevaTarea]); // Añade la nueva tarea a la lista de tareas
            setTarea(''); // Limpia el campo de input después de añadir la tarea
        } else {
            alert('El input esta vacio, añade una tarea.')
        }
    };

    // Función para eliminar una tarea de la lista
    const eliminarTarea = (id) => {
        const listaActualizada = listaTareas.filter((tarea) => tarea.id !== id); // Filtra la lista para excluir la tarea con el ID seleccionado
        setListaTareas(listaActualizada); // Actualiza el estado con la lista filtrada
    };


    return (
        <div className="App">
            <header className="App-header">
                <div className='tareas'>
                    <h1>To-do List:</h1>
                    <p>¿Qué tarea deseas añadir?</p>

                    {/* Input para añadir una tarea */}
                    <input
                        type='text'
                        placeholder='Añade tu tarea'
                        value={tarea} // Vincula el valor del input con el estado "tarea"
                        onChange={manejarCambioTarea} // Llama a la función manejarCambioTarea cada vez que el usuario escribe en el input
                    />
                    <button onClick={añadirTarea}>Añadir tarea</button>
                </div>

                <div className='tareasPendientes'>
                    <ul>
                        {/* Muestra la lista de tareas */}
                        {listaTareas.map((tarea, index) => (
                            <li key={index}> {/* Utiliza el índice como key para cada elemento de la lista */}
                                {tarea.texto} {/* Muestra el texto de la tarea */}
                                <button onClick={() => eliminarTarea(tarea.id)}>X</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default App; 