import RegularList from "./lists/Regular";
import NumberedList from "./lists/Numbered";
import authors from "../data/authors";
import { books } from "../data/books";
import SmallAuthorListItem from "./authors/SmallListItems";
import LargeAuthorListItem from "./authors/LargeListItems";
import SmallBookListItem from "./books/SmallListItems";
import LargeBookListItem from "./books/LargeListItems";
import Modal from "./Modal";

function List() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>

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

export default List;
