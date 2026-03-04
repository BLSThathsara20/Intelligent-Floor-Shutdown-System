import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import FloorDetailPage from './pages/FloorDetailPage'
import SensorDetailPage from './pages/SensorDetailPage'
import SDGDetailPage from './pages/SDGDetailPage'
import TechnologyDetailPage from './pages/TechnologyDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7] font-sans">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/floor/:id" element={<FloorDetailPage />} />
        <Route path="/sensor/:id" element={<SensorDetailPage />} />
        <Route path="/sdg/:id" element={<SDGDetailPage />} />
        <Route path="/tech/:id" element={<TechnologyDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
