var sample_json = [
    {
        "user_name": "harish",
        "contact": 948654051,
        "paperPros": {
            "paper_size_name": "A3 Sheet (297 × 420 millimeters or 11.69 × 16.54 inches)\n                                ",
            "paper_size_price": "3",
            "paper_type_name": "Premium White Paper (75gsm)\n                                ",
            "paper_type_price": "1.5",
            "printing_sides": "Double Side",
            "paper_color": "Color",
            "paper_color_price": 2.5,
            "no_of_copies": "6",
            "no_of_page": 9,
            "fileName": "202IT260 EVS REPORT.pdf",
            "payment_method": "Cash",
            "total_price": 378,
            "payment_status": "not_paid",
            "status": "Initiated",
            "s_no": 1,
            "date": "20-7-1899",
            "time": "11Hrs 2Mins 15Sec"
        }
    },
    {
        "user_name": "harish",
        "contact": 948654051,
        "paperPros": {
            "paper_size_name": "A4 Sheet (210 × 297 millimeters or 8.27 × 11.69 inches)",
            "paper_size_price": "0.45",
            "paper_type_name": "Bond paper (85gsm)",
            "paper_type_price": "2",
            "printing_sides": "Single Side",
            "paper_color": "Black And White",
            "paper_color_price": 0.5,
            "no_of_copies": "4",
            "no_of_page": 4,
            "fileName": "7376212It127.pdf",
            "payment_method": "Cash",
            "total_price": 47.2,
            "payment_status": "not_paid",
            "status": "Initiated",
            "s_no": 2,
            "date": "20-7-1899",
            "time": "11Hrs 2Mins 32Sec"
        }
    },
    {
        "user_name": "harish",
        "contact": 948654051,
        "paperPros": {
            "paper_size_name": "A4 Sheet (210 × 297 millimeters or 8.27 × 11.69 inches)",
            "paper_size_price": "0.45",
            "paper_type_name": "Bond paper (85gsm)",
            "paper_type_price": "2",
            "printing_sides": "Single Side",
            "paper_color": "Color",
            "paper_color_price": 2.5,
            "no_of_copies": "4",
            "no_of_page": 3,
            "fileName": "Untitled document.pdf",
            "payment_method": "UPI",
            "total_price": 59.400000000000006,
            "payment_status": "paid",
            "status": "Initiated",
            "s_no": 3,
            "date": "20-7-1899",
            "time": "11Hrs 2Mins 43Sec"
        }
    }
];

//display components
const dispalyTotalSales = document.getElementById("totalSalesCount")
const displayRevenue = document.getElementById("revenueSpanElement")
const tbody = document.getElementById("tbody")

dispalyTotalSales.innerText = sample_json.length




function buildHTML(arg) {
    tbody.innerHTML=" "
    let jsonFile = arg;
    let revenue = 0;
    let pendingPrintout = 0;
    let settledPrintout = 0;
    for (let i = 0; i < jsonFile.length; i++) {


        var eachObj = jsonFile[i]
        var tr = document.createElement("tr")


        var customerNameTD = document.createElement("td")
        customerNameTD.innerText = eachObj.user_name
        tr.appendChild(customerNameTD)

        var documentTitleTD = document.createElement("td")
        documentTitleTD.innerText = eachObj.paperPros.fileName
        tr.appendChild(documentTitleTD)

        var priceTD = document.createElement("td")
        priceTD.innerText = eachObj.paperPros.total_price
        tr.appendChild(priceTD)

        var dateTD = document.createElement("td")
        dateTD.innerText = eachObj.paperPros.date
        tr.appendChild(dateTD)

        var timeTD = document.createElement("td")
        timeTD.innerText = eachObj.paperPros.time
        tr.appendChild(timeTD)

        var paymentStatus = document.createElement("td")
        paymentStatus.innerText = eachObj.paperPros.payment_status
        tr.appendChild(paymentStatus)

        var deliveryStatusTD = document.createElement("td")
        deliveryStatusTD.innerText = eachObj.paperPros.status
        tr.appendChild(deliveryStatusTD)
        if(eachObj.paperPros.status =="Delivered"){
            tr.style.backgroundColor = "#5BC15F"
        }

        tbody.appendChild(tr)

        //clac revenue
        revenue += eachObj.paperPros.total_price
        displayRevenue.innerText = revenue

        if (eachObj.paperPros.status == "Initiated") {
            pendingPrintout += 1
        } else {
            settledPrintout += 1
        }


    }

    console.log(settledPrintout)
    console.log(pendingPrintout)
    dispSettledPrintout.innerText = settledPrintout
    dispPendingPrintout.innerText = pendingPrintout

}


buildHTML(sample_json)

tbody.addEventListener("click", (e) => {

    var tableRow;

    if (e.target.parentElement.tagName == "TR") {
        tableRow = e.target.parentElement.innerText
    } else {
        tableRow = e.target
    }

    var tableRowARY = tableRow.split("\t")
    adminModal.style.display = "block";
    thead.className = "thead-dark"
    console.log(tableRowARY)

    processTableClick(sample_json, tableRowARY)
})


let activePOPUPJSON ;


function processTableClick(arg_1, arg_2) {
    var allJSONdata = arg_1
    var tableDetailsARY = arg_2

    for (let i = 0; i < allJSONdata.length; i++) {
        var each_element = allJSONdata[i]

        if (each_element.user_name == tableDetailsARY[0] && each_element.paperPros.fileName == tableDetailsARY[1] && each_element.paperPros.total_price == tableDetailsARY[2] && each_element.paperPros.date == tableDetailsARY[3] && each_element.paperPros.time == tableDetailsARY[4] && each_element.paperPros.payment_status == tableDetailsARY[5] && each_element.paperPros.status == tableDetailsARY[6])
         {
            activePOPUPJSON= each_element
             dispUserNameTD.innerText = each_element.user_name;
             dispContactTD.innerText = each_element.contact;
             dispPaperSizeTD.innerText = each_element.paperPros.paper_size_name
             dispPaperTypeTD.innerText = each_element.paperPros.paper_type_name
            dispPrintingSidesTD.innerText = each_element.paperPros.printing_sides
            dispPrintingcolorTD.innerText = each_element.paperPros.paper_color
            dispPageTD.innerText = each_element.paperPros.no_of_page
            dispFileName.innerText = each_element.paperPros.fileName
            dispCopies.innerText = each_element.paperPros.no_of_copies
            dispPaymentMethodTD.innerText = each_element.paperPros.payment_method
            dispTotalPriceTd.innerText = each_element.paperPros.total_price
            dispDateTD.innerText = each_element.paperPros.date
            dispTimeTD.innerText = each_element.paperPros.time
            dispPaymentStatusTD.value = each_element.paperPros.payment_status 
            dispDeliveryStatusTD.value = each_element.paperPros.status  
      
            }
    }

}

function modalPopupSubmit(arg){
    let obj = arg;


if (dispPaymentStatusTD.value !=="paid")
{alert("Hey !!! please check the Payment status Or Delivery Status ")
    obj.paperPros.status =dispDeliveryStatusTD.value;
    
}

else{
    
    obj.paperPros.status =dispDeliveryStatusTD.value;
    obj.paperPros.payment_status= dispPaymentStatusTD.value;
     
}
buildHTML(sample_json)
adminModal.style.display = "none";
}

