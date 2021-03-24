import { Options } from '../../types';
import effect from './effects';
import getSrcSet from './getSrcSet';
import { prepareUploadcareUrl } from './url-manager';

const getPictureImageDetails = (options: Options) => {
    const { imageDetails, filename, src, sizes, formats, defaultFormat, effects, width } = options;
    const format = defaultFormat || formats[0];
    return {
        srcSet: getSrcSet({
            imageDetails,
            filename,
            src,
            format: format,
            size: width || sizes.default,
            effects: effects,
        }),
        src: prepareUploadcareUrl({
            width: width || sizes.default,
            imageDetails,
            src,
            filename,
            effects: [effect.resize(width || sizes.default), effect.format(format), ...effects],
        }),
    };
};

export default getPictureImageDetails;
