// Modules
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Classes
import ColorsClasses from './colors.class';

export default class ButtonClasses {

  static commonClasses = `text-sm py-2 px-3 rounded font-medium gap-x-2 flex gap-x-2 items-center`;

  public static iconButton =
    `text-white text-sm py-2 px-3 rounded-full font-medium items-center gap-x-2 hover:bg-slate-600`;

  public static primaryButton = 
    twMerge(clsx(`${this.commonClasses} ${ColorsClasses.bgPrimaryColor} ${ColorsClasses.bgDarkerPrimaryColorHover} text-white`));

  public static whiteButton = 
    twMerge(clsx(`${this.commonClasses} ${ColorsClasses.textBgColor} bg-white hover:bg-gray-200`));

  public static grayButton =
    twMerge(clsx(`${this.commonClasses} ${ColorsClasses.bgColor} border border-gray-600`));

}