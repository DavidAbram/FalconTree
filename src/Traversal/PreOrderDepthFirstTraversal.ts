import ITraversal from './ITraversal';
import ITreeNode from '../Tree/ITreeNode';

export default class PreOrderDepthFirstTraversal implements ITraversal {

  private condition: ((data: { [key: string]: any }, height: number) => boolean) | null;
  private action: ((data: { [key: string]: any }, height: number) => void) | null;

  constructor() {
    this.condition = null;
    this.action = null;
  }

  traverse(rootNode: ITreeNode, height: number = 0): void {
    let shouldBreak: boolean = false;
    if(this.condition !== null && this.action !== null && this.condition(rootNode.data, height)){
      this.action(rootNode.data, height);
      shouldBreak = true;
    }
    if(!shouldBreak && rootNode.children !== null) {
      rootNode.children.map(node => {
        this.traverse(node, height++);
      })
    }
  };
  setCondition(condition: (data: { [key: string]: any }, height: number) => boolean): void{
    this.condition = condition;
  };
  setAction(action: (data: { [key: string]: any }, height: number) => void): void{
    this.action = action;
  };
}