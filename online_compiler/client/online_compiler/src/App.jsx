import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutPut] = useState('');

  const handleButton =  async () => {
    const data = {
      language: 'sh',
      code
    }

    try{
      const output = await axios.post("http://localhost:5000/run", data);
      console.log(output.data);
      setOutPut(output.data.output)

    }catch(err) {
      console.log(err.response);
    }
  }

  return (
    <div className="App">
      <h1>Online Compiler</h1>
      <textarea className="code-editor" rows="20" cols="75"
      value={code}
      onChange={(e) => setCode(e.target.value)} >
      <p>lorem</p>
      </textarea>
      <br/>
      <button onClick={handleButton}>Submit</button>
    </div>
  );
}

export default App;
