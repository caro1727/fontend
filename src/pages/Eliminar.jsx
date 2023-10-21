import { useState } from "react";
import BotonRetroceder from "../components/BotonRetroceder";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//import { useSnackbar } from "notistack";

const Eliminar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  //const {enqueueSnackbar} = useSnackbar()

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://node-mongodb-api-urrn.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        //enqueueSnackbar('Libro eliminado con éxito', {variant: 'success'})
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
      <h1 className="text-3x1 my-4">ELiminar Libro</h1>
      {loading ? <Spinner /> : " "}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2x1">
          Estas seguro de que desea eliminar el libro?
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Eliminar;
