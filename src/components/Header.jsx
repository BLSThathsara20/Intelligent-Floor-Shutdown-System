export default function Header({ lastUpdated }) {
  return (
    <header className="border-b border-slate-200/60 bg-white/95 backdrop-blur-sm pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              Intelligent Floor Shutdown
            </h1>
            <p className="mt-0.5 text-xs font-medium text-slate-500 sm:text-sm">
              Northumbria University — Analytics Dashboard
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-500/20"
              role="status"
              aria-live="polite"
            >
              <span className="inline-flex h-2.5 w-2.5 animate-live-blink rounded-full bg-emerald-500" />
              Live
            </span>
            <span className="text-xs text-slate-500 tabular-nums" key={lastUpdated}>
              Updated {lastUpdated}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
