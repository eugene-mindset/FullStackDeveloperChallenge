import styles from "./SearchMenu.module.css";

interface Props {
  operation?: "replace" | "delete";
  query?: string;
  replace?: string;
}

const SearchMenuMsg = (props: Props): JSX.Element => {
  const { operation, query } = props;
  return operation ? (
    <div className={styles.msg}>
      All instances of "{query}" have been {operation}d
      {operation === "replace" && ` with "${props?.replace}"`}
    </div>
  ) : (
    <div></div>
  );
};

export default SearchMenuMsg;
