import { useState } from 'react'
import { QrCode } from 'lucide-react'
import ShareAccessModal from './ShareAccessModal'

export default function ShareAccessCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="flex w-full items-center gap-4 rounded-2xl border-0 bg-teal-600 p-4 text-left text-white transition-colors hover:bg-teal-700 sm:p-5"
      >
        <div className="flex rounded-xl bg-white/20 p-3">
          <QrCode className="h-6 w-6" strokeWidth={2} aria-hidden />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-white">Share Access</p>
          <p className="mt-0.5 text-sm text-teal-100">
            Show QR code for others to scan and open this dashboard
          </p>
        </div>
      </button>

      <ShareAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
