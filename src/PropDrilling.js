import { useState } from 'react';

function PropDrilling() {
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('');

  return (
    <div>
      <Box color={color} setColor={setColor} />
      <Box2>
        <Input color={color2} setColor={setColor2} />
        <Square color={color2} />
      </Box2>
    </div>
  );
}

//props = {
// color: color,
// setColor: setColor
// }
function Box({ color, setColor } /* parameter destructuring */) {
  // option 1 store individual variables
  // const color = props.color
  // const setColor = props.setColor

  // option 2 inline props destructuring
  // const {color, setColor} = props

  return (
    <div>
      <Input color={color} setColor={setColor} />
      <Square color={color} />
    </div>
  );
}
//
function Box2(props) {
  return <div>{props.children}</div>;
}

function Input({ color, setColor }) {
  return (
    <input value={color} onChange={(e) => setColor(e.currentTarget.value)} />
  );
}

function Square({ color }) {
  return (
    <div style={{ backgroundColor: color, width: '500px', height: '500px' }}>
      This is my Box
    </div>
  );
}

export default PropDrilling;
