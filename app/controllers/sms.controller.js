const axios = require('axios');


exports.send = (info) => {
    console.log(info);
    let mobileNo = info.mobile;
    let message = info.message
    console.log("SMS is sent");
    axios.get('http://sms.datagenit.in/API/sms-api.php?auth=D!~4782QwdkgHLJcH&msisdn='+ mobileNo +'&senderid=IALERT&message=' + message + '')
    // axios.get('http://sms.datagenit.in/API/sms-api.php?username=VEDANG&api_password=978341' + mobileNo +'&message=' + message + '&priority=11')
         


         .then((response) => {
             // handle success
             console.log(response);
         })
         .catch((error) => {
             // handle error
             console.log(error);
         })
}
