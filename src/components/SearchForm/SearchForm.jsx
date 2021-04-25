import Button from '../Button';
import styles from './SearchForm.module.scss';

const SearchForm = ({ query, handleSubmit, handleChange }) => {
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={handleChange}
        value={query}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
