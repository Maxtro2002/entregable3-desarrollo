import { useEffect, useState } from "react";
import MyVerticallyCenteredModal from "./popUp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ReactCountryFlag from "react-country-flag";
import React from "react";

function ResumenEmpresas() {
  const [modalShow, setModalShow] = useState(false);
  const [networks, setNetworks] = useState([]);
  const [company, setCompany] = useState([]);
  const url = "http://api.citybik.es/v2/networks";
  const redirect = "http://api.citybik.es";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    setNetworks(response.networks);
  };

  const fetchData2 = async (href) => {
    let newLink = redirect + href;
    const response = await fetch(newLink, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    setCompany(response.network);
    setModalShow(true);
  };

  return (
    <div className="content">
      <h1 className="m-4">Empresas</h1>
      <div>
        {modalShow ? (
          <MyVerticallyCenteredModal
            data={company}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        ) : null}
      </div>
      <div className="cards__container">
        {networks.map((network) => {
          return (
            <Card key={network.id}>
              <Card.Body>
                <Card.Title>Nombre de red: {network.name}</Card.Title>
                <Card.Text>Nombre de la Compañía: {network.company}</Card.Text>
                <Card.Text>
                  Pais: {network.location.country} -{" "}
                  <ReactCountryFlag
                    countryCode={network.location.country}
                    svg
                  />
                </Card.Text>
              </Card.Body>

              <Button
                variant="success"
                onClick={() => fetchData2(network.href)}
                className="m-4"
              >
                Estaciones
              </Button>
              <br />
            </Card> 
          );
        })}
      </div>
    </div>
  );
}

export default ResumenEmpresas;
