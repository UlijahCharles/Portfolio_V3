import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Header from "../components/header";
import Footer from "../components/footer";

function Root() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <div className="layout">
            <div className="layout-row">
              <div className="layout-col layout-col_nav">
                <Nav />
              </div>
              <div className="layout-col layout-col_main fadeInUp-animation">
                <Outlet end />
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default Root;
