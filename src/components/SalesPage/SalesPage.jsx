import { useEffect, useRef, useState } from 'react'
import { ProductMockup } from '../HeroSection/HeroSection.jsx'
import { faqItems, product, trackCtaClick } from '../../data/siteData.js'
import { testimonials } from '../../data/testimonials.js'

const developmentTestimonials = import.meta.env.DEV ? [
  { name: 'Exemplo A', role: 'Demonstração visual', rating: 5, text: 'Espaço reservado para um relato real e específico sobre uma mudança percebida após a leitura.', image: null, verified: false, featured: true, layoutExample: true },
  { name: 'Exemplo B', role: 'Demonstração visual', rating: 4.5, before: 'Situação real relatada pelo leitor.', discovery: 'Compreensão adquirida com o método.', after: 'Mudança percebida e autorizada para publicação.', image: null, verified: false, featured: false, layoutExample: true },
  { name: 'Exemplo C', role: 'Demonstração visual', rating: 3.5, text: 'Outro espaço de desenvolvimento para verificar proporção, tipografia, estrelas e navegação.', image: null, verified: false, featured: false, layoutExample: true },
  { name: 'Exemplo D', role: 'Demonstração visual', rating: 4, text: 'Card adicional usado somente para testar continuidade, setas e swipe do carrossel.', image: null, verified: false, featured: false, layoutExample: true },
] : []

const depthTopics = ['Arquitetura Invisível do Fechamento','10 passos estruturados','Psicologia da decisão','Diagnóstico do cliente','Construção de valor','Objeções e fechamento','Gatilhos mentais','Indicação e previsibilidade','Fundamentos de alta performance']

const audiences = [
  ['building', 'Vendas B2B', 'Negociações complexas', 'Para contratos de maior valor, múltiplos decisores e ciclos de venda mais longos.'],
  ['users', 'Vendas B2C', 'Atendimento que conecta', 'Para vender no ritmo do varejo sem entrar no automático nem perder a qualidade da conversa.'],
  ['briefcase', 'Profissionais autônomos', 'Valor sem pressão', 'Para apresentar seu serviço com confiança e conduzir o cliente até uma decisão clara.'],
]

const iconPaths = {
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"/></>,
  headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2-2h1v7H6a2 2 0 0 1-2-2zm16 0a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2z"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
  message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11h6M11 8v6"/></>,
  building: <><path d="M4 21V5l8-3 8 3v16M8 8h1m6 0h1M8 12h1m6 0h1M8 16h1m6 0h1M10 21v-4h4v4"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
  spark: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/><path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7z"/></>,
  arrow: <><path d="M5 19 19 5M9 5h10v10"/></>,
  play: <path d="m9 7 8 5-8 5z"/>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></>,
}
function Icon({ name }) { return <span className="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg></span> }

export function HeaderOffer() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={`topbar${scrolled ? ' topbar--scrolled' : ''}`}><div className="topbar__inner">
    <a className="brand" href="#top" aria-label="Ir para o início"><span>E-book + Audiobook Profissional</span></a>
    <p className="topbar__offer">E-book + audiobook profissional</p>
    <a className="topbar__cta" href={product.checkoutUrl} onClick={() => trackCtaClick('header')}>Garantir meu acesso</a>
  </div></header>
}

export function TrustBar() {
  return <section className="trustbar" aria-label="Informações do produto"><div className="shell trustbar__inner">
    <span><Icon name="check" />Método prático</span><span><Icon name="building" />Aplicação B2B e B2C</span><span><Icon name="headphones" />Audiobook: bônus exclusivo</span><span><Icon name="shield" />Garantia de 7 dias</span>
  </div></section>
}

export function ProblemSection() {
  return <section className="problem section" id="conteudo"><div className="shell problem__grid">
    <div className="section-heading"><p className="eyebrow">O que trava suas vendas</p><h2>Quanto mais você tenta convencer, <em>mais o cliente resiste.</em></h2></div>
    <div className="problem__copy"><p>Pressão aumenta a defesa. Método cria clareza.</p><p>Influenciar não é pressionar: é compreender, construir valor e facilitar uma decisão segura.</p><div className="problem__diagram" aria-label="Mais pressão leva a mais resistência"><span>Mais pressão</span><i><b /></i><span>Mais resistência</span></div></div>
  </div></section>
}

