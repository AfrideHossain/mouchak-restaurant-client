/* eslint-disable react/prop-types */
import "./MenuItem.css";
const MenuItem = ({ itemName, price }) => {
  return (
    <>
      <div className="flex justify-between items-center md:items-end menuItem relative z-10">
        <div className="max-w-full h-full flex items-center justify-center gap-5 bg-white pe-3">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt=""
            className="w-16 h-16 object-cover rounded-full"
          />
          <h1 className="text-lg font-semibold">{itemName}</h1>
          {/* <div className="flex flex-col justify-center border h-full"></div> */}
        </div>
        <div className="bg-white ps-3 h-full flex items-center">
          <p className="text-lg font-semibold">
            <span>৳ </span>
            {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
