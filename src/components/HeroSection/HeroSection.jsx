import mockupEbook from '../../assets/mockup-ebook-v2.png'
import { product, trackCtaClick } from '../../data/siteData.js'
import InterestProof from '../InterestProof/InterestProof.jsx'
import './Hero.css'

export function ProductMockup({ compact = false, loading = 'eager' }) {
  return <img className={`product-mockup${compact ? ' product-mockup--compact' : ''}`} src={mockupEbook} alt={`Mockup do e-book ${product.name}`} width="1536" height="1024" loading={loading} decoding="async" />
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__labels"><p className="eyebrow eyebrow--line">Alta performance comercial</p></div>
          <h1><span>Aprenda a vender</span><strong>sem precisar<br />convencer.</strong></h1>
          <p className="hero__description">Conheça a Arquitetura Invisível do Fechamento: um método estruturado em 10 passos para compreender o cliente, construir valor e conduzir decisões com mais estratégia.</p>
          <div className="hero__benefits"><span>✓ Método prático</span><span>✓ Aplicação B2B e B2C</span><span>✓ Audiobook como bônus</span></div>
          <div className="hero__authorial"><strong>100% AUTORAL</strong><span>Obra original. Não gerada por inteligência artificial.</span></div>
        </div>
        <div className="hero__visual"><div className="hero__halo" /><ProductMockup /></div>
        <div className="hero__purchase">
          <div className="hero__price"><span>De <s>{product.oldPrice}</s> por</span><strong>{product.currentPrice}</strong><b>Economize {product.savings}</b><em>{product.paymentType}</em></div>
          <a className="gold-button" href="#oferta" onClick={() => trackCtaClick('hero')}>Quero dominar a arte de vender</a>
          <InterestProof className="hero__interest" />
          <p className="hero__microcopy">E-book + audiobook • acesso digital • garantia de 7 dias</p>
        </div>
      </div>
      <div className="hero__scroll"><span /> Conheça o método</div>
    </section>
  )
}
