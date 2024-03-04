// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Alert from "./component/Alert";
import { Ban, Bell, CheckCheck, Info, ShieldAlert } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Alert
          classname="alert-defulte"
          title="Upgrade Your Plan"
          icone={<Bell size={25} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          perferendis tenetur doloribus nostrum minima eligendi ducimus nihil.
          Officia, asperiores vero?"
        />

        <Alert
          classname="alert-info"
          title="Note"
          icone={<Info size={25} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          perferendis tenetur doloribus nostrum minima eligendi ducimus nihil.
          Officia, asperiores vero?"
        />


        <Alert
          classname="alert-warning"
          title="Tips & Tricks"
          icone={<ShieldAlert size={25} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          perferendis tenetur doloribus nostrum minima eligendi ducimus nihil.
          Officia, asperiores vero?"
        />

        <Alert
          classname="alert-error"
          title="Something Went Wrong"
          icone={<Ban size={25} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          perferendis tenetur doloribus nostrum minima eligendi ducimus nihil.
          Officia, asperiores vero?"
        />

        <Alert
          classname="alert-success"
          title="Success"
          icone={<CheckCheck size={25} />}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          perferendis tenetur doloribus nostrum minima eligendi ducimus nihil.
          Officia, asperiores vero?"
        />
      </div>
    </>
  );
}

export default App;
