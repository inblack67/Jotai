import { useAtom } from "jotai";
import { filteredPostAtom, postsAtom, queriedPostAtom, todoAtom } from "./atoms/index";

const App = () => {

  const [ todo, setTodo ] = useAtom(todoAtom);
  const [ posts ] = useAtom(postsAtom);
  const [ queriedPost, setQueriedPost ] = useAtom(queriedPostAtom);
  const [ filteredPost ] = useAtom(filteredPostAtom);

  return (
    <div>
      <h1>
        { todo }
      </h1>
      <input type="text" value={ todo } onChange={ e => setTodo(e.target.value) } />
      <hr />
      <input type="text" value={ queriedPost } onChange={ e => setQueriedPost(e.target.value) } />
      <pre>
        { filteredPost ? JSON.stringify(filteredPost, null, 3) : JSON.stringify(posts, null, 3) }
      </pre>
    </div>
  );
};

export default App;
