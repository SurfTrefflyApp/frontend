export function isRunningAsPWA(): boolean {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  const isFullscreen = window.matchMedia("(display-mode: fullscreen)").matches;
  const isMinimalUI = window.matchMedia("(display-mode: minimal-ui)").matches;

  return isStandalone || isFullscreen || isMinimalUI || isIOSPWA();
}

export function isIOSPWA() {
  // @ts-expect-error: Property 'standalone' does not exist on type 'Navigator'
  return !!window.navigator.standalone;
}
