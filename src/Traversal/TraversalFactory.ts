import TraversalType from './TraversalType';
import ITraversal from './ITraversal';
import PreOrderDepthFirstTraversal from './PreOrderDepthFirstTraversal';

export default class TraversalFactory {
  static createTraversal(type: TraversalType) : ITraversal {
    switch(type) {
      case (TraversalType.PreOrderDepthFirst):
        return new PreOrderDepthFirstTraversal();
      default:
        throw Error("Not implemented");
    }
  }
}