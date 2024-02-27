let callbackAPI = {
    runOnReady: (functionName, callback) => {
        if (functionName) {
            callback();
        } else {
            console.error("Please Enter Function Name!");
        }
    },
    loadScript: (url, callback) => {
        let fjs = document.getElementsByTagName("script")[0];
        let script = document.createElement("script");
        script.src = url;
        fjs.parentNode.insertBefore(script, fjs);
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        fjs.parentNode.insertBefore(script, fjs);
    }
}

//Get Input Value
let principal = $("#mc-purchase-price").val();
let downPayment = $("#mc-down-payment-decimal").val();
let months = $("#mc-loan-terms-range").val();
let interestRate = $("#mc-interest-rate-range").val();
let payments = computePayments(principal, downPayment, months, interestRate);

let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);

let pieChart;

let principalColor = 'rgb(21, 134, 178)';
let interestColor = 'rgb(223, 134, 58)';
let payableColor = 'rgb(33, 37, 41)';

let trackColor = '#a4a4a4';
let thumbColor = '#92C955';

$(".principalColor").css("background-color", principalColor);
$(".interestColor").css("background-color", interestColor);
$(".payableColor").css("background-color", payableColor);

$("body").get(0).style.setProperty("--inputRangeTrack", trackColor);
$("body").get(0).style.setProperty("--inputRangeThumb", thumbColor);

//PRINCIPAL INPUT (ADD $ SIGN)
$("#mc-purchase-price").val(`$${numberFormat(principal)}`);
$("#mc-purchase-price").focus(function(){
    let principal = !!$(this).val() ? $(this).val().replace(/\D/g,'') : 0;
    $(this).val(`${principal}`);
});
$("#mc-purchase-price").blur(function() {
    let principal = !!$(this).val() ? $(this).val().replace(/\D/g,'') : 0;
    $(this).val(`$${numberFormat(principal)}`);
});

//DOWNPAYMENT INPUT (ADD $ SIGN)
$("#mc-down-payment-decimal").val(`$${numberFormat(downPayment)}`);
$("#mc-down-payment-decimal").focus(function(){
    let downPayment = !!$(this).val() ? $(this).val().replace(/\D/g,'') : 0;
    $(this).val(`${downPayment}`);
});
$("#mc-down-payment-decimal").blur(function() {
    let downPayment = !!$(this).val() ? $(this).val().replace(/\D/g,'') : 0;
    $(this).val(`$${numberFormat(downPayment)}`);
});

