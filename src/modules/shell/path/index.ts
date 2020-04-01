import Cat from './Cat';
import Echo from './Echo';
import Help from './Help';
import List from './List';
import Shell from './Shell';

const Commands: Command[] = [
  new Cat(),
  new Echo(),
  new Help(),
  new List(),
  new Shell(),
];

export default Commands;
