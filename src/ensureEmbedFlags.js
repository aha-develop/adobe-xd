export const ensureEmbedFlags = (url) => {
  if (url.includes('/embed/')) {
    return url
  } else {
    return url.replace('/view', '/embed')
  }
}