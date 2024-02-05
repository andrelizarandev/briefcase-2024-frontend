// Classes
import ColorsClasses from './colors.class';

export default class ChipClasses {

  public static commonProps = 'text-white text-sm py-2 px-3 rounded-full font-semibold flex items-center gap-x-2'

  public static primaryChip =
    `${ColorsClasses.bgPrimaryColor} ${this.commonProps}`;

  public static secondaryChip =
    `${ColorsClasses.bgSecondaryColor} ${this.commonProps}`;

  public static whiteChip = 
    `border-white border ${this.commonProps}`;

}