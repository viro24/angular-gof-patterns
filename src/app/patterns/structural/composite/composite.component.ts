import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/app.component';
import { Composite } from './composite';
import { Leaf } from './leaf';

@Component({
  selector: 'gof-composite',
  template: '',
})
export class CompositeComponent implements OnInit {
  constructor() {
    Logger.debug(
      '%cComposite: Compose objects into tree structures to represent part-whole-depth hierarchies. Lets clients treat individual objects and compositions of objects uniformly',
      'color: SpringGreen;'
    );
    let folder1 = new Composite('Folder-1');

    folder1.addNode(new Leaf('File-1.txt'));
    folder1.addNode(new Leaf('File-2.txt'));
    folder1.addNode(new Leaf('File-3.txt'));

    let folder2 = new Composite('Folder-2');
    folder1.addNode(new Leaf('File-4.txt'));
    folder2.addNode(new Leaf('File-5.txt'));

    folder1.addNode(folder2);
    folder1.addNode(new Leaf('File-6.txt'));

    Logger.debug('Show Folder-1...');
    folder1.show();
    Logger.debug('Show Folder-2...');
    folder2.show();

    Logger.debug('Again Show Folder-1...');
    folder1.removeNode(folder2);
    folder1.show();
  }

  ngOnInit(): void {}
}
