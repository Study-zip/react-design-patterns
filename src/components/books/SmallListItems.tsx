interface ListItemProps {
  book: {
    name: string;
    price: number;
  };
}

const SmallBookListItem = ({ book }: ListItemProps) => {
  const { name, price } = book;
  return (
    <h2>
      {name} / {price}
    </h2>
  );
};

export default SmallBookListItem;
