import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
//--------- MAHIMA
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";







// ============  FOR FANTOM BUGBUZZER ============
import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
const firebaseConfig = {
    databaseURL: "https://fantom-bugbuzzer-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);















export const BookContext = createContext();
export const BookContextProvider = (props) => {

    const [Image, setImage] = useState();


    const auth =
    "Basic " +
    Buffer.from(
        process.env.REACT_APP_INFURA_PROJECT_KEY + ":" + process.env.REACT_APP_INFURA_APP_SECRET_KEY
    ).toString("base64");

const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});





// ========FANTOM   =====
    const cids = []
    const getData = ref(getDatabase());
    const fetchData = () => {
        var array = [];
        get(child(getData, "cids/")).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(function (childSnap) {
                    const cid = childSnap.val().cid;
                    // console.log(cid);
                    array.push(cid);
                })
            }
        });
        cids.push(array)
    };
    fetchData();
    console.log(cids, 'cidssss');











    // const [Image, setImage] = useState();
    const [pdf, setPdf] = useState('');
    const [accounts, setAccount] = useState('');
    const [address, setAddress] = useState('');


    // const [loading, setLoading] = useState(false);


    const { Moralis, user, account, authenticate, isAuthenticated, isInitialized, logout } = useMoralis();
    const { data, fetch } = useMoralisQuery("StoryPadBuildit");
    const storyD = data;
    // console.log(data, ' ====');
    const [NewData, setData] = useState([]);
    // const [storyDetails, setStoryDetails] = useState({})
    const API_Token = process.env.REACT_APP_WEB3STORAGE_TOKEN;
    // const client = new Web3Storage({ token: API_Token })
    const Storypad = Moralis.Object.extend("StoryPadBuildit");
    const StoryPad = new Storypad();






    useEffect(() => {
        if (isAuthenticated) {
            setAccount(account);
        }
        // checkIfWalletIsConnected();
    }, [isAuthenticated, account]);




    function addData(Item) {
        const blob = new Blob(
            [
                JSON.stringify(Item),
            ],
            { type: "application/json" }
        );
        const files = [
            new File([blob], "story.json"),
        ];
        console.log('files==>', files);
        return files;

    }



    async function storeFiles(Item) {
        if (Item.discount !== undefined) {
            // console.log('ENTER IN DICOUNT');
            await StoryPad.set('nftholder_access', 2);
        } else {
            await StoryPad.set('nftholder_access', 1);
        }
        if (Item.chargeble !== undefined) {
            // console.log('ENTER IN CHARGABLE');
            await StoryPad.set('general_access', 2);
        } else {
            await StoryPad.set('general_access', 1);
        }
        StoryPad.set('Currunt_user', user);
        StoryPad.set('holder_price', Item.discount);
        StoryPad.set('Nonholder_price', Item.chargeble);
        StoryPad.set('token', Item.token);
        let files = addData(Item);
        const cid = await client.put(files);
        StoryPad.set("CID", cid);
        StoryPad.save();
        console.log("files with cid ==>", ` https://dweb.link/ipfs/${cid}/story.json`);
        return cid;
    }


    const notify = () => toast("You are logged in!");


    const disconnect = async () => {
        if (isAuthenticated) {
            await logout();
            window.localStorage.removeItem("accessToken");
            window.localStorage.removeItem("refreshToken");
            window.localStorage.removeItem("profileId");
        }
    }

    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({
                provider: "web3Auth",
                chainId: Moralis.Chains.POLYGON_MUMBAI,
                clientId: "BHQlt53J8Q_CprFI9tgx5aRB7pE9Ei0ccchzXQBNIYAI4RwdZ84Y2sVGoezEZ3S_kwwt3MuZ2eZIGoTYET--4I0",

            })
                .then(function (user) {
                    let address = user.get("ethAddress")
                    // console.log(address, 'address in context');
                    localStorage.setItem("currentUserAddress", address)
                })

                .catch(function (error) {
                });
        }
    }

    // ------------MAHIMA'CODE
    async function storeFile(file) {
        const ipfsResult = await client.add(file);
        const imageURI = `https://superfun.infura-ipfs.io/ipfs/${ipfsResult.path}`;
        return imageURI;
    }



    return (
        <BookContext.Provider
            value={{
                addData,
                storeFiles,
                // getStoryDetails,
                storyD,
                // storyDetails,
                login,
                storeFile,
                Image,
                fetch,
                disconnect, 
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
}