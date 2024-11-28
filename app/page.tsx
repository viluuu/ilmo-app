import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 items-center text-center">
        <h1 className="font-mono font-bold text-white text-5xl">Ilmo-app</h1>
        <ol className="list-inside list-decimal text-sm text-slate-200 sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Sovelluksessa voit tarkastella ja ilmoittautua kilpailuihin
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
          <Link
            href="https://github.com/viluuu/ilmo-app"
            className="mt-8 flex items-center justify-center text-white"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.936.36.31.682.92.682 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Link>
        </div>
      </main>
    </div>
  );
}
