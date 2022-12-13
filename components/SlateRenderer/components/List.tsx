import type { ListItemNode, ListItemTextNode } from '@prezly/story-content-format';
import { ListNode } from '@prezly/story-content-format';
import type { PropsWithChildren } from 'react';

interface Props {
    node: ListNode;
}

export function List({ node, children }: PropsWithChildren<Props>) {
    const Tag = node.type === ListNode.Type.NUMBERED ? 'ol' : 'ul';

    return <Tag>{children}</Tag>;
}

interface ListItemProps {
    node: ListItemNode;
}

export function ListItem({ children }: PropsWithChildren<ListItemProps>) {
    return <li>{children}</li>;
}

interface ListItemTextProps {
    node: ListItemTextNode;
}

export function ListItemText({ children }: PropsWithChildren<ListItemTextProps>) {
    return <>{children}</>;
}
