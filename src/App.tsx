import type { JSX } from "react"
import "./App.css"
import { Counter } from "./features/counter/Counter"
import logo from "./logo.svg"
import Quotes from "./features/quotes/Quotes"
import Products from "./features/products/Products"

export const App = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <Products />
      <Quotes />
    </header>
  </div>
)
