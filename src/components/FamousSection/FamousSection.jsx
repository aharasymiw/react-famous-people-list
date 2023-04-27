import { useState, useEffect } from 'react';
import axios from 'axios';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

import './FamousSection.css';

function FamousSection() {
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

  return (
    <section className="new-person-section" >
      <FamousPersonForm fetchPeople={fetchPeople} />
      <FamousPersonList famousPeopleArray={famousPeopleArray}/>
    </section>
  );
}

export default FamousSection;

