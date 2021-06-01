import { type } from 'os';

export interface Component {
  render (): HTMLElement;
}

export type RootElement = HTMLElement | null;
