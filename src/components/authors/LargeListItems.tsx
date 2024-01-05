interface ListItemProps {
  author: {
    name: string;
    age: number;
    country: string;
    books: [];
  };
}

const LargeAuthorListItem = ({ author }: ListItemProps) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
