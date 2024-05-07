import React from 'react';
import Job from '../Job/Job';

const Jobs = ({job}) => {
    return (
        <div className='max-w-[1200px] grid md:grid-cols-2'>
            <Job key={job.id} job={job}></Job>
        </div>
    );
};

export default Jobs;