//Initialize Chart
callbackAPI.runOnReady('mortgageCalculator', function(){
    callbackAPI.loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js', function() {
        let chartCanvas = document.getElementById("mc-chart");
        
        pieChart = new Chart(chartCanvas, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [parseInt(principal), parseInt(payments.interest)],
                    backgroundColor: [`${principalColor}`, `${interestColor}`]
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.formattedValue}`;
                            }
                        }
                    }
                }
            }
        });
        
        const newDataset = {
            data: [],
            backgroundColor: ['#fff']
        };
        
        pieChart.data.datasets.push(newDataset);
        pieChart.update();
        
        //Set default data
        updateData(dataObj);
    });
});

//PRINCIPAL EVENT
$("#mc-purchase-price").keyup(function() {
    $(this).val("");
    let downPayment = $("#mc-down-payment-decimal").val();
    
    if(isPrincipalLessDownPayment("0", downPayment)) {
        $("#mc-down-payment-decimal").val(0);
        $("#mc-down-payment-range").val(0);
        $("#mc-down-payment-rate").val(0);
    }
    
    $("#mc-purchase-price-range").val(0);
});

//PRINCIPAL RANGE EVENT
$("#mc-purchase-price-range").on("input", function() {
    let principal = !!$(this).val() ? $(this).val() : 0;
    let downPayment = $("#mc-down-payment-decimal").val().replace(/\D/g,'');
    let months = $("#mc-loan-terms-range").val();
    let interestRate = $("#mc-interest-rate-range").val();
    let payments = computePayments(principal, downPayment, months, interestRate);
    
    let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);
    
    if(isPrincipalLessDownPayment(principal, downPayment)) {
        $("#mc-down-payment-decimal").val(0);
        $("#mc-down-payment-range").val(0);
        $("#mc-down-payment-rate").val(0);
    }
    
    //Update Data
    $("#mc-purchase-price").val(`$${numberFormat(principal)}`);
    $("#mc-down-payment-range").attr("max", principal);
    $("#mc-down-payment-rate").val( getPercentage(principal, downPayment) );
    
    updateData(dataObj);
});

//DOWN PAYMENT EVENT
$("#mc-down-payment-decimal").on("keyup change", function() {
    let principal = $("#mc-purchase-price").val().replace(/\D/g,'');
    let downPayment = !!$(this).val() ? $(this).val() : 0;
    let downPaymentRate = $("#mc-down-payment-rate").val();
    let months = $("#mc-loan-terms-range").val();
    let interestRate = $("#mc-interest-rate-range").val();
    let payments = computePayments(principal, downPayment, months, interestRate);
    
    let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);
    
    if(parseInt(downPayment) <= parseInt(principal)) {
        $("#mc-down-payment-rate").val( getPercentage(principal, downPayment) );
    }else {
        $(this).val(principal);
        $("#mc-down-payment-rate").val(100);
    }
    
    //Update Data
    updateData(dataObj);
});

//DOWN PAYMENT RATE EVENT
$("#mc-down-payment-rate").on("keyup change", function() {
    let principal = $("#mc-purchase-price").val().replace(/\D/g,'');
    let downPaymentRate = !!$(this).val() ? $(this).val() : 0;
    let downPayment = getPercentageOfX(principal, downPaymentRate);
    let months = $("#mc-loan-terms-range").val();
    let interestRate = $("#mc-interest-rate-range").val();
    let payments = computePayments(principal, downPayment, months, interestRate);
    
    let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);
    
    if(!isRateLess100(downPaymentRate)) {
        $("#mc-down-payment-rate").val(100);
        $("#mc-down-payment-decimal").val(`$${numberFormat(principal)}`);
    }else {
        $("#mc-down-payment-decimal").val( `$${numberFormat( getPercentageOfX(principal, downPaymentRate) )}` );
    }
    
    //Update Data
    updateData(dataObj);
});

//DOWN PAYMENT RANGE EVENT
$("#mc-down-payment-range").on("input", function() {
    let principal = $("#mc-purchase-price").val().replace(/\D/g,'');
    let downPayment = !!$(this).val() ? $(this).val() : 0;
    let months = $("#mc-loan-terms-range").val();
    let interestRate = $("#mc-interest-rate-range").val();
    let payments = computePayments(principal, downPayment, months, interestRate);
    
    let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);
    
    //Update Data
    $("#mc-down-payment-decimal").val(`$${numberFormat(downPayment)}`);
    $("#mc-down-payment-rate").val( getPercentage(principal, downPayment) );
    
    updateData(dataObj);
});

//LOAN TERMS EVENT
$("#mc-loan-terms-range").on("input", function() {
    let principal = $("#mc-purchase-price").val().replace(/\D/g,'');
    let downPayment = $("#mc-down-payment-decimal").val().replace(/\D/g,'');
    let months = !!$(this).val() ? $(this).val() : 0;
    let interestRate = $("#mc-interest-rate-range").val();
    let payments = computePayments(principal, downPayment, months, interestRate);
    
    let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);
    
    //Update Data
    $(".mc-label-dynamic.loan-terms .mc-years").html(months);
    
    updateData(dataObj);
});

//INTEREST RATE EVENT
$("#mc-interest-rate-range").on("input", function() {
    let principal = $("#mc-purchase-price").val().replace(/\D/g,'');
    let downPayment = $("#mc-down-payment-decimal").val().replace(/\D/g,'');
    let months = $("#mc-loan-terms-range").val();
    let interestRate = !!$(this).val() ? $(this).val() : 0;
    
    let payments = computePayments(principal, downPayment, months, interestRate);
    
    let dataObj = dynamicData(principal, downPayment, months, interestRate, payments.interest, payments.payable, payments.monthlyPayment);
    
    //Update Data
    $(".mc-label-dynamic.interest-rate .mc-rate").html(interestRate);
    
    updateData(dataObj);
});

function dynamicData(principal, downPayment, months, interestRate, interest, payable, monthlyPayment) {
    return {
        "principal": principal,
        "downPayment": downPayment,
        "months": months,
        "interestRate": interestRate,
        "interest": interest,
        "payable": payable,
        "monthlyPayment": monthlyPayment
    }
}

function computePayments(principal, downPayment, months, interestRate) {
    console.log(principal, 'principal');
    console.log(downPayment, 'downPayment');
    console.log(months, 'months');
    console.log(interestRate, 'rate');
    let interest = CalculateLoanDetails(principal, downPayment, months * 12, interestRate);
    let payable = (parseInt(principal) - parseInt(downPayment)) + parseInt(interest);
    let monthlyPayment = parseInt(payable) / (parseInt(months) * 12);
    
    console.log(interest, 'interest');
    return {
        'interest': interest,
        'payable': payable,
        'monthlyPayment': monthlyPayment
    }
}

function updateData(objData) {
    console.log(objData);

    $("h5.principal").text(`$${numberFormat( parseInt(objData.principal) - parseInt(objData.downPayment) )}`);
    $("h5.interest").text(`$${objData.interest.toLocaleString()}`);
    $("h5.payable").text(`$${objData.payable.toLocaleString()}`);
    $(".mc-monthly-payment").text(`$${Math.round(objData.monthlyPayment).toLocaleString()}`);
    $("#mc-down-payment-range").attr("max", objData.principal.replace(/\D/g,''));
    
    //Update Chart
    pieChart.data = {
        datasets: [{
            data: [(parseInt(objData.principal) - parseInt(objData.downPayment)), parseInt(objData.interest)],
            backgroundColor: [`${principalColor}`, `${interestColor}`]
        }]
    };
    
    const newDataset = {
        data: [],
        backgroundColor: ['#fff']
    };
    
    pieChart.data.datasets.push(newDataset);
    pieChart.update();
}

function getPercentageOfX(principal, downPaymentRate) {
    return Math.round(parseInt(principal) * (parseInt(downPaymentRate) / 100));
}

function getPercentage(principal, downPayment) {
    return Math.round((parseInt(downPayment) / parseInt(principal)) * 100);
}

function isRateLess100(rate) {
    return parseInt(rate) < 100 ? true : false;
}

function isPrincipalLessDownPayment(principal, downPayment) {
    return parseInt(principal) < parseInt(downPayment) ? true : false;
}

function numberFormat(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function CalculateLoanDetails(principal, downPayment, Months, Interest) {
    let interest = Interest / 100.0 / 12;
    principal = parseInt(principal) - parseInt(downPayment);
    
    let EMI = (principal * (interest + interest / (Math.pow(1 + interest, parseInt(Months)) - 1)));
    let TotalPayable = (EMI * parseInt(Months)).toFixed(2);
    let TotalInterest = (TotalPayable - principal).toFixed(2);
    
    const data = parseFloat(TotalInterest);
    
    return Math.floor(data);
}