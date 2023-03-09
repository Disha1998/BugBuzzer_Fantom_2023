import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMoralis, useMoralisQuery } from "react-moralis";

function NftReadership() {
  const { Moralis } = useMoralis();
  const query = new Moralis.Query("nftMetadata");
  const { data } = useMoralisQuery("nftMetadata");

  console.log(data, 'data in NFT REDERSHIP');

  return (

    <div style={{ marginTop: "120px", listStyle: "none" }} className="container footer-top">
      <h1 className="form-style-2-heading">Explore collections</h1>


      <div className="row">

        <div className="col-md-3 col-sm-6">
          <li
          >
            <Link to="/readership-nft-detail">
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./alex.png"
              ></img>
              <h1 style={{marginTop:"12px"}} className="card-title-readership "> Alex B Lipton's collection </h1>
            </div>
            </Link>
          </li>
        </div>


       

        <div className="col-md-3 col-sm-6">
          <li
          >
              <Link to="/readership-nft-detail">
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./nora.png"
              ></img>
              <h1 style={{marginTop:"12px"}} className="card-title-readership "> Madelyn nora's collection </h1>
            </div>
            </Link>
          </li>
        </div>

         <div className="col-md-3 col-sm-6">
          <li
          >
            <Link to="/readership-nft-detail">
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./lili.png"
              ></img>
              <h1 style={{marginTop:"12px"}} className="card-title-readership "> Lilian Ogoti's collection </h1>
            </div>
            </Link>
          </li>
        </div>

        <div className="col-md-3 col-sm-6">
          <li
          >
             <Link to="/readership-nft-detail">
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./max.png"
              ></img>
              <h1 style={{marginTop:"12px"}} className="card-title-readership "> Max verstapen's collection </h1>
            </div>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
export default NftReadership;

