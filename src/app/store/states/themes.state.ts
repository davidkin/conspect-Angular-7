import { ITheme } from 'src/app/shared/interfaces/ITheme';

export interface IThemesState {
  themes: ITheme[];
}

export const initialThemesState: IThemesState = {
  themes: null
};
