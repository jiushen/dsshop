export default {
    fetchjsApi(){
        var eventName = 'AIOActivate'; 
        var handler = function (result) {
            let code = result.code,
                msg = result.msg,
                data = result.data;
            console.log(code,msg,data,"result")
            return data.CID
        };
        qidian.registerEvent({
          eventName: eventName,
          // Channel:0,
          listener: handler,
          fail: function (error) {
              var code = error.code,
                  msg = error.msg; 
          }
        })
    }
}