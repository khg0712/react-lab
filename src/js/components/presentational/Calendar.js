import React from "react"
import moment from "moment";
import { Calendar, Card } from "antd";
import _ from "underscore";

const MyCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  _.each({one: 1, two: 2, three: 3}, console.log);
  return (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      <div>{moment.now()}</div>
    </Card>
  )
}

export default MyCalendar;