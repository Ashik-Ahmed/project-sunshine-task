import React from 'react';
import useCourses from '../../hooks/useCourses';
import CourseCard from './CourseCard';

const Home = () => {

    const [courses] = useCourses();

    console.log(courses);

    return (
        <div className='min-h-screen'>
            <div class="card image-full rounded-none">
                <figure><img className='w-screen h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWUv20Ek96rYNT-WmllfxeY0NR6G5uSPE6A&usqp=CAU" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


            <div>
                <div className=' md:mx-12 md:mt-12'>
                    <p className='text-lg font-bold bg-yellow-400 inine p-2 ml-0 text-left border-red-400 border-b-4'>Courses</p>
                    <div className='md:grid grid-cols-4 gap-4 my-8'>
                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;