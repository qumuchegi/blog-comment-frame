
import React, { useEffect, useCallback } from 'react'
import { IframeCommunication } from './lib/iframe'
import { entriesToObj } from './lib/object'

function BlogCommentFrame({
  commentDeployUrlHost,
  githubAuthClientId,
  pageId
}) {
  const IFRAME_ID = 'comment-iframe' + commentDeployUrlHost + pageId
  useEffect(() => {
    IframeCommunication.init(
      (evt) => {
        onIframeLoaded()
      }
    )
    const PARENT_GITHUB_AUTH_MSG_START = 'PARENT_GITHUB_AUTH_MSG_START'
    IframeCommunication.listenIframe(
      PARENT_GITHUB_AUTH_MSG_START,
      (evt, data) => {
        const url = `https://github.com/login/oauth/authorize?client_id=${githubAuthClientId}`
          + (
            `&redirect_uri=${`${commentDeployUrlHost}/api/githubLoginCallback?redirect_url=` + encodeURIComponent(window.location.href)}`
          )
        window.location.href = url
      }
    )
  }, [])

  useEffect(() => {
    IframeCommunication.listenIframe(
      'send_iframe_height',
      (evt, data) => {
        console.log({evt, data});
        document.getElementById(IFRAME_ID).style.height = Number(data.height) + 50 + 'px'
      }
    )
  }, [])

  const onIframeLoaded = useCallback(
    () => {
      const {
        userHomeUrl,
        auth_username,
        auth_avatar,
        auth_token,
        github_userid
      } = entriesToObj(document.location.search.slice(1), '&')
      document.getElementById(IFRAME_ID).contentWindow.postMessage(
        JSON.stringify({
          msg: 'forward-github-auth-info',
          data: {
            userHomeUrl,
            auth_username,
            auth_avatar,
            auth_token,
            github_userid
          }
        }),
        '*'
      )
    },
    []
  )

  return (
    <div className="App">
      <iframe
        src={`${commentDeployUrlHost}/?articleId=${pageId}`}
        id={IFRAME_ID}
        style={{
          width: '100%',
          border: '0px',
          minHeight: '500px',
          scrollbarWidth: 'none',
          paddingBottom: '30px'
        }}
        frameBorder='0'
      />
    </div>
  );
}
export default BlogCommentFrame

