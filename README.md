## Commands

```bash
npm install -g create-react-app
create-react-app learn_react_photowall
npm start

npm install --save prop-types
npm install react-router-dom
npm install redux
npm install react-redux

```


## Process
Component constructor()
Component render()
Component componentDidMount()   // called after the component is inserted into the DOM
Component render()              // called again since the state was updated

Whenever performing asynchronous requests, always should be done after the initial components are rendered, execute via componentDidMount()
* componentDidMount() gets called after the component is inserted into the DOM
* componentWillMount() gets called before the component is inserted into the DOM
* componentDidUpdate() gets called after a component is re-rendered, i.e. update the state which will trigger the render() method

Whenever Route needs to display multiple components, use the render property.
Whenever Route needs to dislay a single component, use the component property.


## Additional
https://images.pexels.com/photos/3008509/pexels-photo-3008509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940


## Parameters from a Route Element
```json
{
  "index": 0,
  "post": {
    "id": 3,
    "description": "Waterfall",
    "imageLink": "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  "history": {
    "length": 6,
    "action": "POP",
    "location": "{hash: \"\", key: \"4tvewh\", pathname: \"/\", search: \"\"…}",
    "createHref": "ƒ createHref() {}",
    "push": "ƒ push() {}",
    "replace": "ƒ replace() {}",
    "go": "ƒ go() {}",
    "goBack": "ƒ goBack() {}",
    "goForward": "ƒ goForward() {}",
    "block": "ƒ block() {}",
    "listen": "ƒ listen() {}"
  },
  "location": {
    "pathname": "/",
    "search": "",
    "hash": "",
    "key": "4tvewh"
  },
  "match": {
    "path": "/",
    "url": "/",
    "params": "{}",
    "isExact": true
  },
  "posts": [
    "{description: \"Waterfall\", id: 3, imageLink: \"https…}",
    "{description: \"Canyon\", id: 2, imageLink: \"https://…}",
    "{description: \"Galaxy Archway\", id: 1, imageLink: \"…}",
    "{description: \"Aurora Borealis\", id: 0, imageLink: …}"
  ],
  "removePost": "ƒ () {}",
  "addPost": "ƒ () {}"
}
```
