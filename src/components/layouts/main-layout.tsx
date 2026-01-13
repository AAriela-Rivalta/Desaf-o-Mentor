import type React from "react"

interface Props{
    children: React.ReactNode
}

export const MainLayout = ({children}:Props) => {
    return (
      <main className="py-8 px-4 bg-[url(/assets/images/background-mobile.png)] bg-cover bg-bottom relative
      md:bg-[url(/assets/images/background-tablet.png)] 
      lg:bg-[url(/assets/images/background-desktop.png)] overflow-hidden min-h-screen">

        <img 
          src="/assets/images/pattern-squiggly-line-top.svg" 
          alt="pattern squiggly line top."
          className="absolute top-4 right-0 h-20 md:h-25 lg:h-50"
        />
        <img 
          src="/assets/images/pattern-circle.svg" 
          alt="pattern circle"
          className="absolute -top-9 -left-3 h-33 md:h-25 lg:h-50"
        />
        <img 
          src="/assets/images/pattern-lines.svg" 
          alt="pattern lines"
          className="absolute top-0 min-w-5xl"
        />

        <div className="relative z-10">
          <header className="flex justify-center mb-10">
            <img src="/assets/images/logo-full.svg" alt="Logo" />
          </header>
          {children}
        </div>

        <img 
          src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" 
          alt="pattern squiggly line bottom mobile tablet"
          className="absolute -bottom-3 left-0 h-70 z-0"
        /> 
      </main>
    )
}