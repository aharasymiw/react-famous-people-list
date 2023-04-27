// Add new person

import { useState } from 'react';
import axios from 'axios';

function FamousPersonForm(props) {
    // props will be an obj with property "name"

    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');

    const addPerson = (evt) => {
        evt.preventDefault();
        console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);

        axios({
            method: 'POST',
            url: '/people',
            data: { name: famousPersonName, role: famousPersonRole }
        }).then((response) => {
            console.log(response);
            setPersonName('');
            setPersonRole('');
            props.fetchPeople();
        }).catch((error) => {
            console.log('whoopsie:', error);
        })
    }

    return (
        <>
            <form onSubmit={addPerson}>
                <label htmlFor="name-input">Name:</label>
                <input id="name-input" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
                <label htmlFor="role-input">Famous for:</label>
                <input id="role-input" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
                <button type="submit">Done</button>
            </form>
            <p>
                {famousPersonName} is famous for "{famousPersonRole}".
            </p>
        </>
    )
}

export default FamousPersonForm;
