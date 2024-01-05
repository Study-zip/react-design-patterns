import RegularList from "./components/lists/Regular";
import NumberedList from "./components/lists/Numbered";
import authors from "./data/authors";
import { books } from "./data/books";
import SmallAuthorListItem from "./components/authors/SmallListItems";
import LargeAuthorListItem from "./components/authors/LargeListItems";
import SmallBookListItem from "./components/books/SmallListItems";
import LargeBookListItem from "./components/books/LargeListItems";
import "./App.css";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
