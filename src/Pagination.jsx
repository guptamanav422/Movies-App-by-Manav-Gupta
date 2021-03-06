import {Link} from "react-router-dom"
let Pagination = (props) => {
  let arr = [];
  for (let i = 1; i <= props.numberOfPages; i++) {
    arr.push(i);
  }

  return (
    <nav>
      <ul class="pagination mt-4">
        {arr.map((el) => {
          return (
            <li
            key={el}
              onClick={() => {
                props.selectPage(el);
              }}
              class={`page-item ${props.currPage === el ? "active" : ""}`}
            >
              <Link class="page-link">{el}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;