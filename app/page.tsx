import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 items-center text-center">
        <h1 className="font-mono font-bold text-white text-5xl">Ilmo-app</h1>
        <ol className="list-inside list-decimal text-sm text-slate-200 sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Sovelluksessa voit tarkastella ja ilmoittautua Joensuun Kuntokeitaan
            kilpailuihin
          </li>
          <li className="mb-2">
            Kirjaudu sisään tai rekistedöidy ilmoittautuaksesi kilpailuihin.
          </li>
          <li>Siirry sovellukseen alla olevalla painikkeella.</li>
        </ol>
        <div>
          <div className="flex gap-8 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full font-mono border border-solid text-gray-700 border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-white hover:bg-slate-200 text-sm sm:text-base h-10 sm:h-12 px-5 py-6 sm:px-5"
              href="/kirjaudu"
            >
              Kirjaudu sisään
            </Link>
            <Link
              href="/rekisteroidy"
              className="rounded-full border border-solid text-white font-mono border-transparent transition-colors flex items-center justify-center border-white text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-5 py-6 sm:px-5 "
            >
              Rekisteröidy
            </Link>
          </div>
          <Link
            href="/kilpailut"
            className="text-white font-mono mt-8 transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 sm:px-5 "
          >
            Jatka kirjautumatta
          </Link>
        </div>
      </main>
    </div>
  );
}
