import react, { useState } from "react";
import App from "./new";
import Main from "./Main";



const filtercat = [...new Set(App.map((currelem) => {
    return currelem.category;
}))]
console.log(filtercat)

function Nowdata() {
    const [currData, SetcurrData] = useState(App);
    const [currbtn, Setcurrbtn] = useState(filtercat);

    const filtermobile = (catagery) => {
        const updatedList = App.filter((currelem) => {
            return currelem.category === catagery;
        })
        SetcurrData(updatedList);
    }

    const prizefilter = (prize) => {
        const upList = App.filter((curr) => {
            return parseInt(curr.prize) <= prize;
        })
        SetcurrData(upList);
    }

    return (
        <>

            <div className="btns">
                <button className="All samebtn" onClick={() => SetcurrData(App)}>All</button>
                <button className="filt samebtn" onClick={() => prizefilter(10000)}>below 10,000</button>
                {
                    currbtn.map((currelem) => {
                        return <button className="samsung samebtn" onClick={() => filtermobile(currelem)}>{currelem}</button>
                    })
                }
            </div>
            <Main currData={currData} />
        </>
    )
}

export default Nowdata;