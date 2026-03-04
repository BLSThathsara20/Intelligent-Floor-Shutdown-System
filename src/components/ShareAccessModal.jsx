import { useEffect } from 'react'
import { X } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

export default function ShareAccessModal({ isOpen, onClose }) {
  const dashboardUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-access-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="share-access-title" className="text-lg font-semibold text-slate-900">
            Share Dashboard Access
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <p className="mb-4 text-sm text-slate-600">
          Scan this QR code to open the dashboard on another device.
        </p>

        <div className="flex justify-center rounded-xl bg-white p-4 ring-1 ring-slate-200/80">
          <QRCodeSVG
            value={dashboardUrl}
            size={200}
            level="M"
            includeMargin={false}
            className="rounded-lg"
          />
        </div>

        <p className="mt-4 break-all text-xs text-slate-500">
          {dashboardUrl}
        </p>
      </div>
    </div>
  )
}
