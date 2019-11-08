import React from "react"
// import { Rate, Divider } from "antd";
import moment from 'moment'

const MyRate = () => {
  return (
    <div>
      <p>{moment.now()}</p>
      {/* <Rate allowHalf defaultValue={2.5}/> */}
    </div>
  )
}

export default MyRate;