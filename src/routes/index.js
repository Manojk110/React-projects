import React from "react";
import PathConstants from "./pathConstants";
import Signup from "../pages/Signup";

const Brands=React.lazy(()=>import("../pages/Brands"))
const Cart=React.lazy(()=>import("../pages/Cart"))
const Categories=React.lazy(()=>import("../pages/Categories"))
const Tata=React.lazy(()=>import("../pages/Tata"))
const Usta=React.lazy(()=>import("../pages/Usta"))
const Puma=React.lazy(()=>import("../pages/Puma"))
const signup=React.lazy(()=>import("../pages/Signup"))
const Jockey=React.lazy(()=>import("../pages/Jockey"))
const Levis=React.lazy(()=>import("../pages/Levis"))
const Mycart=React.lazy(()=>import("../components/Mycart"))
const Tommy=React.lazy(()=>import("../pages/Tommy"))
const Vero=React.lazy(()=>import("../pages/Vero"))
const W=React.lazy(()=>import("../pages/W"))
const And=React.lazy(()=>import("../pages/And"))
const Biba=React.lazy(()=>import("../pages/Biba"))




const routes=[
    {path:PathConstants.BRANDS,element:<Brands/>},
    {path:PathConstants.CART,element:<Cart/>},
    {path:PathConstants.CATEGORIES,element:<Categories/>},
    {path:PathConstants.TATA,element:<Tata/>},
    {path:PathConstants.USTA,element:<Usta/>},
    {path:PathConstants.PUMA,element:<Puma/>},
    {path:PathConstants.SIGNUP,element:<Signup/>},
    {path:PathConstants.JOCKEY,element:<Jockey/>},
    {path:PathConstants.LEVIS,element:<Levis/>},
    {path:PathConstants.MYCART,element:<Mycart/>},
    {path:PathConstants.TOMMY,element:<Tommy/>},
    {path:PathConstants.BIBA,element:<Biba/>},
    {path:PathConstants.VERO,element:<Vero/>},
    {path:PathConstants.W,element:<W/>},
    {path:PathConstants.AND,element:<And/>}
   
]
export default routes