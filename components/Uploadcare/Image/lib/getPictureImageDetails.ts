import { Options } from '../../types';
import effect from './effects';
import getSrcSet from './getSrcSet';
import { prepareUploadcareUrl } from './url-manager';

const getPictureImageDetails = (options: Options) => {
    const {
        imageDetails, filename, src, sizes, formats, defaultFormat, effects, width,
    } = options;
    const format = defaultFormat || formats[0];
    return {
        srcSet: getSrcSet({
            imageDetails,
            filename,
            src,
            format,
            size: width || sizes.default,
            effects,
        }),
        src: prepareUploadcareUrl({
            width: width || sizes.default,
            imageDetails,
            src,
            filename,
            // eslint-disable-next-line import/no-named-as-default-member
            effects: [effect.resize(width || sizes.default), effect.format(format), ...effects],
        }),
    };
};

export default getPictureImageDetails;
