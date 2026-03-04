import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { FLOORS } from '../data/floors'
import FloorDetail from '../components/FloorDetail'
import Header from '../components/Header'

export default function FloorDetailPage() {
  const { id } = useParams()
  const floor = FLOORS.find((f) => f.id === Number(id))

  if (!floor) {
    return (
      <div className="min-h-screen bg-[#faf9f7]">
        <Header lastUpdated={new Date().toLocaleTimeString()} />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-slate-600">Floor not found.</p>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] pb-8 md:pb-0">
      <Header lastUpdated={new Date().toLocaleTimeString()} />
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <FloorDetail floor={floor} backTo="/" />
      </main>
    </div>
  )
}
