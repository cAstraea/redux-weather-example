import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return Math.round(data.reduce((p, c) => p + c) / data.length);
}
export default (props) => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.colour} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>Averages: {average(props.data)} {props.units} </div>
  </div>
  );
