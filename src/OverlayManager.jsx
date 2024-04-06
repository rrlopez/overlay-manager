import { Component } from 'react'

const defaultState = {
  overlays: [],
  isMounted: false,
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class OverlayManager extends Component {
  static instance

  constructor(props) {
    super(props)
    this.state = defaultState

    if (OverlayManager.instance) {
      OverlayManager.instance?.clear()
      OverlayManager.instance.props = this.props
      return OverlayManager.instance
    }

    OverlayManager.instance = this
  }

  addOverlay(Component, options = {}) {
    const id = getRandomNumber(1, 100)
    const { key, ...props } = options

    const [...overlays] = this.state.overlays.filter(({ key, open }) => open || key)

    let overlayIndex = overlays.findIndex((overlay) => overlay.key && overlay.key === key)

    if (overlayIndex > -1) {
      const overlay = overlays.splice(overlayIndex, 1)[0];
      overlays.push({...overlay, open: true, props })
    }
    else overlays.push({ open: true, props, Component, key, id })

    this.setState({ overlays })

    return id
  }

  delDueToBackButton(id) {
    this.setState(state => {
      const overlay = state.overlays.find((overlay) => overlay.id === id)
      if (overlay) overlay.open = false
      return { ...state }
    })

    return id
  }

  delOverlay(id) {
    return this.delDueToBackButton(id)
  }

  clear() {
    const overlays = this.state.overlays.map((overlay) => ({
      ...overlay,
      open: false,
      key: undefined
    }))
    
    this.setState({ overlays })
  }

  deleteChildOverlay(id) {
    const startIndex = this.state.overlays.findIndex((overlay)=>id === overlay.id)
    const overlays = this.state.overlays.map((overlay, i) => {
      if(i > startIndex) return { ...overlay, open: false, key: undefined}
      return overlay
    })
    
    this.setState({ overlays })
  }

  render() {
    return this.state.overlays.map(({ Component, open, props, id }) => (
      <Component
        key={id}
        {...props}
        open={open}
        onClose={() => this.delOverlay(id)}
      />
    ))
  }
}

export const addOverlay = async (...args) => OverlayManager.instance.addOverlay(...args)
export const delOverlay = (...args) => OverlayManager.instance.deleteOverlay(...args)
export const clearOverlays = () => OverlayManager.instance?.clear()
export const delChildOverlays = (id) => OverlayManager.instance?.deleteChildOverlay(id)

export default OverlayManager
