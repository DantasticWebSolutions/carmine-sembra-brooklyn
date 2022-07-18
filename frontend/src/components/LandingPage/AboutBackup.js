import React, { useEffect } from "react";
// IMGs
import About1 from "../../asset/about1.jpg";
import About2 from "../../asset/about2.jpg";
// React Icons
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../actions/eventActions";
// Bootstrap
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import Message from "../Message";
import Loader from "../Loader";

const About = () => {
  const dispatch = useDispatch();

  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  console.log(events);
  const event0 = events[0];
  const event1 = events[1];
  console.log(event0);
  console.log(event1);
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>Non perdere i nostri prossimi eventi </h1>
        <div className="img-container" style={{ background: `url(${About1})` }}>
          <div className="about-date">
            <span className="about-date-title"></span>

            <div className="about-date-day-container">
              <div className="about-day-date">16</div>
              <div className="about-month-date">GIU</div>
            </div>
            <div className="about-address">
              <FiMapPin style={{ marginRight: "5px" }} />
              <span>Social Club</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="img-container" style={{ background: `url(${About2})` }}>
          <div className="about-date down">
            <span className="about-date-title">Carmine Sembra Brooklyn</span>

            <div className="about-date-day-container">
              <div className="about-day-date">31</div>
              <div className="about-month-date">GIU</div>
            </div>
            <div className="about-address">
              <FiMapPin style={{ marginRight: "5px" }} />
              <span>Latte +</span>
            </div>
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea et
          eveniet quam. Placeat illo dignissimos, labore est natus asperiores
          quod consectetur, culpa eius suscipit impedit quis iste illum sed.
        </div>
        <div className="button-container">
          <button className="primaryButton">
            <BsWhatsapp className="button-icon" />
            &nbsp;
            <span>Prenota</span>
          </button>
          <div className="module-border-wrap">
            <button className="secondaryButton">
              <BsTelephone className="button-icon" />
              &nbsp;
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// {
//   loading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant="danger">{error}</Message>
//   ) : (
//     <>
//       <Row>
//         {events.map((event) => (
//           <Col key={event._id} sm={12} md={6} lg={4} xl={3}>
//             <Card className="my-3 mx-1 p-3 rounded prodotto">
//               {/* <Link to={`/event/${event._id}`}> */}
//               <Card.Img src={event.image} variant="top" />
//               {/* </Link> */}

//               <Card.Body className="card-body">
//                 <Card.Title as="div">
//                   <strong>{event.title}</strong>
//                 </Card.Title>
//                 <Card.Text as="h3">{event.day}</Card.Text>
//                 <Card.Text as="h3">{event.month}</Card.Text>
//                 <Card.Text as="h3">{event.address}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// }
