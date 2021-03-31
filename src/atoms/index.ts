import { atom } from "jotai";

export const todoAtom = atom<string>('default');
export const queriedPostAtom = atom<string>('');
export const postsAtom = atom(async () => await (await fetch('https://jsonplaceholder.typicode.com/posts')).json());
// export const filteredPostAtom = atom(get => get(postsAtom));
export const filteredPostAtom = atom(get => get(postsAtom).filter(post => post.title.includes(get(queriedPostAtom))));