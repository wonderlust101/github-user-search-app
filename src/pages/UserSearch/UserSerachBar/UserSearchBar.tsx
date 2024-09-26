import {ChangeEvent, FormEvent} from "react";
import Form from "../../../components/Form/Form.tsx";
import TextInput from "../../../components/Form/TextInput/TextInput.tsx";
import './UserSearchBar.scss'
import Button from "../../../components/Button/Button.tsx";
import SearchIcon from "../../../components/Icons/SearchIcon.tsx";

type UserSearchBarProps = {
    onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    fetchError: boolean;
}

export default function UserSearchBar({onFormSubmit, onChange, value, fetchError}: UserSearchBarProps) {

    return (
        <div className="user-search-bar">
            <Form className='user-search-bar__form' onSubmit={onFormSubmit}>
                <SearchIcon className='user-search-bar__text-input__icon'/>
                <TextInput id="search"
                           className='user-search-bar__text-input'
                           type="text"
                           placeholder='Search GitHub username…'
                           errorText="No results" 
                           isRequired={true} 
                           value={value}
                           status={fetchError ? 'error': ''}
                           onChange={onChange}/>
                
                <Button className='button button--blue user-search-bar__button' type="submit">Search</Button>
            </Form>
        </div>
    )
}