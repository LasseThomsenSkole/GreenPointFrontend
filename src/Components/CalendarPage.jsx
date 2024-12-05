import React, { useEffect, useState } from "react";
import {Calendar} from "@/components/ui/calendar.jsx"
import Header from "@/Components/Header.jsx";
import CourseList from "@/Components/CourseList.jsx"
import * as course from "eslint-plugin-react/lib/rules/jsx-props-no-spread-multi.js";

export default function CalendarPage() {
    const [date, setDate] = useState(new Date());
    const [courses, setCourses] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredCourses, setFilteredCourses] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/kalender/coursefeed")
            .then((response)=>response.json())
            .then((data)=> {
                setCourses(data);
                console.log(data);
            })
            .catch((error) => console.error("Errormessage", error))
    }, []);


    //chatgpt
    // Filter courses based on the selected date
    useEffect(() => {
        const filtered = courses.filter(
            (course) => new Date(course.date).toLocaleDateString() === selectedDate.toLocaleDateString()
        );
        setFilteredCourses(filtered);
    }, [selectedDate, courses]); // Re-run filtering when courses or selectedDate change



    const hardcodedCourse = {
        title: "Intro to Advanced Techniques",
        description: "A full-day course on advanced optical techniques.",
        date: "2024-12-05",
        startTime: "09:00",
        endTime: "17:00",
        location: "Copenhagen HQ",
    };


    return (
        <>
            <Header/>
            <div className="justify-between gap-20 flex ml-20 mr-20 mt-8">
                <div className="flex flex-col w-full">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-xl border-2"/>
                    <h3 className="text-2xl font-semibold text-[#003811]">Kurser d. {selectedDate.toLocaleDateString()}</h3>
                    <h4 className="font-bold">{hardcodedCourse.title}</h4>
                    <p className="text-[#003811]">{hardcodedCourse.date} {hardcodedCourse.startTime} - {hardcodedCourse.endTime} {course.location}</p>
                    <p>{hardcodedCourse.description}</p>
                </div>

                <div className="flex flex-col w-full ">
            <CourseList/>
                </div>
            </div>
        </>
    );
}
