import ResultCard from "@/Components/searchResult/ResultCard.jsx";

export default function SearchResultPage(){
    const results = [
        {
            title: "Introduction to Optometry",
            description: "Learn the basics of optometry, including eye anatomy and vision science.",
            startDate: "2023-09-15",
            endDate: "2023-09-15",
            startTime: "09:00",
            endTime: "12:00",
        },
        {
            title: "Advanced Contact Lens Fitting",
            description: "Gain hands-on experience with advanced techniques in contact lens fitting.",
            startDate: "2023-09-20",
            endDate: "2023-09-21",
            startTime: "10:00",
            endTime: "16:00",
        },
        {
            title: "Pediatric Eye Care",
            description: "Specialize in eye care for children, including common pediatric conditions.",
            startDate: "2023-10-05",
            endDate: "2023-10-06",
            startTime: "09:30",
            endTime: "15:00",
        },
        {
            title: "Optical Dispensing Workshop",
            description: "Improve your skills in optical dispensing and lens customization.",
            startDate: "2023-10-15",
            endDate: "2023-10-15",
            startTime: "08:30",
            endTime: "14:00",
        },
        {
            title: "Retinal Imaging and Diagnostics",
            description: "Explore cutting-edge technology in retinal imaging and diagnostics.",
            startDate: "2023-11-01",
            endDate: "2023-11-02",
            startTime: "10:00",
            endTime: "17:00",
        },
        {
            title: "Low Vision Rehabilitation",
            description: "Understand techniques for assisting patients with low vision conditions.",
            startDate: "2023-11-15",
            endDate: "2023-11-16",
            startTime: "09:00",
            endTime: "12:00",
        },
        {
            title: "Essentials of Optical Coherence Tomography",
            description: "Master the use of OCT in detecting and diagnosing eye conditions.",
            startDate: "2023-12-01",
            endDate: "2023-12-01",
            startTime: "11:00",
            endTime: "13:00",
        },
    ];

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <h1>Search Result Page</h1>
            {results.map((result, index) => (
                <ResultCard key={index} result={result} />))}
        </div>
    )
}