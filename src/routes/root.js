import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Header from "../components/header";
import Footer from "../components/footer";

function Root() {
  console.log(Math.random());
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <div className="layout">
            <div className="layout_row">
              <div className="layout_col layout_col-nav">
                <Nav />
              </div>
              <div className="layout_col fadeInUp-animation">
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
