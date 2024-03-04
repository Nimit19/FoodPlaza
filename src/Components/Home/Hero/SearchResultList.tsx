import { Link } from "react-router-dom";
import { SearchResult } from "./SearchResult";

import classes from "./SearchResultList.module.css";
export const SearchResultsList: React.FC<any> = ({ results }) => {
  return (
    <div className={classes["results-list"]}>
      {results.map((result: any) => {
        return (
          <div key={result.id}>
            <Link to={`/menu/${result.id}`}>
              <SearchResult result={result.shopName} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
