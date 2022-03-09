
import React, { useEffect } from 'react'
import { IframeCommunication } from './lib/iframe'

function BlogCommentImport({
  commentDeployUrlHost,
  pageId,
  height
}) {
  const IFRAME_ID = 'comment-iframe' + commentDeployUrlHost + pageId
  useEffect(() => {
    IframeCommunication.init(
      (evt) => {
        //document.getElementById(IFRAME_ID).style.height = Number(evt.srcElement.outerHeight) + 70 + 'px'
      }
    )
    const PARENT_GITHUB_AUTH_MSG_START = 'PARENT_GITHUB_AUTH_MSG_START'
    IframeCommunication.listenIframe(
      PARENT_GITHUB_AUTH_MSG_START,
      (evt, data) => {
        const {
          github_auth_clientid,
          commentDeployUrlHost,
          callbackUrl
        } = data
        const url = `https://github.com/login/oauth/authorize?client_id=${github_auth_clientid}`
          + (
            `&redirect_uri=${`${commentDeployUrlHost}/api/githubLoginCallback?redirect_url=` + encodeURIComponent(callbackUrl || window.location.href)}`
          )
        window.location.href = url
      }
    )
  }, [])

  return (
    <div className="App">
      <iframe
        src={`${commentDeployUrlHost}/?articleId=${pageId}`}
        id={IFRAME_ID}
        style={{
          width: '100%',
          border: '0px',
          height: height + 'px',
          scrollbarWidth: 'none',
          paddingBottom: '30px'
        }}
        frameBorder='0'
      />
    </div>
  );
}
export default BlogCommentImport

