import List from './List';
import Help from './Help';
import Echo from './Echo';
import Cat from './Cat';

const Commands: Command[] = [
  new List(),
  new Help(),
  new Echo(),
  new Cat(),
];

export default Commands;
