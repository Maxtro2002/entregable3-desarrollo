import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function ListaEmpresas(){
    const [networks, setNetworks] = useState([])
    const url = "http://api.citybik.es/v2/networks"
    const redirect = "http://api.citybik.es"

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
                var newLink= redirect + network.href

                return(
                    <div key={network.id}>
                        <p>Nombre de la red: {network.name}</p>
                        <p>Nombre de la Compañía: {network.company}</p>
                        <p>Pais: {network.location.country}</p>

                        <p>href: {newLink}</p>
                        {/* <a href={newLink} target={'_blank'} rel="noreferrer"> -API</a><br /> */}
                        <hr></hr>
                    </div>



                )
            })}
        </div>
    )
}
export default ListaEmpresas;