# blog comment frame

这个包用于在网页中引入 <a href='https://github.com/qumuchegi/blog-comment'>
<img src='https://img.shields.io/badge/blog__comment-0.1.0-red'/>
</a>, blog_comment 是一个开箱即用的 评论组件，适合嵌入个人博客页面，提供文章的评论功能



## 使用

先部署 [blog_comment](https://github.com/qumuchegi/blog-comment)，按照 [#use](https://github.com/qumuchegi/blog-comment#use) 的几个步骤即可在你的文章里面引入评论组件

安装：
```shell
yarn add blog_comment_frame
```

或者
```shell
npm i blog_comment_frame
```

在 React 项目中引入组件：

```js
import BlogCommentFrame from 'blog_comment_frame'

  <BlogCommentFrame
    commentDeployHost={'http://xxxx.vercel.app'}
    pageId={'xxxx'}
    auth={['github', 'anonymous']}
  />
```

框架无关的引入组件：

```js
import { BlogCommentShell } from 'blog_comment_frame'

BlogCommentShell({
  containerId: 'blog-comment-parent-container',
  commentDeployHost: 'http://xxxx.vercel.app',
  pageId: 'xxxx',
  auth: ['github', 'anonymous']
})

```

### props：

<details>
  <summary>BlogCommentFrame</summary>

| props | 描述 | required |
| :--: | :-: | :-: |
| commentDeployHost | blog_comment 部署到 vercel 的上线地址| 是 |
| pageId | 网页 id，评论数据将会以这个 pageId 作为索引存储，因此每一个引入 BlogCommentImport 的地方 pageId 都应该是唯一的| 是 |
| auth | 数组，用于配置评论者的身份，默认评论者匿名身份参与评论 ['anonymous']，如果需要 GitHub 授权，可以加上 'github', ['anonymous', 'github'] | 否 |

</details>

<details>
  <summary>BlogCommentShell</summary>

| props | 描述 | required |
| :--: | :-: | :-: |
| commentDeployHost | blog_comment 部署到 vercel 的上线地址| 是 |
| pageId | 网页 id，评论数据将会以这个 pageId 作为索引存储，因此每一个引入 BlogCommentImport 的地方 pageId 都应该是唯一的| 是 |
| auth | 数组，用于配置评论者的身份，默认评论者匿名身份参与评论 ['anonymous']，如果需要 GitHub 授权，可以加上 'github', ['anonymous', 'github'] | 否 |
| containerId | Blog Comment 评论组件被挂载的 document 节点 id | 是 |
</details>






