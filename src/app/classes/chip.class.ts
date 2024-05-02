// Classes
import ColorsClasses from './colors.class';

export default class ChipClasses {

  private static commonProps = 'text-sm py-2 px-3 rounded-full font-medium flex items-center gap-x-2'

  static primaryChip =
    `${this.commonProps} ${ColorsClasses.bgPrimaryColor} text-white`;

  static whiteChip = 
    `${this.commonProps} ${ColorsClasses.borderGrayColor} text-white`;

  static grayChip =
    `${this.commonProps} ${ColorsClasses.bgGrayColor} text-white`;

}