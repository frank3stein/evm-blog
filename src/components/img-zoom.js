import React, { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

const ImgZoom = (src, alt = "Image") => {
  useEffect(() => {
    mediumZoom('img')
  }, [])
  return (
    <img
      src={src}
      alt={alt}
      onClick={e => {
        return false
      }}
    />
  )
}

export default ImgZoom;
