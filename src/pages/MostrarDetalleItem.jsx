import { useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import BotonRetroceder from "../components/BotonRetroceder";
import Spinner from "../components/Spinner";

const MostrarDetalleItem = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const client = axios.create({
    baseURL: `https://node-mongodb-api-urrn.onrender.com/books/${id}`
  });

  useEffect(() => {
    async function getPost() {
      try {
        const response = await client.get(`/`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPost();
  }, []);

  return (
    <div className="p-4">
      <BotonRetroceder />
      <h1 className="text-3x1 my-4">Detalles del libro</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Titulo</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Autor</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Fecha de creación</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Ultima actualización</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostrarDetalleItem;
