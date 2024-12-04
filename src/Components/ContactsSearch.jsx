import { useState, useEffect } from 'react'
import {Input} from '/src/Components/Input'
import {ItemsList} from '/src/Components/ItemList'
import { useGetUsers } from '/src/Components/hooks/useGetUsers'

export function ContactsSearch() {
    const {users, loading, error} = useGetUsers()
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        if (Object.keys(users).length > 0) {
            setFilteredUsers(users)
        }
    }, [users])

    const filterItems = (searchTerm) => {
        const filteredItems = users.filter((user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredUsers(filteredItems);
    }
    return (
        <>
            {Input}
            <Input onChangeCallback={filterItems} />
            {loading && <p>Loading...</p>}
            {error && <p>There was an error loading the users</p>}
            {!loading && !error && <ItemsList items={filteredUsers} />}
        </>
    )
}


