import Baner from "../Baner/Baner";
import Beaner from "../Baner/Baner";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import {Outlet} from "react-router-dom"
const Home = () => {
    return (
        <div className=" m-auto:">
         <Header></Header>
         <Baner></Baner>
         <Cart></Cart>
       <Footer></Footer>
         <Outlet></Outlet>
        </div>
    );
};

export default Home;