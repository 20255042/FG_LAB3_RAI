import Header from "./Header";
import Student from "./Student";
import Footer from "./Footer";
import Button from "./Button";
import { useState } from 'react'
import './App.css';

function App() {
const handleSave = () => alert("Saved!");
const handleCancel = () => alert("Cancelled!");
const [count, setCount] = useState(0)


return (
<>
<Header />
<Student name="Sandara Rai" course="BSIT" />
<Student name="Mara Gadgad" course="BSIT" />
<Student name="Maria Isabel Opena" course="BSIT" />
<Student name="Erika Mae Topacio" course="BSIT" />
<Button label="Save" onClick={handleSave} />
<Button label="Cancel" onClick={handleCancel} />
<button onClick={() => setCount(count < 4 ? count + 1 : count)}>
          count is {count}
        </button>
<Footer />
</>
  );
}

export default App;
