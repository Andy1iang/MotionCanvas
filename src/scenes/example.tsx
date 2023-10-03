import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle} from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';


export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();

  view.add(
    <Circle
      ref={myCircle}
      // try changing these properties:
      x={-300}
      y={0}
      width={140}
      height={140}
      fill="#e13238"
    />,
  );

  yield* all(
    myCircle().position.x(0, 1).to(300, 1).to(0,1).to(-300,1),
    myCircle().position.y(300,1).to(0,1).to(-300,1).to(0,1),
    myCircle().fill('#5232e1', 2).to('#e13238', 2),
  );
});
