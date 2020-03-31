import Cat from './Cat';
import Echo from './Echo';
import Help from './Help';
import List from './List';

const Commands: Command[] = [
  new Cat(),
  new Echo(),
  new Help(),
  new List(),
];

export default Commands;
