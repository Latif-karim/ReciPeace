import { GiKnifeFork } from "react-icons/gi"
import { Link } from 'react-router-dom'
import '../index.css'


const Logo = () => {
  return (
    <Link to={'/'}>
    <div className="mb-[10px] flex  items-center text-[18px]">
    <GiKnifeFork className="text-black"/>
    <h1 className="font">ReciPeace</h1>
    </div>
    </Link>

  )
}

export default Logo