export function PerspectiveAndBenefits() {
  const before = ['Improvisar','Falar demais','Dar desconto cedo','Temer objeções','Depender de sorte','Tentar convencer']
  const after = ['Diagnosticar','Escutar','Construir valor','Conduzir objeções','Seguir um processo','Facilitar decisões']
  return <><section className="principles section"><div className="shell transformation"><div className="section-heading section-heading--center"><p className="eyebrow">Conhecimento em prática</p><h2>Não é apenas um livro para ler.<br /><em>É um método para aplicar.</em></h2><p>Quando conhecimento se transforma em prática, muda a forma como você escuta, comunica valor, enfrenta objeções e conduz decisões.</p></div><div className="transformation__comparison"><article><span>Antes</span>{before.map((item) => <p key={item}>{item}</p>)}</article><i aria-hidden="true">→</i><article><span>Depois</span>{after.map((item) => <p key={item}>{item}</p>)}</article></div><strong className="transformation__statement">Aplique o método.<br />Mude sua forma de vender.<br /><em>Mude seus resultados.</em></strong><p className="transformation__value">O maior resultado deste livro não está nas páginas.<strong>Está no vendedor que você pode se tornar quando começar a aplicá-las.</strong></p></div></section>
  <section className="promise section"><div className="shell promise__inner"><span className="promise__quote" aria-hidden="true">“</span><p className="eyebrow">A mudança de perspectiva</p><blockquote>Você não precisa falar melhor.<br /><em>Precisa aprender a conduzir melhor.</em></blockquote><p>O cliente não quer sentir que foi vendido.<br />Ele quer sentir que tomou uma boa decisão.</p><i className="promise__signature" /></div></section></>
}

export function MethodSection() {
  return <section className="method section" id="metodo"><div className="shell method__compact"><p className="eyebrow">A Arquitetura Invisível</p><h2>10 passos.<br /><em>Uma única arquitetura.</em></h2><p>Da primeira conexão à decisão, cada etapa prepara a próxima.</p><strong>Não são 10 frases para decorar.<br />É uma arquitetura para entender.</strong><div className="method-flow" aria-label="Progressão do método"><span>Conexão</span><i /><span>Diagnóstico</span><i /><span>Valor</span><i /><span>Decisão</span></div></div></section>
}

export function FoundationsSection() {
  return <section className="inside section"><div className="shell depth"><div className="depth__content"><p className="eyebrow">Um livro. Um método completo.</p><h2>Mais profundidade.<br /><em>Mais aplicação.</em></h2><div className="depth__topics">{depthTopics.map((item) => <span key={item}>{item}</span>)}</div></div><aside className="depth__process"><p className="eyebrow">Processo e previsibilidade</p><h3>Pare de improvisar.<br />Comece a seguir um processo.</h3><p>Transforme sua forma de vender em um processo que você pode entender, repetir e aperfeiçoar.</p><div className="inside__flow" aria-label="Processo leva a consistência, que leva a previsibilidade"><span>Processo</span><i>→</i><span>Consistência</span><i>→</i><span>Previsibilidade</span></div></aside></div></section>
}

export function BookPreviewSection() {
  // TODO: inserir de 3 a 5 imagens reais das páginas internas e habilitar o lightbox.
  // A seção permanece fora da produção até que esses arquivos sejam fornecidos.
  return null
}

