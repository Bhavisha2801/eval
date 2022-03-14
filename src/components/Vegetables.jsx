import React from "react";



const Vegetables = () => {


    const [countT , setCountT] = React.useState(1);
    const [countP , setCountP] = React.useState(1);
    const [countC , setCountC] = React.useState(1);
    const [countO , setCountO] = React.useState(1);


    function changeTomatoes(val){
        setCountT(countT + val)
    }

    function changePatatoes(val){
        setCountP(countP + val)
    }

    function changeCarrots(val){
        setCountC(countC + val)
    }

    function changeOnion(val){
        setCountO(countO + val)
    }


    if(countT == 0 || countP == 0 || countC == 0 || countO == 0){
        return <h1>Vegetables quantity can't be zero</h1>
    }


    return (
        <>
            <span>
                <h3>Tomatoes:{countT}</h3>
                <button onClick={() => changeTomatoes(+1)}>+</button>
                <button onClick={() => changeTomatoes(-1)}>-</button>
            </span>
            <span>
                <h3>Patatoes:{countP}</h3>
                <button onClick={() => changePatatoes(+1)}>+</button>
                <button onClick={() => changePatatoes(-1)}>-</button>
            </span>
            <span>
                <h3>Carrots:{countC}</h3>
                <button onClick={() => changeCarrots(+1)}>+</button>
                <button onClick={() => changeCarrots(-1)}>-</button>
            </span>
            <span>
                <h3>Onion:{countO}</h3>
                <button onClick={() => changeOnion(+1)}>+</button>
                <button onClick={() => changeOnion(-1)}>-</button>
            </span>
        </>
    )
}
export {Vegetables}