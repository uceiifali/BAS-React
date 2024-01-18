import React, { useContext, useEffect, useState } from "react";
import "react-international-phone/style.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleMap from "../Components/Client/Landing/GoogleMap";
import CreateProjectPoper from "../Components/Client/Landing/CreateProjectPoper";
import { Link } from "react-router-dom";
import NavBar from "../Components/Client/Landing/NavBar";
import DesignCarousal from "../Components/Client/Landing/Carousal/DesignCarousal";
import ReviewCarousal from "../Components/Client/Landing/Carousal/ReviewCarousal";
import ProjectsCarousal from "../Components/Client/Landing/Carousal/ProjectsCarousal";
import ClientCarousal from "../Components/Client/Landing/Carousal/ClientCarousal";

import { multiStepContext } from "../Context/StepContext";
import { TypeAnimation } from "react-type-animation";

import Congratus from "../Components/Client/Landing/Congratus/Congratus";
import DesignMultiSteps from "../Components/Client/Landing/MultiSteps/DesignMultiSteps";
import ReviewMultiSteps from "../Components/Client/Landing/MultiSteps/ReviewMultiSteps";
import Image from "../Components/Image";
import Footer from "../Components/HomePage/Footer";
import { Services } from "../utils/consts";
import ClientsSection from "../Components/HomePage/ClientSection/ClientsSection";