export function AudiobookSection() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return '0:00'
    const minutes = Math.floor(seconds / 60)
    return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
  }

  const toggleAudio = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const seekAudio = (event) => {
    const nextTime = Number(event.target.value)
    if (!audioRef.current) return
    audioRef.current.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return <section className="audiobook section"><div className="shell audiobook__grid"><div className="audiobook__visual" aria-label="Representação conceitual do audiobook incluído"><ProductMockup compact loading="lazy" /><div className="audio-player" onClick={(event) => event.stopPropagation()}><Icon name="headphones" /><span><strong>OUÇA UMA PRÉVIA</strong><em>Trecho exclusivo do audiobook</em></span><button className="audio-player__play" type="button" aria-label={isPlaying ? 'Pausar prévia do audiobook' : 'Ouvir prévia do audiobook'} onClick={toggleAudio}>{isPlaying ? <span aria-hidden="true" className="audio-player__pause"><b /><b /></span> : <Icon name="play" />}</button><div className="audio-player__progress" style={{ '--audio-progress': `${progress}%` }}><span className="audio-player__wave" aria-hidden="true"><b /><b /><b /><b /><b /><b /><b /></span><span className="audio-player__wave audio-player__wave--fill" aria-hidden="true"><b /><b /><b /><b /><b /><b /><b /></span><input type="range" min="0" max={duration || 0} step="0.01" value={currentTime} onChange={seekAudio} aria-label="Progresso da prévia do audiobook" /></div><small>{formatTime(currentTime)} / {formatTime(duration)}</small><audio ref={audioRef} src="/audio/previa-audiobook-maior-vendedor.mp3" preload="metadata" onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onDurationChange={(event) => Number.isFinite(event.currentTarget.duration) && setDuration(event.currentTarget.duration)} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={(event) => { event.currentTarget.currentTime = 0; setCurrentTime(0); setIsPlaying(false) }} controlsList="nodownload" /></div><strong>Audiobook incluído</strong></div><div className="audiobook__copy"><p className="eyebrow">Bônus exclusivo</p><h2>Leia quando puder.<br />Ouça quando quiser.</h2><p>Você recebe o audiobook profissional completo junto com o e-book e pode ouvir uma prévia agora.</p><ul><li>Conteúdo completo em áudio</li><li>Acesso pelo celular</li><li>Revisão prática dos conceitos</li></ul></div></div></section>
}

