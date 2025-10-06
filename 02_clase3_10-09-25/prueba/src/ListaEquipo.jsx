import React from 'react'

function ListaEquipo({equipo}) {
    // const equipo = [
    //     {id: 1 ,nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://via.placeholder.com/100'},
    //     {id: 2 ,nombre: 'Luis', rol: 'PDiseñador UX UI', imagen: 'https://via.placeholder.com/100'},
    //     {id: 3 ,nombre: 'Matias', rol: 'Desarrollador', imagen: 'https://via.placeholder.com/100'},
    //     {id: 4 ,nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://via.placeholder.com/100'}
    // ];
  return (
    <>
    <h2>Equipo de TalentoLab</h2>
    <ul>
        {equipo.map(persona =>(
            <li key={persona.id}>
                <b>{persona.nombre}</b>: {persona.tecnologia}
            </li>
        ))}
    </ul>
    </>
  );
}

export default ListaEquipo