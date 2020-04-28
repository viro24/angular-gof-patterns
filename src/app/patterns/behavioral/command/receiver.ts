export class Receiver {
  public action(operation: string): void {
    switch (operation) {
      case 'save':
        console.log('Execute Option Save');
        break;
      case 'load':
        console.log('Execute Option Load');
        break;
      case 'run':
        console.log('Execute Option Run');
        break;
      default:
        console.log('Option invalid');
        break;
    }
  }
}
