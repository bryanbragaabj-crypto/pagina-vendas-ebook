import { useSyncExternalStore } from 'react'
import { getInterestCount, getServerInterestCount, subscribeInterestCount } from '../../data/siteData.js'
import './InterestProof.css'

export default function InterestProof({ photos = [], className = '' }) {
  const interestCount = useSyncExternalStore(subscribeInterestCount, getInterestCount, getServerInterestCount)
  const authorizedPhotos = photos.slice(0, 4)

  return <div className={`interest-proof ${className}`.trim()} aria-live="polite">
    {authorizedPhotos.length > 0
      ? <div className="interest-proof__photos" aria-hidden="true">{authorizedPhotos.map((photo, index) => <img key={photo.src} src={photo.src} alt="" width="38" height="38" loading="lazy" style={{ zIndex: authorizedPhotos.length - index }} />)}</div>
      : <div className="interest-proof__people" aria-hidden="true"><span /><span /><span /></div>}
    <p><strong>+ de {interestCount.toLocaleString('pt-BR')} pessoas</strong> demonstraram interesse neste guia.</p>
  </div>
}
