import { ThemeType } from '../styles/theme';

export interface IStyle {
  theme?: ThemeType;
}

export interface INavbarStyle extends IStyle {}

export interface IBtnStyle extends IStyle {
  fontSize?: string;
  padding?: string;
  fontWeight?: number;
  borderRadius?: string;
  onClick?: any;
}

export interface IConvertFileStyle extends IStyle {
  showDropdown: boolean;
}
