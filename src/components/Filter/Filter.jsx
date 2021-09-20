import styles from './filter.module.css'

const Filter = ({ filter, onFilterHandleChange }) => {

    return (
        <div className={styles.container} >
            <label className={styles.label}>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    className={styles.input}
                    onChange={onFilterHandleChange}
                />
            </label>
        </div>
    );
};

export default Filter;