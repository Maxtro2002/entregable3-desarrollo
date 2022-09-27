import { useEffect, useState } from "react"
import MyVerticallyCenteredModal from "./popUp"
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
    }

    const fetchData2 = async (href) => {
        let newLink= redirect + href
        const response = await fetch(newLink, {method: 'GET'})
        .then(response => response.json())
        .catch(error => console.log(error))

        setCompany(response.network)
        setModalShow(true)
        

    }


    return(
        <div className="content">
            <div>
                {modalShow ? <MyVerticallyCenteredModal data={company} show={modalShow} onHide={() => setModalShow(false)}/>
                : null}
            </div>
            {networks.map(network => {
                

                return(
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card key={network.id}>
                                <Card.Body>
                                    <Card.Title>{network.name}</Card.Title>
                                    <Card.Text>Nombre de la Compañía: {network.company}</Card.Text>
                                    <Card.Text>Pais: {network.location.country}</Card.Text>
                                </Card.Body>

                                <Button variant="success" onClick={() => fetchData2(network.href)}>Estaciones</Button>
                                <hr></hr>
                            </Card>
                            </Col>
                        ))}
                    </Row>

                )
            })}

            
        </div>
    )
}

export default ResumenEmpresas