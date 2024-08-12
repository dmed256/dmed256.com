export type AppType = 'terminal';

export interface AppProps {
  id: string;
  type: AppType;
  preMinimizedLocation: WindowLocation;
  lastPositionedLocation: PositionedWindowLocation;
  location: WindowLocation;
}

export interface MinimizedWindowLocation {
  type: 'minimized';
}

export interface MaximizedWindowLocation {
  type: 'maximized';
}

export interface PositionedWindowLocation {
  type: 'positioned';
  x: number;
  y: number;
  width: number;
  height: number;
}

export type WindowLocation =
  | MinimizedWindowLocation
  | MaximizedWindowLocation
  | PositionedWindowLocation;
