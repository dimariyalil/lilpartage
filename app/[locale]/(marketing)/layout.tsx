import { Header } from '@/components/layout/header'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      {/* Footer будет добавлен позже */}
    </div>
  )
}