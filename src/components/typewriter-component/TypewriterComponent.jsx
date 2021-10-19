import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typer.css';

function TypewriterComponent(props) {
  const Tstyle = {
    fontSize: props.size,
    textAlign: props.position,
    background: props.background,
    color: props.color,
  };
  return (
    <div className="Typer" style={Tstyle}>
      <Typewriter
        onInit={typewriter => {
          typewriter.typeString(props.text).start();
        }}
      />
    </div>
  );
}

export default TypewriterComponent;
