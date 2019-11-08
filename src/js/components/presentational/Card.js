import React from "react"
import { Card } from "antd";

const MyCard = () => {
  return (
    <div>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        123
      </Card>
    </div>
  )
}

export default MyCard;