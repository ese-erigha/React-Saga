import axios from 'axios';
import exceptionHandler from '../../utils/exception'

export const getUsers = async (url)=>{

    try{

        const response = await axios.get(url);
        return response.data;

    }catch(err){
        exceptionHandler(err);
    }
};


export const getPosts = async (url,params)=>{

    try{

        const response = await axios.get(url,{
            params: params
        });
        return response.data;

    }catch(err){
        exceptionHandler(err);
    }
};

