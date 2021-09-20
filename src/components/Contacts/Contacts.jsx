import styles from './contacts.module.css'

const Contacts = ({ contact, ondeleteContact }) => (
    <ul className={styles.list}>
        {contact.map(({ id, name, number }) => (
            <li className={styles.item} key={id} >
                <p className={styles.subtitle}>{name}:</p>
                <p className={styles.subtitle}>{number}</p>
                <button
                    className={styles.button}
                    onClick={() => ondeleteContact(id)}
                    type="button"
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);
export default Contacts;