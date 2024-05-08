/**
 * There's an issue in AppAuth that causes some of the providers to not redirect correctly if the URL doesn't end with a `/`.
 * For convenience, we'll add a `/` to the end of the URL if it doesn't already have one.
 */
export function fixRedirectURL(url: string): string {
  return url.endsWith('/') ? url : `${url}/`;
}
