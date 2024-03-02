const {naved, password} = process.env
console.log(naved,password)

export const connectionStr = "mongodb+srv://"+naved+":"+password+"@cluster0.4ytrvys.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"