/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';


import {
  SliderComponent as FwtSlider
} from './components/slider/slider';

declare global {
  interface HTMLFwtSliderElement extends FwtSlider, HTMLElement {
  }
  var HTMLFwtSliderElement: {
    prototype: HTMLFwtSliderElement;
    new (): HTMLFwtSliderElement;
  };
  interface HTMLElementTagNameMap {
    "fwt-slider": HTMLFwtSliderElement;
  }
  interface ElementTagNameMap {
    "fwt-slider": HTMLFwtSliderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fwt-slider": JSXElements.FwtSliderAttributes;
    }
  }
  namespace JSXElements {
    export interface FwtSliderAttributes extends HTMLAttributes {
      max?: number;
      min?: number;
      value?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }