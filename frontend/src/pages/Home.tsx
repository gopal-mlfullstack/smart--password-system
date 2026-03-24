import { useState } from "react";
import API from "../services/api";
import type { PasswordResponse } from "../types/password";

export default function Home() {
  const [length, setLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [result, setResult] = useState<PasswordResponse | null>(null);

  const generatePassword = async () => {
    const res = await API.post("/generate", {
      length,
      include_symbols: includeSymbols,
      include_numbers: includeNumbers,
    });
    setResult(res.data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Smart Password Generator</h1>

      <div>
        <label>Length: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
      </div>

      <button onClick={generatePassword}>Generate</button>

      {result && (
        <div>
          <h2>Password: {result.password}</h2>
          <p>Strength Score: {result.strength_score.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
