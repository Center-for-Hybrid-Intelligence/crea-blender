<template>
  <div
      class="image w-full overflow-hidden"
      :style="frameStyle"
  >
    <div :style="imageStyle"></div>
  </div>
</template>

<script>
import {computed} from 'vue'
import {isArray} from '@/lib/getVariableType'
import {getFrameStyle, getImageStyle} from './imageStyle'
import settings from './ImageDefaults.js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Image',
  props: {
    blur: {default: settings.blur},
    brightness: {default: settings.brightness},
    caption: {default: settings.caption},
    contrast: {default: settings.contrast},
    grayscale: {default: settings.grayscale},
    height: {default: settings.height},
    hue: {default: settings.hue},
    invert: {default: settings.invert},
    offset: {
      type: Array,
      default: () => settings.offset,
      validator: value => isArray(value) && value.reduce((pass, item) => pass && !isNaN(String(item)), true)
    },
    radius: {default: settings.radius},
    saturate: {default: settings.saturate},
    sepia: {default: settings.sepia},
    shadow: {type: Array, default: settings.shadow},
    showCaption: {default: settings.showCaption},
    size: {},
    url: {default: settings.url},
    zoom: {default: 1},
  },

  setup(props) {
    const radius = computed(() => props.radius ?? 0)
    const zoom = computed(() => props.zoom ?? 1)
    const offset = computed(() => ([...props.offset]).reduce((offset, item, index) => {
      const isOffset = !isNaN(item) && item + '' !== "0"
      offset[index] = isOffset ? item : "0"
      return offset
    }, []))

    const frameStyle = computed(() => {
      let style = {}
      if (radius.value) style = getFrameStyle(radius.value)
      return style
    })

    const imageStyle = computed(() => getImageStyle({
      ...props,
      zoom: zoom.value,
      offset: offset.value,
    }))

    return {
      frameStyle,
      imageStyle,
    }
  }
}
</script>

<style scoped>

</style>
