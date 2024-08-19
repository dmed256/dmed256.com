// ---[ Filesystem ]------------------------------
export interface Directory {
  type: 'directory';
  children: Record<string, INode>;
}

export interface File {
  type: 'file';
}

export type INode = Directory | File;

// ---[ Apps ]------------------------------------
export interface BaseAppProps {
  id: string;
  preMinimizedLocation: WindowLocation;
  lastPositionedLocation: PositionedWindowLocation;
  location: WindowLocation;
}

export interface TerminalProps extends BaseAppProps {
  type: 'terminal';
}

export interface PdfViewerProps extends BaseAppProps {
  type: 'pdfViewer';
  src: string;
}

export interface InterwebProps extends BaseAppProps {
  type: 'interweb';
  initialUrl?: string;
}

export interface FoldersProps extends BaseAppProps {
  type: 'folders';
  initialPath: string[];
}

export interface TrashProps extends BaseAppProps {
  type: 'trash';
}

export type AppProps =
  | TerminalProps
  | PdfViewerProps
  | InterwebProps
  | FoldersProps
  | TrashProps;

export type AppType = AppProps['type'];

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
