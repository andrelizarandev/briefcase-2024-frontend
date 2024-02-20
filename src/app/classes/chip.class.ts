// Classes
import ColorsClasses from './colors.class';

export default class ChipClasses {

  public static commonProps = 'text-sm py-2 px-3 rounded-full font-semibold flex items-center gap-x-2'

  public static primaryChip =
    `${this.commonProps} ${ColorsClasses.bgPrimaryColor} text-white`;

  public static whiteChip = 
    `${this.commonProps} ${ColorsClasses.borderGrayColor} text-white`;

}