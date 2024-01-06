import { Route, Routes } from "react-router-dom";
import ListProduct from "../components/ListProduct";
import CreateProduct from "../components/CreateProduct";

function MyRoutes() {
   const myRoutes = [
      {
         path: "/",
         element: <ListProduct />,
         id: 1,
      },
      {
         path: "/create",
         element: <CreateProduct />,
         id: 2,
      },
   ];
   return (
      <>
         <Routes>
            {myRoutes.map((page) => (
               <Route path={page.path} element={page.element} key={page.id} />
            ))}
         </Routes>
      </>
   );
}

export default MyRoutes;
