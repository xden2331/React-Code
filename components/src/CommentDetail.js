import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={props.imgURL} />
            </a>
            <div className='content'>
                <a className='author' href='/'>
                    {props.author}
                    </a>
                <div className='metadata'>
                    <span className='date'>{props.date}</span>
                </div>
                <div className='text'>
                    Nice blog post!
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;