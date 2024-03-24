import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">


      <main className="max-w-3xl bg-red-600 mx-auto">
        {/* <h1>content</h1> */}
        <Outlet />
      </main>

      </div>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
