import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded, decremented, reset } from './features/counter/counter-slice'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    const handleIncrement = () => {
        dispatch(incremented())
    }

    const handleIncrementBy = () => {
        dispatch(amountAdded(3))
    }

    const handleDecrement = () => {
        dispatch(decremented())
    }

    const handleReset = () => {
        dispatch(reset())
    }

    return (
        <div className="App">
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React and here is the count: {count}</h1>
        <div className="card">
            <button onClick={handleIncrement}>
                Increment
            </button>
            <button onClick={handleIncrementBy}>
                Increment by 3
            </button>
            <button onClick={handleDecrement}>
                Decrement
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
        </div>
    )
}

export default App
