import React from 'react';
import { Form, Button, Input } from 'antd';
import 'antd/es/form/style/css';
import 'antd/es/button/style/css';
import 'antd/es/input/style/css';
const { TextArea } = Input;

const CommentEditor = ({ onChange, onSubmit, submitting, value, hidden }) => (
    <div className="ant-comment-editor">
      <Form.Item>
        <TextArea rows={2} onChange={onChange} value={value} />
      </Form.Item>
      {hidden ? <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item> : null}
    </div>
  );

export default CommentEditor;