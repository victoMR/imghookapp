import React, { useState } from "react";

export default function CambiarIma() {
  const [puertaAbierta, setPuertaAbierta] = useState(false);

  const cambiarEstadoPuerta = () => {
    setPuertaAbierta(!puertaAbierta);
  };

  return (
    <>
      <div
        className="cont"
        style={{
          backgroundColor: "gray",
          margin: "1%",
          borderRadius: "20px",
          padding: "1%",
        }}
      >
        <h1 className="tit" style={{ fontFamily: "monospace", fontSize:"35px"}}>
          PUERTAS
        </h1>
        <p>
          <img
            className="puertas"
            style={{
              display: "block",
              marginLeft: "35%",
            }}
            src={
              process.env.PUBLIC_URL +
              `/img/door_${puertaAbierta ? "abierta" : "cerrada"}.png`
            }
            alt={puertaAbierta ? "Puerta Abierta" : "Puerta Cerrada"}
          />
        </p>
        <p>
          <button
            className="butt"
            onClick={cambiarEstadoPuerta}
            style={{
              display: "block",
              marginLeft: "50%",
              backgroundColor: "green",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Abrir | Cerrar
          </button>
        </p>
      </div>
    </>
  );
}
