import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EnterPhoneNumber from "./pages/EnterPhoneNumber";
import IfExistingUser from "./pages/IfExistingUser";
import IfNewUser from "./pages/IfNewUser";
import SplashScreen from "./pages/SplashScreen";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/verification":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/splash-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<EnterPhoneNumber />} />

      <Route path="/verification" element={<IfExistingUser />} />

      <Route path="/signup" element={<IfNewUser />} />

      <Route path="/splash-screen" element={<SplashScreen />} />
    </Routes>
  );
}
export default App;
