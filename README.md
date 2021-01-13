# Basic API example

This is an API that displays the states and cities from México.

Resources:

- To get the states **/state**

- To get the cities **/city**

All the following actions are available in both resources, the request methods used are indicated at the end of the line.
Actions:

- To get all records **/getAll** _GET_

- To get record by name **/getByName/:name** _GET_

- To create a new record **/create** _POST_

- To update an existing record **/update** _PUT_

- To partial update an existing record **/patch** _PATCH_

- To delete an existing record by name **/delete/:name** _DELETE_

**POST, PUT, PATCH and DELETE** will return a fake success response.

In the case of the **POST** for the state I included an optional **API KEY** that can be added in the authorization headers, this will display that we performed of an _authorized action_ (check the middleware to see how does it works).

**CREATE AN .env FILE WITH THE FOLLOWING FIELDS TO RUN THE CODE CORRECTLY**
**YOU CAN CHANGE THE VALUES AS YOU WISH**

```
PORT=3000
API_KEY=apiKey9000
```
