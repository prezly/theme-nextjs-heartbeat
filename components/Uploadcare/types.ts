export type ImageExtension = 'svg' | 'jpeg' | 'webp' | 'png' | 'jpg' | 'gif';

export type Options = Pick<ImageSourceProps, 'src' | 'imageDetails'> &
    Pick<ImageLayoutProps, 'layout' | 'objectFit' | 'objectPosition' | 'sizes'> &
    Pick<BaseProps, 'width' | 'height' | 'effects' | 'defaultFormat' | 'formats' | 'filename'>;

type Width = number;

type Sizes = Partial<{
    mobile: Width;
    tablet: Width;
    notMobile: Width;
    mobileAndTablet: Width;
    desktop: Width;
    notDesktop: Width;
    desktopXl: Width;
    notDesktopXl: Width;
    allDesktops: Width;
    default: Width;
}>;

type UploadcareEffect = string | ((options: Options) => string);

type ImageSourceProps =
    | {
          src: string;
          imageDetails?: never;
      }
    | {
          src?: never;
          imageDetails: Record<string, any>;
      };

type ImageLayoutProps =
    | {
          layout: 'fill';
          objectFit: 'cover' | 'contain' | 'none' | 'fill';
          objectPosition?: string;
          /**
           * Sizes used to generate sources for different screen resolutions
           */
          sizes?: Sizes;
      }
    | {
          layout: 'fixed';
          objectFit?: never;
          objectPosition?: never;
          sizes?: never;
      };

type BaseProps = {
    alt?: string;
    className?: string;
    containerClassName?: string;
    /**
     * true if image loading should be deferred
     */
    lazy?: boolean;
    /**
     * Array of Uploadcare transformations
     *
     * Transformation can be one of:
     *   - string transformation, eg. '/grayscale/'
     *   - function that receives {@link (Options)} and returns transformation string
     */
    effects?: Array<UploadcareEffect>;
    filename?: string;
    formats?: ImageExtension[];
    /**
     * Format used for a fallback img src
     */
    defaultFormat?: ImageExtension;
    /**
     * Image width
     *
     * If not specified, component will try to determine it with following steps:
     *   - if it is an Uploadcare imageDetails object and height is specified,
     *     aspect ratio is calculated and width is calcualted basing on it (height * aspectRatio)
     *   - if it is an Uploadcare imageDetails object and height is not specified,
     *     original image width is used
     *   - fallback image width is used (5px) - this is used to make lighthouse happy.
     *     Image will be still shown nice (styled with css)
     */
    width?: number;
    /**
     * Image height
     *
     * If not specified, component will try to determine it with following steps:
     *   - if it is an Uploadcare imageDetails object and width is specified,
     *     aspect ratio is calculated and height is calcualted basing on it (width / aspectRatio)
     *   - if it is an Uploadcare imageDetails object and width is not specified,
     *     original image height is used
     *   - fallback image height is used (5px) - this is used to make lighthouse happy.
     *     Image will be still shown nice (styled with css)
     */
    height?: number;
};

export type Props = BaseProps & ImageLayoutProps & ImageSourceProps;

export type PictureDetails = {
    sources: Array<{
        id: string;
        srcSet: string;
        media?: string;
        type?: string;
    }>;
    image: {
        src: string;
    };
};
