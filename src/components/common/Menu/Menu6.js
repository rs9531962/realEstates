import React, { forwardRef } from 'react';
import MenuItem from './MenuItem/index2';
import ItemType3 from './MenuItem/ItemType3';
import './styles.css';

const Menu6 = forwardRef(({ list }, ref) => (
    <main ref={ref}>
    <b>Dwarka Sector 1/2/3 </b>
    {list.map((item) => (
      <ItemType3 item={item} key={item.Product_Id} />
    ))}
  </main>
));

export default Menu6;
