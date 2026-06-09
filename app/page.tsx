export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-zinc-50 px-6 text-center font-sans dark:bg-black">
      <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
        Bhumitech
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Welcome. Our website is under construction — something great is on the way.
      </p>
      <a
        href="mailto:hello@bhumitech.com"
        className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Get in touch
      </a>
    </main>
  );
}
