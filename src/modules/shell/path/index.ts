import Cat from './Cat';
import Echo from './Echo';
import Help from './Help';
import List from './List';
import Markdown from './Markdown';
import Print from './Print';
import Shell from './Shell';

const path: Command[] = [
  new Cat(),
  new Echo(),
  new Help(),
  new List(),
  new Markdown(),
  new Print(),
  new Shell(),
];

export default path;
