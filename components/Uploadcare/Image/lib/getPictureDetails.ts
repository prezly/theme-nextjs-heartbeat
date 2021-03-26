import { Breakpoint } from '../../constants';
import { Options, PictureDetails } from '../../types';

import getPictureImageDetails from './getPictureImageDetails';
import getPictureSources from './getPictureSources';

const DEFAULT_SIZES: Options['sizes'] = {
    mobile: Breakpoint.SM,
    tablet: Breakpoint.MD,
    desktop: Breakpoint.LG,
    desktopXl: Breakpoint.XL,
    default: Breakpoint.MD,
};

const getPictureDetails = ({
    effects = [],
    width,
    sizes = !width ? DEFAULT_SIZES : { default: width },
    ...restOptions
}: Options): PictureDetails => {
    // eslint-disable-next-line no-prototype-builtins
    if (sizes && !sizes.hasOwnProperty('default')) {
        // eslint-disable-next-line no-param-reassign
        sizes.default = Math.min(...Object.values(sizes));
    }

    return {
        sources: getPictureSources({
            width, sizes, effects, ...restOptions,
        }),
        image: getPictureImageDetails({
            sizes, effects, width, ...restOptions,
        }),
    };
};

export default getPictureDetails;
