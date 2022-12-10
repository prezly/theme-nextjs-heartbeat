import type { ParagraphNode } from '@prezly/story-content-format';
import type { ReactNode } from 'react';

interface Props {
    node: ParagraphNode;
    children?: ReactNode;
}

export function Paragraph({ children }: Props) {
    return <p>{children}</p>;
}
