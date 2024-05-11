import { useOktaAuth } from "@okta/okta-react"
import SpinnerLoading from "../layouts/Utils/SpinnerLoading";
import { Redirect } from "react-router-dom";
import { OktaSignInWidget } from "./OktaSignInWidget";

export default function LoginWidget ({config}:any) {
    const {oktaAuth,authState} = useOktaAuth();
    const onSuccess = (tokens:any)=>{
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err:any)=>{
        console.log('Sign in error'+err);
    }

    if(!authState){
        return (<SpinnerLoading/>);
    }

    return authState.isAuthenticated ? 
    <Redirect to={{pathname:'/'}}/>
    :
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>
}