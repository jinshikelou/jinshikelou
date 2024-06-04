一、在RxJS中，switchMap、mergeMap和map是三个不同的操作符，它们分别适用于不同的场景。

  1. switchMap: switchMap操作符将源Observable发出的每个值都映射成一个新的Observable，并且只发出最新的Observable的值。如果在源Observable发出新值之前，前一个Observable还未完成，那么前一个Observable会被取消订阅。适用于需要取消前一个Observable的场景，比如处理用户输入的搜索建议。
  
  2. mergeMap: mergeMap操作符将源Observable发出的每个值都映射成一个新的Observable，并且同时订阅所有的新Observable，将它们的值合并成一个输出Observable。适用于需要同时处理多个并发请求的场景，比如同时发送多个HTTP请求。
  
  3. map: map操作符将源Observable发出的每个值都通过一个函数进行映射，并将映射后的值作为输出Observable的值。适用于单纯的值转换场景，不涉及到Observable的创建和合并。
  
  总结：
  - switchMap适用于需要取消前一个Observable的场景，只关心最新的Observable的值。
  - mergeMap适用于需要同时处理多个并发请求的场景，将多个Observable的值合并成一个输出Observable。
  - map适用于单纯的值转换场景，不涉及到Observable的创建和合并。

    
二、of() vs. from()
  rxjs中的of()和from()都是用于创建Observable的操作符.
  1. of()操作符可以接受任意数量的参数，并将这些参数依次发出。例如：of(1, 2, 3).subscribe(value => console.log(value)); // 1 2 3
  2. from()操作符可以将一个数组、一个类数组对象、一个Promise、一个迭代器对象或者一个类似Observable的对象转换为Observable。例如：
     from([1, 2, 3]).subscribe(value => console.log(value)); // 1 2 3
  3. from()操作符可以将其他类型的数据转换为Observable，而of()操作符则适用于直接发出一系列的值。
     因此，of()适用于需要发出固定的一组值的场景，而from()适用于需要将其他类型的数据转换为Observable的场景。
     
