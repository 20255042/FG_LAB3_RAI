import Header from "./Header";
import Student from "./Student";
import Footer from "./Footer";
import Button from "./Button";
import './App.css';

function App() {
const handleSave = () => alert("Saved!");
const handleCancel = () => alert("Cancelled!");

return (
<>
<Header />
<Student name="Sandara Rai" course="BSIT" />
<Student name="Mara Gadgad" course="BSIT" />
<Student name="Maria Isabel Opena" course="BSIT" />
<Student name="Erika Mae Topacio" course="BSIT" />
<Button label="Save" onClick={handleSave} />
<Button label="Cancel" onClick={handleCancel} />
<Footer />
</>
  );
}

export default App;
