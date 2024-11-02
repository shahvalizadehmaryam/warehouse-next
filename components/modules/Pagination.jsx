import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage, totalPages }) => {
  const MAX_VISIBLE_PAGES = 5; // Number of pages to show at once

  // Calculate the range of pages to display based on the current page
  const getPageRange = () => {
    const start = Math.max(1, page - Math.floor(MAX_VISIBLE_PAGES / 2));
    const end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);
    const pageRange = [];
    for (let i = start; i <= end; i++) {
      pageRange.push(i);
    }
    return pageRange;
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className={styles.pagination}>
      {getPageRange().map((pageNumber) => (
        <p
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={page === pageNumber ? styles.selected : null}
        >
          {pageNumber}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
