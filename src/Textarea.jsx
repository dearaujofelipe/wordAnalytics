import { useState } from 'react';
import Warning from './Warning';

function Textarea() {
  const [text, setText] = useState('');
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      setWarningText('no script tag allowed');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      setWarningText('no @ symbol allowed');
      newText = newText.replace('@', '');
    } else {
      setWarningText('');
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="enter text..."
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}

export default Textarea;
