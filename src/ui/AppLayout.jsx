import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />
      <main>
        {/* <h1>content</h1> */}
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
