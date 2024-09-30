import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile({ people, setHiredPeople, isEditMode, hiredPeople }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const person = people.find((person) => person.login.uuid === id);
    setPerson(person);
  }, [people, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>Age: {person.dob.age}</p>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <HireForm
        isEditMode={isEditMode}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
        person={person}
      />
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array,
  setHiredPeople: PropTypes.func,
  isEditMode: PropTypes.bool,
  hiredPeople: PropTypes.array,
};

export default PersonProfile;
