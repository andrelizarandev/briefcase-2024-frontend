// Classes
import ColorsClasses from './colors.class';

export default class ButtonClasses {

  public static primaryButton = 
    `${ColorsClasses.bgPrimaryColor} ${ColorsClasses.bgDarkerPrimaryColorHover} text-white text-sm py-2 px-3 rounded flex font-semibold gap-x-2`;

  public static iconButton =
    `text-white text-sm py-2 px-3 rounded-full font-semibold items-center gap-x-2 hover:bg-slate-600`;

  public static whiteButton = 
    `bg-white text-gray-700 text-sm py-2 px-3 rounded font-semibold gap-x-2 flex gap-x-2 items-center hover:bg-gray-200`;

}