// @ts-ignore
// Todo: очередь задач RequestAnimationFrame выполняется пока не опустеет,
//  однако новые задачи будут выполнены только в следующем витке
requestAnimationFrame(() => {
    console.log('one');
});

requestAnimationFrame(() => {
    console.log('two');
});

requestAnimationFrame(() => {
    console.log('three');
});

//one two three;
