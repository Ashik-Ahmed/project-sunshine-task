import React, { useEffect, useState } from 'react';

const useCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses];
};

export default useCourses;