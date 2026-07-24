import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import { getNotionMobileImageSrcSet } from '../utils/notionImages';

type NotionResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
    notionId: string;
    notionKind: 'block' | 'cover';
    src: string;
    sizes?: string;
};

const NotionResponsiveImage: React.FC<NotionResponsiveImageProps> = ({
    notionId,
    notionKind,
    src,
    sizes = 'calc(100vw - 3rem)',
    onError,
    ...imageProps
}) => {
    const [mobileSourceFailed, setMobileSourceFailed] = useState(false);
    const mobileSrcSet = mobileSourceFailed
        ? undefined
        : getNotionMobileImageSrcSet(notionId, notionKind);

    useEffect(() => {
        setMobileSourceFailed(false);
    }, [notionId, src]);

    const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
        if (event.currentTarget.currentSrc.includes('/notion-proxy.php?action=getImage')) {
            setMobileSourceFailed(true);
            return;
        }

        onError?.(event);
    };

    return (
        <picture className="contents">
            {mobileSrcSet ? (
                <source
                    media="(max-width: 767px)"
                    srcSet={mobileSrcSet}
                    sizes={sizes}
                />
            ) : null}
            <img
                key={mobileSourceFailed ? 'original' : 'responsive'}
                {...imageProps}
                src={src}
                onError={handleError}
            />
        </picture>
    );
};

export default NotionResponsiveImage;
