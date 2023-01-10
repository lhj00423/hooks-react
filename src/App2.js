import { useState } from "react";
import Timer from "./components/Timer";



function App2(){
    const [showTimer,setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <Timer/>}
            <button onClick={()=>setShowTimer(!showTimer)}>타이머보이기/안보이기</button>
            
            
        </div>
    )
}

export default App2;