// Modules
import { twMerge } from 'tailwind-merge';

// Classes
import ColorsClasses from './colors.class';

export default class ChipClasses {

  public static commonProps = 'text-white text-sm py-2 px-3 rounded-full font-semibold flex items-center gap-x-2'

  public static primaryChip =
    twMerge(`bg-${ColorsClasses.primaryColor} ${this.commonProps}`);

  public static whiteChip = 
    twMerge(`border-white border ${this.commonProps}`);

}