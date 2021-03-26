import { prepareUploadcareUrl } from './url-manager';
import effect from './effects';

const getSrcSet = ({
    imageDetails, filename, src, size, format, effects,
}) => {
    const defaultImageUrl = prepareUploadcareUrl({
        width: size,
        imageDetails,
        filename,
        src,
        // eslint-disable-next-line import/no-named-as-default-member
        effects: [effect.resize(size), effect.format(format), ...effects],
    });
    const retinaImageUrl = prepareUploadcareUrl({
        width: size * 2,
        imageDetails,
        src,
        // eslint-disable-next-line import/no-named-as-default-member
        effects: [effect.resize(size * 2), effect.format(format), ...effects],
    });

    return `${defaultImageUrl} 1x, ${retinaImageUrl} 2x`;
};

export default getSrcSet;
