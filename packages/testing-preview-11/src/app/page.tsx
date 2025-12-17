export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Iframe Scroll Test</h1>
          <p className="text-xl text-purple-200">
            Verifying vertical scrolling with 50+ items
          </p>
        </header>

        <div className="space-y-4">
          {Array.from({ length: 60 }, (_, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    Test Item #{i + 1}
                  </h3>
                  <p className="text-purple-200">
                    This is a scrollable item to verify iframe height behavior. 
                    Each card is naturally stacked in the document flow.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-purple-300 pb-12">
          <p>End of list - scroll test complete ✓</p>
        </footer>
      </div>
    </div>
  );
}

