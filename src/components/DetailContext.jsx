import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

const Dcontext = createContext()
const DetailContext = ({ children }) => {
    const navigate = useNavigate()
    const handleDetail = (id) => {
        navigate('detail/' + id)
    }
  return (
    <Dcontext.Provider value={{handleDetail}}>
        { children }
    </Dcontext.Provider>
  )
}

export const useDetailContext = ()=> {
    return useContext(Dcontext)
}
export default DetailContext