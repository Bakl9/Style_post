import {useState} from "react";


const Box = () => {

    const [like, setLike] = useState(  0)
    const [value, setValue] = useState('')

    const decrement = () => {
        setLike(like +1)
    }

    const increment = () => {
        setLike(like -1)
    }

    const inputValue = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h1>{like}</h1>

            <input
                type="value"
                onInput={inputValue}
            />
            <h1>{value}</h1>
            <div className="App">
                <div className="post">
                    <div className="post__content">
                        <strong> 1. JavaScript</strong>
                        <div>
                            Javascript - язык програмирование
                        </div>
                    </div>
                    <div className="btt">
                        <button>Удалить пост</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Box;
