interface ListItemProps {
  book: {
    name: string;
    price: number;
    title: string;
    pages: number;
  };
}

const LargeBookListItem = ({ book }: ListItemProps) => {
  const { name, price, title, pages } = book;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title</h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};

export default LargeBookListItem;
