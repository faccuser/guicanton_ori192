import axios from 'axios';

const url = 'api/posts/';

class PostService {
    // Get Post
    static getPosts(){
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve (
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    // Create Post
    static insertPost(text, questionOne, questionTwo, pickedTrue, theme, user, password){
        return axios.post(url, {
            text,
            questionOne,
            questionTwo,
            pickedTrue,
            theme,
            user,
            password
        });
    }


    // Delete Post
    static deletePost(id){
        //return axios.deletePost(`${url}${id}`);
        return axios.delete(url+id,);
    } 
}

export default PostService;
