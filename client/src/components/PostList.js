import axios from 'axios';
import { useState, useEffect } from 'react';

import CommentCreate from './CommentCreate.js';
import CommentList from './CommentList.js';

const PostList = () => {
	const [posts, setPosts] = useState({});

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get('http://posts.com/posts'); // GET /posts from 'query' service
				setPosts(res.data);
			} catch (error) {
				console.log('Query service is down');
				console.log(error.message);
			}
		};

		fetchPosts();
	}, []);

	const renderedPosts = Object.values(posts) // array of posts
		.map(post => {
			return (
				<div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
					<div className='card-body'>
						<h3>{post.title}</h3>
						<CommentList comments={post.comments} />
						<CommentCreate postId={post.id} />
					</div>
				</div>
			);
		});

	return <div className='d-flex flex-row flex-wrap justify-content-between '>{renderedPosts}</div>;
};

export default PostList;