export function AudienceSection() {
  return <section className="audience section"><div className="shell"><div className="section-heading section-heading--center"><p className="eyebrow">Para quem é este livro</p><h2>Um método. <em>Diferentes cenários.</em></h2></div><div className="audience__grid">{audiences.map(([icon,tag,title,text]) => <article key={tag}><Icon name={icon} /><span>{tag}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="audience__note">Também pode ser aplicado em atendimento, representação comercial, prestação de serviços e negociações do dia a dia.</p></div></section>
}

export function AuthorSection() {
  // TODO: inserir foto oficial, biografia real e experiência comprovável de Tiago Braga.
  // Não publicar a seção enquanto esses materiais não forem fornecidos.
  return null
}

export function TestimonialsSection() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonialSource = testimonials.length ? testimonials : developmentTestimonials
  const validTestimonials = testimonialSource.filter(({ name, text, before, discovery, after, rating }) => name?.trim() && (text?.trim() || before?.trim() || discovery?.trim() || after?.trim()) && Number.isFinite(rating))

  if (!validTestimonials.length) return null

  const averageRating = validTestimonials.reduce((total, item) => total + Math.min(5, Math.max(0, item.rating)), 0) / validTestimonials.length
  const verifiedCount = validTestimonials.filter(({ verified }) => verified).length

  const scrollToTestimonial = (index) => {
    const nextIndex = Math.min(validTestimonials.length - 1, Math.max(0, index))
    const track = trackRef.current
    const card = track?.children[nextIndex]
    if (!track || !card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    setActiveIndex(nextIndex)
  }

  const updateActiveTestimonial = () => {
    const track = trackRef.current
    if (!track?.children.length) return
    const nearest = [...track.children].reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft)
      return distance < best.distance ? { index, distance } : best
    }, { index: 0, distance: Infinity })
    setActiveIndex(nearest.index)
  }

  const handleCarouselKeys = (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); scrollToTestimonial(activeIndex - 1) }
    if (event.key === 'ArrowRight') { event.preventDefault(); scrollToTestimonial(activeIndex + 1) }
  }

  return <section className="testimonials section" aria-labelledby="testimonials-title"><div className="shell">{import.meta.env.DEV && !testimonials.length && <p className="testimonials__development">Exemplo de layout — não publicar</p>}<div className="section-heading section-heading--center"><p className="eyebrow">Histórias reais</p><h2 id="testimonials-title">Quem leu, entendeu<br /><em>a diferença.</em></h2><p>Experiências de leitores que começaram a enxergar vendas de uma nova forma.</p></div>{validTestimonials.length >= 3 && <div className="testimonials__summary"><RatingStars rating={averageRating} /><strong>{averageRating.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} / 5</strong><span>Baseado em {validTestimonials.length} avaliações</span>{verifiedCount > 0 && <em>{verifiedCount} {verifiedCount === 1 ? 'compra verificada' : 'compras verificadas'}</em>}</div>}<div className="testimonials__track" ref={trackRef} tabIndex="0" onKeyDown={handleCarouselKeys} onScroll={updateActiveTestimonial} aria-label="Depoimentos de leitores">{validTestimonials.map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />)}</div>{validTestimonials.length > 3 && <p className="testimonials__continue">Continue deslizando para conhecer outras experiências.</p>}{validTestimonials.length > 1 && <div className="testimonials__navigation"><button type="button" aria-label="Depoimento anterior" onClick={() => scrollToTestimonial(activeIndex - 1)} disabled={activeIndex === 0}>←</button><div className="testimonials__dots" aria-label={`Depoimento ${activeIndex + 1} de ${validTestimonials.length}`}>{validTestimonials.map((testimonial, index) => <button type="button" key={`${testimonial.name}-indicator-${index}`} className={index === activeIndex ? 'is-active' : ''} aria-label={`Ir para o depoimento ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => scrollToTestimonial(index)} />)}</div><button type="button" aria-label="Próximo depoimento" onClick={() => scrollToTestimonial(activeIndex + 1)} disabled={activeIndex === validTestimonials.length - 1}>→</button></div>}</div></section>
}

function RatingStars({ rating }) {
  const normalizedRating = Math.min(5, Math.max(0, Number(rating) || 0))
  const label = normalizedRating.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  return <span className="testimonial-stars" role="img" aria-label={`Avaliação: ${label} de 5 estrelas`}><span aria-hidden="true">★★★★★</span><span className="testimonial-stars__fill" style={{ width: `${(normalizedRating / 5) * 100}%` }} aria-hidden="true">★★★★★</span></span>
}

function TestimonialCard({ testimonial }) {
  const initials = testimonial.name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
  const transformation = [['Antes', testimonial.before], ['Descoberta', testimonial.discovery], ['Depois', testimonial.after]].filter(([, value]) => value?.trim())
  const featuredLabel = testimonial.featuredLabel === 'Uma nova forma de enxergar vendas' ? testimonial.featuredLabel : 'Depoimento em destaque'
  return <article className={`testimonial-card${testimonial.featured ? ' testimonial-card--featured' : ''}`}>{import.meta.env.DEV && testimonial.layoutExample && <span className="testimonial-card__example">Exemplo de layout — não publicar</span>}{testimonial.featured && !testimonial.layoutExample && <span className="testimonial-card__featured">{featuredLabel}</span>}<RatingStars rating={testimonial.rating} />{transformation.length ? <div className="testimonial-card__transformation">{transformation.map(([label, value]) => <div key={label}><strong>{label}</strong><p>{value}</p></div>)}</div> : <blockquote>“{testimonial.text}”</blockquote>}<div className="testimonial-card__author">{testimonial.image ? <img src={testimonial.image} alt="" width="46" height="46" loading="lazy" decoding="async" /> : <span className="testimonial-card__avatar" aria-hidden="true">{initials}</span>}<div><strong>{testimonial.name}</strong>{testimonial.role && <span>{testimonial.role}</span>}{testimonial.verified && <em>✓ Compra verificada</em>}</div></div></article>
}

export function ReceiveSection() {
  const items = [['E-book completo','Torne-se o Maior Vendedor de Todos os Tempos'],['Arquitetura Invisível do Fechamento','Método estruturado em 10 passos'],['Conhecimento aplicável','Da primeira abordagem ao fechamento e pós-venda'],['Bônus exclusivo','Audiobook profissional completo']]
  return <section className="receive section"><div className="shell"><div className="section-heading section-heading--center"><p className="eyebrow">Sua biblioteca de aplicação</p><h2>Tudo o que você<br /><em>recebe hoje.</em></h2></div><div className="receive__layout"><ProductMockup compact loading="lazy" /><div className="receive__items receive__items--editorial">{items.map(([title,text]) => <article key={title}><strong>{title}</strong><span>{text}</span></article>)}</div></div></div></section>
}

export function OfferSection() {
  return <section className="offer section" id="oferta"><div className="shell"><div className="offer__value-statement"><p>Você não está comprando apenas informação sobre vendas.</p><strong>Está investindo em uma habilidade que pode acompanhar você por toda a sua vida profissional.</strong></div><div className="offer__box"><div className="offer__product"><ProductMockup compact loading="lazy" /><span>E-book + audiobook • acesso digital</span></div><div className="offer__copy"><p className="eyebrow">Comece a aplicar</p><h2>Quanto vale aprender uma habilidade que você poderá usar em milhares de conversas ao longo da sua vida?</h2><div className="price"><span>De <s>{product.oldPrice}</s> por</span><strong>{product.currentPrice}</strong><em>{product.paymentType}</em><b>Economize {product.savings}</b></div><a className="gold-button gold-button--wide" id="checkout" href={product.checkoutUrl} onClick={() => trackCtaClick('offer')}>Quero me tornar um vendedor de alta performance</a><p className="secure">Acesso digital • pagamento único • garantia de 7 dias</p></div></div></div></section>
}

export function GuaranteeSection() {
  return <section className="guarantee section"><div className="shell guarantee__grid"><div className="guarantee__mark"><strong>7</strong><span>dias</span></div><div><p className="eyebrow">Compra protegida</p><h2>Você tem 7 dias para decidir com tranquilidade.</h2><p>Se você adquirir o material e perceber que ele não faz sentido para você, pode solicitar a devolução total do valor em até 7 dias.</p><strong className="guarantee__note">Sem pressão. A decisão continua sendo sua.</strong>{/* TODO: inserir o link real da política de reembolso quando for fornecido. */}</div></div></section>
}

export function FAQSection() {
  const [openIndex,setOpenIndex] = useState(null)
  return <section className="faq section" id="faq"><div className="shell faq__inner"><div className="section-heading section-heading--center"><p className="eyebrow">Perguntas frequentes</p><h2>Antes de começar</h2></div><div className="faq__list">{faqItems.map(([question,answer],index) => { const open=openIndex===index; return <article className={`faq__item${open?' is-open':''}`} key={question}><h3><button type="button" aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(open?null:index)}>{question}<span aria-hidden="true">{open?'−':'+'}</span></button></h3><div className="faq__answer" id={`faq-answer-${index}`} hidden={!open}><p>{answer}</p></div></article> })}</div></div></section>
}

export function FinalCTA() {
  return <section className="closing section"><div className="shell"><p className="eyebrow">Sua próxima negociação começa aqui</p><h2>Você pode continuar tentando convencer.<br /><em>Ou pode aprender a construir a decisão.</em></h2><p className="closing__support">O Fechamento Invisível não é uma frase pronta. É uma arquitetura.<strong>Comece agora a construir a sua.</strong></p><a className="gold-button" href={product.checkoutUrl} onClick={() => trackCtaClick('final')}>Quero me tornar um vendedor de alta performance</a><small>E-book + audiobook • pagamento único • garantia de 7 dias</small></div></section>
}

export function CommercialFooter() {
  return <footer><div className="shell footer__inner"><div><strong>{product.name}</strong><span>Autor: {product.author}</span></div><p>© 2026 {product.author}. Todos os direitos reservados.</p><a href="#top">Voltar ao topo ↑</a></div>{/* TODO: adicionar contato, termos, privacidade e reembolso quando os links reais forem fornecidos. */}</footer>
}

export function MobileCTA() {
  const [visible,setVisible] = useState(false)
  useEffect(() => {
    const hero = document.querySelector('.hero')
    const blockers = [...document.querySelectorAll('.offer, .closing, footer')]
    const update = () => {
      const pastHero = hero ? hero.getBoundingClientRect().bottom <= 0 : false
      const blocked = blockers.some((element) => { const rect = element.getBoundingClientRect(); return rect.top < window.innerHeight && rect.bottom > 0 })
      setVisible(pastHero && !blocked)
    }
    update(); window.addEventListener('scroll',update,{ passive:true }); window.addEventListener('resize',update)
    return () => { window.removeEventListener('scroll',update); window.removeEventListener('resize',update) }
  },[])
  return <div className={`mobile-cta${visible?' is-visible':''}`} aria-hidden={!visible}><div><small>E-book + áudio</small><strong>{product.currentPrice}</strong></div><a href={product.checkoutUrl} tabIndex={visible?0:-1} onClick={() => trackCtaClick('mobile')}>Garantir acesso</a></div>
}
