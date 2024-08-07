import { useState } from 'react';
import Textarea from './Textarea';
import Stats from './Stats';

function Container() {
  const [text, setText] = useState('');
  const numberOfWords = text.split(/\s/).filter((word) => word !== '').length;
  const numberOfCharacters = text.length;
  const instaCharactersLeft = 280 - text.length;
  const facebookCharactersLeft = 2200 - text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
        instaCharactersLeft={instaCharactersLeft}
        facebookCharactersLeft={facebookCharactersLeft}
      />
    </main>
  );
}

export default Container;
