import React from 'react';
import Job from '../Job/Job';

const Jobs = ({data}) => {
    console.log(data)
    return (
      
    <div className='grid md:grid-cols-2 max-w-[1200px]'>
         {
            data.map(job=><Job key={job.id} job={job}></Job>)
         }
    </div>
       
    );
};

export default Jobs;