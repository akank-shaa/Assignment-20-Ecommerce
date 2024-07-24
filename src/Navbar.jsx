import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';

function Navbar({ productCount }) {
  return (
    <div className="py-4">
      <div className="max-w-6xl flex justify-between mx-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
          className="h-16" />
        <div className='flex flex-col items-center'>
          <span>{productCount}</span>
          <HiShoppingBag />
        </div>
      </div>
    </div>
  );
}

export default Navbar;