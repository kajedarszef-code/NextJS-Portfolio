export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Strona nie została znaleziona
        </h2>

        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została
          przeniesiona.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition duration-300 shadow-lg shadow-indigo-600/30"
          >
            Wróć na stronę główną
          </a>

          
                  </div>
      </div>
    </div>
  );
}
