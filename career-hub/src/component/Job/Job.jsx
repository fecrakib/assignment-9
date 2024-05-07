

const Job = ({job}) => {
    const {company_logo,company_name,id,job_title,location,salary} = job;
    console.log(job)
    return (
        <div>
              <div className="flex justify-between items-center  border-2 border-b-gray-500 m-5 w-[500px]">
            <img className="w-[230px]" src={company_logo} alt="" />
            <div>
            <h1>{job_title}</h1>
            <h1>{company_name}</h1>
         
            <h1>{location}</h1>
            <h1>{salary}</h1>

            </div>

            </div>
        </div>
    );
};

export default Job;