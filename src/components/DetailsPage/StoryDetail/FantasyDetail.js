import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoralis, useMoralisQuery } from "react-moralis";
import ModalContribute from "../../Contribute/Contribute";
import { Link } from "react-router-dom";

function FantacyDetail() {
    const { data, fetch } = useMoralisQuery("nftMetadata");
    console.log(data, 'data nft');

    const params = useParams();
    console.log('params', params);
    const { Moralis, isAuthenticated, isInitialized } = useMoralis()




    return (


        <div style={{ marginTop: "22px" }} className="container storyDetailContainer">
            <h2 className="storyDetailTitle"> Downsides of Smart Contracts in Blockchain</h2><br></br>
            <h5 className="text-muted">By :  Lilian Ogoti</h5><br></br>
            <img className="story-detail-img" src="https://www.blockchainx.tech/images/blog/Comparision-of-sol-poly-eth.jpg"></img><br></br>
            <small className="text-muted">Last updated {new Date().toLocaleString()}</small>


            <h6 className="story-content">

                <p>                  One of the elite developments in the security of smart contracts is the use of Artificial Intelligence (AI) and Machine Learning (ML) technology. This duo will help to detect and prevent malicious activity on smart contracts. It will also help to monitor and analyze the data and information contained within them. Overall, AI can identify any breached contracts fast and resolve them in no time.
                </p>

                {/* storyDetails.general_access && storyDetails.nftholder_access == 2 ? ( */}
                <ModalContribute
                // setReadFullStory={setReadFullStory}
                // e={storyDetails}
                >
                </ModalContribute>
                {/* )  */}


<h4>The platforms’ work irrespective of their value
</h4><br></br>
                <p>
                One of the major misconceptions that people have, especially those who are new to this, is that the Blockchain platform’s performance is represented by the value it has while trading. First of all, the information is completely false. Before you pick up a Blockchain platform to create your apps on, be assured that the value does not affect it. Values of the cryptocurrency are just meant for trading alone. Ethereum is one of the most diversified platforms in terms of Blockchain application development. With Ethereum 2.0, it has more features and improvements than any other competitor. 

Ethereum started a market where Blockchain platforms were used for NFTs and smart contracts. It led to further expansion of the market and led to the birth of competitors like Polygon and Solana. While Solana provides major competition to the Ethereum platform, Polygon is just behind it. Solana provides much faster transactions at a reduced cost when compared to Ethereum and Polygon, while Polygon provides faster transaction speeds. However, Ethereum still stands as the most diverse and transparent landscape of decentralized applications.</p><br></br>
                    <h4>Why Should You Care About Solana vs. Polygon vs. Ethereum?</h4><br></br>
<p>
The emergence of Blockchain technology and cryptocurrencies has ushered in a new era of finance, challenging conventional value exchange methods. The importance of Blockchain technology in the market is growing as the market changes. Blockchain technology is the backbone of the cryptocurrency industry, allowing users to perform transactions without a central authority. The technology revolves around smart contracts, which automate the contract execution, enforcement, and verification processes. Solana, Polygon, and Ethereum are all Blockchain technologies that handle smart contracts effectively, making them ideally suited for the development of decentralized apps (dApps).

Ethereum is a pioneer in smart contract technology, since its Ethereum Virtual Machine (EVM) enables programmers to write smart contracts in a number of programming languages. However, because of network congestion, transaction costs have increased, making the platform less accessible for minor transactions. This is something that Solana and Polygon excel at.

Solana and Polygon have been developed with high throughput and quick transaction speeds, making them appropriate for applications requiring inexpensive and quick transactions. Solana can process up to 65,000 transactions per second, whereas Ethereum can only handle approximately 30 transactions per second. Polygon (formerly Matic Network) is a Layer 2 scaling solution that enables rapid, low-cost transactions and allows developers to build decentralized applications on top of it.

All three Blockchain systems use Proof of Stake (PoS) consensus algorithms to ensure security, which requires users to stake tokens in order to participate in the validation process. Proof of Stake (PoS) algorithms consume less energy than Proof of Work (PoW) algorithms, making them a more environmentally friendly choice for Blockchain technologies. On the other hand, Solana’s PoS consensus process is meant to be more secure than Ethereum’s, giving protection from a range of threats.</p><br></br>
<p>The interoperability of Solana and Polygon across chains is an additional advantage. Solana was built with interoperability in mind, allowing it to connect with other Blockchains like Ethereum and Bitcoin. Polygon, on the other hand, is a Layer 2 scaling solution that can be easily integrated with Ethereum, enabling decentralized applications to access the Ethereum network while benefiting from Polygon’s faster and cheaper transactions.

Solana and Polygon offer scaling solutions for Layer 2 that enable developers to create dApps with cheap transaction fees, making them more accessible to the general public. Ethereum 2.0 will be more scalable and energy-efficient than its predecessor. However, the shift to the new PoS consensus algorithm and sharding technology is still happening, and it may take some time to get the full benefits of Ethereum 2.0.</p><br></br>
<p>This is an important point, as Dykstra pointed out that enterprise data queries are typically run in off-chain data warehouses. But, because these data warehouses are centralized, query results often can’t be trusted by a smart contract and, therefore can result in limitations.

Given that Space and Time can cryptographically prove that each data query result is accurate, Dykstra explained that this allows for complex computations to be connected directly to smart contracts without limitations.

“Space and Time’s ability to connect analytic query results directly to smart contracts (with cryptographic guarantees), will serve as a trustless intermediary between enterprise data and the limited storage of the blockchain,” he said. In turn, this process will automate more complex business logic for enterprise use.</p><br></br>
<h4>Consensus mechanisms and block confirmation times
</h4>
<p>It is one mandatory procedure that you will find among all the decentralized Blockchain platforms. It is what helps to reach an agreement on the present state of the network. What Ethereum follows is PoW or Proof of Work mechanism of consensus. The problem with Ethereum is the requirement of high processing power. Due to this, it does not allow the scope for multiple users to participate in this, although it allows miners globally to participate in the consensus. Since processing power requirement is high, it also takes a toll on the performance but ensures better security.

With Polygon, you can get a consensus-based on PoS or Proof of Stake. If a user takes on the Polygon network, they can earn rewards in the form of Matic taken. Since it offers a combination of technologies, the consensus can be achieved faster. Solana on the other hand has a unique approach to consensus mechanism. Since it provides one of the fastest transaction speeds, the mechanism offers efficient operation. It uses an array of computations to know the ideal verification method of the time gap between two events. It can be called a Hybrid form of consensus with the best features of PoW, PoS, and PoH, which is Proof of History. It allows for more flexibility in sorting transactions. It is why Solana can process up to 65,000 transactions in a second.</p>
<h4>Transaction Speed
</h4>
<p>The speed of transactions on a Blockchain platform is one of the major factors that helps the developer decide the platform they need to work on. When it comes to transaction speeds, the slowest among them is Ethereum. Now every participant in Ethereum has a copy of the digital ledger, and the holder takes care of the operation and management of the network. Now Ethereum is one of the most used and popular Blockchain platforms, due to which it has a lot of crowd waiting to verify their transactions. Therefore, the participant will either have to wait for a long time or pay a huge fee for verification. Due to this, only a limited number of transactions are processed every second, which can range between 27-30.

When it comes to Solana and Polygon, they are way ahead in terms of transaction speeds and offer 50,000-65,000 transactions per second which are a lot faster. Solana depends on Tower Byzantine Fault Tolerance of TBFT which prevents real-time communication among nodes and reduces the time taken, increasing efficiency overall. Polygon on the other hand has the fastest speed. Since it provides a hybrid environment, it has the fastest transaction speed of 65,000 transactions a second.</p>
<h4>Architecture</h4>
<p>Another important factor that the developers consider is the architecture. The architecture defines the state of the Blockchain network and if it can modify variable values. Ethereum has undoubtedly one of the best stateful architectures among the competition due to which it is widely used for making apps on the Blockchain platform. The platform records all the transactions in the existing state and copies of the latest transactions are immediately coined to mirror the recent transactions. It is an effective network but is slower when compared to stateless networks.

Polygon comes with the idea of a borderless society and economy where it works like POS Blockchain and exchanges are present in the form of clusters. Solana on the other hand is based on a cluster architecture that works on Solana clusters. It is basically a collection of validators that together address the client transactions with ledger maintenance. Every cluster has its own validator and the roles of each validator continue to rotate among them. The leader of the cluster will build and timestamp the transaction with PoH consensus. It is a stateless architecture and due to this, the whole state of Solana architecture does not need to update every time. It is why both Solana and Polygon are very efficient and provide faster transactions.

</p>
<h4>Scalability</h4>
<p>It is one of the most critical factors that the developer should look after before selecting a platform for Blockchain app development. It shows if the network is scalable to ensure the completion of the transaction. With Ethereum, the transaction speed is 15 transactions per second, which is less when compared to the competitors. However, the layer 2 scaling with multichain network support resolves the scalability issue. Solana can process 65,000 transactions a second, due to which scalability issues do not exist in it. The users have access to faster transaction speeds, a better consensus model, and efficient architecture. Polygon offers a similar kind of scalability as Solana with even improved transaction speeds. </p>
            </h6>
        </div>

    );
};

export default FantacyDetail;