import React,{useState, useRef} from 'react';

const RefSample = () => {
    //stat 생성 -리렌더링-
    const [stateNum, setStateNum] = useState(0);
    //ref생성
    const refNum = useRef(0); //{current : 0}
    //변수 생성
    let varNum = 0;
    //변수 수정함수 구현
    const addLet  = ()=>{
        varNum = varNum+1;
        console.log(varNum);
    }
    //ref 수정함수 구현
    const addRef = () => {
        refNum.current = refNum.current+1
    }
    //setState 호출 함수 구현
    const addState = ()=>{
        setStateNum(stateNum+1);
    }
    return (
        <div>
            <p>State : {stateNum} </p>
            <p>Ref : {refNum.current}</p>
            <p>let : {varNum}</p>
            <button onClick={addState}>State+1</button>
            <button onClick={addRef}>Ref+1</button>
            <button onClick={addLet}>Lef+1</button>
        </div>
    );
};

export default RefSample;