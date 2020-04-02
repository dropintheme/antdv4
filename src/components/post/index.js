import React from 'react';
import { Link } from 'react-router-dom';
import { LinkPreview } from '../link';
import Comment from './comment';
export { default as Action } from './action';
export { default as CommentEditor } from './editor';

const Post = props => {
    const {
        title,
        link,
        author,
        authorImage,
        authorAbout,
        content,
        actions,
        datetime,
        linkPreview,
    } = props;
    return (
        <div className="ant-post">
            <Comment
                author={author}
                authorImage={authorImage}
                authorAbout={authorAbout}
                content={
                    <React.Fragment>
                        <Link to={link}>
                            <div className="ant-post-title">{title}</div>
                        </Link>
                        {content}
                        {linkPreview && <LinkPreview {...linkPreview} />}
                    </React.Fragment>
                }
                actions={actions}
                datetime={datetime}
            />
        </div>
    );
};

export { Comment };
export default Post;
