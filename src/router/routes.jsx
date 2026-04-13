import { Home } from "../pages/Home";
import { Casuais } from "../pages/Casuais";
import { Esportivos } from "../pages/Esportivos";
import { Chuteiras } from "../pages/Chuteiras";
import { Ajuda } from "../pages/Ajuda";
import { NotFound } from "../pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/casuais",
        element: <Casuais></Casuais>,
    },
    {
        path: "/esportivos",
        element: <Esportivos></Esportivos>,
    },
    {
        path: "/chuteiras",
        element: <Chuteiras></Chuteiras>,
    },
    {
        path: "/ajuda",
        element: <Ajuda></Ajuda>,
    },

    {
        path: "*",
        element: <NotFound></NotFound>
    }
];
