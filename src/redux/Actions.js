import axios from "../axios";
import { dataActions } from "./datafetchSlice";

export const getdata=()=>{
    return async(dispatch)=>{

   async function fetchdata() { const data=await axios.get('/Formdata.json')
    return data;}

    try{
    const data=(await fetchdata()).data;
    if(data){
    dispatch(dataActions.ReplaceItems(data));
    }
    else{
        dispatch(dataActions.handleNotification({message:'No Requests Found!',status:'error'}))
    }
}catch(err){
    dispatch(dataActions.handleNotification({message:'There is Error while loading!',status:'error'}))
}
    }
};

export const Postdata=(item)=>{
    return async (dispatch)=>{
        dispatch(
            dataActions.handleNotification({
              status: 'pending',
              message: 'Sending data!',
            })
          );
const sendRequest = async () => {
    const response = await axios.put(
      '/Formdata.json',JSON.stringify(item)
    );
    return response;
  } 
  try {
    await sendRequest();
    dispatch(
        dataActions.handleNotification({
        status: 'success',
        message: 'Sent data successfully!',
      })
    );
  } catch (error) {
    dispatch(
        dataActions.handleNotification({
        status: 'error',
        message: 'Sending data failed!',
      })
    );     
        }
    };
      };