import { useEffect } from 'react';

type Props = {
    topicId?: number;
};

const SCRIPT_ID = 'discourse-embed-script';

export function DiscourseComments({ topicId }: Props) {
    useEffect(() => {
        // @ts-ignore
        window.DiscourseEmbed = {
            discourseUrl: 'https://discourse.prezly.io/',
            topicId,
        };

        const d = document.createElement('script');
        d.id = SCRIPT_ID;
        d.type = 'text/javascript';
        d.async = true;
        // @ts-ignore
        d.src = `${window.DiscourseEmbed.discourseUrl}javascripts/embed.js`;
        (
            document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]
        ).appendChild(d);

        return () => {
            const script = document.getElementById(SCRIPT_ID);
            if (script) {
                script.remove();
            }
        };
    }, [topicId]);

    return (
        <div>
            <div id="discourse-comments" />
        </div>
    );
}
