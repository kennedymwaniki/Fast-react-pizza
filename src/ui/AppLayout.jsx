import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <Header />
      <main>
        <h1>content</h1>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
