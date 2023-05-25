import { withPostfix }        from '../../lib/prefixPostfix'
import { getCSSFilterString } from '../../lib/getCSSFilterString'
import {vertices} from "../../lib/DOMBoundaryParameterValidation";
import {getTailwindSpacing, tailwindSpacingsCount} from "../../lib/tailwind/tailwindSpacing";

const decodeRadiusValue = value => {
  const isFullValue = value == tailwindSpacingsCount
  if (isFullValue) return '100%'
  return getTailwindSpacing(value)
}

export const getFrameStyle = radius => {
  let style = {}
  if (radius && radius.length === 4) {
    const getPropertyName = vertexName => `border-${vertexName.split(' ').join('-')}-radius`

    vertices.forEach((v, i) => {
      if (radius[i]) style[getPropertyName(v)] = decodeRadiusValue(radius[i])
    })
  }
  return style
}

export const getImageStyle = ({
                                blur,
                                brightness,
                                contrast,
                                grayscale,
                                height,
                                hue,
                                invert,
                                offset,
                                saturate,
                                sepia,
                                // shadow,
                                size,
                                url,
                                width,
                                zoom,
                              }) => {
  url = url || '/nature1.jpg'
  const style = {
    'background-image': `url(${ encodeURI(url).replace(/([()])/g, '\\$1') })`,
    'background-repeat': 'no-repeat'
  }

  // filter
   const filter = getCSSFilterString({
    blur,
    brightness,
    contrast,
    grayscale,
    hue,
    invert,
    saturate,
    sepia
  })

  if (filter) style.filter = filter

  // geometry
  if (height || width) {
    if (height) style.height = withPostfix(height + '', 'px')
    if (width) style.width = withPostfix(width + '', 'px')
  } else if (size) {
    const imageSize = withPostfix(size + '', 'px')
    style.height = imageSize
    style.width = imageSize
  }

  zoom = zoom || 1
  if (zoom === 1) {
    style['background-position'] = 'center'
    style['background-size'] = `cover`
  } else {
    if (offset?.[0] || offset?.[1]) style['background-position'] = `${ offset?.[0]  ??  0 }% ${ offset?.[1] ?? 0 }%`
    style['background-size'] = `${ (zoom ?? 1) * 100 }%`
  }

  return Object.keys(style).reduce((string, term) => {
    if (string.length) string += ';\n'
    string += term + ': ' + style[term]
    return string
  }, '')
}
