import css from './SearchContainer.module.css';
export const SearchContainer = ({ children }) => {
  return (
    <aside className={css.searchContainer}>
      <div>{children}</div>
    </aside>
  );
};
