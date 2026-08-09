import { useEffect, useRef, useState } from 'react'
import { ProductMockup } from '../HeroSection/HeroSection.jsx'
import { faqItems, product, steps, trackCtaClick } from '../../data/siteData.js'
import { testimonials } from '../../data/testimonials.js'

const benefits = [
  ['01', 'message', 'Menos discurso', 'Argumentos em excesso geram dúvida. Clareza e perguntas melhores geram confiança.'],
  ['02', 'search', 'Mais diagnóstico', 'Você deixa de apresentar soluções genéricas e passa a falar sobre o que realmente importa.'],
  ['03', 'check', 'Decisão sem pressão', 'Influenciar não é pressionar. É ajudar o cliente a enxergar com clareza a decisão que faz sentido para ele.'],
]

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
    <div className="problem__copy"><p>Quando o cliente sente sua liberdade de escolha ameaçada, ele entra em modo de defesa. A conversa deixa de ser sobre valor e passa a ser sobre escapar da pressão.</p><p>Este método propõe outra forma: ouvir melhor, diagnosticar com precisão e conduzir a negociação para que a decisão pareça segura e natural.</p><div className="problem__diagram" aria-label="Mais pressão leva a mais resistência"><span>Mais pressão</span><i><b /></i><span>Mais resistência</span></div></div>
  </div></section>
}

