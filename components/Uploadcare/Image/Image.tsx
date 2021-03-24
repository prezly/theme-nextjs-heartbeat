import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { inspect } from 'util';
import { Props } from '../types';
import { getPictureDetails } from './lib';
// import styles from './Image.module.scss';
import getEffectiveImageSize from './lib/getEffectiveImageSize';
// import styles = module

const UploadcareImage: FunctionComponent<Props> = (props) => {
    const {
        className,
        containerClassName,
        alt,
        layout,
        objectFit,
        imageDetails,
        width,
        height,
        src,
        objectPosition,
        lazy,
    } = props;
    const { sources, image } = getPictureDetails(props);

    const imageStyle = layout === 'fixed'
        ? undefined
        : {
            objectFit,
            objectPosition,
            maxHeight: height,
            maxWidth: width,
            minHeight: height,
            minWidth: width,
        };
    const imageSize = getEffectiveImageSize(width, height, imageDetails);

    let imageClassName = className;
    if (layout === 'fill') {
        imageClassName = `${imageClassName} h-full w-full`;
    }

    return (
        <picture className={['block', containerClassName].join(' ')}>
            {sources.map((source) => (
                <source
                    key={`${src || imageDetails?.uuid}${source.id}`}
                    srcSet={source.srcSet}
                    type={source.type}
                    media={source.media}
                />
            ))}

            <img
                {...imageSize}
                className={imageClassName}
                loading={lazy ? 'lazy' : 'eager'}
                alt={alt}
                style={imageStyle}
                src={image.src}
            />
        </picture>
    );
};

export default UploadcareImage;
