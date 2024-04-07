import { Component, ReactNode } from 'react';

interface OverlayProps {
  open: boolean;
  onClose: () => void;
}

interface Overlay {
  Component: React.ComponentType<OverlayProps>;
  props: Record<string, any>;
  key?: string;
  id: number;
  open: boolean;
}

interface OverlayOptions {
  key?: string;
}

interface OverlayManagerProps {
  children?: ReactNode;
}

interface OverlayManagerState {
  overlays: Overlay[];
  isMounted: boolean;
}

const defaultState: OverlayManagerState = {
  overlays: [],
  isMounted: false,
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class OverlayManager extends Component<OverlayManagerProps, OverlayManagerState> {
  static instance: OverlayManager;

  constructor(props: OverlayManagerProps) {
    super(props);
    this.state = defaultState;

    if (OverlayManager.instance) {
      OverlayManager.instance.clear();
      OverlayManager.instance.updateProps(props);
      return OverlayManager.instance;
    }

    OverlayManager.instance = this;
  }

  addOverlay(Component: React.ComponentType<OverlayProps>, options: OverlayOptions = {}): number {
    const id = getRandomNumber(1, 100);
    const { key, ...props } = options;

    const overlays = this.state.overlays.filter(({ key, open }) => open || key);

    let overlayIndex = overlays.findIndex((overlay) => overlay.key && overlay.key === key);

    if (overlayIndex > -1) {
      const overlay = overlays.splice(overlayIndex, 1)[0];
      overlays.push({ ...overlay, open: true, props });
    } else overlays.push({ open: true, props, Component, key, id });

    this.setState({ overlays });

    return id;
  }

  delDueToBackButton(id: number): number {
    this.setState((state) => {
      const overlay = state.overlays.find((overlay) => overlay.id === id);
      if (overlay) overlay.open = false;
      return { ...state };
    });

    return id;
  }

  delOverlay(id: number): number {
    return this.delDueToBackButton(id);
  }

  clear(): void {
    const overlays = this.state.overlays.map((overlay) => ({
      ...overlay,
      open: false,
      key: undefined,
    }));

    this.setState({ overlays });
  }

  deleteChildOverlay(id: number): void {
    const startIndex = this.state.overlays.findIndex((overlay) => id === overlay.id);
    const overlays = this.state.overlays.map((overlay, i) => {
      if (i > startIndex) return { ...overlay, open: false, key: undefined };
      return overlay;
    });

    this.setState({ overlays });
  }

  updateProps(props: OverlayManagerProps): void {
    this.setState({ ...this.state, ...props });
  }

  render(): ReactNode {
    return this.state.overlays.map(({ Component, open, props, id }) => (
      <Component key={id} {...props} open={open} onClose={() => this.delOverlay(id)} />
    ));
  }
}

export const addOverlay = async (...args: Parameters<OverlayManager['addOverlay']>): Promise<number> =>
  OverlayManager.instance.addOverlay(...args);

export const delOverlay = (...args: Parameters<OverlayManager['delOverlay']>): number =>
  OverlayManager.instance.delOverlay(...args);

export const clearOverlays = (): void => OverlayManager.instance?.clear();

export const delChildOverlays = (id: number): void => OverlayManager.instance?.deleteChildOverlay(id);

export default OverlayManager;
