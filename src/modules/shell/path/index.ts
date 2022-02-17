import Cat from './Cat';
import Echo from './Echo';
import Help from './Help';
import List from './List';
import Markdown from './Markdown';
import Print from './Print';
import Shell from './Shell';
import Wedding from './Wedding';

const path: Command[] = [
  new Cat(),
  new Echo(),
  new Help(),
  new List(),
  new Markdown(),
  new Print(),
  new Shell(),
  new Wedding(),
];

export default path;
