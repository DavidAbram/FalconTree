import TreeNode from '../src/Tree/TreeNode';
import TraversalFactory from '../src/Traversal/TraversalFactory';
import TraversalType from '../src/Traversal/TraversalType';
import PreOrderDepthFirstTraversal from '../src/Traversal/PreOrderDepthFirstTraversal';

describe('Traversal', () => {
  test('advanced traversal', (done) => {
    const preOrderDepthFirst = TraversalFactory.createTraversal(TraversalType.PreOrderDepthFirst) as PreOrderDepthFirstTraversal;
    const rootNode = new TreeNode(
      { ['testData']: 1},
      null,
    );
    const node1 = new TreeNode(
      { ['testData']: 1},
      rootNode,
    );
    const node2 = new TreeNode(
      { ['testData']: 1},
      rootNode,
    );
    const node3 = new TreeNode(
      { ['testData']: 3},
      rootNode,
    );
    const node11 = new TreeNode(
      { ['testData']: 1},
      node1,
    );
    const node12 = new TreeNode(
      { ['testData']: 1},
      node1,
    );
    const node13 = new TreeNode(
      { ['testData']: 3},
      node1,
    );
    const node21= new TreeNode(
      { ['testData']: 3},
      node2,
    );
    const node22 = new TreeNode(
      { ['testData']: 1},
      node2,
    );
    const node31 = new TreeNode(
      { ['testData']: 1},
      node3,
    );

    rootNode.children = [node1, node2, node3];
    node1.children = [node11, node12, node13];
    node2.children = [node21, node22];
    node3.children = [node31];

    preOrderDepthFirst.setCondition((data, _) => (
      data.testData === 3
    ));

    preOrderDepthFirst.setAction((data, height) => {
      console.log(height, data);
    });

    expect(() => {
      preOrderDepthFirst.traverse(rootNode);
    }).not.toThrow();
    done();
  });
});
