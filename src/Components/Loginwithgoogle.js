import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
export default function Temp() {
  return (
      <>
            <GoogleLogin
        onSuccess={credentialResponse => {
            var sainath=jwtDecode(credentialResponse.credential)
            console.log(sainath);
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        />
            </>
  )
}
