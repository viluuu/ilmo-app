export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
        <h1 className="font-mono font-bold text-white text-5xl">Ilmo-app</h1>
        <ol className="list-inside list-decimal text-sm text-center text-slate-200 sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Sovelluksessa voit tarkastella ja ilmoittautua kilpailuihin
          </li>
          <li className="mb-2">
            Kirjaudu sisään sovellukseen nähdäksesi kilpailut ja
            ilmoittautuaksesi
          </li>
          <li>Mikäli sinulla ei ole tunnuksia, rekisteröidy.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid text-gray-700 border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-white hover:bg-slate-200 text-sm sm:text-base h-10 sm:h-12 px-7 py-6 sm:px-5"
            href="/kilpailut"
          >
            Siirry sovellukseen
          </a>
        </div>
      </main>
    </div>
  );
}
