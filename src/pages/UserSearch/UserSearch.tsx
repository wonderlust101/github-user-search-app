import UserSearchHeader from "./UserSearchHeader/UserSearchHeader.tsx";
import UserSearchBar from "./UserSerachBar/UserSearchBar.tsx";
import React, {useEffect, useState} from "react";
import UserSearchResults from "./UserSearchResults/UserSearchResults.tsx";
import './UserSearch.scss'

export default function UserSearch() {
    const [searchTerm, setSearchTerm] = useState(''); // Tracks the search input value
    const [fetchedUser, setFetchedUser] = useState('octocat'); // Tracks the term used for fetch
    const [user, setUser] = useState<User | null>(null);
    const [fetchError, setFetchError] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme) {
            setTheme(storedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        fetch(`https://api.github.com/users/${fetchedUser}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`User not found: ${res.status}`);
                }
                return res.json();
            })
            .then(
                (result) => {
                    setUser(result);
                    setFetchError(false);
                }
            ).catch(() => {
            setFetchError(true); // Catch any network or fetch errors
        });
    }, [fetchedUser]);

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save the preference in localStorage
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFetchedUser(searchTerm);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={`user-search ${theme}`}>
            <UserSearchHeader onToggle={toggleTheme} theme={theme}/>
            <main className="grid-bleed user-search__content">
                <UserSearchBar onFormSubmit={handleFormSubmit}
                               onChange={handleSearch}
                               value={searchTerm}
                               fetchError={fetchError}/>
                <UserSearchResults user={user}/>
            </main>
        </div>
    )
}