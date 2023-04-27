import { useState, useEffect } from 'react';
import axios from 'axios';

import './FamousSection.css';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function

  useEffect(() => {
    fetchPeople();
  }, []) // 👈 think of this as the stop sign!
  //    it ensures that the callback function inside
  //    the useEffect ONLY RUNS ONCE

  const fetchPeople = () => {
    axios({
      method: 'GET',
      url: '/people'
    }).then((response) => {
      const thePeople = response.data;
      console.log(thePeople);
      setPeopleArray(thePeople);
    }).catch((error) => {
      console.log('whoopsie:', error);
    })
  }

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);

    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property

    axios({
      method: 'POST',
      url: '/people',
      data: { name: famousPersonName, role: famousPersonRole }
    }).then((response) => {
      console.log(response);
      setPersonName('');
      setPersonRole('');
      fetchPeople();
    }).catch((error) => {
      console.log('whoopsie:', error);
    })
  }

  return (
    <section className="new-person-section" >
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
      <ul>
        {
          famousPeopleArray.map((famousPerson) => {
            return (
              <li key={famousPerson.id}>{famousPerson.name} played {famousPerson.role}</li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default FamousSection;

