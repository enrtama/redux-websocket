/* eslint-env browser */
/* @flow */

/**
 * Formats args for creating the WebSocket instance
 */
const extractArgs = (config) => {
  if (config.args) {
    return config.args
  }
  return [config.url, config.headers]
}

/**
 * Create a websocket object from the incoming config
 */
export const createWebsocket = (payload: Config) => {
  const args = extractArgs(payload)
  const websocket = (payload.websocket) ? payload.websocket : WebSocket

  // args[1] contains headers (API Key)
  return new WebSocket(args[0], "", args[1])
}
