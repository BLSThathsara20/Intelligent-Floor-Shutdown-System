import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Header from './Header'

export default function DetailLayout({ title, children, backTo = '/' }) {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-8 md:pb-0">
      <Header lastUpdated={new Date().toLocaleTimeString()} />
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <Link
          to={backTo}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Back to dashboard
        </Link>
        {title && (
          <h1 className="mb-6 text-xl font-semibold text-slate-900 sm:text-2xl">
            {title}
          </h1>
        )}
        {children}
      </main>
    </div>
  )
}
