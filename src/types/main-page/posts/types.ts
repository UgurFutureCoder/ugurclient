import {isUndefined} from "util";

export namespace Types {
    export interface IHashtags {
        id: number;
        hashtag: string;
    }
    export interface IComments {
        id: number,
        text: string;
        author: {
            name: string;
            photo: string;
        }
        date: string;
        time: string;
    }
    export interface IReactions {
        id: number;
        img: string;
    }
    export interface IPosts {
        id: number;
        img: string;
        title: string;
        text: string;
        hashtags: IHashtags[];
        author: {
            uId: string;
            name: string;
            photo: string;
        };
        comments: IComments[];
        date: string;
        time: string;
        reactions: IReactions[];
    }
    export interface IAd {
        id: number;
        name: string;
    }
}

