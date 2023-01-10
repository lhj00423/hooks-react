import React, { useState,useEffect } from 'react';

const EffectHooksSample = () => {
    const [number,setNumber] =useState(0)
    const [text,setText] =useState("")
    const onClick =()=>{
        setNumber(number+1);
    }
    //렌더링 될때마다 매번 실행
    useEffect(()=>{
        console.log('🍝렌더링 되었습니다.');
    })
    //처음 마운트 될때만 실행 - 콘솔에 한번만 보임
    useEffect(()=>{
        console.log('👀마운트 되었습니다.');
    },[])
    //마운트 실행될때 + number가 업데이트 됬을때 호출됨
    useEffect(()=>{
        console.log('✔number가 변경되었습니다.');
    },[number])
    return (
        <div>
            <span>{number}</span>
            <button onClick={onClick}>update</button>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        </div>
    );
};

export default EffectHooksSample;