import React, { useContext, useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { ethers } from "ethers";

import { BookContext } from '../../../Context/BookContext'
import ModalContribute from "../../Contribute/Contribute";

function Horror() {


  return (
    <>
      <div style={{ marginTop: "100px" }} className="container footer-top">
        <div className="text-center">
        </div>
        <div className="container">
          <div className="card-columns">


            <div className="card carding">
              <a href="#">
                <img className="card-img-top" src="https://learn.g2.com/hubfs/G2CM_FI140-Learn_Article_Images_%5BSmart_contracts%5D_Infographic_V1a.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="story-card-title">
                    {/* {e.name} */}
                    An Introduction to Smart Contracts
                  </h5>
                  <p className="card-text">
                    {/* {e.description} */}
                    “Smart contracts” is a term used to describe computer code that automatically executes all or parts of an agreement and is stored on a blockchain-based platform. As discussed further below..
                  </p>

                  <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>

                  <Link
                                to="/smartcontract-detail/01">
                  <Button style={{ backgroundColor: '#6EBF8B', color: '#151D3B' }}
                    disabled={false} variant="outline-info btn-outline buy-story-btn">Read Full Story</Button>
                  </Link>
                </div>
              </a>
            </div>

            <div className="card carding">
              <a href="#">
                <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="story-card-title">
                    {/* {e.name} */}
                    Smart Contract And Its Upcoming Advancements
                  </h5>
                  <p className="card-text">
                    {/* {e.description} */}
                    So far, smart contracts have grown in popularity over the past few years. It gives rise to an expectation that this technology will continue to grow in use and application over the next decade. 
                  </p>

                  <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>

                  <Link
                                to="/smartcontract-detail/02">
                  <Button style={{ backgroundColor: '#6EBF8B', color: '#151D3B' }}
                    disabled={false} variant="outline-info btn-outline buy-story-btn">Read Full Story</Button>
                  </Link>
                </div>
              </a>
            </div>



            <div className="card carding">
              <a href="#">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZ1Y9RGpADNv8tMvzUCu7VAKuBf5C2N1d3g&usqp=CAU" />
                <div className="card-body">
                  <h5 className="story-card-title">
                    {/* {e.name} */}
                    Solana Vs. Polygon Vs. Ethereum – The Ultimate Comparison
                  </h5>
                  <p className="card-text">
                    {/* {e.description} */}
                    These applications are based on a particular Blockchain platform, out of which the most prominent are Ethereum, Solana, and Polygon. This article will not only provide detailed information about
                  </p>

                  <p class="card-text"><small className="text-muted">Last updated {new Date().toLocaleString()}</small></p>

                  <Link
                                to="/smartcontract-detail/03">
                  <Button style={{ backgroundColor: '#6EBF8B', color: '#151D3B' }}
                    disabled={false} variant="outline-info btn-outline buy-story-btn">Read Full Story</Button>
                  </Link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default Horror;