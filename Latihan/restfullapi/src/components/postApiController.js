import React from 'react';

class PostApiController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Upin & Upin',
                body: 'Upin & Ipin is maskot from Malaysia',
                userId: 2
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({ user: json });
            });
    }

    render (){
        return(
            <div>
               <p><b>New Resource created in the server as shown below</b></p> 
               <p>Id: {this.state.user.id}</p>
               <p>Title: {this.state.user.title}</p>
               <p>Body: {this.state.user.body}</p>
               <p>Userid:{this.state.user.userId}</p>
            </div>
        )
    }
}

export default PostApiController;
