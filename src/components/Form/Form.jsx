import { useState } from 'react';
import styles from './form.module.css'



export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onHandleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const onHandleSubmit = (event) => {
        event.preventDefault();
        onSubmit(name, number);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={styles.form} onSubmit={onHandleSubmit} >
            <label className={styles.label}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    className={styles.input}
                    onChange={onHandleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={styles.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    className={styles.input}
                    onChange={onHandleChange}
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required
                />
            </label>
            <button className={styles.addbutton} type="submit">
                Add contact
            </button>
        </form>
    );
}

