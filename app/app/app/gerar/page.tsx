import React, { useState, useCallback } from 'react';

type ProgramaOption = { value: string; label: string };

type Option = { value: string; label: string };

interface FormData {
  programa: string;
  publicoAlvo: string;
  tom: string;
  objetivo: string;
}

interface GenerationResult {
  roteiro: string;
  descricao: string;
  hashtags: string;
  linkAfiliado: string;
}

const Gerar = () => {
  const [formData, setFormData] = useState<FormData>({
    programa: '',
    publicoAlvo: '',
    tom: '',
    objetivo: '',
  });
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const programas: ProgramaOption[] = [
    { value: 'python-basico', label: 'Python Básico' },
    { value: 'marketing-digital', label: 'Marketing Digital' },
    { value: 'fitness-iniciante', label: 'Fitness Iniciante' },
    { value: 'ingles-online', label: 'Inglês Online' },
    { value: 'investimentos', label: 'Investimentos para Iniciantes' },
    { value: 'design-grafico', label: 'Design Gráfico' },
    { value: 'devops', label: 'DevOps Essentials' },
    { value: 'e-commerce', label: 'E-commerce Mastery' },
  ];

  const tonOptions: Option[] = [
    { value: 'casual', label: 'Casual' },
    { value: 'profissional', label: 'Profissional' },
    { value: 'engraçado', label: 'Engraçado' },
    { value: 'educativo', label: 'Educativo' },
  ];

  const objetivoOptions: Option[] = [
    { value: 'curiosidade', label: 'Curiosidade' },
    { value: 'educacao', label: 'Educação' },
    { value: 'urgencia', label: 'Urgência' },
    { value: 'social_proof', label: 'Prova Social' },
  ];

  const handleGenerate = useCallback(async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Falha na geração');
      }
      const data: GenerationResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGenerate();
  };

  const copyText = useCallback(() => {
    if (!result) return;
    const fullText = `Roteiro:\n${result.roteiro}\n\nDescrição:\n${result.descricao}\n\nHashtags:\n${result.hashtags}\n\nLink Afiliado:\n${result.linkAfiliado}`;
    navigator.clipboard.writeText(fullText).then(() => {
      alert('Texto copiado para a área de transferência!');
    }).catch((err) => {
      console.error('Falha ao copiar:', err);
    });
  }, [result]);

  const shareWA = useCallback(() => {
    if (!result) return;
    const fullText = `Roteiro:\n${result.roteiro}\n\nDescrição:\n${result.descricao}\n\nHashtags:\n${result.hashtags}\n\nLink Afiliado:\n${result.linkAfiliado}`;
    const url = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [result]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent drop-shadow-lg">
          Content Kit IA
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Configurar Conteúdo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Programa</label>
                  <select
                    required
                    value={formData.programa}
                    onChange={(e) => setFormData({ ...formData, programa: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white shadow-sm"
                  >
                    <option value="">Selecione um programa</option>
                    {programas.map((prog) => (
                      <option key={prog.value} value={prog.value}>
                        {prog.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Público-Alvo</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.publicoAlvo}
                    onChange={(e) => setFormData({ ...formData, publicoAlvo: e.target.value })}
                    placeholder="Ex: Jovens empreendedores de 20-30 anos interessados em marketing digital..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-vertical bg-white shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Tom</label>
                  <select
                    required
                    value={formData.tom}
                    onChange={(e) => setFormData({ ...formData, tom: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white shadow-sm"
                  >
                    <option value="">Selecione o tom</option>
                    {tonOptions.map((ton) => (
                      <option key={ton.value} value={ton.value}>
                        {ton.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Objetivo</label>
                  <select
                    required
                    value={formData.objetivo}
                    onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white shadow-sm"
                  >
                    <option value="">Selecione o objetivo</option>
                    {objetivoOptions.map((obj) => (
                      <option key={obj.value} value={obj.value}>
                        {obj.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {loading ? 'Gerando...' : 'Gerar Conteúdo'}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Result */}
          <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Resultado do Conteúdo</h2>
              {loading ? (
                <div className="flex flex-col items-center justify-center h-96 p-8 space-y-4">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                  <p className="text-xl text-gray-500 font-medium">Gerando conteúdo incrível...</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-gray-800">Roteiro</h3>
                    <textarea
                      readOnly
                      rows={12}
                      value={result.roteiro}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-gradient-to-b from-gray-50 to-white focus:outline-none resize-vertical font-sans text-base leading-relaxed shadow-inner"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Descrição</h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{result.descricao}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Hashtags</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.hashtags.split(',').map((tag, index) => {
                        const trimmed = tag.trim();
                        if (!trimmed) return null;
                        return (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                          >
                            #{trimmed}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Link Afiliado</h3>
                    <a
                      href={result.linkAfiliado}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-mono text-sm bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-gray-100 transition-all text-blue-600 hover:text-blue-800 hover:underline decoration-blue-500 decoration-2 break-all hover:no-underline"
                    >
                      {result.linkAfiliado}
                    </a>
                  </div>
                  <div className="flex flex-col xs:flex-row gap-3 pt-4">
                    <button
                      onClick={copyText}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      Copiar Texto
                    </button>
                    <button
                      onClick={shareWA}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={handleGenerate}
                      className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      Regenerar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 p-8">
                  <div className="text-center text-gray-400 space-y-2">
                    <p className="text-xl font-medium">Preencha o formulário ao lado</p>
                    <p className="text-lg">para gerar conteúdo incrível! 🚀</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gerar;
