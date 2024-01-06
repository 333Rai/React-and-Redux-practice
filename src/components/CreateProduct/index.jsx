import { useState } from "react";
import "./style.css";
import axios from "axios";
import { API } from "../../helpers/file";
function CreateProduct() {
   const [isModal, setIsModal] = useState(true);
   const [inputsValue, setInputsValue] = useState({
      name: "",
      description: "",
      linkPhoto: "",
   });

   async function createProduct() {
      await axios.post(API, {
         name: inputsValue.name,
         description: inputsValue.description,
         linkPhoto: inputsValue.linkPhoto,
      });
      setInputsValue({
         name: "",
         description: "",
         linkPhoto: "",
      });
   }

   return (
      <section id="create">
         <div className="wrapper">
            <div className="create">
               <button
                  onClick={() => setIsModal(true)}
                  className="create__title-button button"
               >
                  Создать что-то...
               </button>
               {isModal ? (
                  <div className="create__wrapper">
                     <ion-icon
                        style={{
                           position: "absolute",
                           top: "15px",
                           right: "20px",
                           fontSize: "23px",
                           cursor: "pointer",
                           backgroundColor: "#000",
                           color: "#fff",
                           borderRadius: "50%",
                           padding: "1.5px",
                        }}
                        onClick={() => setIsModal(false)}
                        name="close"
                     ></ion-icon>
                     <div className="create__inputs-wrapper">
                        <input
                           onChange={(event) =>
                              setInputsValue({
                                 ...inputsValue,
                                 name: event.target.value,
                              })
                           }
                           className="create__input"
                           type="text"
                           placeholder="Добавьте название..."
                           autoFocus
                           value={inputsValue.name}
                        />
                        <input
                           onChange={(event) =>
                              setInputsValue({
                                 ...inputsValue,
                                 description: event.target.value,
                              })
                           }
                           className="create__input"
                           type="text"
                           placeholder="Добавьте описание..."
                           value={inputsValue.description}
                        />
                        <input
                           onChange={(event) =>
                              setInputsValue({
                                 ...inputsValue,
                                 linkPhoto: event.target.value,
                              })
                           }
                           className="create__input"
                           type="text"
                           placeholder="Добавьте ссылку на фото..."
                           value={inputsValue.linkPhoto}
                        />
                     </div>
                     <div className="create__button-wrapper">
                        <button
                           onClick={createProduct}
                           className="create__button button"
                        >
                           Создать
                        </button>
                     </div>
                  </div>
               ) : (
                  ""
               )}
            </div>
         </div>
      </section>
   );
}

export default CreateProduct;