const Home = () => {
  const {
    userData,
    setUserData,
    openCongrats,
    setOpenCongrats,
    openDesignSteps,
    setOpenDesignSteps,
    openReviewSteps,
    setOpenReviewSteps,
  } = useContext(multiStepContext);
  const [carousel, setCarousal] = useState("projects");
  const [openPoper, setOpenPoper] = useState(false);

  console.log(carousel);
  

  const center = { lat: 21.3891, lng: 39.8579 };
  const zoom = 10;
  useEffect(() => {
    setUserData(null);
  }, []);

  return (
    <>
      {openCongrats && (
        <Congratus
          onHide={() => setOpenCongrats(false)}
          setOpenCongrats={setOpenCongrats}
          openCongrats={openCongrats}
          show={openCongrats}
        />
      )}

      {openPoper && (
        <CreateProjectPoper
          onHide={() => setOpenPoper(false)}
          setOpenPoper={setOpenPoper}
          setOpenDesignSteps={setOpenDesignSteps}
          setOpenReviewSteps={setOpenReviewSteps}
          show={openPoper}
        />
      )}
      {openDesignSteps && (
        <DesignMultiSteps
          onHide={() => setOpenDesignSteps(false)}
          setOpenDesignSteps={setOpenDesignSteps}
          openDesignSteps={openDesignSteps}
          show={openDesignSteps}
        />
      )}
      {openReviewSteps && (
        <ReviewMultiSteps
          onHide={() => setOpenReviewSteps(false)}
          setOpenReviewSteps={setOpenReviewSteps}
          openReviewSteps={openReviewSteps}
          show={openReviewSteps}
        />
      )}

      <NavBar />
      <section>
        <div
          id={"Home"}
          className="Home-section landing  position-relative   mt-1  "
        >
          <div className="home-layer d-flex align-items-center  justify-content-center position-absolute w-100 h-100">
            <div className="d-flex h-100 w-100 text-center  align-items-center align-items-end-sm justify-content-between">
              <div className="socail-icons-container ">
                <div className="ms-3 socail-icons  bg-light d-flex flex-column my-5">
                  <Link to={"/"}>
                    {" "}
                    <FaFacebookF
                      className="mb-3"
                      size={30}
                      color="#E1B67C"
                    />{" "}
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiFillYoutube
                      className="mb-3"
                      size={30}
                      color="#E1B67C"
                    />{" "}
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiFillInstagram
                      className="mb-3"
                      size={30}
                      color="#E1B67C"
                    />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BsTwitter
                      className="mb-3"
                      size={30}
                      color="#E1B67C"
                    />{" "}
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiOutlineMail
                      className="mb-3"
                      size={30}
                      color="#E1B67C"
                    />{" "}
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <FaSnapchatGhost
                      className="mb-3"
                      size={30}
                      color="#E1B67C"
                    />{" "}
                  </Link>
                </div>
              </div>
              <Container>
                <div className="item  w-100 h-100 d-flex justify-content-center align-items-center  flex-column">
                  <TypeAnimation
                    className="text-white slugon"
                    sequence={[
                      "خدمات هندسية في جميع مجالات الهندسة وإدارة المشاريع باحترافية وجودة عالية وفقًا لأعلى المعايير والاشتراطات وتتميز بالتزامنا بمفهوم الاحتراف والاستشارة والإبداع بمستوى عالي من المهنية لجميع عملائنا",
                      500,
                    ]}
                    speed={50}
                    style={{ fontSize: "2em" }}
                    repeat={Infinity}
                  />

                  <div className="d-flex position-relative    justify-content-center sm-justify-center my-5">
                    <button
                      onClick={() => {
                        setOpenPoper(true);
                      }}
                      className="click_me"
                    >
                      ابدأ مشروعك
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>
      <section id="WhoWeAre" className="whoWeAre  position-relative   my-5">
        <div className="position-absolute  WhoWeAreshape  ">
          <Image
            width={500}
            height={500}
            src={"/bg-right.png"}
            alt="background image"
          />
        </div>
        <Container>
          <div className="position-relative py-5  line-before">
            <h2 className=" f-grey fs-1  sm-header  mb-5 ">من نحن</h2>
            <p className=" f-grey fs-2  sm-par">
              فريق عمل مكون من مهندسين بدرجة مستشارين ومحترفين يسخّرون خبراتهم
              لتلبية متطلبات العملاء ونجاح المشاريع بتكلفة أقل وجودة أعلى، تحت
              إدارة مهندس سعودي مستشار متفرغ
            </p>
          </div>
        </Container>
      </section>
      
      <ClientsSection/>
      <section id="Services" className="Services Home-services py-5 my-10">
        <Container>
          <h2 className="f-grey fs-1  sm-header  mb-5 ">خدمتنا</h2>
          <Row>
            {Services.map((ele, index) => (
              <Col
                key={index}
                md={6}
                lg={4}
                className="d-flex mt-3 justify-content-center"
              >
                <div className="card-flibing">
                  <div className="card w-[324px] h-[326px] border-none d-flex justfiy-cotent-center">
                    <div className="card-inner">
                      <div className="card-front d-flex flex-column">
                        <Image
                          width={70}
                          height={70}
                          src={ele.img}
                          alt="card Image "
                        />
                        <h5 className="mt-3">{ele.Name}</h5>
                      </div>
                      <div className="card-back">
                        <p className="text-center" style={{ fontSize: "14px" }}>
                          {ele.backCard}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        id={"projects"}
        className="projects w-90 py-5  mx-auto py-5 my-5"
      >
        <Container>
          <h2 className="f-grey fs-1  sm-header  mb-5 ">من مشاريعنا</h2>
          <div className=" d-flex justify-content-center">
            <button
              onClick={() => {
                setCarousal("projects");
              }}
              className={`btn sm-fs me-3 ${
                carousel === "projects" ? "main-color" : "main-bg-color pro-btn"
              }`}
            >
              مشاريعنا{" "}
            </button>
            <button
              onClick={() => {
                setCarousal("design");
              }}
              className={`pro-btn btn sm-fs me-3 ${
                carousel === "design" ? "main-color" : "main-bg-color"
              }`}
            >
              التصميم الداخلي{" "}
            </button>
            <button
              onClick={() => {
                setCarousal("review");
              }}
              className={` pro-btn btn sm-fs me-3 ${
                carousel === "review" ? "main-color" : "main-bg-color"
              }`}
            >
              {" "}
              الاشراف{" "}
            </button>
          </div>

          {carousel === "projects" ? (
            <ProjectsCarousal />
          ) : carousel === "design" ? (
            <DesignCarousal />
          ) : (
            <ReviewCarousal />
          )}
        </Container>
      </section>
      

      <Footer/>
      
    </>
  );
};

export default Home;
