/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * A styled version of the Next.js Link component:
 *   https://nextjs.org/docs/api-reference/next/link
 */
import React from 'react';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import MuiLink, {LinkProps as MuiLinkProps} from '@mui/material/Link';

/**
 * Combines props from both the MUI and Next 'Link' components. Excludes the
 * 'component' prop since this is used to pass the Next 'Link' component.
 */
export type LinkProps<T> = NextLinkProps<T> & Omit<MuiLinkProps, 'component'>;

/**
 * Uses the MUI 'component' prop to change the root element to be a Next 'Link'.
 */
export default function Link<RouteType>(
  props: LinkProps<RouteType>
): React.ReactElement {
  return <MuiLink component={NextLink} {...props} />;
}
