import Swing from 'react-swing';

    const voteTypeOf = dir => {
      const voteType= {};
      voteType[Swing.DIRECTION.DOWN]= false;
      voteType[Swing.DIRECTION.UP]= true;
      voteType[Swing.DIRECTION.LEFT]= null;
      voteType[Swing.DIRECTION.RIGHT]= null;

      return voteType[dir];
    }

  export default voteTypeOf;
