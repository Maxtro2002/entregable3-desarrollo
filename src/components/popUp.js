import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function MyVerticallyCenteredModal(props) {

    const stations = props.data.stations
    const msg = "Dato no encontrado"

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
        <div className="cards__container">
            {stations.map(station => {
              if(station.free_bikes != null && station.empty_slots != null){
                var slots1 = station.free_bikes;
                var slots2 = station.empty_slots;
              }
                return(
                  <Card key = {station.id}>
                  <Card.Body>
                  <Card.Title>Estación </Card.Title>
                      <Card.Title>{station.name}</Card.Title>
                      <Card.Text>Última Actualización: {station.timestamp}</Card.Text>
                      <Card.Text>Bicicicletas Libres: {station.free_bikes === null ? msg : station.free_bikes}</Card.Text>
                      <Card.Text>Espacios Libres: {station.empty_slots === null ? msg : station.empty_slots}</Card.Text>
                      <Card.Text>Cantida de espacios totales: {slots1+slots2}</Card.Text>
                  </Card.Body>
                  </Card>        
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