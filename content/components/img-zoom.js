import React, { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

const ImgZoom = (src, alt) => {
  useEffect(() => {
    mediumZoom('img')
  }, [])
  return <img src={src} alt={alt} />
}

export default ImgZoom
