# Overlay Manager for React

## Overview

Overlay Manager for React is a lightweight and flexible library designed to simplify the management of overlays (modals, toasts, drawers, etc.) in React applications. It provides a straightforward API for creating, showing, hiding, and managing overlays within your React components.

## Features

-**Easy Integration:** Seamlessly integrate overlay functionality into your React components with minimal setup.
-**Flexible Configuration:** Customize overlay behavior, and interactions to suit your application's needs.
-**Support for Various Overlay Types:** Manage modals, toasts, drawers, and more with ease.
-**Event Handling:** Handle overlay events such as opening, closing, and interactions efficiently.
-**Accessibility:** Ensure accessibility standards are met by providing built-in support for keyboard navigation and screen readers.
-**Lightweight:** Keep your application lightweight by using a minimal and optimized library for overlay management.

## Installation

You can install Overlay Manager for React via npm or yarn:

```bash
npm install @rrlopez/overlay-manager
# or
yarn add @rrlopez/overlay-manager
```

## Usage

To use Overlay Manager for React, simply import the necessary components and integrate them into your React application:

```jsx
import { OverlayManager, addOverlay} from '@rrlopez/overlay-manager';

const MyComponent = () => {
  const handleClick = () => {
    addOverlay(YourModalComponent);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button className="btn btn-primary btn-bordered" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

function YourModalComponent({open, onClose}: {open: boolean, onClose: ()=>null}) {

  return (
    <Modal defaultOpen={open} onOpenChange={onClose}>
	    // content of your modal
    </Modal>
  );
}

const App = () => {
  return (
    <>
      <OverlayManager />
      <MyComponent />
    </>
  );
};

export default App;
```
