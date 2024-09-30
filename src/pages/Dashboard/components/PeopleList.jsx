import PeopleListItem from "./PeopleListItem";
import PropTypes from "prop-types";

function PeopleList({ people, isHiredList }) {
  if (!people) return;
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem isHiredList={isHiredList} key={index} person={person} />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array,
  isHiredList: PropTypes.bool,
};

export default PeopleList;
