import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Store } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    businessType: 'Loja de Materiais de Construção',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Solicitação de Contato / Seja um Distribuidor*\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'Pessoa Física'}\n` +
      `*Cidade/UF:* ${formData.city}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Tipo de Negócio:* ${formData.businessType}\n` +
      `*Mensagem:* ${formData.message}`
    );
    window.open(`https://wa.me/5531973101116?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Canais de Atendimento
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Fale com a Fibrart
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Seja para revender nossos produtos na sua loja, solicitar pedidos para construtoras ou tirar dúvidas, nossa equipe está pronta para atender você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de Contato e Localização */}
          <div className="lg:col-span-1 space-y-6">
            {/* WhatsApp Comercial */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">WhatsApp Comercial</h3>
              <p className="text-sm text-slate-500 mb-4">Atendimento direto da fábrica para orçamentos e catálogos.</p>
              <a
                href="https://wa.me/5531973101116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-semibold hover:underline text-sm"
              >
                (31) 97310-1116
              </a>
            </div>

            {/* Telefone Fixo */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Telefone da Indústria</h3>
              <p className="text-sm text-slate-500 mb-4">Atendimento de segunda a sexta-feira.</p>
              <a
                href="tel:3131522755"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline text-sm"
              >
                (31) 3152-2755
              </a>
            </div>

            {/* E-mail de Vendas */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">E-mail</h3>
              <p className="text-sm text-slate-500 mb-4">Envie cotações e solicitações de cadastro.</p>
              <a
                href="mailto:vendas@fibrart.com.br"
                className="inline-flex items-center text-indigo-600 font-semibold hover:underline text-sm"
              >
                vendas@fibrart.com.br →
              </a>
            </div>

            {/* Endereço da Fábrica */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Endereço da fábrica</h3>
              <p className="text-sm text-slate-600">
                Rodovia MG-424, nº 2.928 - Bairro Esmeraldas<br />
                Sete Lagoas - MG | CEP: 35.702-098
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                <Clock className="w-4 h-4" />
                <span>Seg a Sex: 07:30 às 17:00</span>
              </div>
            </div>
          </div>

          {/* Formulário Comercial / Seja um Distribuidor */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Store className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Seja um Distribuidor / Orçamento</h2>
              </div>
              <p className="text-slate-600 mb-8 text-sm">
                Preencha o formulário para receber a tabela de atacado e condições especiais direto da fábrica.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-green-900">Solicitação Enviada!</h3>
                  <p className="text-sm text-green-700 mt-1">
                    Abrimos o WhatsApp com todos os seus dados para atendimento imediato.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-green-800 font-medium underline"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="Nome do responsável"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Nome da Empresa / Loja
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="Ex: Comercial Silva Materiais"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        WhatsApp ou Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Cidade e Estado (UF) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="Ex: Sete Lagoas / MG"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Segmento de Atuação
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="Loja de Materiais de Construção">Loja de Materiais de Construção</option>
                      <option value="Atacadista / Distribuidor">Atacadista / Distribuidor</option>
                      <option value="Construtora / Engenharia">Construtora / Engenharia</option>
                      <option value="Marcenaria / Móveis Planejados">Marcenaria / Móveis Planejados</option>
                      <option value="Cliente Final / Residencial">Cliente Final / Residencial</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Mensagem ou Modelos de Interesse
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="Descreva as medidas, quantidades estimadas ou sua região de entrega..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow transition"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitação no WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
