import styles from "./Header.module.css";
// eslint-disable-next-line
const Header = ({ searchVal, setSearchVal }) => {
  const handleInputChange = (event) => {
    setSearchVal(event.target.value);
  };
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <img src="search.svg" alt="search icon" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="جستجو کالا"
          value={searchVal}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.profile}>
        <img src="profile.jpg" alt="avatar" />
        <div>
          <p className={styles.profileName}>میلاد عظمی</p>
          <p className={styles.role}>مدیر</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
