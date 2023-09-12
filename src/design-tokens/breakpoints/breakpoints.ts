import facepaint from "facepaint";

export type Responsive<T> = T | T[];

export const breakpointValues = [768, 1100, 1400] as const;
export const breakpoints = breakpointValues.map((bp) => `@media (min-width: ${bp}px)`);
export const mq = facepaint(breakpoints);