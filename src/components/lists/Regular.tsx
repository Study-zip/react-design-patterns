interface ListProps {
  items: any[];
  sourceName: string;
  ItemComponent: any;
}

const RegularList = ({ items, sourceName, ItemComponent }: ListProps) => {
  return (
    <>
      {items.map((item: any, i: number) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
