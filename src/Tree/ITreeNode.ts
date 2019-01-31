export default interface ITreeNode {
  parent: ITreeNode | null;
  children: Array<ITreeNode> | null;
  data: { [key: string]: any };
}