import { useEffect, useState } from "react"
import ListaEstaciones from "./listado-estaciones"
import MyVerticallyCenteredModal from "./popUp"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ResumenEmpresas(){
    const [modalShow, setModalShow] = useState(false);
    const [networks, setNetworks] = useState([])
    const [company, setCompany] = useState([])
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

    const fetchData2 = async (href) => {
        let newLink= redirect + href
        const response = await fetch(newLink, {method: 'GET'})
        .then(response => response.json())
        .catch(error => console.log(error))

        setCompany(response.network)
        

    }


    return(
        <div className="content">
            {networks.map(network => {
                

                return(
                    <div key={network.id}>
                        <p>Nombre de la red: {network.name}</p>
                        <p>Nombre de la Compañía: {network.company}</p>
                        <p>Pais: {network.location.country}</p>
                        
                        <Button variant="primary" onClick={() => setModalShow(true)}>Estaciones</Button>
                        <hr></hr>
                    </div>



                )
            })}
            <MyVerticallyCenteredModal data={company} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default ResumenEmpresas