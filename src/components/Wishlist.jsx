import React from "react";


const Wishlist = () => {
    const [query , setQuery] = React.useState("");
    const [tasks, setTasks] = React.useState([]);

    const changeText = (e) => {
        const {value} = e.target;
        setQuery(value);
    };

    const toDO = () => {
        const payload = {
            todo : query,
        }

        let utask = [... tasks, payload];
        setTasks(utask);
    };


    if(tasks.length > 3){
        return <h1>You cannot add more than 3 items to wishlist</h1>
    }

    return (
        <>
            <input onChange={changeText} value={query} />
            <button onClick={toDO}>ADD</button>
            {
                tasks.map(({ todo },index) => (
                    <div key={ index }>{todo}</div>
                ))
            }
        </>
    )
}

export default Wishlist