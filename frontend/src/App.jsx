import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Gagal terhubung ke Flask");
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
