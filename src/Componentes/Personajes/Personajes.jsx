import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './Personajes.css'

const Personajes = () =>{
    const [personajeData, setPersonajeData] = useState([])

    const fetchPersonajes =async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        console.log(response)
        setPersonajeData(response.data.results)
    }

    useEffect(() => {
        fetchPersonajes()
    }, [])

    return <div className='contenedor'>
        {
            personajeData.map(data=>(
                
                <div className='tarjeta' key={data.id}>
                    <h1 className='nombre'>{data.name}</h1>
                    <br />
                    <img className='imagen' src={data.image}/>
                </div>
            ))
        }
    </div>
}

export default Personajes