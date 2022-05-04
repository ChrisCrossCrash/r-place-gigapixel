import 'modern-normalize'
import './styles.scss'
import OpenSeaDragon from 'openseadragon'

OpenSeaDragon({
  id: 'openseadragon',
  prefixUrl: '/images/',
  tileSources: '/images/rplace.dzi',
})
