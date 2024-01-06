import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import axios from "axios";
import { API } from "../../helpers/file";
import { useEffect } from "react";
function ListProduct() {
   const list = useSelector((state) => state.list);
   const dispatch = useDispatch();
   async function readProduct() {
      let res = await axios.get(API);
      dispatch({ type: "GET_PRODUCT", payload: res.data });
   }

   useEffect(() => {
      readProduct();
   }, []);
   console.log(list);

   async function deleteProduct(id) {
      await axios.delete(`${API}/${id}`);
      readProduct();
   }

   return (
      <section id="list">
         <div className="wrapper">
            <div className="list">
               {list ? (
                  list.map((el) => (
                     <div className="list__card" key={el.id}>
                        <div className="list__image-wrapper">
                           <img
                              className="list__image"
                              src={el.linkPhoto}
                              alt={el.name}
                           />
                        </div>
                        <div className="list__content-wrapper">
                           <h1 className="list__title">{el.name}</h1>
                           <p className="list__description">{el.description}</p>
                        </div>
                        <div className="list__button-wrapper">
                           <button
                              onClick={() => deleteProduct(el.id)}
                              className="list__delete-button button"
                           >
                              delete
                           </button>
                        </div>
                     </div>
                  ))
               ) : (
                  <h1>Ничего нету...</h1>
               )}
            </div>
         </div>
      </section>
   );
}

export default ListProduct;
