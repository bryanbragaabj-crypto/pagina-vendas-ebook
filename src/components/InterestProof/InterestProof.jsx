import { useSyncExternalStore } from 'react'
import { getInterestCount, getServerInterestCount, subscribeInterestCount } from '../../data/siteData.js'
import avatar1 from '../../assets/interest-avatars/avatar-1.png'
import avatar2 from '../../assets/interest-avatars/avatar-2.png'
import avatar3 from '../../assets/interest-avatars/avatar-3.png'
import avatar4 from '../../assets/interest-avatars/avatar-4.png'
import './InterestProof.css'

const authorizedInterestPhotos = [avatar1, avatar2, avatar3, avatar4].map((src) => ({ src }))

export default function InterestProof({ photos = authorizedInterestPhotos, className = '' }) {
  const interestCount = useSyncExternalStore(subscribeInterestCount, getInterestCount, getServerInterestCount)
  const authorizedPhotos = photos.slice(0, 4)

  return <div className={`interest-proof ${className}`.trim()} aria-live="polite">
    {authorizedPhotos.length > 0
      ? <div className="interest-proof__photos" aria-hidden="true">{authorizedPhotos.map((photo, index) => <img key={photo.src} src={photo.src} alt="" width="38" height="38" loading="lazy" style={{ zIndex: authorizedPhotos.length - index }} />)}</div>
      : <div className="interest-proof__people" aria-hidden="true"><span /><span /><span /></div>}
    <p><strong>+ de {interestCount.toLocaleString('pt-BR')} pessoas</strong> demonstraram interesse neste guia.</p>
  </div>
}
