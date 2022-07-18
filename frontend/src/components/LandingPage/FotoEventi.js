import React, { useState, useEffect } from "react";
import event1 from "../../asset/evento1.png";
import event2 from "../../asset/evento2.png";
import event3 from "../../asset/evento3.png";
import { FiMapPin } from "react-icons/fi";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { listFotos } from "../../actions/fotoActions";

import Message from "../Message";
import Loader from "../Loader";

const FotoEventi = () => {
  const dispatch = useDispatch();

  const fotoList = useSelector((state) => state.fotoList);
  const { loading, error, fotos } = fotoList;

  useEffect(() => {
    dispatch(listFotos());
  }, [dispatch]);
  return (
    <div className="fotoEventi">
      <div className="flexContainer">
        <h1>Cerca foto Eventi Passati</h1>
        <p>
          Ecco a voi l'accesso a tutte le nostre foto
          <br /> Tag Us and Stay Tuned
        </p>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="events-image-container">
          <div className="eventi-container">
            {fotos.map((event) => (
              <div className="event" key={event._id}>
                <div
                  className="event-img"
                  style={{ background: `url(${event.image})` }}
                >
                  <div className="event-date">
                    <div className="date-contenitor">
                      <span>{event.day}</span>
                      {event.month}
                      <span>{event.year}</span>
                    </div>
                  </div>
                </div>
                <div className="event-info">
                  <div className="event-address">
                    <FiMapPin style={{ marginTop: "-2px" }} />
                    <span>{event.address}</span>
                  </div>
                  <div className="event-title">{event.title}</div>
                  <div className="module-border-wrap">
                    <a
                      target="_blank"
                      href={event.link}
                      className="secondaryButton"
                    >
                      <span className="colored-text">Apri</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* DISPLAY FOTOS FROM MONGODB */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FotoEventi;
