// Modules
import { twMerge } from 'tailwind-merge';

// Classes
import ColorsClasses from './colors.class';

export default class ButtonClasses {

  public static primaryButton = 
    twMerge(`bg-${ColorsClasses.primaryColor} hover:${ColorsClasses.darkerPrimaryColor} text-white text-sm py-2 px-3 rounded flex font-semibold gap-x-2`);

  public static iconButton =
    twMerge(`text-white text-sm py-2 px-3 rounded-full font-semibold items-center gap-x-2 hover:bg-slate-600`);

  public static whiteButton = 
    twMerge(`bg-white text-${ColorsClasses.backgroundColor} text-sm py-2 px-3 rounded font-semibold gap-x-2 flex gap-x-2 items-center hover:bg-gray-200`);

}