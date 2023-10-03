import MenuItem from "./MenuItem/MenuItem";

const MenuComponent = () => {
  return (
    <>
      <div className="grid gap-6">
        <MenuItem
          itemName={"Item 1"}
          subItemName={"this is a descriptive name of item 1 dfhljdflkdjaslkfjasdlkjflkasdjflkajdflkasdjflakjflkas"}
          price={50}
        />
        <MenuItem
          itemName={"Item 2"}
          subItemName={"this is a descriptive name of item 2"}
          price={40}
        />
        <MenuItem
          itemName={"Item 3"}
          subItemName={"this is a descriptive name of item 3"}
          price={70}
        />
        <MenuItem
          itemName={"Item 4"}
          subItemName={"this is a descriptive name of item 4"}
          price={90}
        />
      </div>
    </>
  );
};

export default MenuComponent;
