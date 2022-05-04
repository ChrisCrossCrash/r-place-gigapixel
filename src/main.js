import 'modern-normalize'
import './styles.scss'
import OpenSeaDragon from 'openseadragon'
import 'share-buttons'
import './socicon.css'

OpenSeaDragon({
  id: 'openseadragon',
  prefixUrl: '/images/openseadragon-assets/',
  tileSources: '/images/rplace.dzi',
})
