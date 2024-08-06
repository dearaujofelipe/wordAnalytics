import { useState } from 'react';
import Warning from './Warning';

function Textarea() {
  const [text, setText] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      setWarningText('no script tag allowed');
      setShowWarning(true);
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@', '')) {
      setWarningText('no @ symbol allowed');
      setShowWarning(true);
      newText = newText.replace('@', '');
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
      {showWarning ? <Warning warningText={warningText} /> : null}
    </div>
  );
}

export default Textarea;
