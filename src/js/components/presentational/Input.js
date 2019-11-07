import React from "react";

const Input = (props) => {
  return (
    <input value={props.value} onChange={props.onChangeInput} placeholder="제목을 입력해주세요"/>
  )
}

export default Input;