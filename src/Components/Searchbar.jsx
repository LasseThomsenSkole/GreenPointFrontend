import {Input} from "@/Components/ui/input.jsx";
import {Button} from "@/Components/ui/button.jsx";

export default function SearchBar({handleSearch, handleChange}) {
    /* det her er hvordan de forskellige states og funktioner ville se ud hvis de var i dette komponent
    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search)
        setSearch("") //reset search
        //redirect to search result page
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    */


    return (
        <form className={"flex "} onSubmit={handleSearch}>
            <Input className={"mr-2 text-gray-700"} type={"text"} onChange={handleChange} placeholder="Søg efter nyheder" />
            <Button type={"submit"}>Søg</Button>
        </form>

    )
}