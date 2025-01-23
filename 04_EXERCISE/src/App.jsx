import Person from "./components/Person"
import Product from "./components/Product"

const App = () =>{
  return(
    <div>
      <Person name="Gyro Zepelli" age={17}/>

      <Product name="Laptop" price={699} />
    </div>
  )
}
export default App