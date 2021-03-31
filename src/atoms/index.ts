import { atom } from "jotai";
import { IPost } from "../interfaces";

export const todoAtom = atom<string>('default');
export const queriedPostAtom = atom<string>('');
export const postsAtom = atom<IPost[]>(async () => await (await fetch('https://jsonplaceholder.typicode.com/posts')).json());
export const filteredPostAtom = atom<IPost[]>(get => get(postsAtom).filter(post => post.title.includes(get(queriedPostAtom))));