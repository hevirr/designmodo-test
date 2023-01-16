export type alignUnion = 'start' | 'end' | 'center' | 'justify';

export interface DefaultTextOptions {
  font: string;
  fontType: string;
  fontSize: number;
  fontColor: string;
  lineHeight: string;
  letterSpacing: string;
  aligning: alignUnion;
}

export const defaultTextOptions: DefaultTextOptions = {
  font: 'Fira Sans',
  fontType: 'Bold',
  fontSize: 14,
  fontColor: '#292929',
  lineHeight: '100',
  letterSpacing: '0.6',
  aligning: 'start',
};
