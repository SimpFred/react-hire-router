import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function HireForm({ setHiredPeople, person, isEditMode, hiredPeople }) {
  const [wage, setWage] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (wage < 1) {
      setError("Wage must be greater than 0.");
      return;
    }
    const updatedPerson = { ...person, wage: wage };

    if (isEditMode) {
      setHiredPeople((prevHiredPeople) =>
        prevHiredPeople.map((p) =>
          p.login.uuid === person.login.uuid ? updatedPerson : p
        )
      );
    } else {
      const personExists = hiredPeople.some(
        (p) => p.login.uuid === person.login.uuid
      );
      if (personExists) {
        setError("Person is already hired.");
        return;
      } else {
        setHiredPeople((prevHiredPeople) => [
          ...prevHiredPeople,
          updatedPerson,
        ]);
      }
    }
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ marginRight: "5px" }} htmlFor="wage">
        {isEditMode ? "New Wage Offer" : "Wage Offer"}
      </label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">{isEditMode ? "Edit" : "Hire"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

HireForm.propTypes = {
  setHiredPeople: PropTypes.func,
  person: PropTypes.object,
  isEditMode: PropTypes.bool,
  hiredPeople: PropTypes.array,
};

export default HireForm;
