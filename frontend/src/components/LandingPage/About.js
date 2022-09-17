import React, { useEffect } from "react";
// IMGs
// import About1 from "../../asset/about1.jpg";
// import About2 from "../../asset/about2.jpg";
// React Icons
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../actions/eventActions";
// Bootstrap
// import { Card } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";

import Message from "../Message";
import Loader from "../Loader";

const About = () => {
  const dispatch = useDispatch();

  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <div className="about-container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="events-image-container">
          {events.map((event) => (
            <div className="about-left" key={event._id}>
              <h1>Non perdere i nostri prossimi eventi </h1>
              <div
                className="img-container"
                style={{ background: `url(${event.image})` }}
              >
                <div className="about-date">
                  <span className="about-date-title">{event.title}</span>

                  <div className="about-date-day-container">
                    <div className="about-day-date">{event.day}</div>
                    <div className="about-month-date">{event.month}</div>
                  </div>
                  <div className="about-address">
                    <FiMapPin style={{ marginRight: "5px" }} />
                    <span>{event.address}</span>
                  </div>
                </div>
              </div>
              <div
                className="img-container"
                style={{ background: `url(${event.image2})` }}
              >
                <div className="about-date">
                  <span className="about-date-title">{event.price}</span>

                  {/* <div className="about-date-day-container">
                    <div className="about-day-date">{event.time}</div>
                    <div className="about-month-date">{event.month}</div>
                  </div> */}
                  {/* <div className="about-address">
                    <FiMapPin style={{ marginRight: "5px" }} />
                    <span>{event.address}</span>
                  </div> */}
                </div>
              </div>
              {/* {event._id !== "62aaef91ba87b0393a047206" ? (
                <div className="about-description">
                  <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                    et eveniet quam. Placeat illo dignissimos, labore est natus
                    asperiores quod consectetur, culpa eius suscipit impedit
                    quis iste illum sed.
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
              ) : (
                ""
              )} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
