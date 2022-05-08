import { Fragment } from "react";
import Header from "./partials/Header/Header.jsx";
import Footer from "./partials/Footer/Footer.jsx";
import MainRoutes from "./routes/Main.route.jsx";


function App() {
  return (
    <body className="d-flex flex-column">
      <Header />

      <main className="container-fluid">
        <MainRoutes />
      </main>

      <Footer />
    </body>
  );
}

export default App;
