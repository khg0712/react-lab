import React from "react"
import { Calendar, Card } from "antd";

const MyCalendar = () => {
  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  return (
    <div>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      </Card>
    </div>
  )
}

export default MyCalendar;