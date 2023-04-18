import Card from "./Card"
import {
    down, up, twitter, youtube, instagram, facebook } from "../assets"
const Dashboard = () => {
  return (
      <div className="flex flex-col md:flex-row justify-between mt-4">
          <Card icon={facebook} />
      <Card icon={twitter} />
          <Card icon={instagram}/>
          <Card icon={youtube}/>
    </div>
  )
}

export default Dashboard