import React from "react";
import form from "./Form.module.css";
import { nanoid } from "nanoid";
class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };
  nameId = nanoid();
  numberId = nanoid();

  handleChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = (e) => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={form.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Имя
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameId}
            required
          />
        </label>
        <label htmlFor={this.numberId}>
          Номер
          <input
            type="tel"
            value={number}
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberId}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
