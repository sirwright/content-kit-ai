import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-4 md:px-8 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Content Kit IA
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Revolucione sua estratégia de conteúdo com inteligência artificial. Crie posts envolventes e otimizados para conversões em poucos cliques.
          </p>
          <Link
            href="/gerar"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Começar Agora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20 text-gray-800">
            Por que escolher Content Kit IA?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Gere posts em segundos</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa IA gera posts completos e prontos para publicar em questão de segundos.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">IA otimizada para afiliados</h3>
              <p className="text-gray-600 leading-relaxed">
                Treinada especificamente para maximizar conversões em links de afiliados.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Copie e publique</h3>
              <p className="text-gray-600 leading-relaxed">
                Copie o texto gerado diretamente para suas redes sociais favoritas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-8 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20 text-gray-800">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">O que é o Content Kit IA?</h4>
              <p className="text-gray-600 leading-relaxed">
                É uma ferramenta de IA que ajuda afiliados a criar conteúdo persuasivo e otimizado rapidamente para redes sociais.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">É necessário login ou cadastro?</h4>
              <p className="text-gray-600 leading-relaxed">
                Para este MVP, clique em "Começar Agora" e teste sem cadastro! Funcionalidades completas em breve.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold mb-3 text-gray-900">Posso usar em qualquer nicho?</h4>
              <p className="text-gray-600 leading-relaxed">
                Sim! Otimizada para afiliados, mas funciona perfeitamente em qualquer nicho de marketing digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4">&copy; 2024 Content Kit IA. Todos os direitos reservados.</p>
          <p className="text-sm text-blue-200">Feito com ❤️ para afiliados</p>
        </div>
      </footer>
    </main>
  );
}
