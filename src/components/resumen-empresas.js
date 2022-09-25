import { useEffect, useState } from "react"

function ResumenEmpresas(){

    const [networks, setNetworks] = useState([])
    const url = "http://api.citybik.es/v2/networks"

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () =>{
        const response = await fetch(url, {method: 'GET'})
        .then(response => response.json())
        .catch(error => console.log(error))

        setNetworks(response.networks)
        console.log(response.networks)
    }

    return(
        <div>
            {networks.map(network => {

                return(
                    <div key={network.id}>
                        <p>Nombre de la red: {network.name}</p>
                        <p>Nombre de la Compañía: {network.company}</p>
                        <p>Pais: {network.location.country}</p>
                        <p>Total bicicletas libres: {}</p>
                        <p>Total espacios libres: {}</p>
                        
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default ResumenEmpresas