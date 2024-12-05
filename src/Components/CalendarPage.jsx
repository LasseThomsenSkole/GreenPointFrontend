import React, { useEffect, useState } from "react";
import {Calendar} from "@/components/ui/calendar.jsx"
import Header from "@/Components/Header.jsx";
import CourseList from "@/Components/CourseList.jsx"

export default function CalendarPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    useEffect(() => {
        fetch("http://localhost:8080/kalender")
            .then((response)=>response.json())
            .then((data)=> {
                setCourses(data);
                console.log(data);
            })
            .catch((error) => console.error("Errormessage", error))
    }, []);

    return (
        <>
            <Header/>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            <CourseList/>

        </>
    );
}
