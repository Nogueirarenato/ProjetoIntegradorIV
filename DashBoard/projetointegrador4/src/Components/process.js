
import Url from '../Services/httpAPI'


var list = function request() {
    fetch(Url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }
    ).then(response => response.json())
        .then(response => {
            return response;
             
            
        })
        .catch(erro => console.log(erro))
}


export default  list;