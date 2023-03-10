import React from "react";
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className='text-center'>
            Постов нет
        </p>
    }
    return syncPosts.map((post) => (<Post post={post} key={post.id}/>));
}

const mapStateToProps = (state) => ({
    syncPosts: state.posts.posts,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, null)(Posts);
