import { useEffect, useState } from "react";
import "./App.css";

interface CatFact {
  fact: string;
  length: number;
}

function App() {
  const [fact, setFact] = useState<CatFact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFact = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:3000/api/catfacts");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: CatFact = await res.json();
      setFact(data);
    } catch (err: any) {
      setError(err.message || "Error fetching cat fact");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>🐾 CatFacts</h1>

      {loading && <p>Loading a cat fact...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fact && <p>{fact.fact}</p>}

      <button onClick={fetchFact} disabled={loading}>
        {loading ? "Fetching..." : "Get Another Fact"}
      </button>
    </div>
  );
}

export default App;
