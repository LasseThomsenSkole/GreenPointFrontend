import {Input} from "@/Components/ui/input.jsx";
import {Button} from "@/Components/ui/button.jsx";
import {useState} from "react";

export default function SearchBar({handleSearch}) {
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search)
        setSearch("") //reset search
        //redirect to search result page
    }



    return (
        <form className={"flex "} onSubmit={handleSearch}>
            <Input className={"mr-2 text-gray-700"} type={"text"} onChange={(e) => setSearch(e.target.value)} placeholder="Søg efter nyheder" />
            <Button type={"submit"}>Søg</Button>
        </form>

    )
}