import { useState } from 'react'
import { HomePage } from './pages/homepage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");

  return (
    <div id="App">
      {currentPage === "homepage" && <HomePage />}
    </div>
  )
}

export default App
