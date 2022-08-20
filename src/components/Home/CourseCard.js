import React from 'react';

const CourseCard = ({ course }) => {

    const { name, price, deadline, img } = course;

    return (
        <div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-60' src={img} alt="Shoes" /></figure>
                <div class="card-body p-0">
                    <h2 class="card-title p-0">{name}</h2>
                    <div className='flex justify-between font-bold'>
                        <p>Price: ${price}</p>
                        <p>Deadline: {deadline}</p>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm btn-warning font-extrabold">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;