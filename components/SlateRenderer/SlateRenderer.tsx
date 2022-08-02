import type { ComponentRenderers } from '@prezly/content-renderer-react-js';
import { Contact, Renderer } from '@prezly/content-renderer-react-js';
import type { Node } from '@prezly/slate-types';
import {
    BULLETED_LIST_NODE_TYPE,
    CONTACT_NODE_TYPE,
    HEADING_1_NODE_TYPE,
    HEADING_2_NODE_TYPE,
    LIST_ITEM_NODE_TYPE,
    LIST_ITEM_TEXT_NODE_TYPE,
    NUMBERED_LIST_NODE_TYPE,
    PARAGRAPH_NODE_TYPE,
} from '@prezly/slate-types';
import '@prezly/content-renderer-react-js/styles.css';

import styles from './SlateRenderer.module.css';

interface Props {
    nodes: Node | Node[];
}

const components: ComponentRenderers = {
    [LIST_ITEM_TEXT_NODE_TYPE]: ({ children }) => <>{children}</>,
    [LIST_ITEM_NODE_TYPE]: ({ children }) => <li>{children}</li>,
    [BULLETED_LIST_NODE_TYPE]: ({ children }) => <ul>{children}</ul>,
    [NUMBERED_LIST_NODE_TYPE]: ({ children }) => <ol>{children}</ol>,
    // // [DOCUMENT_NODE_TYPE]: ({ children, node }) => (
    //     <section data-version={node.version}>{children}</section>
    // ),
    [HEADING_1_NODE_TYPE]: ({ children }) => <h2>{children}</h2>,
    [HEADING_2_NODE_TYPE]: ({ children }) => <h3>{children}</h3>,
    // [LINK_NODE_TYPE]: ({ children, node }) => <a href={node.href}>{children}</a>,
    [PARAGRAPH_NODE_TYPE]: ({ children }) => <p>{children}</p>,
    // [QUOTE_NODE_TYPE]: ({ children }) => <blockquote>{children}</blockquote>,
    [CONTACT_NODE_TYPE]: ({ node }) => <Contact node={node} className={styles.contact} />,
};

export function SlateRenderer({ nodes }: Props) {
    return <Renderer nodes={nodes} components={components} />;
}
