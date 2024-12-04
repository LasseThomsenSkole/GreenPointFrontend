import Header from './Header.jsx'
import {
    ContactsSearch
} from "@/Components/ContactsSearch.jsx";




export default function ContactsPage() {
    return (
        <>
        <Header />

            <div>
                <ContactsSearch/>
            </div>
        </>
    )
}