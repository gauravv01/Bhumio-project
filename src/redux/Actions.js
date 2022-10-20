import axios from "../axios";
import { dataActions } from "./datafetchSlice";
import { NotificationActions } from "./notificationSlice";

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
        dispatch(NotificationActions.handleNotification({message:'No Requests Found!',status:'error'}))
    }
}catch(err){
    dispatch(NotificationActions.handleNotification({message:'There is Error while loading!',status:'error'}))
}
    }
};

export const Postdata=(item)=>{
    return async (dispatch)=>{
        dispatch(
            NotificationActions.handleNotification({
              status: 'pending',
              message: 'Sending data!',
            })
          );
const sendRequest = async () => {
    const response = await axios.put(
      '/Formdata.json',JSON.stringify(item.dataArray)
    );
    return response;
  } 
  try {
    await sendRequest();
    dispatch(
        NotificationActions.handleNotification({
        status: 'success',
        message: 'Sent data successfully!',
      })
    );
    setTimeout(()=>{
      dispatch( NotificationActions.handleNotification(null))
    },[1000])
  } catch (error) {
    dispatch(
        NotificationActions.handleNotification({
        status: 'error',
        message: 'Sending data failed!',
      })
    );     
        }
    };
      };