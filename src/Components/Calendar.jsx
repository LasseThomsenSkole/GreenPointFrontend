import Header from "./Header.jsx"
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {format} from "date-fns";
export default function CalendarPage() {
    const [courses, setCourses] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const token = localStorage.getItem("jwtToken");
                const response = await fetch("http://localhost:8080/role-coursefeed", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCourses(data);
                } else {
                    console.error("Failed to fetch courses");
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

    }, []);


    const getCoursesForSelectedDate = (date) => {
        const selectedDateStr = format(date, "dd-MM-yyyy");
        return courses.filter(course => {
            const courseDate = course.date.split("T")[0];
            const formattedCourseDate = format(new Date(courseDate), "dd-MM-yyyy");
            return formattedCourseDate === selectedDateStr;
        });
    };

    return (
        <>
            <Header/>

            <div className="justify-between flex gap-20 ml-20 mr-20 mt-8">
                <div className="bg-white">
            <Card className="flex flex-col h-[75vh] w-full rounded-xl p-10 bg-white overflow-y-auto scrollbar-thin">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-4xl text-[#003811] font-bold">Kursus kalender</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-y-auto text-2xl font-semibold">
                        <Calendar className={""}
                            onChange={setSelectedDate} // Handle date selection
                            value={selectedDate} // Currently selected date
                        />
                    </div>
                    <div className="course-list mt-4">
                        <h3 className="text-2xl font-semibold text-[#003811]">Kurser d. {selectedDate.toLocaleDateString()}</h3>
                        <ul>
                            {getCoursesForSelectedDate(selectedDate).map((course, index) => (
                                <li key={index} className="course-item">
                                    <h4 className="font-bold">{course.title}</h4>
                                    <p>{course.description}</p>
                                    <p><strong>Time:</strong> {course.startTime} - {course.endTime}</p>
                                    <p><strong>Location:</strong> {course.location}</p>
                                </li>
                            ))}
                        </ul>
                        {getCoursesForSelectedDate(selectedDate).length === 0 && (
                            <p>No courses available on this date.</p>
                        )}
                    </div>
                </CardContent>
            </Card>
                </div>

                <div className="flex flex-col h-[75vh] w-full">
                    <h1 className="text-4xl text-[#003811] font-bold">Kursusliste</h1>

                </div>

            </div>
        </>
    );
}
