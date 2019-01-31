import ITreeNode from "../Tree/ITreeNode";

export default interface ITraversal {
  traverse(node: ITreeNode, depth: number): void;
  setCondition(condition: (data: { [key: string]: any }, depth: number) => boolean): void;
  setAction(action: (data: { [key: string]: any }, depth: number) => void): void;
}