import { useRef, useEffect } from 'react';
import Button from '../Button';
import styles from './SearchForm.module.scss';

const SearchForm = ({ query, handleSubmit, handleChange }) => {
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus(), []);
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        onChange={handleChange}
        value={query}
        ref={inputRef}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
