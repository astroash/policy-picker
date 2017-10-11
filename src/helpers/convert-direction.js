import Swing from 'react-swing';

const voteTypeOf = dir => {
  const voteType = {};
  voteType[Swing.DIRECTION.DOWN] = '-1';
  voteType[Swing.DIRECTION.UP] = '+1';
  voteType[Swing.DIRECTION.LEFT] = null;
  voteType[Swing.DIRECTION.RIGHT] = null;

  return voteType[dir];
};

export default voteTypeOf;
