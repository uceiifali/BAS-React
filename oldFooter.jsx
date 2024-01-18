import React from 'react'

export default function oldFooter() {
  return (
    <div>
      <section id={"contact-us"} className="contact-us  my-5 ">
        <Container>
          <h2 className="f-grey fs-1  sm-header  mb-5 ">تواصل معنا </h2>
        </Container>
      </section>
              <section className="Map-section mt-3 ">
        <Container>
          <Row>
            <Col
              md={6}
              className="d-flex p-0 justify-content-end sm-justify-center"
            >
              <div className="card-container my-3 ">
                <Card
                  style={{
                    width: "360px",
                    height: "360px ",
                    border: "none",
                    padding: "20px",
                    justifyContent: "center",
                  }}
                >
                  <Card.Body className=" d-flex align-items-start  justify-content-center flex-column  p-5">
                    <p className="d-flex justify-start main_color  mb-5">
                      {" "}
                      <FaLocationDot className="ms-2" /> المملكة العربية
                      السعودية -الرياض-حي النخيل
                    </p>
                    <p className="d-flex justify-start main_color fs-6 mb-5">
                      {" "}
                      <IoMailSharp className="ms-2" /> Info@bsa.com.sa
                    </p>
                    <p className="d-flex justify-start main_color fs-6 mb-5">
                      {" "}
                      <BsFillTelephoneFill className="ms-2" /> 966112255999+
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex p-0   justify-content-start sm-justify-center"
            >
              <div className="my-3 map-container d-flex align-items-center justify-content-center">
                <Card style={{ width: "360px   ", height: "360px " }}>
                  <div className="map-contanier w-100 h-100 overflow-hidden">
                    {/* <GoogleMap className="w-100 h-100" center={center} zoom={zoom} /> */}
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer>
        <div className="copy-right     d-flex justify-content-center  bg-main-color">
          <p className="text-light sm-fs  copy-right-text position-relative    p-4 d-flex text-center">
            {" "}
            Copyright © 2023 BSA Engineering Consultancy{" "}
          </p>
        </div>
      </footer>
    </div>
  )
}
