export const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  // Total Page Numbers
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              onClick={() => paginate(number)}
              className="page-link"
              style={{ cursor: "pointer", color: "#34353a" }}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
