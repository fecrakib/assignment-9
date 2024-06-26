

const Job = ({job}) => {
    const {company_logo,company_name,id,job_title,location,salary} = job;
    console.log(job)
    return (
      
              <div className="flex-1 items-center md:flex justify-between m-4  border-2 border-b-gray-500  ">
            <img className="w-[30%] text-center m-auto" src={company_logo} alt="" />
            <div className="text-center">
            <h1>{job_title}</h1>
            <h1>{company_name}</h1>
         
            <h1>{location}</h1>
            <h1>{salary}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4">Show Details</button>

            </div>

            </div>
      
    );
};

export default Job;