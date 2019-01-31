import ITreeNode from "../Tree/ITreeNode";

export default interface ITraversal {
  traverse(rootNode: ITreeNode, height: number): void;
  setCondition(condition: (data: { [key: string]: any }, height: number) => boolean): void;
  setAction(action: (data: { [key: string]: any }, height: number) => void): void;
}