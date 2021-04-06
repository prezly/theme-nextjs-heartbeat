import { FunctionComponent, useEffect } from 'react';

type Props = {
    topicId?: number
};

const DiscourseComments: FunctionComponent<Props> = ({ topicId }) => {
    useEffect(() => {
        if (process.browser) {
            // @ts-ignore
            window.DiscourseEmbed = {
                discourseUrl: 'https://discourse.prezly.io/',
                topicId,
            };

            const d = document.createElement('script');
            d.type = 'text/javascript';
            d.async = true;
            // @ts-ignore
            d.src = `${window.DiscourseEmbed.discourseUrl}javascripts/embed.js`;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
        }
    }, []);

    return (
        <div>
            <div id="discourse-comments" />
        </div>
    );
};

export default DiscourseComments;
