import { useState,useEffect } from "react"

//custom hook

const useFetch = (url) => { //koristim kad imam neki url sa kog hocu da fetch data

    const[data, setData] = useState(null)
    const[isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(response => {
            if(!response.ok) { //ako mogu da pristupim serveru,ali response nije dobar,onda pisem throw Error i on kasnije upada dole u catch
                               //i ispisuje ono sto sam zadala ovde     
              throw Error('Could not fetch the data')
            }
            return response.json()
          })
          .then(data => { //ovo data i ono iz state nije isto, ovo je lokalno u fji
            setData(data)
            setIsLoading(false)
            setError(null) //ako hocu da opet fetch data npr,zelim da se resim err.mess
          })
          .catch((err) => {
            setIsLoading(false) //da nemam error mess i loading istovremeno
            setError(err.message) //hvata network error, kada ne moze da se konektuje sa serverom
          })
        },1000)
      },[url])

      return {data, isLoading, error} //jer zelim da imam pristup njima kad budem koristila ovu custom hook na drugim mestima
                                      //moze biti i niz, ali kad je objekat ne moram da pazim na njihov redosled kad radim destructuring
}

export default useFetch;