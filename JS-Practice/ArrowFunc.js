var Person = {
    name:"Ali",
    func:function (){
        const f = () => {
            console.log(this.name);
            
        }
        f()
        }
}

Person.func()
