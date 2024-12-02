
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/Components/ui/command.jsx"

export default function SearchBar(){
    return (
        <>
            <Command>
                <CommandInput placeholder="Søg" />
                <CommandList>
                    <CommandEmpty>Ingen resultater</CommandEmpty>
                </CommandList>
            </Command>
        </>
    )
}