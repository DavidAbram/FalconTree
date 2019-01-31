import ITraversal from './ITraversal';
import ITreeNode from '../Tree/ITreeNode';

export default class PreOrderDepthFirstTraversal implements ITraversal {

  private condition: ((data: { [key: string]: any }, height: number) => boolean) | null;
  private action: ((data: { [key: string]: any }, height: number) => void) | null;

  constructor() {
    this.condition = null;
    this.action = null;
  }

  traverse(rootNode: ITreeNode, height: number = 0): void{
    console.log(rootNode, height, this.condition, this.action);
    if(rootNode.children) {
      console.log(rootNode.children);
    }
  };
  setCondition(condition: (data: { [key: string]: any }, height: number) => boolean): void{
    this.condition = condition;
  };
  setAction(action: (data: { [key: string]: any }, height: number) => void): void{
    this.action = action;
  };
}