import { HeadingNode } from '@prezly/story-content-format';
import type { ReactNode } from 'react';

interface Props {
    node: HeadingNode;
    children?: ReactNode;
}

export function Heading({ node, children }: Props) {
    const Tag = node.type === HeadingNode.Type.HEADING_ONE ? 'h2' : 'h3';
    return <Tag>{children}</Tag>;
}
