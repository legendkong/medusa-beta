// import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Header } from './components/header'
import { Card } from './components/card'
import { Navbar } from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
    </>
  )
}

export default App

// <Routes>
//   <Route path='/' element={<Home />} />
//   <Route path='/store' element={<About />} />
//   <Route path='/about' element={<Http />} />
//   <Route path='/about' element={<RESTApi />} />
//   <Route path='/about' element={<Kafka />} />
//   <Route path='/about' element={<grpc />} />
//   <Route path='/about' element={<graphQL />} />
// </Routes>
