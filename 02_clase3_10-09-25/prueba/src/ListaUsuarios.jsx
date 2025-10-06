function ListaUsuarios() {

    const equipo = [
        {id: 1 ,nombre: 'Silvia', tecnologia: 'Product Owner'},
        {id: 2 ,nombre: 'Luis', tecnologia: 'Diseñador UX UI'},
        {id: 3 ,nombre: 'Matias', tecnologia: 'Desarrollador'},
        {id: 4 ,nombre: 'Sabrina', tecnologia: 'Desarrolladora'}
    ];
    
    return (
        <>
        <h2>ListaUsuarios</h2>
        <ul>
        {equipo.map(persona =>(
            <li key={persona.id}>
                <b>{persona.nombre}</b>: {persona.tecnologia}
            </li>
        ))}
    </ul>
        </>
    )
}
export default ListaUsuarios