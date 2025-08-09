import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Zap,
  Rocket,
  ChefHat,
  Palette,
  MessageSquare,
  Calculator,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Home,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              
<div className="w-10 h-10">
  <img
    src="/logo2.png" // ou /logo.png, dependendo do formato que você salvar
    alt="Logo Fábrica de Robôs"
    className="w-full h-full object-contain"
  />
</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">FÁBRICA DE ROBÔS</div>
              <div className="text-xs text-yellow-400 font-medium">FOOD TECH REVOLUTION</div>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-bold px-6">
            COMEÇAR AGORA
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
         <Badge className="mb-8 bg-yellow-400 text-black border-yellow-500 shadow-md px-6 py-2 text-sm font-bold tracking-wide uppercase">
  <Sparkles className="w-4 h-4 mr-2" />
  A ERA DOS ROBÔS CHEGOU AO FOOD BUSINESS
</Badge>


          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <div className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">DOMINE O</div>
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent mb-4">
              FUTURO
            </div>
            <div className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">DA COMIDA</div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-yellow-400 font-bold">5 robôs inteligentes</span> que transformam qualquer pessoa em
            <span className="text-blue-400 font-bold"> dono de um império gastronômico</span>. Sem experiência, sem
            complicação, apenas <span className="text-white font-bold">resultados extraordinários</span>.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 text-xl px-12 py-6 font-black rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-400/25"
            >
              <Rocket className="mr-3 h-6 w-6" />
              QUERO MEUS ROBÔS AGORA
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 text-xl px-12 py-6 font-bold rounded-xl bg-transparent"
            >
              VER DEMONSTRAÇÃO
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full border-2 border-black"
                  ></div>
                ))}
              </div>
              <span className="text-sm font-medium">+3.247 empreendedores</span>
            </div>
            <div className="text-yellow-400 text-sm font-medium">⚡ Resultados em 48h</div>
          </div>
        </div>
      </section>

      {/* O que é a Fábrica */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  O QUE É A FÁBRICA DE ROBÔS?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A primeira inteligência artificial do Brasil especializada em transformar
                <span className="text-yellow-400 font-bold">
                  {" "}
                  pessoas comuns em donos de negócios de comida milionários
                </span>
                .
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">A Revolução Chegou</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Nossos 5 robôs trabalham 24 horas por dia para criar tudo que você precisa: cardápios irresistíveis,
                    branding profissional, estratégias de marketing viral, precificação lucrativa e páginas de vendas
                    que convertem.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-400/20 rounded-xl p-6">
                    <Zap className="h-8 w-8 text-yellow-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">IA Avançada</h4>
                    <p className="text-gray-400 text-sm">Tecnologia de ponta treinada com dados de +50.000 negócios</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-400/20 rounded-xl p-6">
                    <Rocket className="h-8 w-8 text-blue-400 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">Velocidade Extrema</h4>
                    <p className="text-gray-400 text-sm">Seu negócio completo em 48h, não em meses</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur border border-gray-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-black text-yellow-400 mb-2">3.247</div>
                      <div className="text-sm text-gray-300">Negócios Criados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-blue-400 mb-2">R$ 2.8M</div>
                      <div className="text-sm text-gray-300">Faturamento Gerado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-green-400 mb-2">48h</div>
                      <div className="text-sm text-gray-300">Tempo Médio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-purple-400 mb-2">98%</div>
                      <div className="text-sm text-gray-300">Taxa de Sucesso</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-20">
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                POR QUE SOMOS DIFERENTES?
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Velocidade Hiperespacial</h3>
                <p className="text-gray-300">
                  Enquanto outros levam meses, nossos robôs entregam seu negócio completo em 48 horas
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Precisão Cirúrgica</h3>
                <p className="text-gray-300">
                  Cada estratégia é calculada com dados reais para maximizar seus lucros desde o dia 1
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Poder Ilimitado</h3>
                <p className="text-gray-300">
                  5 robôs especializados trabalhando 24/7 para fazer seu negócio crescer exponencialmente
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Proteção Total</h3>
                <p className="text-gray-300">
                  Garantia incondicional de 30 dias. Não funcionou? Devolvemos 100% do seu investimento
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Inteligência Superior</h3>
                <p className="text-gray-300">
                  IA treinada com dados de milhares de negócios de sucesso no mercado brasileiro
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Qualidade Premium</h3>
                <p className="text-gray-300">
                  Resultados profissionais que fazem seus clientes pensarem que você contratou uma agência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-20">
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                PARA QUEM SÃO NOSSOS ROBÔS?
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-r from-yellow-400 to-yellow-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ChefHat className="h-10 w-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold">Cozinheiros Caseiros</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg">
                    Você faz uma comida incrível mas não sabe como transformar isso em um negócio lucrativo
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-r from-blue-400 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-10 w-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold">Empreendedores Iniciantes</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg">
                    Quer começar um negócio próprio mas não tem experiência no mercado de alimentação
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-r from-green-400 to-green-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home className="h-10 w-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold">Quem Quer Renda Extra</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-lg">
                    Busca uma fonte de renda adicional trabalhando de casa no próprio ritmo
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Robôs */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  CONHEÇA SEUS 5 ROBÔS
                </span>
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Cada um é um especialista em uma área crucial do seu negócio de comida
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* C3PO */}
              <Card className="bg-gradient-to-b from-yellow-900/20 to-yellow-800/10 border-yellow-400/30 hover:border-yellow-400 transition-all duration-500 group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                      <ChefHat className="h-10 w-10 text-black" />
                    </div>
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 px-3 py-1 font-bold">
                      CARDÁPIOS
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl text-yellow-400 font-black">C3PO</CardTitle>
                  <CardDescription className="text-gray-300 text-lg font-semibold">
                    O Mestre dos Cardápios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Transforma suas ideias culinárias em cardápios completos e irresistíveis. Cria descrições que fazem
                    a boca d'água e organiza tudo profissionalmente.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-yellow-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Cardápios personalizados</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Descrições persuasivas</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Cálculo de ingredientes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Wall-E */}
              <Card className="bg-gradient-to-b from-green-900/20 to-green-800/10 border-green-400/30 hover:border-green-400 transition-all duration-500 group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                      <Palette className="h-10 w-10 text-black" />
                    </div>
                    <Badge className="bg-green-400/20 text-green-400 border-green-400/30 px-3 py-1 font-bold">
                      BRANDING
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl text-green-400 font-black">WALL-E</CardTitle>
                  <CardDescription className="text-gray-300 text-lg font-semibold">
                    O Designer de Marcas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Cria a identidade visual completa do seu negócio. Logo profissional, paleta de cores e todo o
                    branding que faz sua marca ser lembrada.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Logo profissional</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Identidade visual completa</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Manual da marca</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* R2D2 */}
              <Card className="bg-gradient-to-b from-blue-900/20 to-blue-800/10 border-blue-400/30 hover:border-blue-400 transition-all duration-500 group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                      <MessageSquare className="h-10 w-10 text-black" />
                    </div>
                    <Badge className="bg-blue-400/20 text-blue-400 border-blue-400/30 px-3 py-1 font-bold">
                      SOCIAL MEDIA
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl text-blue-400 font-black">R2D2</CardTitle>
                  <CardDescription className="text-gray-300 text-lg font-semibold">
                    O Especialista em Redes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Gera conteúdos virais para Instagram, Facebook e TikTok. Posts, stories e estratégias que fazem seu
                    negócio bombar nas redes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Conteúdo para 30 dias</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Hashtags estratégicas</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Cronograma de posts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Optimus Prime */}
              <Card className="bg-gradient-to-b from-red-900/20 to-red-800/10 border-red-400/30 hover:border-red-400 transition-all duration-500 group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-red-400 to-red-500 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                      <Calculator className="h-10 w-10 text-black" />
                    </div>
                    <Badge className="bg-red-400/20 text-red-400 border-red-400/30 px-3 py-1 font-bold">
                      PRECIFICAÇÃO
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl text-red-400 font-black">OPTIMUS PRIME</CardTitle>
                  <CardDescription className="text-gray-300 text-lg font-semibold">
                    O Calculador de Lucros
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Calcula preços lucrativos para iFood, Uber Eats e delivery próprio. Garante que você sempre tenha
                    margem de lucro saudável.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-red-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Preços otimizados</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Análise de concorrência</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Margem garantida</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Robocop */}
              <Card className="bg-gradient-to-b from-purple-900/20 to-purple-800/10 border-purple-400/30 hover:border-purple-400 transition-all duration-500 group hover:scale-105 lg:col-span-2 xl:col-span-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                      <Globe className="h-10 w-10 text-black" />
                    </div>
                    <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 px-3 py-1 font-bold">
                      VENDAS
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl text-purple-400 font-black">ROBOCOP</CardTitle>
                  <CardDescription className="text-gray-300 text-lg font-semibold">
                    O Criador de Páginas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    Monta páginas de vendas profissionais que convertem visitantes em clientes. Landing pages, catálogos
                    e sites completos.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-purple-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Landing pages</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Catálogo digital</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span className="font-medium">Integração WhatsApp</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-r from-yellow-500 via-yellow-400 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-black/20 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-black/20 rounded-full animate-bounce delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-black mb-8 text-black leading-tight">
              PARE DE SONHAR.
              <br />
              <span className="text-white drop-shadow-lg">COMECE A DOMINAR.</span>
            </h2>

            <p className="text-2xl md:text-3xl text-black/90 mb-12 font-bold max-w-3xl mx-auto">
              Enquanto você hesita, seus concorrentes estão faturando milhares.
              <br />
              <span className="text-white drop-shadow-lg">O futuro não espera por ninguém.</span>
            </p>

            <div className="bg-black/20 backdrop-blur-lg rounded-3xl p-12 mb-12 border border-white/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-black text-white mb-3 drop-shadow-lg">48H</div>
                  <div className="text-black font-bold text-lg">Seu império pronto</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-3 drop-shadow-lg">5 ROBÔS</div>
                  <div className="text-black font-bold text-lg">Trabalhando 24/7</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-white mb-3 drop-shadow-lg">30 DIAS</div>
                  <div className="text-black font-bold text-lg">Garantia total</div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-black text-yellow-400 hover:bg-gray-900 text-3xl px-20 py-10 font-black rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-8"
            >
              <Rocket className="mr-4 h-10 w-10" />
              QUERO MEUS ROBÔS AGORA
            </Button>

            <div className="text-black/80 font-bold text-lg mb-6">
              ⚡ Acesso imediato • 🛡️ Garantia incondicional • 🚀 Suporte premium
            </div>

            <div className="text-2xl text-black font-black italic">"O futuro pertence àqueles que agem hoje."</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
             <div className="w-12 h-12">
  <img
    src="/logo2.png"  // ou .png, conforme o formato real do seu logo
    alt="Logo Fábrica de Robôs"
    className="w-full h-full object-contain"
  />
</div>
              <div>
                <div className="text-xl font-black">FÁBRICA DE ROBÔS</div>
                <div className="text-xs text-gray-400">Transformando ideias em impérios</div>
              </div>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <div className="text-sm mb-2">© 2024 Fábrica de Robôs. Todos os direitos reservados.</div>
              <div className="text-xs">A revolução dos negócios de comida começou.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
