import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import home from "./home.css";

import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  const client = axios.create({
    baseURL: "https://node-mongodb-api-urrn.onrender.com/books",
  });

  useEffect(() => {
    async function getPost() {
      try {
        const response = await client.get("/");
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPost();
  }, []);

  return (
    <div className="p-4 contenidoHome">
      <div className="p-4 contenidoHomeTabla">
        <div className="contenidoInter flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Tabla
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>

        <div className="contenidoTitulo flex justify-between items-center">
          <h1>Lista de Libros</h1>
          <div className="contenidoBotonAgregar">
            <p>Presiona para agregar un nuevo libro </p>
            <Link to="/books/crear">
              <MdOutlineAddBox className="text-sky-700 icono" />
            </Link>
          </div>
        </div>

        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
