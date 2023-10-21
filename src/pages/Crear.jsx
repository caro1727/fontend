import { useState } from "react";
import BotonRetroceder from "../components/BotonRetroceder";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { useSnackbar } from "notistack";

const Crear = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const { enqueueSnackbar} = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios
      .post("https://node-mongodb-api-urrn.onrender.com/books", data)
      .then(() => {
        setLoading(false);
        //enqueueSnackbar('Libro creado con éxito', {variant: 'success'})
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        //enqueueSnackbar('Error', {variant: 'error'})
        //alert("Ha ocurrido un error, porfavor revisa la consola");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BotonRetroceder />
      <h1 className="text-3x1 my-4">Crear Libro</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Titulo</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Autor</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Año de publicación
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick = {handleSaveBook}> 
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Crear;
