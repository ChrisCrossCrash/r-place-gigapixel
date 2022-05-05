import 'modern-normalize'
import './styles.scss'
import OpenSeaDragon from 'openseadragon'
import 'share-buttons'

OpenSeaDragon({
  id: 'openseadragon',
  prefixUrl: '/images/openseadragon-assets/',
  tileSources: '/images/rplace.dzi',
})
