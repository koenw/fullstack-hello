import React from 'react';
import PropTypes from 'prop-types';
import { AnimationEventProps } from '../@types/common';
export declare enum STATUS {
    UNMOUNTED = 0,
    EXITED = 1,
    ENTERING = 2,
    ENTERED = 3,
    EXITING = 4
}
export interface TransitionProps extends AnimationEventProps {
    animation?: boolean;
    /** Primary content */
    children?: ((props: any, ref: React.Ref<any>) => React.ReactNode) | React.ReactNode;
    /** Additional classes */
    className?: string;
    /** Show the component; triggers the enter or exit animation */
    in?: boolean;
    /** Unmount the component (remove it from the DOM) when it is not shown */
    unmountOnExit?: boolean;
    /** Run the enter animation when the component mounts, if it is initially shown */
    transitionAppear?: boolean;
    /** A Timeout for the animation */
    timeout?: number;
    /** CSS class or classes applied when the component is exited */
    exitedClassName?: string;
    /** CSS class or classes applied while the component is exiting */
    exitingClassName?: string;
    /** CSS class or classes applied when the component is entered */
    enteredClassName?: string;
    /** CSS class or classes applied while the component is entering */
    enteringClassName?: string;
}
interface TransitionState {
    status?: number;
}
export declare const transitionPropTypes: {
    animation: PropTypes.Requireable<boolean>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    className: PropTypes.Requireable<string>;
    in: PropTypes.Requireable<boolean>;
    unmountOnExit: PropTypes.Requireable<boolean>;
    transitionAppear: PropTypes.Requireable<boolean>;
    timeout: PropTypes.Requireable<number>;
    exitedClassName: PropTypes.Requireable<string>;
    exitingClassName: PropTypes.Requireable<string>;
    enteredClassName: PropTypes.Requireable<string>;
    enteringClassName: PropTypes.Requireable<string>;
    onEnter: PropTypes.Requireable<(...args: any[]) => any>;
    onEntering: PropTypes.Requireable<(...args: any[]) => any>;
    onEntered: PropTypes.Requireable<(...args: any[]) => any>;
    onExit: PropTypes.Requireable<(...args: any[]) => any>;
    onExiting: PropTypes.Requireable<(...args: any[]) => any>;
    onExited: PropTypes.Requireable<(...args: any[]) => any>;
};
declare class Transition extends React.Component<TransitionProps, TransitionState> {
    static propTypes: {
        animation: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        in: PropTypes.Requireable<boolean>;
        unmountOnExit: PropTypes.Requireable<boolean>;
        transitionAppear: PropTypes.Requireable<boolean>;
        timeout: PropTypes.Requireable<number>;
        exitedClassName: PropTypes.Requireable<string>;
        exitingClassName: PropTypes.Requireable<string>;
        enteredClassName: PropTypes.Requireable<string>;
        enteringClassName: PropTypes.Requireable<string>;
        onEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onEntering: PropTypes.Requireable<(...args: any[]) => any>;
        onEntered: PropTypes.Requireable<(...args: any[]) => any>;
        onExit: PropTypes.Requireable<(...args: any[]) => any>;
        onExiting: PropTypes.Requireable<(...args: any[]) => any>;
        onExited: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static displayName: string;
    static defaultProps: {
        timeout: number;
    };
    animationEventListener: any;
    instanceElement: any;
    nextCallback: any;
    needsUpdate: any;
    childRef: React.RefObject<any>;
    constructor(props: TransitionProps);
    static getDerivedStateFromProps(nextProps: TransitionProps, prevState: TransitionState): {
        status: STATUS;
    };
    getSnapshotBeforeUpdate(): any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onTransitionEnd(node: HTMLElement, handler: React.AnimationEventHandler): void;
    setNextCallback(callback: React.AnimationEventHandler): any;
    getChildElement(): any;
    performEnter(props: TransitionProps): void;
    performExit(props: TransitionProps): void;
    cancelNextCallback(): void;
    safeSetState(nextState: TransitionState, callback: React.AnimationEventHandler): void;
    render(): React.ReactNode;
}
export default Transition;
