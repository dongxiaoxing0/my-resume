!function(){
    window.Model = function(resouceName){
        this.resouceName = resouceName
        this.init = function () {
            AV.init({
                appId: "LdylREAHsK99rEXGKXHBE9c5-gzGzoHsz",
                appKey: "yqItNvVsyKzC2USWtrknp6em",
                serverURL: "https://ldylreah.lc-cn-n1-shared.com"
            })
        }
    }
    Model.prototype.fetch = function(){
        let query = new AV.Query(this.resouceName);
        return query.find()
    }
    Model.prototype.save = function (data) {
        let Datas = AV.Object.extend(this.resouceName)
        let newData = new Datas();
        for(let key in data){
            newData.set(key,data[key])
        }
        return newData.save()
    }
}.call()