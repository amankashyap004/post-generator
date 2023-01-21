import "./App.css";
import Header from "./components/public/Header";
import EditorPage from "./pages/public/EditorPage";

export default function App() {
   return (
      <div className="App">
         <Header />
         <EditorPage />
      </div>
   );
}
