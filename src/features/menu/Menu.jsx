/* eslint-disable react-refresh/only-export-components */
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
// this function neeeds to return the data it wants to provide to the page
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
