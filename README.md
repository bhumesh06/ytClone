 # components

 -head
 -body
  -sidebar
    -menuitems
  -maincontainer
    -buttonlist
    -videocontainer
        -videocard


# debouncing: when you hit api on every key stroke in search bar

    typing slow takes : 200ms
    typing fast takes : 50ms  


    performance :
    typing slow = iphone pro max : 14 api calls  * 1000 studends = 14000 api calls 
    typing fast = iphone pro max: 3 api calls * 1000 = 3000 api calls


# debouncing with 200 ms
- if the difference btw 2 key stroke is < 200ms - decline the api call
- if difference between 2 key stroke is >200ms - call api

# youtube search suggestion api (stack over flow)