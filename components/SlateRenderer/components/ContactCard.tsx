import { Elements } from '@prezly/content-renderer-react-js';
import type { ContactNode } from '@prezly/story-content-format';

interface Props {
    node: ContactNode;
}

export function ContactCard(props: Props) {
    return <Elements.Contact node={props.node} className="not-prose" />;
}
