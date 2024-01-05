interface ListProps {
  items: any[];
  sourceName: string;
  ItemComponent: any;
}

const NumberedList = ({ items, sourceName, ItemComponent }: ListProps) => {
  return (
    <>
      {items.map((item: any, i: number) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
};

export default NumberedList;
