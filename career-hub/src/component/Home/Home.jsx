import { useLoaderData } from "react-router-dom";
import Baner from "../Baner/Baner";

import Cart from "../Cart/Cart";

import Jobs from "../Jobs/Jobs";

const Home = () => {
    const data  = useLoaderData();
  
    return (
        <div className=" m-auto max-w-[1200px]">
       
         <Baner></Baner>
         <Cart></Cart>
         {/* {
            
                 data.map(job=><Jobs key={job.id} job={job}></Jobs>)

         } */}
         <Jobs key={1} data={data}></Jobs>
     
    
        </div>
    );
};

export default Home;