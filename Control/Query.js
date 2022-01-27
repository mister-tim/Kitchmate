import AsyncStorage from "@react-native-async-storage/async-storage";

class Query{
    constructor(tablekey){
        this.key = tablekey
    }

    static async fetchData(key){
        try{
            return await AsyncStorage.getItem("@"+key)            
        } catch(e){
            console.log(`Error #69-a: ${e}`)
            this.stream = "Failed"
        }
    }
    static async updateData(key, data){
        try{
            await AsyncStorage.setItem("@"+key, data)
        } catch(e){
            console.log(`Error #69-b: ${e}`)
            this.stream = "Failed"
        }
    }
    static async deleteData(key){
        try{
            await AsyncStorage.removeItem("@"+key)
        } catch(e){
            console.log(`Error #69-c: ${e}`)
            this.stream = "Failed"
        }
        
    }
}

export default Query;