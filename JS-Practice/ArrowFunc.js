var Person = {
    name:"Ali",
    func:function (){
        var self = this
         newfunc = () => {
            console.log(self.name);
        }
        newfunc()
        }
}
Person.func()
