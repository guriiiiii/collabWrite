import TextEditor from "./Editor/TextEditor";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from "react-router-dom";
import { v4 as uuidV4 } from 'uuid';
import DocsbarMenu from "./Docsbar/DocsbarMenu";
import Home from "./Home/Home";
import Editor from "./Editor/Editor";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element ={<Home/>}/>
        <Route path ="/documents/:id" element ={<Editor/>}/>
      </Routes>
    </Router>
      /* <Router>
      <Switch>
        <Route path='/' exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path='/documents/:id'>
          <DocsbarMenu/>
          <TextEditor />
        </Route>
      </Switch>
    </Router>  */
  );
}

export default App;
