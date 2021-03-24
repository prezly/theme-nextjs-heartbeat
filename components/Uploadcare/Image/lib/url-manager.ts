import { Options } from '../../types';
import fixExternalImageSrc from './fixExternalImageSrc';

type PrepareUrlProps = Pick<Options, 'width' | 'imageDetails' | 'src' | 'filename' | 'effects'>;

const UPLOADCARE_CDN_URL = 'https://cdn.uc.assets.prezly.com';
const UPLOADCARE_MEDIA_PROXY_URL = 'https://proxy.uc.assets.prezly.com/';

const handleEffects = (effects: Options['effects'], options) => {
    return effects.map((effect) => {
        if (typeof effect === 'function') {
            return effect(options);
        }
        return effect;
    });
};

export const prepareUploadcareMediaProxyUrl = (options: PrepareUrlProps) => {
    const { src, effects } = options;
    return [
        UPLOADCARE_MEDIA_PROXY_URL,
        effects.length === 0 ? effects : ['', ...handleEffects(effects, options)].join('-'),
        fixExternalImageSrc(src),
    ]
        .filter(Boolean)
        .join('/');
};

export const prepareUploadcareUrl = (options: PrepareUrlProps) => {
    const { imageDetails, src, filename, effects } = options;

    // if external image, use media-proxy
    if (src) {
        return prepareUploadcareMediaProxyUrl(options);
    }

    return [
        UPLOADCARE_CDN_URL,
        imageDetails.uuid,
        effects.length === 0 ? effects : ['', ...handleEffects(effects, options)].join('-'),
        filename,
    ]
        .filter(Boolean)
        .join('/');
};
