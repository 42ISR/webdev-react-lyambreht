import { useState } from "react"
import Gretting from "./components/Greeting"
import Posts from "./components/Posts"
import Users from "./components/Users"

const App = () => {
    return (
        <div className="page">
            <Posts/>
        </div>
    )
}
export default App













// const App = () => {

//     const [counter, setCounter] = useState(0)

//     const username = 'qq'

//     const handleMinus = () => {
//         setCounter(counter - 1 )
//     }

//     const handlePlus = () => {
//         setCounter(counter + 1 )
//     }
    
//     const handleCounter = (diff) => {
//         setCounter((val) => val + diff)
//     }
//     return (
//         <>
//             <Gretting username={username} />
//             <div>
//                 <button onClick={() => handleCounter(-1)}>-</button>
//                 <span>{counter}</span>
//                 <button onClick={() => handleCounter(+1)}>+</button>
//             </div>
//         </>
//     )
// }

// export default App
