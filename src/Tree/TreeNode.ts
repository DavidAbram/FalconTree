import ITreeNode from './ITreeNode';

export default class TreeNode implements ITreeNode {

  public parent: ITreeNode | null;
  public children: Array<ITreeNode> | null;
  public data: { [key: string]: any };

  constructor(
    data: {
      [key: string]: any 
    }, 
    parent: ITreeNode | null = null,
    children: Array<ITreeNode> | null = null
  ) {
    this.parent = parent;
    this.children = children;
    this.data = data;
  }

}