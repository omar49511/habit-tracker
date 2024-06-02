export default function New() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white">
        <link href="#" className="flex items-center justify-center">
          link
          <span className="sr-only">Anime Series</span>
        </link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Home
          </link>
          <link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Characters
          </link>
          <link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Plot
          </link>
          <link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-yellow-400"
          >
            Features
          </link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-900 text-yellow-400">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Embark on an Extraordinary Anime Adventure
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-white">
                  Immerse yourself in a captivating world of 3D-inspired
                  visuals, compelling characters, and a thrilling plot that will
                  leave you on the edge of your seat.
                </p>
                <div className="space-x-4">
                  <link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-900"
                  >
                    Watch Now
                  </link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[100px] opacity-50 animate-pulse" />
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[150px] opacity-30 animate-pulse" />
                <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat opacity-20" />
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={600}
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-yellow-400">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-gray-900 dark:bg-yellow-400">
                  Meet the Characters
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unforgettable Personalities
                </h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
                  Discover the captivating cast of characters that bring this
                  anime series to life, each with their own unique personalities
                  and stories to uncover.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 relative">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Character 1"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-400 bg-opacity-80 text-gray-900 px-4 py-2 rounded-bl-xl rounded-tr-xl">
                  <h3 className="text-lg font-bold">Akira</h3>
                  <p className="text-sm">The Brave Protagonist</p>
                </div>
              </div>
              <div className="grid gap-1 relative">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Character 2"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-400 bg-opacity-80 text-gray-900 px-4 py-2 rounded-bl-xl rounded-tr-xl">
                  <h3 className="text-lg font-bold">Sakura</h3>
                  <p className="text-sm">The Enigmatic Sorcerer</p>
                </div>
              </div>
              <div className="grid gap-1 relative">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={300}
                  alt="Character 3"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="absolute bottom-0 left-0 bg-yellow-400 bg-opacity-80 text-gray-900 px-4 py-2 rounded-bl-xl rounded-tr-xl">
                  <h3 className="text-lg font-bold">Takeshi</h3>
                  <p className="text-sm">The Cunning Strategist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-yellow-400">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unravel the Captivating Plot
              </h2>
              <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
                Embark on a thrilling journey as the characters navigate through
                a world of mystery, intrigue, and high-stakes challenges.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[100px] opacity-50 animate-pulse" />
              <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[150px] opacity-30 animate-pulse" />
              <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat opacity-20" />
              <img
                src="/placeholder.svg"
                width={550}
                height={550}
                alt="Plot"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-yellow-400">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Immersive 3D Features
              </h2>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
                Discover the innovative 3D-inspired features that elevate the
                viewing experience and bring the anime world to life.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-gray-900 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold">Stunning 3D Visuals</h3>
                  <p className="text-white dark:text-white">
                    Immerse yourself in a world of captivating 3D-inspired
                    animation and special effects.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-gray-900 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold">Parallax Scrolling</h3>
                  <p className="text-white dark:text-white">
                    Experience a dynamic and immersive scrolling effect that
                    adds depth and dimension to the anime world.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-400 text-gray-900 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold">Fluid Animations</h3>
                  <p className="text-white dark:text-white">
                    Witness the seamless integration of captivating animations
                    that bring the characters and world to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-yellow-400 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-900"
              >
                Watch Trailer
              </link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-yellow-400">
        <p className="text-xs">
          &copy; 2024 Anime Series. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-yellow-400"
          >
            Terms of Service
          </link>
          <link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-yellow-400"
          >
            Privacy
          </link>
        </nav>
      </footer>
    </div>
  );
}
