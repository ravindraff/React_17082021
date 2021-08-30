import React,{Component} from 'react';

class Lifecycle extends Component{
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {name: 'Life Cycle'};
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render() {
        console.log("Render");
        
        return (
           
            <section className="container">
                <div>Hello! {this.state.name}</div>
                <button className="btn btn-primary" onClick={()=>this.setState{name:"Life"})}
            </section>
        
        )
    }
}
export default Lifecycle;