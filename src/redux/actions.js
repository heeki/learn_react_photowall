export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, pid) {
    return {
        type: 'ADD_COMMENT',
        comment,
        pid
    }
}
