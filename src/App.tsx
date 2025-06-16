import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, TrendingUp, Award, MapPin, Phone, Mail, Globe, BarChart3, DollarSign, Target, Star, ArrowUp, Calendar, Briefcase, Heart, Sparkles, Zap, Gift } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    {
      id: 'cover',
      title: 'PROGRAMA DE AFILIADOS',
      subtitle: 'MMC TURISMO',
      tagline: 'Viaje Junto, Lucre Sempre – Com o Turismo que transforma! ✨',
      background: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'company',
      title: 'QUEM SOMOS',
      subtitle: 'Especialistas em Experiências Memoráveis 🌟',
      background: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'destinations',
      title: 'NOSSOS DESTINOS',
      subtitle: 'Bases de Encantamento 🗺️',
      background: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'program',
      title: 'O PROGRAMA',
      subtitle: 'Como Funciona o Sistema de Afiliados 🚀',
      background: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'dashboard',
      title: 'DASHBOARD & MÉTRICAS',
      subtitle: 'Controle Total das Suas Vendas 📊',
      background: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'commissions',
      title: 'NÍVEIS DE COMISSÃO',
      subtitle: 'Cresça com a Gente — Conquiste Cada Degrau 💎',
      background: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'target',
      title: 'PÚBLICO-ALVO',
      subtitle: 'Quem Pode Ser um Afiliado 👥',
      background: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'projections',
      title: 'PROJEÇÕES & RESULTADOS',
      subtitle: 'Dados e Oportunidades de Crescimento 📈',
      background: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    },
    {
      id: 'contact',
      title: 'JUNTE-SE A NÓS',
      subtitle: 'Seja Afiliado Oficial da MMC Turismo 🎉',
      background: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const commissionLevels = [
    { level: 'Bronze', range: 'Até R$ 30.000', commission: '3%', color: 'from-amber-700 via-amber-600 to-amber-500', icon: '🥉', message: 'Todo grande caminho começa aqui!' },
    { level: 'Prata', range: 'R$ 30.001 - R$ 50.000', commission: '5%', color: 'from-gray-600 via-gray-500 to-gray-400', icon: '🥈', message: 'Agora você brilha!' },
    { level: 'Ouro', range: 'R$ 50.001 - R$ 100.000', commission: '8%', color: 'from-yellow-600 via-yellow-500 to-yellow-400', icon: '🥇', message: 'Alta performance, mais lucro!' },
    { level: 'Esmeralda', range: 'Acima de R$ 100.001', commission: '10%', color: 'from-emerald-700 via-emerald-600 to-emerald-500', icon: '💎', message: 'Topo da cadeia! Exclusividade total!' }
  ];

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    switch (slide.id) {
      case 'cover':
        return (
          <div className="text-center space-y-8">
            <div className="mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
                <div className="w-20 h-20 bg-white/40 rotate-45 rounded-2xl flex items-center justify-center">
                  <Sparkles size={32} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-green-300 mb-8 animate-bounce">
                {slide.subtitle}
              </h2>
            </div>
            <div className="bg-black/30 backdrop-blur-lg p-8 rounded-3xl border border-green-400/30 max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl font-light text-green-100 leading-relaxed">
                {slide.tagline}
              </p>
              <div className="flex justify-center items-center space-x-4 mt-6">
                <Heart className="text-red-400 animate-pulse" size={28} />
                <span className="text-xl text-green-200">Transforme paixão em lucro!</span>
                <Heart className="text-red-400 animate-pulse" size={28} />
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-12 py-6 rounded-full text-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-110 flex items-center space-x-3 shadow-2xl border-2 border-green-300/50 hover:border-green-200"
              >
                <Play size={24} className={isAutoPlay ? 'animate-spin' : ''} />
                <span>{isAutoPlay ? '⏸️ Pausar' : '▶️ Iniciar'} Apresentação</span>
                <Zap size={24} className="text-yellow-300 animate-pulse" />
              </button>
            </div>
          </div>
        );

      case 'company':
        return (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Award size={48} className="text-yellow-400 animate-bounce" />
                <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              </div>
              <p className="text-2xl text-green-200 font-light flex items-center">
                <Sparkles className="mr-3 text-yellow-400" />
                {slide.subtitle}
              </p>
              <div className="space-y-6 text-lg">
                <div className="bg-gradient-to-r from-black/40 to-green-900/30 p-6 rounded-2xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                    <Target className="mr-3" />
                    Nossa Missão 🎯
                  </h3>
                  <p className="text-green-100">Transformar destinos turísticos em experiências memoráveis através de operação própria, equipe dedicada e foco no encantamento do início ao fim! 💫</p>
                </div>
                <div className="bg-gradient-to-r from-black/40 to-emerald-900/30 p-6 rounded-2xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                    <Gift className="mr-3" />
                    Nossos Serviços 🎁
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-green-100">
                    <div className="flex items-center"><span className="mr-2">🏞️</span> Passeios guiados</div>
                    <div className="flex items-center"><span className="mr-2">🚐</span> Transfers privativos</div>
                    <div className="flex items-center"><span className="mr-2">🎟️</span> Ingressos exclusivos</div>
                    <div className="flex items-center"><span className="mr-2">🧭</span> Atendimento bilíngue</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/30 via-emerald-500/20 to-green-600/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Award size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-400 flex items-center justify-center">
                    <Star className="mr-2 text-yellow-400" />
                    Excelência Comprovada
                    <Star className="ml-2 text-yellow-400" />
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all">
                    <div className="text-4xl font-black text-white mb-2 animate-pulse">15+</div>
                    <div className="text-green-200">Anos de Experiência 🏆</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all">
                    <div className="text-4xl font-black text-white mb-2 animate-pulse">50K+</div>
                    <div className="text-green-200">Clientes Felizes 😊</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all">
                    <div className="text-4xl font-black text-white mb-2 animate-pulse">4.9</div>
                    <div className="text-green-200">Avaliação Média ⭐</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-all">
                    <div className="text-4xl font-black text-white mb-2 animate-pulse">3</div>
                    <div className="text-green-200">Destinos Incríveis 🌎</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'destinations':
        return (
          <div className="text-center space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light flex items-center justify-center">
                <MapPin className="mr-3 text-red-400 animate-bounce" />
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { city: 'Foz do Iguaçu', icon: '🌊', attractions: 'Cataratas, Itaipu, Marco das 3 Fronteiras', color: 'from-blue-600 via-cyan-500 to-green-600', emoji: '💙' },
                { city: 'Gramado', icon: '🎄', attractions: 'Natal Luz, charme europeu, gastronomia', color: 'from-red-600 via-pink-500 to-green-600', emoji: '❤️' },
                { city: 'Rio de Janeiro', icon: '🌞', attractions: 'Cristo Redentor, Pão de Açúcar', color: 'from-yellow-600 via-orange-500 to-green-600', emoji: '💛' }
              ].map((dest, index) => (
                <div key={index} className={`bg-gradient-to-br ${dest.color} p-8 rounded-3xl transform hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/30 hover:border-white/60 cursor-pointer group`}>
                  <div className="text-6xl mb-4 group-hover:animate-bounce">{dest.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-white flex items-center justify-center">
                    {dest.city} {dest.emoji}
                  </h3>
                  <p className="text-white/90 text-lg mb-4">{dest.attractions}</p>
                  <div className="text-2xl group-hover:animate-pulse">✨ Experiências Únicas ✨</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500/40 to-emerald-500/40 p-6 rounded-3xl backdrop-blur-sm border border-green-400/50 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-white flex items-center justify-center">
                <Heart className="mr-3 text-red-400 animate-pulse" />
                Cada destino é uma nova aventura esperando por você!
                <Heart className="ml-3 text-red-400 animate-pulse" />
              </p>
            </div>
          </div>
        );

      case 'program':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light mb-8 flex items-center justify-center">
                <Zap className="mr-3 text-yellow-400 animate-pulse" />
                {slide.subtitle}
              </p>
              <div className="bg-gradient-to-r from-black/50 to-green-900/40 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 max-w-4xl mx-auto hover:border-green-400/70 transition-all">
                <p className="text-3xl font-light text-green-100 leading-relaxed mb-4">
                  Uma forma <span className="text-yellow-400 font-bold animate-pulse">simples, moderna e inteligente</span> de gerar renda promovendo nossos serviços turísticos! 🚀
                </p>
                <div className="mt-8 text-4xl font-bold text-white flex items-center justify-center space-x-4">
                  <span>💡</span>
                  <span>Você indica.</span>
                  <span>🎯</span>
                  <span>A gente realiza.</span>
                  <span>🎉</span>
                  <span>Todos ganham!</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Cadastre-se', desc: 'Gratuitamente 🆓', icon: Users, color: 'from-blue-500 to-cyan-500' },
                { step: '2', title: 'Receba', desc: 'Link personalizado 🔗', icon: Target, color: 'from-purple-500 to-pink-500' },
                { step: '3', title: 'Divulgue', desc: 'Nas suas redes 📱', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
                { step: '4', title: 'Acompanhe', desc: 'Vendas em tempo real ⏰', icon: BarChart3, color: 'from-orange-500 to-red-500' },
                { step: '5', title: 'Receba', desc: 'Pagamento mensal 💰', icon: DollarSign, color: 'from-yellow-500 to-green-500' }
              ].map((item, index) => (
                <div key={index} className="bg-black/40 p-6 rounded-2xl backdrop-blur-sm border border-green-500/40 text-center hover:border-green-400/70 transition-all transform hover:scale-110 hover:rotate-2 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg group-hover:animate-bounce`}>
                    {item.step}
                  </div>
                  <item.icon size={32} className="mx-auto mb-3 text-green-400 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-green-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 p-6 rounded-3xl backdrop-blur-sm border border-green-400/50 max-w-3xl mx-auto">
                <p className="text-2xl font-bold text-white flex items-center justify-center">
                  <Sparkles className="mr-3 text-yellow-400 animate-spin" />
                  É simples assim! Comece hoje mesmo! 
                  <Sparkles className="ml-3 text-yellow-400 animate-spin" />
                </p>
              </div>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light flex items-center justify-center">
                <BarChart3 className="mr-3 text-blue-400 animate-pulse" />
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-black/50 to-green-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                  <BarChart3 className="mr-3 animate-pulse" />
                  Métricas em Tempo Real 📊
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all">
                    <span className="text-lg flex items-center">💰 Vendas do Mês</span>
                    <span className="text-2xl font-bold text-green-400 animate-pulse">R$ 45.230</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all">
                    <span className="text-lg flex items-center">🎯 Comissão Acumulada</span>
                    <span className="text-2xl font-bold text-green-400 animate-pulse">R$ 3.618</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all">
                    <span className="text-lg flex items-center">📈 Conversão</span>
                    <span className="text-2xl font-bold text-green-400 animate-pulse">12.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all">
                    <span className="text-lg flex items-center">👆 Cliques no Link</span>
                    <span className="text-2xl font-bold text-green-400 animate-pulse">1.247</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-black/50 to-emerald-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                  <Award className="mr-3 animate-bounce" />
                  Ferramentas Exclusivas 🛠️
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/30 to-green-500/20 rounded-xl hover:from-emerald-500/40 hover:to-green-500/30 transition-all transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse">📈</div>
                    <div>
                      <div className="font-bold text-white">Painel de Controle</div>
                      <div className="text-green-200 text-sm">Métricas detalhadas em tempo real ⚡</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/30 to-green-500/20 rounded-xl hover:from-emerald-500/40 hover:to-green-500/30 transition-all transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center animate-pulse">📸</div>
                    <div>
                      <div className="font-bold text-white">Kit de Marketing</div>
                      <div className="text-green-200 text-sm">Artes e banners prontos 🎨</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/30 to-green-500/20 rounded-xl hover:from-emerald-500/40 hover:to-green-500/30 transition-all transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center animate-pulse">📘</div>
                    <div>
                      <div className="font-bold text-white">Treinamento Online</div>
                      <div className="text-green-200 text-sm">Suporte completo e personalizado 🎓</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-500/30 to-green-500/20 rounded-xl hover:from-emerald-500/40 hover:to-green-500/30 transition-all transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center animate-pulse">🎉</div>
                    <div>
                      <div className="font-bold text-white">Acesso Antecipado</div>
                      <div className="text-green-200 text-sm">Promoções exclusivas VIP 👑</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'commissions':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light flex items-center justify-center">
                <Sparkles className="mr-3 text-yellow-400 animate-spin" />
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {commissionLevels.map((level, index) => (
                <div key={index} className={`p-8 rounded-3xl bg-gradient-to-br ${level.color} transform hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/30 hover:border-white/60 cursor-pointer group`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4 group-hover:animate-bounce">{level.icon}</div>
                    <h3 className="text-3xl font-black text-white mb-4 group-hover:animate-pulse">{level.level}</h3>
                    <div className="text-5xl font-black text-white mb-4 animate-pulse">{level.commission}</div>
                    <p className="text-white/90 text-lg font-medium mb-4">{level.range}</p>
                    <div className="bg-white/20 p-3 rounded-xl">
                      <p className="text-white text-sm font-bold">{level.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-black/50 to-green-900/40 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 text-center hover:border-green-400/70 transition-all">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center justify-center">
                <TrendingUp className="mr-3 animate-pulse" />
                🌿 Evolução de Comissões 🌿
              </h3>
              <p className="text-xl text-green-100 mb-6">Quanto mais você vende, maior sua comissão! Comece no Bronze e evolua até o Esmeralda! 🚀</p>
              <div className="flex justify-center items-center space-x-6 mb-6">
                <div className="text-amber-500 text-3xl animate-bounce">🥉</div>
                <ArrowUp className="text-green-400 animate-pulse" size={32} />
                <div className="text-gray-400 text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🥈</div>
                <ArrowUp className="text-green-400 animate-pulse" size={32} />
                <div className="text-yellow-500 text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🥇</div>
                <ArrowUp className="text-green-400 animate-pulse" size={32} />
                <div className="text-emerald-500 text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>💎</div>
              </div>
              <p className="text-2xl font-bold text-white flex items-center justify-center">
                <Heart className="mr-3 text-red-400 animate-pulse" />
                Seu sucesso é o nosso sucesso!
                <Heart className="ml-3 text-red-400 animate-pulse" />
              </p>
            </div>
          </div>
        );

      case 'target':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light flex items-center justify-center">
                <Users className="mr-3 text-blue-400 animate-pulse" />
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: '🌟', title: 'Influenciadores', desc: 'Digitais de viagem', color: 'from-purple-500 to-pink-500' },
                { icon: '🧭', title: 'Guias', desc: 'Turismo regionais', color: 'from-blue-500 to-cyan-500' },
                { icon: '📝', title: 'Bloggers', desc: 'Canais de turismo', color: 'from-green-500 to-emerald-500' },
                { icon: '✈️', title: 'Agências', desc: 'Online ou híbridas', color: 'from-indigo-500 to-purple-500' },
                { icon: '🏨', title: 'Hotéis', desc: 'Pousadas e hostels', color: 'from-orange-500 to-red-500' },
                { icon: '🚗', title: 'Motoristas', desc: 'Taxi e aplicativo', color: 'from-yellow-500 to-orange-500' },
                { icon: '🚙', title: 'Locadoras', desc: 'De automóveis', color: 'from-teal-500 to-green-500' },
                { icon: '📱', title: 'Criadores', desc: 'Conteúdo engajado', color: 'from-pink-500 to-rose-500' }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl text-center hover:scale-110 transition-all duration-500 shadow-2xl border-2 border-white/30 hover:border-white/60 cursor-pointer group`}>
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:animate-pulse">{item.title}</h3>
                  <p className="text-white/90">{item.desc}</p>
                  <div className="mt-3 text-2xl group-hover:animate-pulse">✨</div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500/40 via-emerald-500/30 to-green-600/40 p-8 rounded-3xl backdrop-blur-sm border border-green-500/50 text-center hover:border-green-400/70 transition-all">
              <p className="text-2xl font-bold text-white flex items-center justify-center mb-4">
                <Heart className="mr-3 text-red-400 animate-pulse" />
                Se você tem público, ama turismo ou quer empreender sem investir,
                <Heart className="ml-3 text-red-400 animate-pulse" />
              </p>
              <p className="text-3xl font-black text-green-300 flex items-center justify-center">
                <Sparkles className="mr-3 text-yellow-400 animate-spin" />
                esse programa é pra você! 🎉
                <Sparkles className="ml-3 text-yellow-400 animate-spin" />
              </p>
            </div>
          </div>
        );

      case 'projections':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light flex items-center justify-center">
                <TrendingUp className="mr-3 text-green-400 animate-pulse" />
                {slide.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-black/50 to-green-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center">
                  <TrendingUp className="mr-3 animate-pulse" />
                  Projeções 2025 🚀
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-2xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all transform hover:scale-105">
                    <div>
                      <div className="text-4xl font-black text-white animate-pulse">20%</div>
                      <div className="text-green-200">Aumento nas Vendas 📊</div>
                    </div>
                    <div className="text-4xl animate-bounce">📈</div>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-2xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all transform hover:scale-105">
                    <div>
                      <div className="text-4xl font-black text-white animate-pulse">200</div>
                      <div className="text-green-200">Afiliados Ativos 🤝</div>
                    </div>
                    <div className="text-4xl animate-bounce">👥</div>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-500/30 to-emerald-500/20 rounded-2xl hover:from-green-500/40 hover:to-emerald-500/30 transition-all transform hover:scale-105">
                    <div>
                      <div className="text-4xl font-black text-white animate-pulse">3</div>
                      <div className="text-green-200">Destinos Principais 🌎</div>
                    </div>
                    <div className="text-4xl animate-bounce">🗺️</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-black/50 to-emerald-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-105">
                <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center">
                  <Star className="mr-3 animate-spin" style={{ animationDuration: '3s' }} />
                  Por Que Vale a Pena 💫
                </h3>
                <div className="space-y-4">
                  {[
                    { text: 'Produtos com nota máxima nos reviews', emoji: '⭐' },
                    { text: 'Altas taxas de conversão comprovadas', emoji: '🎯' },
                    { text: 'Operação 100% legalizada', emoji: '✅' },
                    { text: 'Atendimento bilíngue profissional', emoji: '🗣️' },
                    { text: 'Possibilidade de escalar com tráfego pago', emoji: '🚀' },
                    { text: 'Suporte completo e personalizado', emoji: '💝' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-500/30 to-green-500/20 rounded-xl hover:from-emerald-500/40 hover:to-green-500/30 transition-all transform hover:scale-105">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">✓</div>
                      <span className="text-green-100 flex items-center">
                        <span className="mr-2">{item.emoji}</span>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="text-center space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">{slide.title}</h1>
              <p className="text-2xl text-green-200 font-light flex items-center justify-center">
                <Sparkles className="mr-3 text-yellow-400 animate-spin" />
                {slide.subtitle}
              </p>
            </div>
            <div className="space-y-8">
              <div className="text-3xl space-y-4">
                <p className="flex items-center justify-center">
                  <span className="mr-3">💡</span>
                  Porque viajar transforma.
                  <Heart className="ml-3 text-red-400 animate-pulse" />
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-3">📢</span>
                  Indicar transforma a conta bancária.
                  <DollarSign className="ml-3 text-green-400 animate-pulse" />
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-3">👣</span>
                  Vem fazer parte do programa que vai mais longe.
                  <Zap className="ml-3 text-yellow-400 animate-pulse" />
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-black/50 to-blue-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-110 group">
                  <Mail size={48} className="mx-auto mb-4 text-green-400 group-hover:animate-bounce" />
                  <h3 className="text-xl font-bold mb-2 text-white">📧 Email</h3>
                  <p className="text-green-400 text-lg font-semibold">afiliados@mmcreceptivo.com.br</p>
                </div>
                <div className="bg-gradient-to-br from-black/50 to-green-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-110 group">
                  <Phone size={48} className="mx-auto mb-4 text-green-400 group-hover:animate-bounce" />
                  <h3 className="text-xl font-bold mb-2 text-white">📱 WhatsApp</h3>
                  <p className="text-green-400 text-lg font-semibold">(45) 9937-6567</p>
                </div>
                <div className="bg-gradient-to-br from-black/50 to-purple-900/30 p-8 rounded-3xl backdrop-blur-sm border border-green-500/40 hover:border-green-400/70 transition-all transform hover:scale-110 group">
                  <Globe size={48} className="mx-auto mb-4 text-green-400 group-hover:animate-bounce" />
                  <h3 className="text-xl font-bold mb-2 text-white">🌐 Website</h3>
                  <p className="text-green-400 text-lg font-semibold">mmcreceptivo.com.br</p>
                </div>
              </div>
              
              {/* Botão CTA melhorado - não sobrepõe mais */}
              <div className="pt-8">
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto border-2 border-green-300/50 hover:border-green-200 transition-all">
                  <div className="flex items-center justify-center mb-6">
                    <Sparkles className="text-yellow-300 animate-spin mr-3" size={32} />
                    <h3 className="text-4xl font-black text-white">🚀 Comece Agora</h3>
                    <Sparkles className="text-yellow-300 animate-spin ml-3" size={32} />
                  </div>
                  <p className="text-2xl mb-8 font-light text-white flex items-center justify-center">
                    <Heart className="mr-3 text-red-300 animate-pulse" />
                    Viaje com a gente. Venda com a gente. Cresça com a gente.
                    <Heart className="ml-3 text-red-300 animate-pulse" />
                  </p>
                  <button className="bg-white text-green-600 px-12 py-6 rounded-full text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-110 shadow-xl border-2 border-green-200 hover:border-green-300 flex items-center mx-auto space-x-3">
                    <Zap className="text-yellow-500" />
                    <span>SER AFILIADO OFICIAL</span>
                    <Star className="text-yellow-500 animate-pulse" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Slide Container */}
      <div className="relative h-screen">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].background})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/85 to-green-600/90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Sparkle effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <div className="w-full max-w-7xl mx-auto">
            {renderSlideContent()}
          </div>
        </div>

        {/* Navigation Controls - Melhorados */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6 bg-black/50 backdrop-blur-lg rounded-full px-8 py-4 border border-green-400/40 hover:border-green-300/60 transition-all">
            <button 
              onClick={prevSlide}
              className="p-3 bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 rounded-full transition-all transform hover:scale-110"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all transform hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-green-400 animate-pulse' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-3 bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 rounded-full transition-all transform hover:scale-110"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Slide Counter - Melhorado */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-black/50 backdrop-blur-lg rounded-full px-6 py-3 border border-green-400/40">
            <span className="text-lg font-bold text-white flex items-center">
              <Calendar className="mr-2 text-green-400" size={20} />
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Auto-play Indicator - Melhorado */}
        {isAutoPlay && (
          <div className="absolute top-8 left-8 z-20">
            <div className="bg-green-500/30 backdrop-blur-lg rounded-full px-6 py-3 border border-green-500/40 flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-300 flex items-center">
                <Play size={16} className="mr-1" />
                Auto Play Ativo
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;