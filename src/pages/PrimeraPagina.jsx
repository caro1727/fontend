import React from "react";
import { useNavigate } from "react-router-dom";
import primeraPagina from "./primeraPagina.css";

const PrimeraPagina = () => {
  const navigate = useNavigate();
  return (
    <div className="contenido">
      <div className="contenidoTest">
        <div>
          <h1>BOOK MASTER</h1>
          <div>
            <p>Aplicación ideal para tener la información de sus libros favoritos</p>
          </div>
          <p className="p1">Ingresa para registrar su libro</p>
        </div>
        <button
          className=" boton  bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => navigate("/home/")}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default PrimeraPagina;
