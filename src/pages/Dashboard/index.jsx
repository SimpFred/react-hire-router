import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard({ hiredPeople, people }) {
  if (people.length < 1) return <p>Loading...</p>;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList isHiredList={false} people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList isHiredList={true} people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;

Dashboard.propTypes = {
  hiredPeople: PropTypes.array,
  setHiredPeople: PropTypes.func,
  people: PropTypes.array,
};
