/** @format */

import React, {useState} from 'react';
import {GET_RIDE_DETAIL} from "./mutations.gql"
import { SIForm } from '../SIForm';
import { useQuery } from '@apollo/client';
import styled from "../../typed-components";
import LoadingForm from "../../Components/LoadingForm";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './GetRIde.css'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const GetRideDetail: React.SFC = ({match}: any) => {
  const [RideId] = useState({
    id : Number(match.params.RideId)
  })

  const {loading, data} = useQuery(GET_RIDE_DETAIL,
    {
      variables: {id: RideId.id},
      onCompleted: () => {return console.log(data.GetRideDetail.ride.vehicle.surveyForm)},
    }
  );

  const aboutCols = [
    "Ride ID",
    "Vehicle",
    "Final Fee",
    "Accepted",
    "Finished",
    "From",
    "To",
  ];

  const aboutColsAnswer = [
    `${data?.GetRideDetail.ride.id}`,
    `${data?.GetRideDetail.ride.vehicle?.carNumber}, ${data?.GetRideDetail.ride.vehicle?.carType}` ,
    `${data?.GetRideDetail.ride.finalFee}원`,
    `${data?.GetRideDetail.ride.acceptedDate}`,
    `${data?.GetRideDetail.ride.finishedDate}`,
    `${data?.GetRideDetail.ride.from?.address}`,
    `${data?.GetRideDetail.ride.to?.address}`
  ];

  const detailCols = [
    "Passenger",
    "PhoneNumb",
    "SurveyComple"
  ];

  const detailColsAnswer = [
    `${data?.GetRideDetail.ride.passenger?.fullName} (${data?.GetRideDetail.ride.passenger?.id})`,
    `${data?.GetRideDetail.ride.passenger?.phoneNumber}`,
    `${data?.GetRideDetail.ride.surveyCompleted}`,
  ];

  return (
    <SIForm>
      <Container>
      {loading? (<LoadingForm />) : (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={data?.GetRideDetail.ride.passenger?.profilePhotoUrl} alt="drivier_profile"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                {data?.GetRideDetail.ride.driver.fullName} ({data?.GetRideDetail.ride.driver.id})
                            </h5>
                            <h6>
                                {data?.GetRideDetail.ride.driver.phoneNumber}
                            </h6>
                            <p className="proile-rating">평점 : <span>10점</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Detail</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Driver Profile</a><br/>
                                <a href="">SurveyForm</a><br/>
                                <a href="">Vehicle</a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                        {aboutCols.map((col, index) => (
                                            <div>
                                            <p style={{color:'black'}}>{col}</p>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="col-md-6">
                                        {aboutColsAnswer.map((col, index) => (
                                            <div>
                                            <p>{col}</p>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                        {detailCols.map((col, index) => (
                                            <div>
                                            <p style={{color:'black'}}>{col}</p>
                                            </div>
                                        ))}
                                        </div>
                                        <div className="col-md-6">
                                        {detailColsAnswer.map((col, index) => (
                                            <div>
                                            <p>{col}</p>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Sub</label><br/>
                                            <p>**</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>           
            </div>
        )}
      </Container>
    </SIForm>
  );
}
