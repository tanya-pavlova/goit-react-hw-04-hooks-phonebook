import { useState, useEffect } from "react";
import styles from "./app.module.css";
import { v4 as uuidv4 } from "uuid";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already exist!! Try one more time, please!`);
      return;
    }
    if (contacts.find((contact) => contact.number === number)) {
      alert(`${number} is already exist!! Try one more time, please!`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const onFilterHandleChange = ({ target }) => {
    setFilter(target.value);
  };

  const visibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>

      <Form onSubmit={addContact} />

      <h2 className={styles.title}>Contacts</h2>

      <Filter filter={filter} onFilterHandleChange={onFilterHandleChange} />

      <Contacts contact={visibleContacts()} ondeleteContact={deleteContact} />
    </div>
  );
}
