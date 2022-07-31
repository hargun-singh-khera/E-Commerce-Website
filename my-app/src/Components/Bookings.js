import React,{Component} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

const docUrl="https://fswdsummernodeapi.herokuapp.com/doctor"

class Bookings extends Component {
    constructor(props){
        super(props)
        this.state={
            doctor:''
        }
    }
    render(){
        let{doctor}=this.state;
        return(
            <div id="booking">
                <div className="profile">
                    <h1>Profile</h1>
                    <div className="card">
                    <div className="card-image">
                        <img src={doctor.docimage} alt=""/>
                    </div>
                    <div className="card-body">
                        <center>
                            <div className="card-title">
                                <h2>{doctor.doctor_name}</h2>
                                {/* <h2>Dr. Ashish Mittal</h2> */}
                                <h3>{doctor.Specialty}</h3>
                                <h4>{doctor.Degree}</h4>
                            </div>
                            {/* <Link to={`/book`}>
                            <button className="btn btn-info">Book Appointment</button>
                            </Link> */}
                        </center>
                    </div>
                    </div>
                </div>
                {/* {this.state.doctor.map((item)=>{
                    return(
                        <>
                            <h6>{item.doctor_name}</h6>
                        </>
                    )
                })} */}
            
            </div>

        )
    }
    async componentDidMount(){
        console.log("Hii");
        const docid=this.props.match.params.id;
        console.log(docid);
        const response=await axios.get(`${docUrl}/${docid}`);
        this.setState({doctor:response.data[0]});
    }
}
export default Bookings;