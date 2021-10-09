declare module 'react-naver-maps' {
  interface markerOptions {
    position: any;
    animation: number;
    onClick?: () => void;
  }

  interface naverMapOptions{
    mapDivId: string;
    style: {
      width: string,
      height: string,
    };
    defaultCenter: {
      lat: number,
      lng: number,
    }
    defaultZoom: number;
  }

  interface renderNaverMapOptions {
    ncpClientId: string|undefined;
  }

  class NaverMap extends React.Component<naverMapOptions> {}
  class RenderAfterNavermapsLoaded extends React.Component<renderNaverMapOptions> {}
  class Marker extends React.Component<markerOptions> {}

  namespace NaverMap {}
  namespace RenderAfterNavermapsLoaded {}
  namespace Marker {}

  export {NaverMap, RenderAfterNavermapsLoaded, Marker};
}
