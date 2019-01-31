import ITraversal from './ITraversal';
import ITreeNode from '../Tree/ITreeNode';

export default class PreOrderDepthFirstTraversal implements ITraversal {

  private condition: ((data: { [key: string]: any }, depth: number) => boolean) | null;
  private action: ((data: { [key: string]: any }, depth: number) => void) | null;

  constructor() {
    this.condition = null;
    this.action = null;
  }

  traverse(node: ITreeNode, depth: number = 0): void {
    if(this.condition !== null && this.action !== null && this.condition(node.data, depth)){
      this.action(node.data, depth);
      return;
    }
    if(node.children !== null) {
      node.children.map(childNode => {
        this.traverse(childNode, depth++);
      })
    }
  };
  setCondition(condition: (data: { [key: string]: any }, depth: number) => boolean): void{
    this.condition = condition;
  };
  setAction(action: (data: { [key: string]: any }, depth: number) => void): void{
    this.action = action;
  };
}