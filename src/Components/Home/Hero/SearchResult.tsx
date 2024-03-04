import classes from "./SearchResult.module.css";

export const SearchResult: React.FC<any> = ({ result }) => {
  return <div className={classes["search-result"]}>{result}</div>;
};
