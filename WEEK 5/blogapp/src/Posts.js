import React, { Component } from "react";
import Post from "./Post";
import styles from "./CohortDetails.module.css";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const posts = data.slice(0, 10).map(
                    p => new Post(p.userId, p.id, p.title, p.body)
                );

                this.setState({ posts });
            });
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error) {
        alert(error);
    }

    render() {

        return (
            <div style={{ textAlign: "center" }}>
                <h1>Blog Dashboard</h1>

                {
                    this.state.posts.map(post => (

                        <div key={post.id} className={styles.box}>

                            <h3
                                style={{
                                    color:
                                        post.id % 2 === 0
                                            ? "green"
                                            : "blue"
                                }}
                            >
                                {post.title}
                            </h3>

                            <dl>
                                <dt>Post ID</dt>
                                <dd>{post.id}</dd>

                                <dt>User ID</dt>
                                <dd>{post.userId}</dd>

                                <dt>Description</dt>
                                <dd>{post.body}</dd>
                            </dl>

                        </div>

                    ))
                }

            </div>
        );
    }
}

export default Posts;