# Quiz about State in React

1. How would you desciribe the concept of "state"?

State refers to values that are managed by the component, similar to variables delacerd inside a function. 

2. When would you want to use props insead of state?

Anytime you want to pass data into a component so that component can determine what will get displayed on the screen. 

3. When would you want to use state insteaf of props?

Anytime you have changing values that should be saved/displayed, you'll likleby using state or anytime want a component to maintain some values from withi the component

4. What does "immutable" mean? Are props immutable? Is state immutable?

Immutable means unchanging. Props are immutable. State is mutable.

5. You have 2 options for what you can pass in to a state setter function. What are they ?

    * new value of state
    * callback function - whatever the callback function returns === new value of state

6. When would you want to pass the first option to the state setter function ?

Whenever you don't need the previuos value of state to determine what the new value of state should be.

7. When would you want to pass the second option to the state setter function ?

Whenever you do need the previuos value to determine the new value