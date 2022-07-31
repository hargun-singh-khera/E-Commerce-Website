import React,{Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom'

const docUrl="https://fswdsummernodeapi.herokuapp.com/doctor"
class Doctor extends Component {
    constructor(props){
        super(props);
        this.state={
            doctor:''
        }
    }
    renderDoc=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <div className="card">
                    <div className="card-image">
                        <img src={item.docimage} alt=""/>
                    </div>
                    <div className="card-body">
                        <center>
                            <div className="card-title">
                                <h2>{item.doctor_name}</h2>
                                <h3>{item.Specialty}</h3>
                                <h4>{item.Degree}</h4>
                            </div>
                            <Link to={`/booking/${item._id}`}>
                                <button className="btn btn-info">Book Appointment</button>
                            </Link>
                        </center>
                    </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div className="doc-container">
                {this.renderDoc(this.state.doctor)}
                {/* <Doc docData={this.state.doctor}/> */}
            </div>
        )
    }
    componentDidMount(){
        // const docId=this.props.match.params.id;
        // const response=await axios.get(`${docUrl}/${docId}`)
        // this.setState({doctor:response.data[0]})
        fetch(docUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({doctor:data})
        })
    }
}
export default Doctor;