import React from 'react'
import { useParams } from 'react-router-dom'

export default function JobAdvertisementDetail() {

    let {id} = useParams()

    return (
        <div>
            Detay Sayfası : {id}
        </div>
    )
}
