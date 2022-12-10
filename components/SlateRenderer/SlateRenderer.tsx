import { Component, Renderer } from '@prezly/content-renderer-react-js';
import type { Node } from '@prezly/story-content-format';
import {
    ContactNode,
    HeadingNode,
    ListItemNode,
    ListItemTextNode,
    ListNode,
    ParagraphNode,
} from '@prezly/story-content-format';

import '@prezly/content-renderer-react-js/styles.css';
import { ContactCard, Heading, List, ListItem, ListItemText, Paragraph } from './components';

interface Props {
    nodes: Node | Node[];
}

export function SlateRenderer({ nodes }: Props) {
    return (
        <Renderer nodes={nodes} defaultComponents>
            <Component match={ListNode.isListNode} component={List} />
            <Component match={ListItemNode.isListItemNode} component={ListItem} />
            <Component match={ListItemTextNode.isListItemTextNode} component={ListItemText} />
            <Component match={HeadingNode.isHeadingNode} component={Heading} />
            <Component match={ParagraphNode.isParagraphNode} component={Paragraph} />
            <Component match={ContactNode.isContactNode} component={ContactCard} />
        </Renderer>
    );
}
