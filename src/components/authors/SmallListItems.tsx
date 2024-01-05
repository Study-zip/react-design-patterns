interface ListItemProps {
  author: {
    name: string;
    age: number;
  };
}

const SmallAuthorListItem = ({ author }: ListItemProps) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default SmallAuthorListItem;