export function PerspectiveAndBenefits() {
  return <><section className="principles section"><div className="shell principles__grid">{benefits.map(([number, icon, title, text], index) => <article key={title} className={`principle principle--${index + 1}`}><b>{number}</b><Icon name={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="promise section"><div className="shell promise__inner"><span className="promise__quote" aria-hidden="true">“</span><p className="eyebrow">A mudança de perspectiva</p><blockquote>Você não precisa falar melhor.<br /><em>Precisa aprender a conduzir melhor.</em></blockquote><p>Quanto mais você tenta convencer, maior pode se tornar a resistência. O cliente não quer sentir que foi vendido. Ele quer sentir que tomou uma boa decisão.</p><i className="promise__signature" /></div></section></>
}

export function MethodSection() {
  return <section className="method section" id="metodo"><div className="shell"><div className="section-heading section-heading--center"><p className="eyebrow">O método completo</p><h2>Não são 10 frases para decorar.<br /><em>É uma arquitetura para entender.</em></h2><p>Cada etapa possui uma função. Cada pergunta tem um objetivo. Cada técnica prepara a próxima.<span>Até que fechar deixe de ser um momento de pressão e passe a ser consequência daquilo que foi construído durante a conversa.</span></p><div className="method-flow" aria-label="Progressão do método"><span>Compreender</span><i /><span>Construir valor</span><i /><span>Reduzir incertezas</span><i /><span>Conduzir</span><i /><span>Decisão</span></div></div>
    <div className="timeline">{steps.map(([title,text],index) => <article className="timeline__item" key={title}><span className="timeline__number">{String(index+1).padStart(2,'0')}</span><div className="timeline__content"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  </div></section>
}

export function FoundationsSection() {
  return <section className="inside section"><div className="shell inside__grid"><div className="inside__heading"><p className="eyebrow">Processo, consistência, previsibilidade</p><h2>Pare de depender de sorte, improviso ou talento para vender.</h2><p>Transforme sua forma de vender em um processo que você consegue entender, repetir e aperfeiçoar.</p><div className="inside__flow" aria-label="Processo leva a consistência, que leva a previsibilidade"><span>Processo</span><i>→</i><span>Consistência</span><i>→</i><span>Previsibilidade</span></div></div><div className="inside__items">
    <article tabIndex="0"><Icon name="spark" /><div><h3>Psicologia dentro do método</h3><p>Gatilhos mentais e princípios de persuasão aplicados dentro de uma arquitetura completa — com contexto, intenção e ética.</p></div></article>
    <article tabIndex="0"><Icon name="check" /><div><h3>Mentalidade de alta performance</h3><p>Uma prática para entrar em cada conversa com mais calma, presença e preparo para ouvir.</p></div></article>
    <article tabIndex="0"><Icon name="arrow" /><div><h3>Indicações consistentes</h3><p>Como transformar clientes satisfeitos em novas oportunidades e construir previsibilidade.</p></div></article>
  </div></div></section>
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
  const validTestimonials = testimonials.filter(({ name, text, rating }) => name?.trim() && text?.trim() && Number.isFinite(rating))

  if (!validTestimonials.length) return null

  const averageRating = validTestimonials.reduce((total, item) => total + Math.min(5, Math.max(0, item.rating)), 0) / validTestimonials.length

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

  return <section className="testimonials section" aria-labelledby="testimonials-title"><div className="shell"><div className="section-heading section-heading--center"><p className="eyebrow">Depoimentos</p><h2 id="testimonials-title">Quem leu, entendeu<br /><em>a diferença.</em></h2><p>Experiências reais de leitores que conheceram uma nova forma de enxergar as vendas.</p></div>{validTestimonials.length >= 3 && <div className="testimonials__summary"><RatingStars rating={averageRating} /><strong>{averageRating.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} / 5</strong><span>Baseado em {validTestimonials.length} avaliações</span></div>}<div className="testimonials__track" ref={trackRef} tabIndex="0" onKeyDown={handleCarouselKeys} onScroll={updateActiveTestimonial} aria-label="Depoimentos de leitores">{validTestimonials.map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />)}</div>{validTestimonials.length > 1 && <div className="testimonials__navigation"><button type="button" aria-label="Depoimento anterior" onClick={() => scrollToTestimonial(activeIndex - 1)} disabled={activeIndex === 0}>←</button><div className="testimonials__dots" aria-label={`Depoimento ${activeIndex + 1} de ${validTestimonials.length}`}>{validTestimonials.map((testimonial, index) => <button type="button" key={`${testimonial.name}-indicator-${index}`} className={index === activeIndex ? 'is-active' : ''} aria-label={`Ir para o depoimento ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => scrollToTestimonial(index)} />)}</div><button type="button" aria-label="Próximo depoimento" onClick={() => scrollToTestimonial(activeIndex + 1)} disabled={activeIndex === validTestimonials.length - 1}>→</button></div>}</div></section>
}

function RatingStars({ rating }) {
  const normalizedRating = Math.min(5, Math.max(0, Number(rating) || 0))
  const label = normalizedRating.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  return <span className="testimonial-stars" role="img" aria-label={`Avaliação: ${label} de 5 estrelas`}><span aria-hidden="true">★★★★★</span><span className="testimonial-stars__fill" style={{ width: `${(normalizedRating / 5) * 100}%` }} aria-hidden="true">★★★★★</span></span>
}

function TestimonialCard({ testimonial }) {
  const initials = testimonial.name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
  return <article className={`testimonial-card${testimonial.featured ? ' testimonial-card--featured' : ''}`}>{testimonial.featured && <span className="testimonial-card__featured">Depoimento em destaque</span>}<RatingStars rating={testimonial.rating} /><blockquote>“{testimonial.text}”</blockquote><div className="testimonial-card__author">{testimonial.image ? <img src={testimonial.image} alt="" width="46" height="46" loading="lazy" decoding="async" /> : <span className="testimonial-card__avatar" aria-hidden="true">{initials}</span>}<div><strong>{testimonial.name}</strong>{testimonial.role && <span>{testimonial.role}</span>}{testimonial.verified && <em>✓ Leitor verificado</em>}</div></div></article>
}

export function ReceiveSection() {
  const items = [['book','E-book completo'],['spark','Arquitetura Invisível do Fechamento'],['check','Método estruturado em 10 passos'],['headphones','Audiobook profissional completo — BÔNUS'],['arrow','Acesso imediato']]
  return <section className="receive section"><div className="shell"><div className="section-heading section-heading--center"><p className="eyebrow">Uma filosofia aplicada à venda</p><h2>Não é um livro de truques para convencer pessoas.<br /><em>É um método para aprender a conduzir decisões.</em></h2><div className="receive__positioning"><span>Compreender melhor</span><i>→</i><span>Comunicar valor</span><i>→</i><span>Reduzir incertezas</span><i>→</i><span>Facilitar decisões</span></div></div><div className="receive__layout"><ProductMockup compact loading="lazy" /><div className="receive__items">{items.map(([icon,text]) => <span key={text}><Icon name={icon} />{text}</span>)}</div></div></div></section>
}

export function OfferSection() {
  return <section className="offer section" id="oferta"><div className="shell offer__box"><div className="offer__product"><ProductMockup compact loading="lazy" /><span>E-book + audiobook • acesso digital</span></div><div className="offer__copy"><p className="eyebrow">Você recebe hoje</p><h2>Leve o método completo para suas próximas negociações.</h2><span className="bonus-label">Bônus exclusivo: audiobook profissional completo</span><ul><li>E-book completo</li><li>Arquitetura Invisível do Fechamento</li><li>Método estruturado em 10 passos</li><li>Audiobook profissional completo — BÔNUS</li><li>Acesso imediato</li></ul><div className="price"><span>De <s>{product.oldPrice}</s> por</span><strong>{product.currentPrice}</strong><em>{product.paymentType}</em><b>Economize {product.savings}</b></div><a className="gold-button gold-button--wide" id="checkout" href={product.checkoutUrl} onClick={() => trackCtaClick('offer')}>Garantir meu acesso</a><p className="secure">Acesso digital • pagamento único • garantia de 7 dias</p><p className="offer__included">Você recebe o e-book e o audiobook profissional completo como bônus exclusivo.</p></div></div></section>
}

export function GuaranteeSection() {
  return <section className="guarantee section"><div className="shell guarantee__grid"><div className="guarantee__mark"><Icon name="shield" /><strong>7</strong><span>dias</span></div><div><p className="eyebrow">Compra protegida</p><h2>Você tem 7 dias para decidir com tranquilidade.</h2><p>Se você adquirir o material e perceber que ele não faz sentido para você, pode solicitar a devolução total do valor em até 7 dias.</p><strong className="guarantee__note">Sem pressão. A decisão continua sendo sua.</strong>{/* TODO: inserir o link real da política de reembolso quando for fornecido. */}</div></div></section>
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
