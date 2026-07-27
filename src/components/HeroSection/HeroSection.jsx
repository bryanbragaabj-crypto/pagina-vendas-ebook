import mockupEbook from '../../assets/mockup-ebook-v2.png'
import { product, trackCtaClick } from '../../data/siteData.js'
import './Hero.css'

export function ProductMockup({ compact = false, loading = 'eager' }) {
  return <img className={`product-mockup${compact ? ' product-mockup--compact' : ''}`} src={mockupEbook} alt={`Mockup do e-book ${product.name}`} width="1122" height="1402" loading={loading} decoding="async" />
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__labels"><p className="eyebrow eyebrow--line">Alta performance comercial</p></div>
          <h1><span>Torne-se o</span><strong>Maior<br />Vendedor</strong><span>de todos os tempos</span></h1>
          <p className="hero__description">Um método prático para vender com mais clareza, confiança e menos pressão.</p>
          <div className="hero__benefits"><span>✓ Método prático</span><span>✓ Aplicação B2B e B2C</span><span>✓ Audiobook incluído</span></div>
        </div>
        <div className="hero__visual"><div className="hero__halo" /><ProductMockup /></div>
        <div className="hero__purchase">
          <div className="hero__price"><span>De <s>{product.oldPrice}</s> por</span><strong>{product.currentPrice}</strong><b>Economize {product.savings}</b><em>{product.paymentType}</em></div>
          <a className="gold-button" href={product.checkoutUrl} onClick={() => trackCtaClick('hero')}>Quero garantir agora</a>
          <p className="hero__microcopy">E-book + audiobook • acesso digital • garantia de 7 dias</p>
        </div>
      </div>
      <div className="hero__scroll"><span /> Conheça o método</div>
    </section>
  )
}
