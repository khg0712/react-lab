import React from "react";

export default (props) => {
  return (
    <input value={props.value} onChange={props.onChangeInput} placeholder="제목을 입력해주세요"/>
  )
}