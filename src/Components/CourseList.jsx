import React, { useEffect, useState } from "react";

export default function CourseList() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/kalender/coursefeed")
            .then((response)=>response.json())
            .then((data)=> {
                setCourses(data);
                console.log(data);
            })
            .catch((error) => console.error("Errormessage", error))
    }, []);

    return (
        <>
                <h1 className="text-4xl text-[#003811] font-bold">Kursusliste</h1>
                {courses.map((course, index) => (
                    <div key={course.id || index}>
                        <p>{course.title}</p>
                        <p>{course.description}</p>
                        <p>{course.date}</p>
                        <p>{course.startTime}</p>
                        <p>{course.endTime}</p>
                        <p>{course.location}</p>
                        <p>{course.jobTitle}</p>
                    </div>
                ))}
        </>
    );
}
