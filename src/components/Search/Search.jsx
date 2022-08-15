import { SearchContainer } from 'components/SearchContainer/SearchContainer';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Search = () => {
  return (
    <SearchContainer>
      <SearchBar />
      <ContactsList />
    </SearchContainer>
  );
};
