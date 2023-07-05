import {Add,Sub,Mul,Div} from './Cal'

function App(){
  return(
  <>
  <h2>Basic Calculator</h2>
    <ul>
      <li>Sum of two Number is {Add(40,4)}</li>
      <li>Sub of two Number is {Sub(40,4)}</li>
      <li>Div of two Number is {Div(40,4)}</li>
      <li>Mul of two Number is {Mul(40,4)}</li>

    </ul>
  </>
  )
}

export default App


