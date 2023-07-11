import './App.css'
import Button from './components/button/button'

function App() {
    return(
    <div className="counter-div">
        <h1>1</h1>
        <div className="buttons">
            <Button sign="-"/>
            <Button sign="+"/>
        </div>
        
    </div>
    )

}

export default App
