import { Search } from './Search/Search';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactsList } from './ContactsList/ContactsList';
import { ChatContent } from './ChatContent/ChatContent';
import css from './App.module.css';
export const App = () => {
  return (
    <div className={css.app}>
      <Search>
        <SearchBar />
        <ContactsList />
      </Search>
      <ChatContent />
    </div>
  );
};
