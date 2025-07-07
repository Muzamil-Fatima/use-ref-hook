import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./Context";

export default function Uni() {
  const [subject, setSubject] = useState("");

  return (
    <div style={{ backgroundColor: "orange", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select onChange={(event) => setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Computer">Computer</option>
          <option value="Biology">Biology</option>
        </select>

        <h1>Context API</h1>
        <button onClick={() => setSubject("")}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}
