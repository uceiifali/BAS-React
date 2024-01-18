import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ClientCarousal from '../../Client/Landing/Carousal/ClientCarousal';
import Style from "./ClientsSection.module.css"
const ClientsSection = () => {
  return (
    <section id={"clients"} className={`clients p-5 client-section`}>
        <Container>
          <h2 className="f-grey fs-1  sm-header z-50 relative mb-5 ">عملائنا</h2>
          <ClientCarousal />
        </Container>
      </section>
  )
}

export default ClientsSection