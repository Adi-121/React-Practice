# React-Practice

<!-- https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige -->

React does a simple work of taking a function which is actually returning a HTML and React renders it.
<!-- but what is use of it -->

by this now we have programming power in HTML 


<!-- We simply make component and it's injected in the root div-->

A thing about component
-> Name of the function must start with a uppercase, though file name can start anyhow but good practice is start it with capital letter


<!-- 5th video -->

React is the one responsible for UI updation thus just changing the variable wont change your UI, for the change to be reflected in UI you need to use "hook", and for variable change we use "useState" hook
useState does not change the state of variable...wo to we were doing without it also....useState reflects the change in variable on UI

<!-- 6th video -->
What is reconciliation?
It is an algorithm that react uses to differentiate one tree with the another to determine which part needs to be changed, it is algo behind what is propularly known as Virtual Dom

1. The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the updated virtual dom and previous dom formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9. In UI it is not necessary for every update to be applied immediately.

<!-- video 10 -->

1. useCallback is a hook that is used to run a function between the re-renders, it takes a fn that is executed if any of the dependency is changed

2. window object is not present when things are done on server side
