import TreeNode from '../src/Tree/TreeNode';
import TraversalFactory from '../src/Traversal/TraversalFactory';
import TraversalType from '../src/Traversal/TraversalType';
import PreOrderDepthFirstTraversal from '../src/Traversal/PreOrderDepthFirstTraversal';

describe('PreOrderDepthFirstTraversal', () => {
  test('initialize PreOrderDepthFirstTraversal Correctly', () => {
    const preOrderDepthFirst = TraversalFactory.createTraversal(TraversalType.PreOrderDepthFirst);
    expect(preOrderDepthFirst).toBeInstanceOf(PreOrderDepthFirstTraversal)
  });
  test('PreOrderDepthFirstTraversal simple traverse does not throw', () => {
    const preOrderDepthFirst = TraversalFactory.createTraversal(TraversalType.PreOrderDepthFirst) as PreOrderDepthFirstTraversal;
    const rootNode = new TreeNode({ ['testData']: 3});
    expect(() => {
      preOrderDepthFirst.traverse(rootNode);
    }).not.toThrow();
  });
  test('PreOrderDepthFirstTraversal setAction does not throw', () => {
    const preOrderDepthFirst = TraversalFactory.createTraversal(TraversalType.PreOrderDepthFirst) as PreOrderDepthFirstTraversal;
    expect(() => {
      preOrderDepthFirst.setAction((data, height) => {
        console.log(data, height);
      });
    }).not.toThrow();
  });
  test('PreOrderDepthFirstTraversal simple traverse', () => {
    const preOrderDepthFirst = TraversalFactory.createTraversal(TraversalType.PreOrderDepthFirst) as PreOrderDepthFirstTraversal;
    expect(() => {
      preOrderDepthFirst.setCondition((data, _) => (
        data.testData === 3
      ));
    }).not.toThrow();
  });
})