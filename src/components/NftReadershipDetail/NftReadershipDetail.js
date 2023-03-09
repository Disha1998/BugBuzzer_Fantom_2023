import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMoralis, useMoralisQuery } from "react-moralis";

function NftReadershipDetail() {
  const { Moralis } = useMoralis();
  const query = new Moralis.Query("nftMetadata");
  const { data } = useMoralisQuery("nftMetadata");

  console.log(data, 'data in NFT REDERSHIP');

  return (

    <div style={{ marginTop: "120px", listStyle: "none" }} className="container footer-top">
      <center><h1 style={{ marginBottom: "40px" }} className="form-style-2-heading">Lilian Ogoti's collections</h1></center>


      <div className="row">

        <div className="col-md-3 col-sm-6">
          <li
          >
            {/* <Link to={`/readership-nft-detail/${obj?.attributes.tokenContractAddress}`}> */}
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./l01.png"
              ></img>
              <h1 style={{ marginTop: "12px" }} className="card-title-readership "> Lilian Ogoti 01 </h1>
              <button
                type="button"
                class="btn btn-outline-success"

              >
                Buy for 0.1 FTM
              </button>
            </div>
            {/* </Link> */}
          </li>
        </div>




        <div className="col-md-3 col-sm-6">
          <li
          >
            {/* <Link to={`/readership-nft-detail/${obj?.attributes.tokenContractAddress}`}> */}
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./l02.png"
              ></img>
              <h1 style={{ marginTop: "12px" }} className="card-title-readership "> Lilian Ogoti 02 </h1>
              <button
                type="button"
                class="btn btn-outline-success"

              >
                Buy for 0.1 FTM
              </button>
            </div>
            {/* </Link> */}
          </li>
        </div>

        <div className="col-md-3 col-sm-6">
          <li
          >
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./l03.png"
              ></img>
              <h1 style={{ marginTop: "12px" }} className="card-title-readership "> Lilian Ogoti 03 </h1>
              <button
                type="button"
                class="btn btn-outline-success"

              >
                Buy for 0.1 FTM
              </button>
            </div>
          </li>
        </div>

        <div className="col-md-3 col-sm-6">
          <li
          >
            {/* <Link to={`/readership-nft-detail/${obj?.attributes.tokenContractAddress}`}> */}
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./l04.png"
              ></img>
              <h1 style={{ marginTop: "12px" }} className="card-title-readership ">  Lilian Ogoti 04 </h1>
              <button
                type="button"
                class="btn btn-outline-success"

              >
                Buy for 0.1 FTM
              </button>
            </div>
            {/* </Link> */}
          </li>
        </div>

        <div className="col-md-3 col-sm-6">
          <li
          >
            {/* <Link to={`/readership-nft-detail/${obj?.attributes.tokenContractAddress}`}> */}
            <div className="card-readership card-block">
              <img
                className="Nft-img"
                src="./l05.png"
              ></img>
              <h1 style={{ marginTop: "12px" }} className="card-title-readership ">  Lilian Ogoti 05 </h1>
              <button
                type="button"
                class="btn btn-outline-success"

              >
                Buy for 0.1 FTM
              </button>
            </div>
            {/* </Link> */}
          </li>
        </div>
      </div>
    </div>
  );
}
export default NftReadershipDetail;

