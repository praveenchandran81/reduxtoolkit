import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';


const initialState={
    posts:[
        {
            id:1,
            name:'post1',
            description:'description1',
            date:sub(new Date(),{minutes:10}).toISOString(),
            reactions:{
                thumbsup:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
        },
        {
            id:2,
            name:'post2',
            description:'description2',
            date:sub(new Date(),{minutes:5}).toISOString(),
            reactions:{
                thumbsup:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }

        },
        {
            id:3,
            name:'post3',
            description:'description3',
            date:sub(new Date(),{minutes:1}).toISOString(),
            reactions:{
                thumbsup:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
        },
    ]
};

export const postSlice=createSlice({

    name:'posts',
    initialState,
    reducers:{
         postAdded:{
            reducer(state,action){
                state.posts.push(action.payload);
            },
            prepare(name,description,userId){
                return{
                    payload:{
                        id:nanoid(),
                        name,
                        description,
                        date:new Date().toISOString(),
                        userId,
                        reactions:{
                            thumbsup:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state,action){
            const {postId,reaction}=action.payload;
            const existingPost=state.posts.find(post=>post.id===postId);
            if(existingPost){
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const postsAll=state=>state.posts;

export const {postAdded,reactionAdded}=postSlice.actions;

export default postSlice.reducer;
