type Props = {
    item: {
        name: string;
        quantity: number;
    };
};

const MenuItem = (props: Props) => {
  return (
    <div className="flex gap-4">
      <li>{props.item.name}</li>
      <span>{props.item.quantity}</span>
    </div>
  );
};

export default MenuItem;
