import React from 'react';
import { Comment, Avatar } from 'antd';
import 'antd/es/comment/style/css';
import 'antd/es/avatar/style/css';

const PostComment = ({author, authorImage, authorAbout, content, actions, datetime}) => {

      const authorBlock = author ? <React.Fragment>
        <span className="ant-post-comment-content-author">
            <span className="ant-post-comment-content-author-name">{author}</span>
            <span className="ant-comment-content-author-time">{datetime}</span>
        </span>
        <span className="ant-post-comment-content-author-about">{authorAbout}</span>
      </React.Fragment> : null;
      return <Comment
          actions={actions}
          author={authorBlock}
          avatar={
            <Avatar
              src={authorImage}
              alt={author}
            />
          }
          content={content}
        />
}

export default PostComment;