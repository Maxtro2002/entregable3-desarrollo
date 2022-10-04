import useState from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function MyVerticallyCenteredModal(props) {
  const stations = props.data.stations;
  const msg = "Dato no encontrado";

  const [all_free_bikes, setAllFB] = useState();
  const [all_empty_slots, setAllES] = useState();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Infomacion adicional</Popover.Header>
      <Popover.Body>
        <p>Todos los espacios libre son: {all_empty_slots}</p>
        <p>La cantidad de biciletas libres es de: {all_free_bikes}</p>
      </Popover.Body>
    </Popover>
  );

  const Information = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button
        variant="outline-primary"
        className="btn__info"
        onClick={handleCount}
      >
        Doble click para mas info
      </Button>
    </OverlayTrigger>
  );

  const handleCount = () => {
    var temp_stations = stations;
    var all_empty_slots = 0;
    var all_free_bikes = 0;
    for (var i in temp_stations) {
      all_empty_slots = all_empty_slots + temp_stations[i].empty_slots;
      all_free_bikes = all_free_bikes + temp_stations[i].free_bikes;
    }
    setAllFB(all_free_bikes);
    setAllES(all_empty_slots);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Estaciones</Modal.Title>
      </Modal.Header>
      <br />
      <Information />
      <Modal.Body>
        <div className="cards__container">
          {stations.map((station) => {
            if (station.free_bikes != null && station.empty_slots != null) {
              var slots1 = station.free_bikes;
              var slots2 = station.empty_slots;
            }

            return (
              <Card key={station.id}>
                <Card.Body>
                  <Card.Title>Estación</Card.Title>
                  <Card.Title>{station.name}</Card.Title>
                  <Card.Text>
                    Última Actualización: {station.timestamp}
                  </Card.Text>
                  <Card.Text>
                    Bicicicletas Libres:{" "}
                    {station.free_bikes === null ? msg : station.free_bikes}
                  </Card.Text>
                  <Card.Text>
                    Espacios Libres:{" "}
                    {station.empty_slots === null ? msg : station.empty_slots}
                  </Card.Text>
                  <Card.Text>
                    Cantida de espacios totales: {slots1 + slots2}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
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
