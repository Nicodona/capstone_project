import "./style.css";
import Heading from "./component/Heading/Heading"
import {useState} from 'react'

export const App = () => {
 const [hello, sethello] = useState('hello react to nico')
 const updateHello = () => sethello('thanks for updating me')
  return (
    <div className="App">
        <div onClick={updateHello}>
            <Heading title = {hello}/>
        </div>
    </div>
  );
}
