import propTypes from "prop-types";
import c from "./Contacts.module.css";

function Contacts({ contacts, deleteContact }) {
  return (
    <ul className={c.contacts_list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {number}</span>
          <button type="button" id={id} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: propTypes.array,
  deleteContact: propTypes.func,
};
export default Contacts;
