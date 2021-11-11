import type { FunctionComponent } from 'react';
import { Node, Renderer, Options } from '@prezly/content-renderer-react-js';
import '@prezly/content-renderer-react-js/build/styles.css';
import {
    BULLETED_LIST_NODE_TYPE,
    HEADING_1_NODE_TYPE,
    HEADING_2_NODE_TYPE, LIST_ITEM_NODE_TYPE, LIST_ITEM_TEXT_NODE_TYPE, NUMBERED_LIST_NODE_TYPE,
    PARAGRAPH_NODE_TYPE,
} from '@prezly/slate-types';

interface Props {
    nodes: Node | Node[];
}

const options: Options = {
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
    [PARAGRAPH_NODE_TYPE]: ({ children }) => (<p>{children}</p>),
    // [QUOTE_NODE_TYPE]: ({ children }) => <blockquote>{children}</blockquote>,
};

const SlateRenderer: FunctionComponent<Props> = ({ nodes }) => (
    <Renderer nodes={nodes} options={options} />
);

export default SlateRenderer;
