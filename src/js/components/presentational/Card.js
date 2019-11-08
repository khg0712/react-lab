import React from "react"
import { Card } from "antd";
import _ from "underscore";

const MyCard = () => {
  _.each({one: 1, two: 2, three: 3}, console.log);
  return (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    </Card>
  )
}

export default MyCard;