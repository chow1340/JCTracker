import React, {Component} from 'react'

class LogOut extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.refresh = this.refresh.bind(this)
    }
    refresh(){
        new Promise(function(resolve, reject){
            resolve(sessionStorage.clear())
        })
        .then(() => window.location.refresh())
        .then(setTimeout(window.location.href = '/admin/home'), 100)
    }
    render(){
        this.refresh()
        return(
            <div class = 'content'> You have been logged out </div>
        )
    }
}
export default LogOut