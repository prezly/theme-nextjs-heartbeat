import { MediaBreakpoints } from '../../constants';
import { Options } from '../../types';
import getImageMimeType from './getImageMimeType';
import getSrcSet from './getSrcSet';

const getPictureSources = (options: Options) => {
    const {
        imageDetails, filename, src, sizes, formats, effects, width,
    } = options;
    return formats.flatMap((format) => {
        if (!sizes) {
            return {
                id: format as string,
                type: getImageMimeType(format),
                srcSet: getSrcSet({
                    imageDetails, filename, src, size: width, format, effects,
                }),
            };
        }
        return Object.entries(sizes).map(([breakboint, size]) => ({
            id: `${format}-${breakboint}-${size}`,
            type: getImageMimeType(format),
            media: MediaBreakpoints[breakboint],
            srcSet: getSrcSet({
                imageDetails, filename, src, size, effects, format,
            }),
        }));
    });
};

export default getPictureSources;
