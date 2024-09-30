import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem({ isHiredList, person }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.dob.age && <p>Age: {person.dob.age}</p>}
      {person.wage && <p>Wage: £{person.wage}</p>}
      {!isHiredList && (
        <Link to={`/person-profile/${person.login.uuid}`}>
          View Person Details
        </Link>
      )}
      {isHiredList && <Link to={`/edit/${person.login.uuid}`}>Edit</Link>}
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.object,
  isHiredList: PropTypes.bool,
};

export default PeopleListItem;
