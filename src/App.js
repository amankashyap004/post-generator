import "./App.css";
import Header from "./components/public/Header";
// import EditorPage from "./pages/public/EditorPage";
// import ResultPage from "./pages/public/ResultPage";
import HomePage from "./pages/public/HomePage";

export default function App() {
   return (
      <div className="App">
         <Header />
         <section className="absolute top-20 w-full">
            {/* <EditorPage />
            <ResultPage /> */}
            <HomePage />
         </section>
      </div>
   );
}
