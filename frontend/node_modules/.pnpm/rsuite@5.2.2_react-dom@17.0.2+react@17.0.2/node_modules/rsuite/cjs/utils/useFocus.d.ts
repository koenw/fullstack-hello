import React from 'react';
export default function useFocus<E extends HTMLElement>(elementRef: React.MutableRefObject<E>): {
    grab: () => void;
    release: (options?: FocusOptions) => void;
};
