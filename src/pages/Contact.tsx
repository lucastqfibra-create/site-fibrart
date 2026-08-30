import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, MapPin, Building2, CheckCircle } from 'lucide-react';

interface FormData {
  nome: string;
  empresa: string;
  cnpj: string;
  cidade: string;
  estado: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const estados = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA',
  'PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    empresa: '',
    cnpj: '',
    cidade: '',
    estado: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main>
      {/* Header band */}
      <div className="bg-charcoal-900 pt-24 md:pt-28 pb-12 md:pb-14">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-brand-400" />
            <span className="text-brand-400 text-xs font-bold uppercase tracking-widest">
              Fale Conosco
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Seja um Distribuidor FIBRART
          </h1>
          <p className="text-charcoal-400 max-w-xl leading-relaxed">
            Trabalhamos com parceiros em todo o Brasil. Preencha o formulário e
            nossa equipe comercial entrará em contato.
          </p>
        </div>
      </div>

      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* CTA Card */}
            <div className="p-7 rounded-2xl gradient-brand text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 size={24} className="text-brand-100" />
                  <h3 className="text-lg font-bold">Atendimento B2B</h3>
                </div>
                <p className="text-brand-100/80 text-sm leading-relaxed mb-5">
                  Lojistas, distribuidores e construtoras têm atendimento
                  prioritário e condições especiais para compra no atacado.
                </p>
                <a
                  href="https://wa.me/5531973101117?text=Olá! Gostaria de me tornar um distribuidor FIBRART."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp Comercial
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+553131522755"
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-charcoal-100 hover:border-brand-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 font-medium">Telefone</p>
                  <p className="text-sm font-bold text-charcoal-800">
                    (31) 3152.2755 / 97310.1117
                  </p>
                </div>
              </a>

              <a
                href="mailto:vendas@fibrart.com.br"
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-charcoal-100 hover:border-brand-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 font-medium">E-mail</p>
                  <p className="text-sm font-bold text-charcoal-800">
                    vendas@fibrart.com.br
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-charcoal-100">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-charcoal-400 font-medium">Endereço</p>
                  <p className="text-sm font-bold text-charcoal-800 leading-relaxed">
                    Rodovia MG 424, nº 2.928<br />
                    Sete Lagoas — MG<br />
                    CEP 35.702-098
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-10 rounded-2xl bg-green-50 border border-green-200">
                <div className="text-center">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-charcoal-500 leading-relaxed max-w-sm mx-auto">
                    Obrigado pelo interesse. Nossa equipe comercial entrará em
                    contato em breve.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ nome:'',empresa:'',cnpj:'',cidade:'',estado:'',email:'',telefone:'',mensagem:'' });
                    }}
                    className="btn-ghost mt-6"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl bg-white border border-charcoal-100 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">Nome completo *</label>
                    <input
                      type="text" name="nome" required value={form.nome} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">Empresa *</label>
                    <input
                      type="text" name="empresa" required value={form.empresa} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">CNPJ</label>
                    <input
                      type="text" name="cnpj" value={form.cnpj} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                      placeholder="00.000.000/0001-00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">Cidade *</label>
                    <input
                      type="text" name="cidade" required value={form.cidade} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                      placeholder="Sua cidade"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">Estado *</label>
                    <select
                      name="estado" required value={form.estado} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                    >
                      <option value="">Selecione</option>
                      {estados.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">E-mail *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">Telefone *</label>
                    <input
                      type="tel" name="telefone" required value={form.telefone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all"
                      placeholder="(31) 9 9999-9999"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-charcoal-700 mb-1.5">Mensagem</label>
                    <textarea
                      name="mensagem" rows={4} value={form.mensagem} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 focus:border-brand-400 transition-all resize-none"
                      placeholder="Conte-nos sobre sua empresa e interesse nos produtos FIBRART..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Enviando...' : (<>Enviar Solicitação <Send size={18} /></>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
