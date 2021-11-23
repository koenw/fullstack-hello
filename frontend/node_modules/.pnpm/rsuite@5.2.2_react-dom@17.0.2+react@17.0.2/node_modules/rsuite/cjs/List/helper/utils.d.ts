import { CSSProperties } from 'react';
import { Offset } from '../../@types/common';
export interface Axis {
    x?: number;
    y?: number;
}
export declare function isContainInteractiveElement(targetNode: HTMLElement): boolean;
export declare function setInlineStyles(node: HTMLElement, styles: CSSProperties): void;
export declare function setTranslate3d(node: HTMLElement, translate: Axis | null): void;
export declare function setTransitionDuration(node: HTMLElement, duration?: number | null): void;
/**
 * find closest target node from source node
 * */
export declare function closestNode(sourceNode: HTMLElement, judge: (target: HTMLElement) => boolean): HTMLElement;
export declare function getEdgeOffset(node: HTMLElement, parent: HTMLElement, offset?: Offset): Offset;
export declare function getScrollingParent(el: HTMLElement): HTMLElement;
