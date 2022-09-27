import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function MyVerticallyCenteredModal(props) {

    const stations = props.data.stations
    const msg = "Dato no encontrado"
    console.log(stations)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Estaciones
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            {stations.map(station => {

                return(
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card key = {station.id}>
                            <Card.Body>
                            <Card.Title>Estación</Card.Title>
                                <Card.Title>{station.name}</Card.Title>
                                <Card.Text>Bicicicletas Libres: {station.free_bikes === null ? msg : station.free_bikes}</Card.Text>
                                <Card.Text>Espacios Libres: {station.empty_slots === null ? msg : station.empty_slots}</Card.Text>
                                <Card.Text>Última Actualización: {station.timestamp}</Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    

                )
            })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;