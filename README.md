# blog comment frame

这个包用于在网页中引入 <a href='https://github.com/qumuchegi/blog-comment'>
<img src='https://img.shields.io/badge/blog__comment-0.1.0-red'/>
</a>, blog_comment 是一个开箱即用的 评论组件，适合嵌入个人博客页面，提供文章的评论功能



## 使用

先部署 [blog_comment](https://github.com/qumuchegi/blog-comment)，按照 [#use](https://github.com/qumuchegi/blog-comment#use) 的几个步骤即可在你的文章里面引入评论组件

安装：
```shell
yarn add blog_comment_frame

// or

npm i blog_comment_frame

```

引入组件：

```js
import BlogCommentFrame from 'blog_comment_frame'

  <BlogCommentFrame
    commentDeployUrlHost={'http://xxxx.vercel.app'}
    pageId={params.articleId}
  />
```

### props：

| props | 描述 | required |
| :--: | :-: | :-: |
| commentDeployUrlHost | blog_comment 部署到 vercel 的上线地址| 是 |
| pageId | 网页 id，评论数据将会以这个 pageId 作为索引存储，因此每一个引入 BlogCommentImport 的地方 pageId 都应该是唯一的| 是 |
| githubAuthClientId | github OAuth application client id | 是 |

