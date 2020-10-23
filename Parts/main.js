

import productdb, {
    bulkcreate,
    getData,
    createEle
} from '/js/Module.js';

// SQL Data
let db = productdb("Productdb",{
    products: '++id, make, model, price'
});

//input tags
const userid = document.getElementById("userid");
const make = document.getElementById("make");
const model = document.getElementById("model");
const price = document.getElementById("price");

// create button function
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//notfound
const notfound = document.getElementById("notfound");

//inserting vaules using create buttton
btncreate.onclick = (event)=>{
    let flag = bulkcreate(db.products,{
        make: make.value,
        model: model.value,
        price: price.value 
    })
    //console.log(flag);

    make.value = model.value = price.value = "";

    getData(db.products, (data) =>{
        userid.value = data.id + 1 || 1;
    });
    table();

    let insertmsg = document.querySelector(".insertmsg");

    getMsg(flag, insertmsg);
}

// Create event on read button
btnread.onclick = table;

// update event
btnupdate.onclick = ()=>{
    const id = parseInt(userid.value || 0);
    if (id){

        db.products.update(id, {
            make : make.value,
            model : model.value,
            price : price.value
        }).then((updated) => {
            //let get = upadated ? 'data Updated' : 'Not able to update data';
            let get = update ? true : false;

            let updatemsg = document.querySelector(".updatemsg");
            getMsg(get, updatemsg);

            make.value = model.value = price.value = "";
        })
    }
}

//delete records
btndelete.onclick = () => {
    db.delete();
    db = productiondb("Productdb", {
        products: '++id, make, model, price'
    });
    db.open();
    table();
    textID(userid);

    let deletemsg = document.querySelector(".deletemsg");
    getMsg(true, deletemsg);
}


//window onload event
window.onload = () =>{
    textID(userid);
}

function textID(textboxid){
    getData(db.products, data=>{
        textboxid.value = data.id + 1 || 1;
    })
}


function table(){
    const tbody = document.getElementById("tbody");

    while(tbody.hasChildNodes()){
        tbody.removeChild(tbody.firstChild);
    }
    getData(db.products, (data) => {
        if(data){
            createEle("tr", tbody, tr => {
                for (const value in data){

                    createEle("td", tr, td =>{
                        td.textContent = data[value];
                    })
                }
                createEle("td", tr, td =>{
                    createEle("i", td, i => {
                        i.className += "fas fa-edit btnedit";
                        i.setAttribute('data-id', data.id);
                        i.onclick = editbtn;
                    })
                })
                createEle("td", tr, td =>{
                    createEle("i", td, i => {
                        i.className += "fas fa-trash-alt btndelete";
                        i.setAttribute('data-id', data.id);
                        i.onclick = editdelete;

                    })
                })
            })
        }else{
            notfound.textContent = "No record found in database."
        }
    })
}

function editbtn(event) {
    let id = parseInt(event.target.dataset.id);

    db.products.get(id, data => {
        userid.value = data.id || 0;
        make.vaule = data.make || "";
        model.vaule = data.model || "";
        price.vaule = data.price || ""
    })
}

function deletebtn(event) {
    let id = parseInt(event.target.dataset.id)
    db.products.delete(id);
    table();
}

function getMsg(flag, element){
    if(flag){
        element.className += "movedown";

        setTimeout(() => {
            element.classList.forEach(classname => {
                classname == "movedown" ? undefined : element.classList.remove("movedown");
            });
        }, 4000);
    }
}