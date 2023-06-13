import { useState } from "react";
import { Template } from "./container";
import "./styles/App.css";
import "./styles/tailwind-pre-build.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="App bg-gray-300">
      <img src="assets/images/logo.png" className="h-20"></img>
      <Template />
      <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="bg-neutral-200 p-6 text-center font-serif">
          <span>© 2023 Copyright: </span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href="https://daniel-personal-website.netlify.app/"
          >
            DANIEL AYALA
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
