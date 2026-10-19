import { cn } from "cn"

export function Template({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      className={cn("mx-auto flex min-h-screen max-w-7xl flex-col", className)}
    >
      {children}
    </section>
  )
}

export function Header({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <header className={cn("sticky-0 flex items-center gap-2 p-4", className)}>
      {children}
    </header>
  )
}

export function Main({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <main className={cn("flex flex-1 flex-col p-4", className)}>
      {children}
    </main>
  )
}

export function Section({
  title,
  className,
  children,
}: {
  title?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("flex flex-col", className)}>
      {title && (
        <h1 className="mb-4 scroll-m-20 text-3xl font-semibold tracking-tight text-balance">
          {title}
        </h1>
      )}

      {children}
    </section>
  )
}

export function Footer({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <footer className={cn("flex justify-center p-4", className)}>
      {children}
    </footer>
  )
}
